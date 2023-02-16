import React from "react";
import Navbar from "../Navbar";

import classes from "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faAmericanSignLanguageInterpreting, faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import {user} from "@fortawesome/free-regular-svg-icons"
function Try(){
    // var y = document.getElementsByClassName('.qoute')
    //     if (y.style.display=='none')
    //         y.style.display=="block";
    //         else y.style.display=="none"
    https://github.com/AdanHasan/Shopping-Website.git 
    return (

        <>
        </>
        )
}
function Home(){
    const x = require('../images/sun2.webp');
    return (

        <>
       
    
         <img src={require('../images/wallpaper2.jpg')} alt="burberry" class="img"></img> 
    
        <h2 class="qoute">Sunglasses are like eye shadow: They make everything look younger and pretty.</h2>
    <button onClick={Try}>hhhhh</button>
        <span>
          
        <div class="row" >
          <div class="imgdiv">     
            <img src={require('../images/sun1.webp')} alt="sun1" class="image"></img>
            <p>Oversized Check Detail Geometric Frame Sunglasses</p>
            <p>235.59 USD</p>
            <p>10 In Stock</p>
            <FontAwesomeIcon icon={faCartPlus} spin />
          <FontAwesomeIcon icon={faHeart} onClick={Try} /> 

        </div>
   
        <div class="imgdiv">     
        <img src={x} alt="sun2" class="image"></img>

            {/* <img src={require('../images/sun2.webp')} alt="sun2" class="image"></img> */}
            <p>Monogram Motif Oversized Round Frame Lola Sunglasses</p>
            <p>321.92 USD</p>
            <p>10 In Stock</p>

        </div>
    
        <div class="imgdiv">     
            <img src={require('../images/sun3.webp')} alt="sun3" class="image"></img>
            <p>Cat-eye Frame Sunglasses</p>
            <p>261.93 USD</p>
            <p>10 In Stock</p>
        </div>
        </div>
    
    
        <div class="row" >
        <div class="imgdiv">     
            <img src={require('../images/sun4.webp')} alt="sun4" class="image"></img>
            <p>Monogram Motif Oversized Square Frame Lola Sunglasses</p>
            <p>288.27 USD</p>
            <p>10 In Stock</p>
        </div>
    
        <div class="imgdiv">     
            <img src={require('../images/sun5.webp')} alt="sun5" class="image"></img>
            <p>Logo Detail Cat-eye Frame Sunglasses</p>
            <p>321.92 USD</p>
            <p>10 In Stock</p>
        </div>
    
        <div class="imgdiv">     
            <img src={require('../images/sun6.webp')} alt="sun6" class="image"></img>
            <p>Check Square Frame Sunglasses</p>
            <p>261.93 USD</p>
            <p>10 In Stock</p>
        </div>
        </div>
    
    
        <div class="row" >
        <div class="imgdiv">     
            <img src={require('../images/sun7.webp')} alt="sun7" class="image"></img>
            <p>B Motif Square Frame Sunglasses</p>
            <p>351.19 USD</p>
            <p>10 In Stock</p>
        </div>
    
        <div class="imgdiv">     
            <img src={require('../images/sun8.webp')} alt="sun8" class="image"></img>
            <p>Vintage Check Detail Pilot Sunglasses</p>
            <p>261.93 USD</p>
            <p>10 In Stock</p>
        </div>
    
        <div class="imgdiv">     
            <img src={require('../images/sun9.webp')} alt="sun9" class="image"></img>
            <p>Logo Lens D-frame Sunglasses</p>
            <p>261.93 USD</p>
            <p>10 In Stock</p>
        </div>
        </div>
    
        <div class="row" >
        <div class="imgdiv">     
            <img src={require('../images/sun10.webp')} alt="sun10" class="image"></img>
            <p>‘B’ Lens Detail Rectangular Frame Sunglasses</p>
            <p>321.92 USD</p>
            <p>10 In Stock</p>
        </div>
    
    
        <div class="imgdiv">     
            <img src={require('../images/sun11.webp')} alt="sun11" class="image"></img>
            <p>Vintage Check Detail Butterfly Frame Sunglasses</p>
            <p>235.59 USD</p>
            <p>10 In Stock</p>
        </div>
    
        <div class="imgdiv">     
            <img src={require('../images/sun12.webp')} alt="sun12" class="image"></img>
            <p>B Motif Rectangular Frame Sunglasses</p>
            <p>351.19 USD</p>
            <p>10 In Stock</p>
        </div>
        </div>
    
      
        </span>
     
        </>
      );
}

export default Home;