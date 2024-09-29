
import React from "react";
import  "./FavoriteItems.css";
import { useState , useEffect } from "react";
import { getAllUserItems} from "../services/api";
import FavoriteItem from "../components/FavoriteItem";
import { TbMoodEmpty } from "react-icons/tb";

function FavoriteItems () {
    const [existingFavoriteItems, setExistingFavoriteItems] = useState([]);

    const userItemsBody ={
        userId: JSON.parse(sessionStorage.getItem("id"))
     }
    useEffect(() => {

        getAllUserItems(userItemsBody).then(
            res => {
                console.log(res)
                const favorites = res.data.map((userItem) => {
                        return (
                     <FavoriteItem item={userItem} />
                        )

                }
        )
        setExistingFavoriteItems(favorites);
            
        }
        );
    
        },[existingFavoriteItems]);

    return (
        <>
         <h2 id="favTitle">  Favorite List</h2>

            {existingFavoriteItems.length==0?<>
             <h1 id="favText" class="empty"> Your favorites list has no items <  TbMoodEmpty /> </h1></>
             : <div class="ItemsInRow" >{existingFavoriteItems} </div>
             }

    </>
    )
}


export default FavoriteItems;