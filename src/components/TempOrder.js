import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { getAllUserItems,getAllOrderIds,getAllOrderItems,updateOrder,deleteAllOrderItems,deleteOrder,updateOrderStatus,updateOrderShippingAddress} from "../services/api";
import Item from "./Item";
import TempOrderItem from "./TempOrderItem";
import classes from "./TempOrder.css";


function TempOrder(props) {

  const [now, setNow] = useState([]);
  let arrOrderIds =[];

    let arrOfItems = [];
    const [enteredShippingAddress, setEnteredShippingAddress] = useState('');

  useEffect(()=> {


              getAllOrderIds().then(

                res => {

                   arrOrderIds = res.data.map(orderId => {
                    return orderId;
                    
                  }
                  )
            
let temp;
let su=0;

                for(let i=0; i<arrOrderIds.length ; i++){
                  getAllOrderItems(arrOrderIds[i]).then(
                res => {  
                        res.data.map((orderItems) => {
                           
                           temp ={
                            id:arrOrderIds[i],
                            price:orderItems.price
                          };
                          su+=orderItems.price
                          arrOfItems.push(temp);

                               
                        });
                        // resItems.push(arrOfItems);
                        setNow(arrOfItems);
                
                    }
        
            );
                  }
     
              }
              )

  });


  const shippingAddressChangeHandler = (event) => {
    setEnteredShippingAddress(event.target.value);

  };

  const changeStatus = () => {
    // orderUpdate();
    const orderShippingAddres = {
      shippingAddress: enteredShippingAddress
        }

if(props.tempOrder.shippingAddress!="No Address")
{
  updateOrderStatus(props.tempOrder.id);

}
else if(props.tempOrder.shippingAddress=="No Address")
   {
    if(enteredShippingAddress != ""){
      updateOrderShippingAddress(props.tempOrder.id,orderShippingAddres);
      updateOrderStatus(props.tempOrder.id);
    }
    else{
      alert("Please Fill The Shipping Address")
    
    }   }


  }





  const orderItemsDelete = () => {
    const orderIttemsToDelete ={
      orderId: props.tempOrder.id

    }
    deleteAllOrderItems(orderIttemsToDelete);
    console.log(orderIttemsToDelete);

  }

  const orderDelete = () => {
 

    const orderToDelete = {
      id: props.tempOrder.id
    }
    deleteOrder(orderToDelete);
    console.log(orderToDelete);

  }

  const deleteBut = () => {
    orderItemsDelete();
    orderDelete();
  }



return(
<>
  <div 
  key={props.tempOrder.id}
  class="orderDiv" id="order"> 
  {/* {props.tempOrder.id} */}
  <div class="OrderItemsInRow" > 
  <ul>
    {props.arrOfItems.map( (item) => (
      <>
           <TempOrderItem item={item} favorites={props.favorites} tempOrder={props.tempOrder} /> 
</>
    ))}
    </ul> 


 </div> 
 <br></br>
                  {/* <form class="orderDetails"> */}
                    {/* <button onClick={()=>returnQuantity(existingCartItem)}>qq</button> */}

                    {/* <label class="orderLabel" >Total Price : {(props.tempOrder.totalPrice)}  USD</label> */}

                    <span class="orderDetails">
                    <label class="orderLabel" >Total Price: {(props.tempOrder.totalPrice).toFixed(2)}  USD</label>
                    <span type="submit" id="payment" class="paymentButton" onClick={changeStatus}> CheckOut </span>

<span class="deleteButton" onClick={orderDelete} >DELETE ORDER </span>

</span>
                    {/* <label class="orderLabel" onClick={() => getTotalPrice()}>Total Price : {enteredTotalPrice} USD</label> */}
                    {/* <label class="orderLabel" >The Right Total Price : {trySum}  USD</label> */}

                    {/* <br></br> <br></br><label class="orderLabel">Order Date : {props.tempOrder.orderDate} </label> */}


                     <br></br> <br></br>
                      {/* <div> 
                      <label class="orderLabel"> Shipping Address :  </label>
                      <input required id="shAddress" type="text"
                        value={enteredShippingAddress}
                        onChange={shippingAddressChangeHandler}
                      >
                      </input></div> */}

                  {/* </form> <br></br> */}
                  {/* <button type="submit"  > Payment Button  </button> */}

                  {/* <RiDeleteBin6Line class="trash" /> */}

                   {/* <button type="submit" id="payment" onClick={changeStatus}> Order Now </button>

                 <RiDeleteBin6Line class="trash" onClick={deleteBut} /> */}
                </div>

    </>

  );
}

export default TempOrder;