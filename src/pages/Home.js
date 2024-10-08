
import React from "react";
import { getAllItems } from "../services/api";
import { useState , useEffect } from "react";
import  "./Home.css";
import { FaHeart,FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping, AiFillShopping } from "react-icons/ai";
// import {BsCartPlus} from "bootstrap-icons";
import FavoriteItems from "./FavoriteItems";
import {Link , useMatch , useResolvedPath} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Home(){
  const navigate = useNavigate();



    return (

        <> 
          <div className="ShoppingWebsite">
            <img src={require('../images/fourth-removebg-preview.png')} alt="ShoppingWebsitePicture"></img>

            <span className="browseOptions">

            <div className="inlineOption" >
                Discover our exclusive collection of Luxe bags
              </div>

              <div className="rarr" onClick={() => navigate('/items')}>
                Browse Collection &rarr;
              </div>

              <br></br>
              <div className="inlineOption">
                Ready to shop and own one? 
              </div>

              <div className="rarr" onClick={() => navigate('/login')}>
               Log in and Start Shopping &rarr;
              </div>

            </span>
          </div>
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