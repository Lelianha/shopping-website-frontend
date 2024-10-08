import React, { useState, useEffect } from "react";
import { getAllItems, getAllUserItems, getAllOrderItems, getAllOrders, getItem, userStatus } from "../services/api";
import TempItem from "../components/ShopItem";
import Item from "../components/Item"; // Assuming you have an Item component
import { useLocation } from "react-router-dom";
import "./Shop.css";

function SearchedItems() {
    const [allItems, setAllItems] = useState([]);
    const [arrOfFavoraties, setArrOfFavoraties] = useState([]);
    const [arrOrderItems, setArrOrderItems] = useState([]);
    const [temps, setTemps] = useState([]);
    const [isActive, setIsActive] = useState(false); // To track if the user is active

    const location = useLocation();
    const { items } = location.state || {};

    const userItemsBody = {
        userId: JSON.parse(sessionStorage.getItem("id")),
    };

    // Fetch user status to determine if they are active
    const fetchUserStatus = async () => {
        const userId = JSON.parse(sessionStorage.getItem("id"));
        if (!userId) return false;

        try {
            const response = await userStatus(userId);
            return response.data; // Assuming the API returns a boolean for active status
        } catch (error) {
            console.error("Error fetching user status", error);
            return false;
        }
    };

    useEffect(() => {
        let arrOfUserItems = [];
        let arrOfOrderItems = [];
        let arrOfTemps = [];

        // Fetch user items and orders
        getAllUserItems(userItemsBody)
            .then((res) => {
                arrOfUserItems = res.data.map((userItems) => userItems.id);
                setArrOfFavoraties(arrOfUserItems);
                return getAllOrders(); // Return the promise for all orders
            })
            .then((allOrdersRes) => {
                arrOfTemps = allOrdersRes.data
                    .filter(order => order.status === "TEMP" && order.userId === JSON.parse(sessionStorage.getItem("id")))
                    .map(order => order.id);

                const itemPromises = arrOfTemps.map((orderId) =>
                    getAllOrderItems(orderId).then((res) =>
                        res.data.map((item) => ({ ...item }))
                    )
                );

                return Promise.all(itemPromises);
            })
            .then((resItems) => {
                setArrOrderItems(resItems);
                setTemps(arrOfTemps);
            })
            .catch((err) => console.error("An error occurred", err));

        // Fetch each item in the `items` array and check user activity
        fetchUserStatus().then((activeStatus) => {
            setIsActive(activeStatus); // Update user's active status

            if (items && items.length > 0) {
                const itemPromises = items.map(item =>
                    getItem(item.id).then(res => {
                        const itemBody = {
                            id: res.data.id,
                            title: res.data.title,
                            price: res.data.price,
                            inStock: res.data.inStock,
                            pictureUrl: res.data.pictureUrl
                        };

                        // Conditionally render TempItem or Item based on user's activity status
                        return isActive ? (
                            <TempItem
                                key={itemBody.id}
                                item={itemBody}
                                favorites={arrOfFavoraties}
                                arrOfOrderItems={arrOrderItems}
                            />
                        ) : (
                            <Item
                                key={itemBody.id}
                                item={itemBody}
                                favorites={arrOfFavoraties}
                                arrOfOrderItems={arrOrderItems}
                            />
                        );
                    })
                );

                Promise.all(itemPromises).then(setAllItems);
            } else {
                setAllItems([]); // Reset allItems if no items found
            }
        });
    }, [items, isActive,allItems]); // Re-run the effect when items or isActive changes

    return (
        <>
            <div className="ItemsInRow">
                {allItems.length > 0 ? allItems : <p>No items found.</p>}
            </div>
        </>
    );
}

export default SearchedItems;
