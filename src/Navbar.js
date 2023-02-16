import React from "react";
import classes  from "./Navbar.css";
import {Link , useMatch , useResolvedPath} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Input } from 'semantic-ui-react'
// import  Card from 'react-bootstrap/Card'
// import  Card from 'react-card-component'



 function Navbar() {

  const [toggle, setToggle] = useState(false)



  const [APIData, setAPIData] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then((response) => {
              setAPIData(response.data);
          })
  }, [])

  const searchItems = (searchValue) => {
      setSearchInput(searchValue)
      if (searchInput !== '') {
          const filteredData = APIData.filter((item) => {
              return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
          })
          setFilteredResults(filteredData)
      }
      else{
          setFilteredResults(APIData)
      }
  }





return (
    <>


    <nav className="nav">



           <img   src={require('./images/finallogo.jpg')}  className="logo" alt="Logo-ABS"></img> 




          <form  > 
 
          <input  className="searchbar" type="text"   id="myInput"    onClick={() => setToggle(!toggle)}   placeholder="Search" name="search"  onChange={(e) => searchItems(e.target.value)} ></input>  
        
             <button type="submit" className="faIcon" >    <FontAwesomeIcon icon={faMagnifyingGlass} /> </button>  

            
             
          
         <Card.Group id="item" itemsPerRow={3} style={{ marginTop: 20 }}>
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Description>
                                        {item.email}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Description>
                                        {item.email}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                )}
            </Card.Group>
              

       </form>   






      <div class="topnav" id="myTopnav">

     <a  class="active">Login</a>
     <a class="signup ">Sign Up</a>
     <a class="logout">Log Out</a>

    <div class="dropdown">
    <button class="dropbtn"><i>&#9776;</i>
      <i class="fa fa-caret-down"></i>
    </button> 
    <div class="dropdown-content">
  
      <Link to="/" className="home"> Home </Link>
    
      <Link to="/orderList"class="orderlist">Order List</Link>
      <Link to="/favoriteItems" class="favorite">Favorite Items</Link>
      


    </div>
  </div>
  
</div>

    </nav>

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
