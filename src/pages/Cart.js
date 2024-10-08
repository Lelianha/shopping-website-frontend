import React, { useState, useEffect } from "react";
import {
  getTempOrder,
  getAllOrderItems,
  getAllUserItems,
  deleteOrder,
  updateOrderStatus,
  updateOrderShippingAddress,
} from "../services/api";
import Checkout from "../pages/Checkout"; 
import "./Cart.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import TempOrderItem from "../components/items/TempOrderItem";

function Cart() {
  const [tempOrder, setTempOrder] = useState(null); 
  const [currentItems, setCurrentItems] = useState([]); 
  const [existingItems, setExistingItems] = useState([]); 
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  const userId = JSON.parse(sessionStorage.getItem("id")); 
  const isActive = JSON.parse(sessionStorage.getItem("isActive")); 

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
  
          if (tempOrder && tempOrder.id) {
            return getAllOrderItems(tempOrder.id);
          } else {
            return Promise.resolve({ data: [] });
          }
        })
        .then((res) => {
          const orderItems = res.data.map((item) => (
            <TempOrderItem key={item.id} item={item} favorites={existingItems} tempOrder={tempOrder} />
          ));
          setCurrentItems(orderItems); 
        
          return getAllUserItems(userItemsBody);
        })
        .then((res) => {
          const favorites = res.data.map((userItem) => userItem.id);
          setExistingItems(favorites); 
        })
        .catch((err) => console.error("An error occurred", err));
    }
  }, [userId, isActive,currentItems]);
  
  
  const handleCheckout = () => {
    if (tempOrder) {
      setIsPopupOpen(true); 
    }
  };

  const confirmOrder = (shippingAddress) => {
    const orderShippingAddress = { shippingAddress };

    updateOrderShippingAddress(tempOrder.id, orderShippingAddress)
      .then(() => {
        return updateOrderStatus(tempOrder.id);
      })
      .then(() => {
        setIsPopupOpen(false);
      })
      .catch((error) => {
        console.error("Error updating order:", error);
        alert("Failed to confirm order. Please try again.");
      });
  };

const orderDelete = () => {
  const orderToDelete = { id: tempOrder.id };
  deleteOrder(orderToDelete)
    .then(() => {
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
        <br/><br/> <br/><br/> <br/> <br/> <br/> <br/>

          <h3 id="temp" style={{ textAlign: "center" }}>YOUR CART IS EMPTY</h3>
          <h1 id="cartEmpty"><AiOutlineShopping /></h1>
          <br/>  <br/>
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
