import React, { useState, useEffect } from "react";
import "./Shop.css";
import { getAllItems, getAllUserItems, getAllOrderItems, getAllOrders, getAllUsers } from "../services/api";
import ShopItem from "../components/ShopItem";

function Shop() {
    const [allItems, setAllItems] = useState([]);
    const [itemsDetails, setItemsDetails] = useState([]);

    const [arrOfFavoraties, setArrOfFavoraties] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [arrOrderItems, setArrOrderItems] = useState([]);
    const [temps, setTemps] = useState([]);
    const [registeredUser, setRegisteredUser] = useState([]);

    const userId = JSON.parse(sessionStorage.getItem("id"));
    const userItemsBody = { userId };

    useEffect(() => {
        const fetchUserItemsAndOrders = async () => {
            try {
                // Fetch user items (favorites)
                const userItemsResponse = await getAllUserItems(userItemsBody);
                const arrOfUserItems = userItemsResponse.data.map((userItem) => userItem.id);
                setArrOfFavoraties(arrOfUserItems);

                // Fetch all orders
                const allOrdersResponse = await getAllOrders();
                const arrOfTemps = allOrdersResponse.data
                    .filter((order) => order.status === "TEMP" && order.userId === userId)
                    .map((order) => order.id);

                setTemps(arrOfTemps);

                // Fetch order items for TEMP orders
                const orderItemsPromises = arrOfTemps.map(async (orderId) => {
                  const orderItemsResponse = await getAllOrderItems(orderId);
                  
                  
                  if (orderItemsResponse.status === 200) {
                      const orderItems = orderItemsResponse.data;
                      
                      // Assuming arrOrderItems is a state variable
                      setArrOrderItems(prevItems => [...prevItems, ...orderItems]);
                      
                      return orderItems; // Return the fetched items for further processing if needed
                  } else {
                      throw new Error("Failed to fetch order items");
                  }
              });

                const orderItemsResults = await Promise.all(orderItemsPromises);
                const flatOrderItems = orderItemsResults.flat();
                setArrOrderItems(flatOrderItems);
                setCurrentItems(flatOrderItems);
                // Fetch all items
                const itemsResponse = await getAllItems();
                const itemProperties = itemsResponse.data.map((item) => {

                    return {
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        inStock: item.inStock,
                        pictureUrl: item.pictureUrl,
                    };
                });
                setItemsDetails(itemProperties);
          
                  const arrOfItems =itemsDetails.map((item) => (
                    <ShopItem key={item.id} item={item} favorites={arrOfFavoraties} arrOfOrderItems={arrOrderItems} />
                  ));
                  setAllItems(arrOfItems);

                // Fetch users for registered user details
                const usersResponse = await getAllUsers();
                const users = usersResponse.data.filter(user => user.username === JSON.parse(sessionStorage.getItem("username")));
                setRegisteredUser(users);
            } catch (error) {
                console.error("An error occurred", error);
            }
        };

        fetchUserItemsAndOrders();
    }, [userId,allItems]); 

    return (
        <>
            <div className="ItemsInRow">
                {allItems}
            </div>
        </>
    );
}

export default Shop;
