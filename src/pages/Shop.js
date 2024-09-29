import React from "react";
import  "./Shop.css";
import { useState , useEffect } from "react";
import { getAllItems,getAllUserItems,getAllOrderItems,getAllOrders,getAllUsers} from "../services/api";
import Item from "../components/Item";
import TempItem from "../components/TempItem";

function Shop(){

    const [allItems, setAllItems] = useState([]);
    const [arrOfFavoraties, setArrOfFavoraties] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [arrOrderItems, setArrOrderItems] = useState([]);
    const [temps, setTemps] = useState([]);
    const [registeredUser , setRegisteredUser]=useState([]);

    const userItemsBody ={
        userId: JSON.parse(sessionStorage.getItem("id"))
     }

    useEffect(() => {
        let arrOfUserItems =[];
        let arrOfTemps= [];
        let arrOfOrderItems = [];
        let arrOfItems =[];
        let arrOfOrders=[];
        
            getAllUserItems(userItemsBody)
                .then((res) => {
                    arrOfUserItems = res.data.map((userItems) => userItems.id);
                        setArrOfFavoraties(arrOfUserItems);
        
        return{
            arrOfUserItems,allOrdersPromise:getAllOrders()
        };})

        .then(({arrOfUserItems,allOrdersPromise}) => {
          return allOrdersPromise.then((allOrdersRes) => {
            arrOfTemps= allOrdersRes.data.map(order => {
              if(order.status == "TEMP"&&order.userId==JSON.parse(sessionStorage.getItem("id"))){
                return (order.id )
      
              }
            });  
      
          const itemPromises = arrOfTemps.map((orderId) => 
          getAllOrderItems(orderId).then((res) => 
          arrOfOrderItems= res.data.map((item) => ({ 
            ...item 
            //   ...item, 
            //   liked: false, 
            //   cart: false 
       
            })
            )
          )
        );
      
          return Promise.all(itemPromises).then((resItems) => {
            setCurrentItems(resItems);
            setArrOfFavoraties(arrOfUserItems);
            setTemps(arrOfTemps);
            setArrOrderItems(arrOfOrderItems)
      
          });
            });
        }
        )
    
        .catch((err) => console.error("An error occurred", err));
      
                getAllItems().then(
        
                    res => {
                        arrOfItems = res.data.map((item) => {
        
                            const itemBody = {
                                id:item.id,
                                title: item.title,
                                price: item.price,
                                inStock: item.inStock,
                                pictureUrl: item.pictureUrl
                            }
                            return (
                                // <Item item={itemBody}  favorites={arrOfFavoraties} arrOfTemps={arrOfTemps} lastId={currentId} arrOfOrderItems={arrOrderItems} arrOfOrders={arrOfOrders}/>
                                <TempItem item={itemBody}  favorites={arrOfFavoraties} arrOfOrderItems={arrOrderItems}/>
                               // <Item item={itemBody}  favorites={arrOfFavoraties} arrOfOrderItems={arrOrderItems}/>

                                )
                              
                        });
                        
                        setAllItems(arrOfItems);
        
        
                    })
               
                        
        
          getAllUsers().then(
        
        res => {
          const users= res.data.map(user => {
        
                  if(user.username==JSON.parse(sessionStorage.getItem("username"))){
        
                return (
                    <>
        <div class="row">{allItems}</div>    
            </>
                )
              }
           
            });
        setRegisteredUser(users);    
          }
          
          );
      
            }, [allItems]);

// useEffect(() => {
//     getAllItems().then(
//         res => {

//     const items = res.data.map((item) => {
//         const temp = {
//             id:item.id,
//             title: item.title,
//             price: item.price,
//             inStock: item.inStock,
//             pictureUrl: item.pictureUrl,
//         }
//         return (
    
//             // <Item item={temp}  favorites={favorites} arrOfTemps={arrOfTemps} lastId={currentId} arrOfOrderItems={arrOrderItems} arrOfOrders={arrOfOrders}/>
//             <Item item={temp}  />

//             )
//     // return ({...item} ,
//     //    <div>{item.showDetails?
//     //       <div key={item.id} class="item" onMouseMove={()=>showItemDetails(item)} >
//     //       <img  class="itemPicture" src={item.pictureUrl}  ></img>
//     //         </div>
//     //         :
//     //         <div key={item.id} class="itemWithDetails" onMouseLeave={()=>showItemDetails(item)}>
//     //         <img  class="itemPicture" src={item.pictureUrl}  ></img>
//     //         <div className="restDiv"  >
//     //          <div> {item.title} </div> 
//     //          <br></br>
//     //          <div> ${item.price}  </div> 
//     //     <br></br>
//     //     <div id="inStock"> {item.quantity} In Stock </div>
//     //      {item.isLiked? <FaHeart onClick={()=>addLike(item)} className="likeIcon"/>
//     //      :<FaRegHeart onClick={()=>addLike(item)} className="likeIcon"/> }
//     //      {item.inCart? <AiFillShopping onClick={()=>addToCart(item)} className="cartIcon"/>
//     //      :<AiOutlineShopping onClick={()=>addToCart(item)} className="availableCartIcon"/> }
//     //      </div>
//     //      </div>
//     // }
   
//     //  </div>     )

//     // return ({...item} ,
//     //     <div>
//     //        <div key={item.id} class="item" onMouseMove={()=>showItemDetails(item)} >
//     //        <img  class="itemPicture" src={item.pictureUrl}  ></img>
//     //          </div>
             
//     //          <div key={item.id} class="itemWithDetails" onMouseLeave={()=>showItemDetails(item)}>
//     //          <img  class="itemPicture" src={item.pictureUrl}  ></img>
//     //          <div className="restDiv"  >
//     //           <div> {item.title} </div> 
//     //           <br></br>
//     //           <div> ${item.price}  </div> 
//     //      <br></br>
//     //      <div id="inStock"> {item.quantity} In Stock </div>
//     //       {item.isLiked? <FaHeart onClick={()=>addLike(item)} className="likeIcon"/>
//     //       :<FaRegHeart onClick={()=>addLike(item)} className="likeIcon"/> }
//     //       {item.inCart? <AiFillShopping onClick={()=>addToCart(item)} className="cartIcon"/>
//     //       :<AiOutlineShopping onClick={()=>addToCart(item)} className="availableCartIcon"/> }
//     //       </div>
//     //       </div>
    
    
//     //   </div>     )
//         })
    
// //        const products = res.data.map(item => {

// //     return ({...item} ,
// //         <div key={item.id} class="item" >
// //            <img  class="itemPicture" src={item.pictureUrl} ></img>
// //         </div>
// //         )

// // })
// setAllItems(items);

// // setBro(products);

// }
// );
// }, [allItems]); 

// const mouseTarget = document.getElementById("restDiv");

// mouseTarget.addEventListener("mouseenter", (e) => {
//   mouseTarget.style.display = "inline";
// });

// mouseTarget.addEventListener("mouseleave", (e) => {
//   mouseTarget.style.display = "none";
// });




return (

    <>
        <div class="ItemsInRow" >  
            {allItems}
        </div> 
    </>

      );
}

export default Shop;