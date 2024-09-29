// import React from "react";
// import Navbar from "../Navbar";

// import classes from "./Home.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faAmericanSignLanguageInterpreting, faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
// import {user} from "@fortawesome/free-regular-svg-icons"
// import { faHeart as sHeart } from "@fortawesome/free-solid-svg-icons";
// import {  faHeart as rHeart } from "@fortawesome/free-regular-svg-icons";
// import {BsHeart} from "react-icons/bs"
// import {BsHeartFill} from "react-icons/bs"

// import { useState } from "react";

// function Home(){
//     const x = require('../images/sun2.webp');
//     const [show,setShow]=useState(false) 

//     return (

//         <>
       
    
//          <img src={require('../images/wallpaper2.jpg')} alt="burberry" class="img"></img> 
    
//         <h2 class="qoute">Sunglasses are like eye shadow: They make everything look younger and pretty.</h2>
//         <span>
          
//         <div class="row" >
//           <div class="imgdiv">     
//             <img src={require('../images/sun1.webp')} alt="sun1" class="image"></img>
//             <p>Oversized Check Detail Geometric Frame Sunglasses</p>
//             <p>235.59 USD</p>
//             <p>10 In Stock</p>
//             {/* <FontAwesomeIcon icon={faCartPlus} spin /> */}
//             {
// show?<BsHeartFill size="30px"   onClick={()=>setShow(!show)} />:<BsHeart  size="30px" onClick={()=>setShow(!show)} />
// } 
//         </div>
   
//         <div class="imgdiv">     
//         <img src={x} alt="sun2" class="image"></img>

//             {/* <img src={require('../images/sun2.webp')} alt="sun2" class="image"></img> */}
//             <p>Monogram Motif Oversized Round Frame Lola Sunglasses</p>
//             <p>321.92 USD</p>
//             <p>10 In Stock</p>

//         </div>
    
//         <div class="imgdiv">     
//             <img src={require('../images/sun3.webp')} alt="sun3" class="image"></img>
//             <p>Cat-eye Frame Sunglasses</p>
//             <p>261.93 USD</p>
//             <p>10 In Stock</p>
//         </div>
//         </div>
    
    
//         <div class="row" >
//         <div class="imgdiv">     
//             <img src={require('../images/sun4.webp')} alt="sun4" class="image"></img>
//             <p>Monogram Motif Oversized Square Frame Lola Sunglasses</p>
//             <p>288.27 USD</p>
//             <p>10 In Stock</p>
//         </div>
    
//         <div class="imgdiv">     
//             <img src={require('../images/sun5.webp')} alt="sun5" class="image"></img>
//             <p>Logo Detail Cat-eye Frame Sunglasses</p>
//             <p>321.92 USD</p>
//             <p>10 In Stock</p>
//         </div>
    
//         <div class="imgdiv">     
//             <img src={require('../images/sun6.webp')} alt="sun6" class="image"></img>
//             <p>Check Square Frame Sunglasses</p>
//             <p>261.93 USD</p>
//             <p>10 In Stock</p>
//         </div>
//         </div>
    
    
//         <div class="row" >
//         <div class="imgdiv">     
//             <img src={require('../images/sun7.webp')} alt="sun7" class="image"></img>
//             <p>B Motif Square Frame Sunglasses</p>
//             <p>351.19 USD</p>
//             <p>10 In Stock</p>
//         </div>
    
//         <div class="imgdiv">     
//             <img src={require('../images/sun8.webp')} alt="sun8" class="image"></img>
//             <p>Vintage Check Detail Pilot Sunglasses</p>
//             <p>261.93 USD</p>
//             <p>10 In Stock</p>
//         </div>
    
//         <div class="imgdiv">     
//             <img src={require('../images/sun9.webp')} alt="sun9" class="image"></img>
//             <p>Logo Lens D-frame Sunglasses</p>
//             <p>261.93 USD</p>
//             <p>10 In Stock</p>
//         </div>
//         </div>
    
//         <div class="row" >
//         <div class="imgdiv">     
//             <img src={require('../images/sun10.webp')} alt="sun10" class="image"></img>
//             <p>‘B’ Lens Detail Rectangular Frame Sunglasses</p>
//             <p>321.92 USD</p>
//             <p>10 In Stock</p>
//         </div>
    
    
//         <div class="imgdiv">     
//             <img src={require('../images/sun11.webp')} alt="sun11" class="image"></img>
//             <p>Vintage Check Detail Butterfly Frame Sunglasses</p>
//             <p>235.59 USD</p>
//             <p>10 In Stock</p>
//         </div>
    
//         <div class="imgdiv">     
//             <img src={require('../images/sun12.webp')} alt="sun12" class="image"></img>
//             <p>B Motif Rectangular Frame Sunglasses</p>
//             <p>351.19 USD</p>
//             <p>10 In Stock</p>
//         </div>
//         </div>
    
      
//         </span>
     
//         </>
//       );
// }

// export default Home;
import React from "react";
import { getAllItems } from "../services/api";
import { useState , useEffect } from "react";
import  "./Home.css";
import { FaHeart,FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping, AiFillShopping } from "react-icons/ai";
// import {BsCartPlus} from "bootstrap-icons";
import FavoriteItems from "./FavoriteItems";
import {Link , useMatch , useResolvedPath} from "react-router-dom";


function Home(){

    // const [existingItems, setExistingItems] = useState([]);

    // useEffect(() => {
    //     getAllItems().then(
    //         res => {
    //              const itemOptions = res.data.map(item => {
    //                 // const url = require({item.pictureUrl});
    //                 const url = item.pictureUrl;

    //                 return ({...item} , <div key={item.id} class="imgdiv" ><img  class="image" src={url} ></img> <div> {item.title} </div> <br></br><div> {item.price} USD </div> 
    //                 <br></br><div> {item.quantity} In Stock </div> <span class="heartIcon" > <FaRegHeart onClick={FavoriteItems}/> </span> <span class="cartIcon"> <AiOutlineShopping /></span> </div>)
    //             });
    //             setExistingItems(itemOptions);
                
    //         }
    //     );
    // }, []);



    return (

        <>
    
    {/* <img src={require('../images/ShoppingWebsitePicture.jpg')} className="ShoppingWebsitePicture" alt="Logo"></img>  */}
{/* <div className="ShoppingWebsitePicture"><Link to="/shop" className="shopLink" ><button className="shopButton">Shop Now</button></Link> 
</div> */}
<div className="ShoppingWebsite"><img src={require('../images/fourth-removebg-preview.png')} alt="ShoppingWebsitePicture"></img><Link to="/shop" className="shopLink" ><button className="shopButton">Shop Now</button></Link> 
</div>
{/* <div className="ShoppingWebsitePicture"><button className="shopButton">Shop Now <Link to="/shop" className="shopLink" ></Link></button>
</div> */}
{/* <Link to="/shop"  ><button>Show More</button></Link> if i decide to put a 3 products in the homw i will write show more to see ahh the proudcts */}

    {/* <div  alt="burberry" class="img"></div>  


        <h2 class="qoute">Sunglasses are like eye shadow: They make everything look younger and pretty.</h2>
    
        <span>
          
          <div class="row" >  

          {existingItems}

         
         </div>  


        </span> 
  */}
{/*      
     <div class="row" >  

{existingItems}


</div>  */}
        </>
      );
}
function CustomLink({to , children , ...props}){
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
export default Home;