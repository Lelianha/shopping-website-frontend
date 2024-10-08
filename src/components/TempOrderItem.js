import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { AiFillShopping } from "react-icons/ai";
import { deleteUserItem, createUserItem, createOrderItem, decOrderItemQuantity } from "../services/api";

import "./TempOrderItem.css";

function TempOrderItem(props) {
  const [isHeart, setIsHeart] = useState(false);
  useEffect(() => {
    if (props.favorites.includes(props.item.id)) {
      setIsHeart(true);
    }
  }, [props.favorites, props.item.id]);

  const changeHeart = () => {
    setIsHeart(!isHeart);
    if (!isHeart) {
      addItemToFavorite();
    } else {
      removeItemFromFavorite();
    }
  };

  const addItemToFavorite = () => {
    const UserItemsToCreate = {
      userId: JSON.parse(sessionStorage.getItem("id")),
      userItemId: props.item.id,
    };
    createUserItem(UserItemsToCreate);
  };

  const removeItemFromFavorite = () => {
    const UserItemToDelete = {
      userId: JSON.parse(sessionStorage.getItem("id")),
      itemId: props.item.id,
    };
    deleteUserItem(UserItemToDelete);
  };

  const buyItem = () => {
    const orderItemToCreate = {
      userId: JSON.parse(sessionStorage.getItem("id")),
      orderItemId: props.item.id,
    };
    createOrderItem(orderItemToCreate);
  };

  const decItemQuantity = () => {
    const orderItemToDec = {
      orderId: props.tempOrder.id,
      ItemsId: props.item.id,
    };
    decOrderItemQuantity(orderItemToDec);
  };

  return (
    <div className="item">
      <div className="itemWithDetails">
        <img className="itemPicture" src={props.item.pictureUrl} alt={props.item.title} />
        <div className="restDiv">
          <div>{props.item.title}</div>
          <br />

          <div>$ {props.item.price} </div>

          <br />
          <div>
            {props.item.inStock > 0 ? (
              <div id="inStock">{props.item.inStock} In Stock</div>
            ) : (
              <div id="outOfStock">Out of Stock</div>
            )}
          </div>

          {/* Quantity section with alignment fixes */}
          <div className="quantityContainer">
            <span className="quantityLabel">Quantity:</span>
            <FiMinus className="cartIconM" onClick={decItemQuantity} />
            <span className="quantityValue">{props.item.quantity}</span>
            <FiPlus className="cartIconP" onClick={buyItem} />
          </div>

          {/* Heart icon */}
          <div onClick={changeHeart} className="heartIcon">
            {isHeart ? (
              <FaHeart className="likeIcon" />
            ) : (
              <FaRegHeart className="likeIcon" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TempOrderItem;
