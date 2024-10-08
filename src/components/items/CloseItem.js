import React from "react";
import "./CloseItem.css";

function CloseItem(props) {

  
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



