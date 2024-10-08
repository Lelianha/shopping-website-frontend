import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { AiOutlineShopping, AiFillShopping } from "react-icons/ai";
import { deleteUserItem, createOrderItem } from "../../services/api";
import './FavoriteItem.css'; // Import TempItem.css for consistent styling

function FavoriteItem(props) {
    const [showDetails, setShowDetails] = useState(false);

    const removeItemFromFavorite = () => {
        const UserItemToDelete = {
            userId: JSON.parse(sessionStorage.getItem("id")),
            itemId: props.item.id,
        };

        if (JSON.parse(sessionStorage.getItem("isActive")) === true) {
            deleteUserItem(UserItemToDelete);
        }
    };

    const changeHeart = () => {
        removeItemFromFavorite();
    };

    const showItemDetails = () => {
        setShowDetails(!showDetails);
    };

    const buyItem = () => {
        const orderItemToCreate = {
            userId: JSON.parse(sessionStorage.getItem("id")),
            orderItemId: props.item.id,
        };

        if (JSON.parse(sessionStorage.getItem("isActive")) === true) {
            createOrderItem(orderItemToCreate);
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
                        <span onClick={changeHeart}>
                            <FaHeart className="likeIcon" /> 
                        </span>
                        {props.item.inStock > 0 ? (
                            <span onClick={buyItem}>
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

export default FavoriteItem;