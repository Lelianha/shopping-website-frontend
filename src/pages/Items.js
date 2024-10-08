import React from "react";
import  "./Items.css";
import { useState , useEffect } from "react";
import { getAllItems,getAllUserItems,getAllOrderItems,getAllOrders,getAllUsers} from "../services/api";
import Item from "../components/Item";
import { ItemDescription } from "semantic-ui-react";

function Items(){

    const [allItems, setAllItems] = useState([]);
    const [arrOfFavoraties, setArrOfFavoraties] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [arrOrderItems, setArrOrderItems] = useState([]);
    const [temps, setTemps] = useState([]);
    const [registeredUser , setRegisteredUser]=useState([]);

    useEffect(() => {
      
                getAllItems().then(
        
                    res => {
                     const   arrOfItems = res.data.map((item) => {
        
                            const itemBody = {
                                id:item.id,
                                title: item.title,
                                price: item.price,
                                inStock: item.inStock,
                                pictureUrl: item.pictureUrl
                            }
                            return (
                                <Item item={itemBody}  />
                               // <Item item={itemBody}  favorites={arrOfFavoraties} arrOfOrderItems={arrOrderItems}/>

                                )
                              
                        });
                        
                        setAllItems(arrOfItems);
        
        
                    })
                }
                )           
        
   


return (

    <>
        <div class="ItemsInRow" >  
            {allItems}
        </div> 
    </>

      );
}

export default Items;