import React, { useState, useEffect } from "react";
import {
  getTempOrder,
  getAllOrderItems,
  getAllUserItems,
  deleteAllOrderItems,
  deleteOrder,
  updateOrderStatus,
  updateOrderShippingAddress,
} from "../services/api";
import Checkout from "../pages/Checkout"; // Import the new popup component
import "./Cart.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import TempOrderItem from "../components/TempOrderItem";

function Cart() {
  const [tempOrder, setTempOrder] = useState(null); // to store the TEMP order
  const [currentItems, setCurrentItems] = useState([]); // to store order items
  const [existingItems, setExistingItems] = useState([]); // to store user's existing items
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility
  const userId = JSON.parse(sessionStorage.getItem("id")); // get user ID from session
  const isActive = JSON.parse(sessionStorage.getItem("isActive")); // get user activity status from session

  const userItemsBody = {
    userId: userId,
  };

  useEffect(() => {
    if (isActive) {
      // Fetch the TEMP order
      getTempOrder(userId)
        .then((res) => {
          const tempOrder = res.data;
          setTempOrder(
            tempOrder && typeof tempOrder === "object" && Object.keys(tempOrder).length > 0 
              ? tempOrder 
              : null
          );
  
          // Fetch the items for the TEMP order if it exists
          if (tempOrder && tempOrder.id) {
            return getAllOrderItems(tempOrder.id);
          } else {
            // Return an empty array if there is no TEMP order
            return Promise.resolve({ data: [] });
          }
        })
        .then((res) => {
          console.log(res.data)
          const orderItems = res.data.map((item) => (
            <TempOrderItem key={item.id} item={item} favorites={existingItems} tempOrder={tempOrder} />
          ));
          setCurrentItems(orderItems); // Set the items for the TEMP order
        
          // Fetch user's existing items (e.g., favorite or previously ordered items)
          return getAllUserItems(userItemsBody);
        })
        .then((res) => {
          const favorites = res.data.map((userItem) => userItem.id);
          setExistingItems(favorites); // Set user's existing items
        })
        .catch((err) => console.error("An error occurred", err));
    }
  }, [userId, isActive,currentItems]);
  
  
  // Function to handle the checkout process
  const handleCheckout = () => {
    if (tempOrder) {
      setIsPopupOpen(true); // Open the popup
    }
  };

  // Function to confirm the order and update the status
  const confirmOrder = (shippingAddress) => {
    const orderShippingAddress = { shippingAddress };

    // Update order shipping address
    updateOrderShippingAddress(tempOrder.id, orderShippingAddress)
      .then(() => {
        // After updating the shipping address, change the order status to CLOSE
        return updateOrderStatus(tempOrder.id);
      })
      .then(() => {
        // Close the popup after confirming the order
        setIsPopupOpen(false);
      })
      .catch((error) => {
        console.error("Error updating order:", error);
        alert("Failed to confirm order. Please try again.");
      });
  };

  // Function to delete the entire order
// Function to delete the entire order
const orderDelete = () => {
  const orderToDelete = { id: tempOrder.id };
  deleteOrder(orderToDelete)
    .then(() => {
      // After successfully deleting the order, update the state
      setTempOrder(null); // Set the TEMP order to null
      setCurrentItems([]); // Clear the current items
    })
    .catch((error) => {
      console.error("Error deleting order:", error);
      alert("Failed to delete order. Please try again.");
    });
};


  return (
    <>
      {/* Check if there are no TEMP orders */}
      {tempOrder === null ? (
        <>
        <br/>
         <br/>
         <br/>
          <br/>
          <br/>
         <br/>
         <br/>
          <br/>
          <h3 id="temp" style={{ textAlign: "center" }}>YOUR CART IS EMPTY</h3>
          <h1 id="cartEmpty"><AiOutlineShopping /></h1>
          <br/>
          <br/>
          <Link to="/shop" className="shopLink">
            <button className="shopButton">Shop Now</button>
          </Link>
        </>
      ) : (
        <>
          <h1 id="temp">CART</h1>
          <div key={tempOrder.id} className="orderDiv" id="order">
            <div className="OrderItemsInRow">
              <ul>
                {currentItems}
              </ul>
            </div>
            <span className="orderDetails">
              <label className="orderLabel">Total Price: {(tempOrder.totalPrice).toFixed(2)} USD</label>
              <span className="paymentButton" onClick={handleCheckout}>CheckOut</span>
              <span className="deleteButton" onClick={orderDelete}>DELETE ORDER</span>
            </span>
          </div>
        </>
      )}
      {/* Render the CheckoutPopup component */}
      <Checkout
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)} // Close popup function
        totalPrice={tempOrder ? tempOrder.totalPrice : 0}
        itemCount={tempOrder && tempOrder.numberOfItems ? tempOrder.numberOfItems : 0}
        onConfirm={confirmOrder} // Pass the confirm function to the popup
      />
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Cart;
