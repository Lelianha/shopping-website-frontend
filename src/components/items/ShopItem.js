import React, { useState, useEffect } from "react";
import "./ShopItem.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping, AiFillShopping } from "react-icons/ai";
import { createUserItem, deleteUserItem, createOrderItem } from "../../services/api";

function ShopItem(props) {
  const [isHeart, setIsHeart] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (props.favorites.includes(props.item.id)) {
      setIsHeart(true);
    } else {
      setIsHeart(false);
    }
  }, [props.favorites, props.item.id]);

  const handleFavoriteToggle = async () => {
    const userId = JSON.parse(sessionStorage.getItem("id"));
    
    if (JSON.parse(sessionStorage.getItem("isActive"))) {
      if (isHeart) {
        await deleteUserItem({ userId, itemId: props.item.id });
      } else {
        await createUserItem({ userId, userItemId: props.item.id });
      }
      setIsHeart(!isHeart); // Toggle heart state after API call
    }
  };

  const handleBuyItem = () => {
    const userId = JSON.parse(sessionStorage.getItem("id"));
    if (JSON.parse(sessionStorage.getItem("isActive"))) {
      createOrderItem({ userId, orderItemId: props.item.id });
    }
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
              <span onClick={handleFavoriteToggle}>
                {isHeart ? <FaHeart className="likeIcon" /> : <FaRegHeart className="likeIcon" />}
              </span>
              {props.item.inStock > 0 ? (
                <span onClick={handleBuyItem}>
                  <AiOutlineShopping className="availableCartIcon" />
                </span>
              ) : (
                <span>
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

export default ShopItem;
