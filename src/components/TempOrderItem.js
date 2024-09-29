import React from "react";
import { FaHeart, FaRegHeart} from "react-icons/fa"
import "./TempOrderItem.css";
import { useState, useEffect } from "react";
import { AiOutlineShopping, AiFillShopping } from "react-icons/ai";
import { BsCartPlus , BsCartDash , BsCart} from "react-icons/bs"
// import { getAllItems, updateItem , createOrder, getAllOrders ,updateOrderItemQuantity, updateOrder , getAllUsers,decOrderItemQuantity, getAllUserItems, deleteUserItem ,getQantity, createUserItems,createOrderItems,createOrderItem,updateItemQuantity} from "../services/api";
import { getAllItems, updateItem , createOrder, getAllOrders ,updateOrderItemQuantity, updateOrder , getAllUsers, getAllUserItems, deleteUserItem ,getQantity, createUserItem,createOrderItems,createOrderItem,updateItemQuantity,decOrderItemQuantity} from "../services/api";
import { FiPlus,FiMinus } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";


function TempOrderItem(props) {
      
    const [isHeart, setIsHeart] = useState(false)
    const [showDetails,setShowDetails]=useState(false)

    var enteredOrderDate;
    useEffect(() => {
  if(props.favorites.includes(props.item.id))
    {
        setIsHeart(true)
    }
   });

   const addItemToFavorite=()=>{ 
    const UserItemsToCreate = {
        userId: JSON.parse(sessionStorage.getItem("id")),
        userItemId:props.item.id
    }

    if (JSON.parse(sessionStorage.getItem("isActive"))==true){
        createUserItem(UserItemsToCreate)
        console.log(UserItemsToCreate)
        }
    }

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
        setIsHeart(!isHeart);

        if (isHeart==false) {
            addItemToFavorite();
        }

    else{
        removeItemFromFavorite();
        }
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


        const decItemQuantity=()=>{ 
            const orderItemToDec = {
                orderId:props.tempOrder.id,
                ItemsId:props.item.id
            }
            if (JSON.parse(sessionStorage.getItem("isActive"))==true){
                decOrderItemQuantity(orderItemToDec);
                console.log(orderItemToDec)
            }
        }


    // return(<>
    // <div key={props.item.id} class="imgdiv" >
    //     <img class="image" src={props.item.pictureUrl}></img> 
    //     <div> {props.item.title} </div>
    //  <br></br><div className="tPrice"> {props.item.price} USD </div>
    //                     <br></br><div> {props.item.inStock} In Stock </div>
    //                      <br></br><br></br><br></br>
    //                   {/* <span> <label class="labelQuantity">Quantity :</label>  */}
    //                   {/* <input  required key={props.item.id} class="inputQuantity" type="number"
    //                   value={enteredQuantity}
    //                   onChange={quantityChangeHandler}
    //                  >
    //            </input> */}
    //                   {/* </span> */}       
    //                   <span class="quantityNum">  {props.item.quantity} Quantiny </span> 
    //                   <br></br>
    //                     {/* <div class="quantityNum" onChange={quantity(props.item.id,JSON.parse(sessionStorage.getItem("username")))}> Quantiny </div>  */}
    //                     <span class="heartIcon" style={{marginLeft: "360px"}} onClick={changeHeart}> {isHeart ? <FaHeart /> : <FaRegHeart />} </span>

    //                     {/* <span class="cartIcon"onClick={changeCart} >{inCart ? <BsCartDash /> : <BsCartPlus />}</span>   */}
    //                     <span class="cartIcon"  > 
    //                     <BsCartPlus  onClick={addNew}   /> 
    //                     <BsCartDash onClick={removeNew} style={{marginLeft: "40px"}}/>   
    //                      </span>  

    //                     {/* <span class="cartIcon"onClick={addNew} > <BsCartPlus /></span>   */}
                        
    //                     </div>
    // </>)

    return (
        <div style={{border: '1px solid rgba(0, 0, 0, 0.05)', marginBottom:'15px'}}>
             <div key={props.item.id} className="itemWithDetails" onMouseLeave={()=>showItemDetails()}>
             <img  className="itemPicture"  src={props.item.pictureUrl}  ></img>
             <div className="restDiv">
              <div> {props.item.title} </div> 
              <br></br>
              <div> ${props.item.price}  </div> 
         <br></br>
         <div>{props.item.inStock>0?<div id="inStock"> {props.item.inStock} In Stock </div>:        
         <div id="outOfStock"> {props.item.inStock} Items Left In Stock </div>}
 </div>
          <div onClick={changeHeart}> {isHeart?<FaHeart  className="likeIcon"/>:
          <FaRegHeart  className="likeIcon"/> }</div>
 
 <div>{props.item.inStock>0?
 <>
               <div > 
               <FiPlus onClick={buyItem}/>
</div>                <div > 
                               <FiMinus  style={{marginLeft: '35px'}} onClick={decItemQuantity}/>

            
</div></>:
                <div > 
                <AiFillShopping  className="unavailableCartIcon"/></div>
               }
 </div>
          </div>
          </div>
    
      </div>     ) 
}
export default TempOrderItem;


