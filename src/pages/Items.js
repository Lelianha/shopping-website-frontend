import React from "react";
import  "./Items.css";
import { useState , useEffect } from "react";
import { getAllItems} from "../services/api";
import Item from "../components/items/Item";

function Items(){
    const [allItems, setAllItems] = useState([]);

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