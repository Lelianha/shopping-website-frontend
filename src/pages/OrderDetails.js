import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder, getAllOrderItems } from "../services/api"; 
import CloseItem from "../components/items/CloseItem"; 
import "./OrderDetails.css";

function OrderDetails() {
    const { id } = useParams(); 
    const [orderDetails, setOrderDetails] = useState(null);
    const [orderItems, setOrderItems] = useState([]); 
  
    
    useEffect(() => {
        getOrder(id)
            .then(res => {
                setOrderDetails(res.data); 
                return getAllOrderItems(res.data.id); 
            })
            .then(res => {
                setOrderItems(res.data); 
            })
            .catch(error => {
                console.error("Error fetching order details or items:", error);
            });
    }, [id]);


    if (!orderDetails) return <p className="loading">Loading...</p>; 

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
