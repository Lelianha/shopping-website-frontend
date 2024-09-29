import React from "react";
import "./TwoTry.css";
import {Link , useMatch , useResolvedPath} from "react-router-dom";
import SearchBar from "./SearchBar";
import {CgProfile} from "react-icons/cg"
import {BsBag,BsBagFill} from "react-icons/bs"
import {FiHeart} from "react-icons/fi"
import {FaHeart} from "react-icons/fa"
import {AiOutlineHome,AiFillHome} from "react-icons/ai"
import { CiLogout,CiLogin  } from "react-icons/ci";

import { useState } from "react";
 function Navbar() {
const [inHomePage,setInHomePAge]=useState(true)
const [inOrderPage,setInOrderPAge]=useState(false)
const [inFavoritePage,setInFavoritePAge]=useState(false)
const [inProfile,setInProfile]=useState(true)
const [isActive,setIsActive]=useState(true)


const homePage=()=>{
  setInHomePAge(true)
  setInOrderPAge(false)
  setInFavoritePAge(false)
}
const orderPage=()=>{
  setInHomePAge(false)
  setInOrderPAge(true)
  setInFavoritePAge(false)
}
const favoritePage=()=>{
  setInHomePAge(false)
  setInOrderPAge(false)
  setInFavoritePAge(true)
}
return (
    <>
    <nav className="nav">


{inProfile?
  <CgProfile id="profileIcon"  onClick={()=>setInProfile(!inProfile)} />

  :
  <div onClick={()=>setInProfile(!inProfile)}>
{isActive?
<div onClick={()=>setIsActive(!isActive)}>
{/* <span className="userSecurityStatus" id="login"><Link to="/login"> Log In </Link> </span>/<span className="userSecurityStatus" id="signup "><Link to="/signUp" > Sign Up</Link> </span> */}
< Link to="/login" className="userSecurityStatus" id="login"> Log In </Link> /<Link to="/signUp" className="userSecurityStatus" id="signup "> Sign Up</Link> 

</div>
:
<div onClick={()=>setIsActive(!isActive)}>
<a className="userSecurityStatus" id="profile"><Link to="/profile" > <CgProfile />
 </Link> </a>
<a className="userSecurityStatus" id="logout"><Link to="/logout" > <CiLogout /> </Link> </a>
</div>}
</div>
  }


<Link to="/"onClick={homePage} className="pagesLink"> { inHomePage ? <AiFillHome className="homeIcon "/> : <AiOutlineHome className="homeIcon "/>}</Link>
<Link to="/cart"onClick={orderPage} className="pagesLink"> { inOrderPage ? <BsBagFill className="homeIcon "/> : <BsBag className="homeIcon "/>}</Link>
<Link to="/favoriteItems"  onClick={favoritePage} className="pagesLink" >{ inFavoritePage ? <FaHeart className="homeIcon "/> : <FiHeart className="homeIcon "/>}</Link> 



   <img src={require('../images/Logo.png')} className="logo" alt="Logo"></img> 


<SearchBar/>

    </nav>
    {/* <img src={require('../images/ShoppingWebsitePicture.jpg')} className="ShoppingWebsitePicture" alt="Logo"></img>  */}


    </>
 
)
 
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



export default Navbar ;
