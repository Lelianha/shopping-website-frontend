// CheckoutPopup.js
import React, { useState } from 'react';
import './Checkout.css';

function Checkout({ isOpen, onClose, totalPrice, itemCount, onConfirm }) {
  const [shippingAddress, setShippingAddress] = useState('');

  const handleConfirm = () => {
    if (!shippingAddress) {
      alert("Please enter a shipping address."); // Alert the user
      return; // Prevent the order from being confirmed
    }
  
    onConfirm(shippingAddress); // Only call onConfirm if the address is valid
    onClose(); // Close the popup after confirming
  };

  if (!isOpen) return null; // Don't render anything if the popup is closed


  return (
    <div className="popupOverlay">
      <div className="popupContent">
        <h2>Checkout</h2>
        <div>
          <label htmlFor="shippingAddress">Shipping Address:</label>
          <textarea
            id="shippingAddress"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            placeholder="Enter your shipping address"
            required
          />
        </div>
        <div>
          <p>Total Price: {totalPrice.toFixed(2)} USD</p>
          <p>Number of Items: {itemCount}</p>
        </div>
        <div className="buttonGroup">
          <button className="confirmButton" onClick={handleConfirm}>Confirm Order</button>
          <button className="cancelButton" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}


export default Checkout;
