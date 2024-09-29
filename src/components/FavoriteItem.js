import React, { useState, useEffect } from "react";
import classes from "./Item.css";
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { AiOutlineShopping, AiFillShopping } from "react-icons/ai";
import { getAllItems, updateItem , createOrder, getAllOrders ,updateOrderItemQuantity, updateOrder , getAllUsers, getAllUserItems, deleteUserItem ,getQantity, createUserItem,createOrderItems,createOrderItem,updateItemQuantity} from "../services/api";

function FavoriteItem(props) {
      
    const [isHeart, setIsHeart] = useState(false)
    const [showDetails,setShowDetails]=useState(false)

//     useEffect(() => {

//         if(props.favorites.includes(props.item.id))
//             {
//              setIsHeart(true)
//              }
    
//    });

//    const addItemToFavorite=()=>{ 
//     const UserItemsToCreate = {
//         userId: JSON.parse(sessionStorage.getItem("id")),
//         userItemId:props.item.id
//     }

//     if (JSON.parse(sessionStorage.getItem("isActive"))==true){
//         createUserItem(UserItemsToCreate)
//         console.log(UserItemsToCreate)
//         }
//     }

    const removeItemFromFavorite=()=>{ 
    const UserItemToDelete = {
        userId: JSON.parse(sessionStorage.getItem("id")),
        itemId: props.item.id
    }

    if (JSON.parse(sessionStorage.getItem("isActive"))==true){
        deleteUserItem(UserItemToDelete)
    }
    }

    const changeHeart = () =>{
    //     setIsHeart(!isHeart);

    //     if (isHeart==false) {
    //         addItemToFavorite();
    //     }

    // else{
        removeItemFromFavorite();
        // }
    }

    const showItemDetails = () =>{
    setShowDetails(!showDetails);
    }

    const buyItem=()=>{ 
        const orderItemToCreate = {
            userId:JSON.parse(sessionStorage.getItem("id")),
            orderItemId:props.item.id
        }

        if (JSON.parse(sessionStorage.getItem("isActive"))==true){
        createOrderItem(orderItemToCreate);
        }
    }


    return (
       <div>{showDetails?
          <div key={props.item.id} className="item" onMouseMove={()=>showItemDetails()} >
            <img  className="itemPicture" src={props.item.pictureUrl}  ></img>
           </div>
            :
            <div key={props.item.id} className="itemWithDetails" onMouseLeave={()=>showItemDetails()}>
            <img  className="itemPicture" src={props.item.pictureUrl}  ></img>
            <div className="restDiv"  >
             <div> {props.item.title} </div> 
             <br></br>
             <div> ${props.item.price}  </div> 
        <br></br>
        <div>{props.item.inStock>0?<div id="inStock"> {props.item.inStock} In Stock </div>:        
        <div id="outOfStock"> {props.item.inStock} Items Left In Stock </div>}
</div>
         <div onClick={changeHeart}> <FaHeart  className="likeIcon"/></div>

<div>{props.item.inStock>0?
              <div onClick={buyItem}> 
              <AiOutlineShopping  className="availableCartIcon"/></div>:
               <div > 
               <AiFillShopping  className="unavailableCartIcon"/></div>
              }
</div>
      
         </div>
         </div>
    }
   
     </div>     ) 
 


}
export default FavoriteItem;