import React, { useState, useEffect } from "react";
import "./TempFavoriteItems.css";
import { getAllUserItems } from "../services/api";
import FavoriteItem from "../components/FavoriteItem";
import { TbMoodEmpty } from "react-icons/tb";

function TempFavoriteItems() {
  const [existingFavoriteItems, setExistingFavoriteItems] = useState([]);

  useEffect(() => {
    const userItemsBody = {
      userId: JSON.parse(sessionStorage.getItem("id")),
    };

    getAllUserItems(userItemsBody).then((res) => {
      const favorites = res.data.map((userItem) => (
        <FavoriteItem key={userItem.id} item={userItem} />
      ));
      setExistingFavoriteItems(favorites);
    });
  }, []);

  return (
    <div className="favorite-container">
      <h2 id="favTitle">Favorite List</h2>
      {existingFavoriteItems.length === 0 ? (
        <h1 id="favText" className="empty">
          Your favorites list has no items <TbMoodEmpty />
        </h1>
      ) : (
        <div className="ItemsInRow">{existingFavoriteItems}</div>
      )}
    </div>
  );
}

export default TempFavoriteItems;
