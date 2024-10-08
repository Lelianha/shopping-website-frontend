import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping, AiFillShopping } from "react-icons/ai";
import { useNavigate } from "react-router-dom";  // For navigation
import classes from "./TempItem.css";

function Item(props) {
  const [showDetails, setShowDetails] = useState(false);

  const navigate = useNavigate();  // To navigate between pages






  // Function to show the alert with log in / sign up option
  const logAlert = () => {
    const userResponse = window.confirm(
      'You need to log in or sign up to purchase items. Do you want to log in or sign up now?'
    );
    if (userResponse) {
      // Redirect the user to the login page (or signup page based on their choice)
      navigate("/login");  // Navigate to the login page
    }
  };

  const unavailableAlert = () => {
    alert("This item is out of stock.");
  };

  return (
     <div
      className={`item-container ${showDetails ? "show-details" : ""}`}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <img className="itemPicture" src={props.item.pictureUrl} alt={props.item.title} />
      {showDetails && (
        <div className="details">
          <div className="restDiv">
            <h3>{props.item.title}</h3>
            <p>${props.item.price}</p>
            {props.item.inStock > 0 ? (
              <p id="inStock">{props.item.inStock} In Stock</p>
            ) : (
              <p id="outOfStock">Out of Stock</p>
            )}
            <div className="icons">
              <span onClick={logAlert}>
                 <FaRegHeart className="likeIcon" /> 
              </span>
              {props.item.inStock > 0 ? (
                <span onClick={logAlert}>
                  <AiOutlineShopping className="availableCartIcon" />
                </span>
              ) : (
                <span onClick={unavailableAlert}>
                  <AiFillShopping className="unavailableCartIcon" />
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Item;
