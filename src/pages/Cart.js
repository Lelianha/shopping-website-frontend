import React from "react";
import { useState, useEffect } from "react";
import { getAllOrders, getAllUserItems,getAllOrderIds,getAllOrderItems} from "../services/api";
import TempOrder from "../components/TempOrder";
import  "./Cart.css";
import {Link , useMatch , useResolvedPath} from "react-router-dom";

import { AiOutlineShopping } from "react-icons/ai";

function Cart() {
      
    const [tempOrders, setTempOrders] = useState([]);
    const [existingItems, setExistingItems] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [orderIds, setOrderIds] = useState([]);

    let bUserName = sessionStorage.getItem("username")
    let nUserName;
    if(sessionStorage.getItem("username")){
        nUserName = bUserName.replace(/"/g, "'");
    }
   
      const userItemsBody ={
        userId: JSON.parse(sessionStorage.getItem("id"))
     }

      useEffect(() => {
        getAllOrders()
          .then((res) => {
            const resTempOrders = res.data.filter((order) => order.status === "TEMP"&& order.userId==JSON.parse(sessionStorage.getItem("id"))&&JSON.parse(sessionStorage.getItem("isActive")));
            return { 
              resTempOrders, 
              orderIdsPromise: getAllOrderIds() 
            };
          })
      
          .then(({ resTempOrders, orderIdsPromise }) => {
            return orderIdsPromise.then((orderIdsRes) => {
              const arrOrderIds = orderIdsRes.data;
              
              const itemPromises = arrOrderIds.map((orderId) => 
                getAllOrderItems(orderId).then((res) => 
                  res.data.map((item) => ({ 
                    ...item, 
                    liked: false, 
                    cart: false 
                  }))
                )
              );
      
              return Promise.all(itemPromises).then((resItems) => {
                setCurrentItems(resItems);
                setTempOrders(resTempOrders);
                setOrderIds(arrOrderIds);
      
                return getAllUserItems(userItemsBody);
              });
            });
          })
          .then((userItemsRes) => {
            const favorites = userItemsRes.data.map((userItem) => userItem.id);
            setExistingItems(favorites);
          })
          .catch((err) => console.error("An error occurred", err));

      }, [tempOrders]);

//     useEffect(() => {
//     let resTempOrders = [];
//     let arrOrderIds=[];
//     let resItems = [];

//         getAllOrders().then((res) => {

//               res.data.map(order => {

//                 if (order.status == "TEMP") {
//                   const temp = {
//                     id:order.id,
//                     userId:order.userId,
//                     orderDate:order.orderDate,
//                     shippingAddress:order.shippingAddress,
//                     totalPrice:order.totalPrice,
//                     status:order.status
//                                 };
//                     resTempOrders.push(temp);
              
//                 }

//               });
//               // setTempOrders(resTempOrders);

//               getAllOrderIds().then(

//                 res => {

//                    arrOrderIds = res.data.map(orderId => {
//                     return orderId;
                    
//                   }
//                   )
//                   // setOrderIds(arrOrderIds);

//                 // console.log(arrOrderIds)

//                 }
//                 )

//                 for(let i=0; i<arrOrderIds.length ; i++){
//                   getAllOrderItems(arrOrderIds[i]).then(
//                   res => {
//                 //  console.log("The iiiiiiiiiiiiiii is"+` ${JSON.stringify(i)}`);

//                 let arrOfItems = [];
//                       res.data.map((orderItems) => {
//                           const temp = {
//                               id: orderItems.id,
//                               title: orderItems.title,
//                               price: orderItems.price,
//                               quantity: orderItems.quantity,
//                               inStock: orderItems.inStock,
//                               pictureUrl: orderItems.pictureUrl,
//                               liked: false,
//                               cart: false
//                           };
//                               arrOfItems.push(temp);
                              
                             
//                       });
//                       resItems.push(arrOfItems);
//                       // setCurrentItems(resItems);
//                       console.log(resItems);
              
//                   }
        
//             );
//                 }
// let favorites=[]
//                getAllUserItems(userItemsBody).then(
//                res => {        
//                favorites = res.data.map(userItems => {
//               return (
//                userItems.id
//                 )
                                  
//                 }
//               )
//               setExistingItems(favorites);
      
//                }
//               )
              
          


//             })
//             setTempOrders(resTempOrders);
//             setOrderIds(arrOrderIds);
//             setCurrentItems(resItems);

//         }, []);
       
        // console.log(orderIds)

    return(

// order                  

 <>
          {tempOrders.length==0? <>
            <br></br><br></br><br></br><br></br><br></br><br></br>
          {/* <h1 id="temp"> CART</h1> */}
          <h1 id="cartEmpty"><AiOutlineShopping /></h1><br></br><br></br><br></br><br></br><br></br><br></br>
          <h3 id="temp" style={{textAlign: "center"}}> YOUR CART IS EMPTY</h3> 
          <Link to="/shop" className="shopLink" ><button className="shopButton">Shop Now</button></Link> </>:         <h1 id="temp">CART</h1>

}
    {tempOrders.map((tO,index) =>
   
  <>
       <TempOrder key={tO} tempOrder={tO}
        // arrOfItems={currentItems[index]===undefined ? null : currentItems[index]}
        arrOfItems={currentItems[tempOrders[index].id-1]===undefined ? null : currentItems[tempOrders[index].id-1]}

        favorites={existingItems}
        /> 
    </>
    )
}
</>
    )
    
}function CustomLink({to , children , ...props}){
    const resolvedPath=useResolvedPath(to)
    const isActive=useMatch({path:resolvedPath.pathname , end:true});
  
    return(
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}> 
        {children}
        </Link>
      </li>
    )
  }
export default Cart;
