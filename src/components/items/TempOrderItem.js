import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { deleteUserItem, createUserItem, createOrderItem, decOrderItemQuantity } from "../../services/api";

import "./TempOrderItem.css";

function TempOrderItem(props) {
  const [isHeart, setIsHeart] = useState(false);

  useEffect(() => {
    // Check if the item is in favorites
    if (props.favorites.includes(props.item.id)) {
      setIsHeart(true);
    } else {
      setIsHeart(false);
    }
  }, [props.favorites, props.item.id]);

  const changeHeart = async () => {
    // Toggle the heart state
    const currentHeartState = isHeart;
    setIsHeart(!currentHeartState); // Optimistically update the UI

    if (currentHeartState) {
      await removeItemFromFavorite();
    } else {
      await addItemToFavorite();
    }
  };

  const addItemToFavorite = async () => {
    const UserItemsToCreate = {
      userId: JSON.parse(sessionStorage.getItem("id")),
      userItemId: props.item.id,
    };
    await createUserItem(UserItemsToCreate); // Await the API call
  };

  const removeItemFromFavorite = async () => {
    const UserItemToDelete = {
      userId: JSON.parse(sessionStorage.getItem("id")),
      itemId: props.item.id,
    };
    await deleteUserItem(UserItemToDelete); // Await the API call
  };

  const buyItem = async () => {
    const orderItemToCreate = {
      userId: JSON.parse(sessionStorage.getItem("id")),
      orderItemId: props.item.id,
    };
    await createOrderItem(orderItemToCreate); // Await the API call
  };

  const decItemQuantity = async () => {
    const orderItemToDec = {
      orderId: props.tempOrder.id,
      ItemsId: props.item.id,
    };
    await decOrderItemQuantity(orderItemToDec); // Await the API call
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
