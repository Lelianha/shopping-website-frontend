// import React, { useState } from "react";
// import Navbar from "../Navbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// import classes from "./OrderList.css";
// import { faHeart as sHeart } from "@fortawesome/free-solid-svg-icons";
// import {  faHeart as rHeart } from "@fortawesome/free-regular-svg-icons";
// import {FiShoppingCart} from "react-icons/fi"
// import {BsFillCartFill} from "react-icons/bs"

// // export  const animate = () => {
     
// //      setShake(true);
// //           setTimeout(() => setShake(false), 2000);  
// //  }

// function OrderList(){
//  const [show,setShow]=useState(false) 
//  const [shake, setShake] = useState(false);

//  const animate = () => {
     
//      setShake(true);
//           setTimeout(() => setShake(false), 2000);  

//  }
//       return (
//         <>
//         <BsFillCartFill className="icon"/>
//         <FiShoppingCart className="icon"/>
//         {/* <FontAwesomeIcon icon={FaAirbnb}/> */}
//  {/* <button onClick = {animate} className = {shake ? `shake` : null}>Click me</button> */}
//  {/* {shake? <button onClick={()=>setShake(!shake)} >Click me</button>: null} */}
//  {
// show?<FontAwesomeIcon icon={sHeart} size="3x"  className="icon" speed={10}   onClick={()=>setShow(!show)} />:<FontAwesomeIcon icon={rHeart} size="3x" onClick={()=>setShow(!show)} />
// } 
// {/* {
// shake?<FontAwesomeIcon icon={sHeart} size="3x" color="red"  speed={10}   onClick = {animate}/>:<FontAwesomeIcon icon={rHeart}  shake size="3x" onClick = {animate} />
// }  */}
// <br></br>
// <br></br>
// {/* <FontAwesomeIcon icon={}size="2x"  /> */}
// {/* <FontAwesomeIcon icon={faHeart}size="2x" data-fa-transform={grow-6}  /> */}
// <button class="ha">ggg</button>

//         </>
//       );
// }

// export default OrderList;

import React from "react";
import Navbar from "../components/Try";
import "./OrderList.css";
import { useState , useEffect } from "react";
import { getAllItems ,updateItem} from "../services/api";
import { FaHeart,FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping, AiFillShopping } from "react-icons/ai";

const moveElement = () => {

    document.getElementById('close').appendChild(
        document.getElementById('order'));
     
    var paragraph = document.getElementById("p");
     var text = document.createTextNode(" There Is No Temp Order ");

       paragraph.appendChild(text);
      
        var x = document.getElementById('payment');
        if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
}
}



function OrderList(){

  const [existingOrderItems, setExistingOrderItems] = useState([]);
    const addLike =(item)=>{
        const itemToUpdate = {
            id:item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity,
            pictureUrl: item.pictureUrl,
            isLiked: !item.isLiked,
            inCart: item.inCart
        };
        updateItem(itemToUpdate);
    }
    const addToCart =(item)=>{
        const itemToUpdate = {
            id:item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity,
            pictureUrl: item.pictureUrl,
            isLiked: item.isLiked,
            inCart: !item.inCart
        };
        updateItem(itemToUpdate);
    }
    useEffect(() => {
        getAllItems().then(
            res => {
                const items = res.data.map(item => {
                    if(item.quantity>0){
                        if(item.inCart==1){
                    return ({...item} , <div key={item.id} class="imgdiv" ><img  class="image" src={item.pictureUrl} ></img> <div> {item.title} </div> <br></br><div> ${item.price}  </div> 
                    <br></br><div id="inStock"> {item.quantity} In Stock </div> {item.isLiked? <FaHeart onClick={()=>addLike(item)} className="heartIcon"/>
                     :<FaRegHeart onClick={()=>addLike(item)} className="heartIcon"/> }{item.inCart? <AiFillShopping onClick={()=>addToCart(item)} className="heartIcon"/>
                     :<AiOutlineShopping onClick={()=>addToCart(item)} className="availablecartIcon"/> }</div>)
                    }}
                    else{
                        return ({...item} , <div key={item.id} class="imgdiv" ><img  class="image" src={item.pictureUrl} ></img> <div> {item.title} </div> <br></br><div> ${item.price}  </div> 
                    <br></br><div id="outOfStock"> Out Of Stock</div> <span class="heartIcon" > <FaRegHeart /> </span> <span class="unavailablecartIcon"> <AiOutlineShopping /></span> </div>)
                    }
                });
                setExistingOrderItems(items);
                
            }
        );
    }, [existingOrderItems]);

    return (

        <>

        <div className="orderListPage">
        {existingOrderItems}
       <div id="cart">
    {/* <h2 >    <img src={require('../images/shopping-cart.png')} id="cartIcon" alt="cart" ></img> My Cart </h2> */}
    </div>

    <h1 id="temp"> TEMP ORDERS</h1>
     {/* <div className="tempOrders"> */}
    
     <p id="p"></p>

        <div id="order"> order 1</div>

       <br></br>
      <button type="button"  id="payment" onClick={moveElement}> Payment Button  </button> 
      {/* </div> */}

       <div className="closeOrders">

       <h1 id="close"> CLOSE ORDERS</h1>


       </div>

    </div>


        </>

      );
}

export default OrderList;