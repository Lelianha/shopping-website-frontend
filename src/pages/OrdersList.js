import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Navbar from "../components/Try";
import "./OrdersList.css";
import { getAllCloseOrders } from "../services/api";

function OrdersList() {
    const [closeOrders, setCloseOrders] = useState([]);
    const userId = JSON.parse(sessionStorage.getItem("id"));

    useEffect(() => {
        getAllCloseOrders(userId).then(res => {
            const orders = res.data.map(order => ({
                id: order.id,
                shippingAddress: order.shippingAddress,
                orderDate: order.orderDate,
                numberOfItems: order.numberOfItems,
                totalPrice: order.totalPrice,
            }));
            setCloseOrders(orders);
        });
    }, [userId]);

    return (
        <>
            <div className="orderListPage">
            {closeOrders.length === 0 ? (
                <>
                <br/> <br/> <br/>  <br/>
                        <h2 className="close">No orders found</h2></> // Message for no orders
                    ) : (
                <h1 className="close">CLOSE ORDERS</h1> )}
                <div className="orders-container">
                {
                        closeOrders.map(order => (
                            <div className="order-card" key={order.id}>
                                <h2>Order #{order.id}</h2>
                                <p><strong>Items:</strong> {order.numberOfItems}</p>
                                <p><strong>Total Price:</strong> ${order.totalPrice.toFixed(2)}</p>
                                <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
                                {/* Add a Link or Button for viewing details */}
                                <Link to={`/order-details/${order.id}`} className="view-details">
                                    View All Order Details
                                </Link>
                            </div>
                        ))
                    }
                  
                </div>
            </div>
        </>
    );
}

export default OrdersList;
