import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder, getAllOrderItems } from "../services/api"; // Ensure these functions are correctly imported
import CloseItem from "../components/CloseItem"; // Import TempOrderItem component
import "./OrderDetails.css"; // Import the CSS file

function OrderDetails() {
    const { id } = useParams(); // Get the order ID from the URL
    const [orderDetails, setOrderDetails] = useState(null); // State to store order details
    const [orderItems, setOrderItems] = useState([]); // State to store order items
  
    
    useEffect(() => {
        // Fetch the order details based on the order ID
        getOrder(id)
            .then(res => {
                setOrderDetails(res.data); // Assuming the order details are in res.data
                return getAllOrderItems(res.data.id); // Fetch all order items for this order
            })
            .then(res => {
                console.log(res.data)
                setOrderItems(res.data); // Assuming the order items are in res.data
            })
            .catch(error => {
                console.error("Error fetching order details or items:", error);
            });
    }, [id]);


    if (!orderDetails) return <p className="loading">Loading...</p>; // Show loading while fetching data

    return (
        <div className="order-details-container">
            <h1 className="order-title">Order #{orderDetails.id}</h1>
            <div className="order-summary">
            <h2 className="order-items-title">Order Details</h2>

                <p><strong>Shipping Address:</strong> {orderDetails.shippingAddress}</p>
                <p><strong>Total Price:</strong> ${orderDetails.totalPrice.toFixed(2)}</p>
                <p><strong>Order Date:</strong> {new Date(orderDetails.orderDate).toLocaleDateString()}</p>
            </div>

            <h2 className="order-items-title">Order Items</h2>
            <div className="order-items">
                <ul>
                {orderItems.map(item => (
                        <CloseItem key={item.id} item={item} />
                    ))}

                </ul>
            </div>
        </div>
    );
}

export default OrderDetails;
