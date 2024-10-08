import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping, AiFillShopping } from "react-icons/ai";
import { useNavigate } from "react-router-dom";  // For navigation
import classes from "./CloseItem.css";

function CloseItem(props) {

  // Function to show the alert with log in / sign up option

  
  return (
    <div className="item-card">
      <img className="itemPicture" src={props.item.pictureUrl} alt={props.item.title} />
      <div className="item-details">
        <h3>{props.item.title}</h3>
        <p>Price: ${props.item.price.toFixed(2)}</p>
        <p>Quantity: {props.item.quantity !== null && props.item.quantity !== undefined ? props.item.quantity : 'N/A'}</p>
        </div>
    </div>
  );
}

export default CloseItem;



