// import React from "react";
// import "./Try.css";
// import {Link , useMatch , useResolvedPath} from "react-router-dom";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// // import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
// // import {BsBag} from "react-icons/bs"
// // import {FaHeart} from "react-icons/fa"
// // import {FiHeart} from "react-icons/fi"
// // import {AiOutlineHome} from "react-icons/ai"
// // import {CgProfile} from "react-icons/cg"
// import  { useState, useEffect } from 'react';
// import axios from 'axios';
// // import { Card, Input } from 'semantic-ui-react'
// import SearchBar from "./SearchBar";
// // import  Card from 'react-bootstrap/Card'
// // import  Card from 'react-card-component'
// // import ThirdSearchBar from "./components/ThirdSearchBar";

// // const show = () => {

      
// //         var x = document.getElementById('item');
// //         if (x.style.display === "none") {
// //             x.style.display = "block";
// //           } else {
// //             x.style.display = "none";
// // }
// // }




//  function Navbar() {

//   // const [toggle, setToggle] = useState(false)

// // const [APIData, setAPIData] = useState([])
// // const [filteredResults, setFilteredResults] = useState([]);
// // var [searchInput, setSearchInput] = useState('');



//   // useEffect(() => {
//   //     axios.get(`https://jsonplaceholder.typicode.com/users`)
//   //         .then((response) => {
//   //             setAPIData(response.data);
//   //         })
//   // }, [])

//   // const searchItems = (searchValue) => {
//   //     setSearchInput(searchValue)
//   //     if (searchInput !== '') {
//   //         const filteredData = APIData.filter((item) => {
//   //             return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
//   //         })
//   //         setFilteredResults(filteredData)

//   //     }
//   //     else{
//   //         setFilteredResults(APIData)
//   //       // setFilteredResults([])

  
//   //     }
//   // }





// return (
//     <>

// {/* <SearchBar/> */}

//     <nav className="nav">
//     {/* <SearchBar/> */}

//     {/* <Link to="/" className="home" > <AiOutlineHome className="homeIcon" size="30" /> </Link>
//     <Link to="/favoriteItems" class="favoriteList" >   <FiHeart className="favoriteIcon" size="30"/> </Link>
//     <Link to="/orderList"class="orderList" ><BsBag className="bagIcon" size="30"/></Link>  */}

//     {/* <SearchBar/> */}

//     {/* <SearchBar/> */}


//            <img src={require('../images/Logo.png')} className="logo" alt="Logo"></img> 


//       {/* <SearchBar/> */}
//      {/* <ThirdSearchBar/> */}
  
//           {/* <form  > 
 
//           <input  className="searchbar" type="text"   id="myInput"    onClick={() => setToggle(!toggle)}   placeholder="Search" name="search"  onChange={(e) => searchItems(e.target.value)} ></input>  

//              <button type="submit" className="faIcon" >    <FontAwesomeIcon icon={faMagnifyingGlass} /> </button>  

            
             
          
//          <Card.Group id="item" itemsPerRow={3} style={{ marginTop: 20 }} >
//                 {searchInput.length > 1 ?(
//                     filteredResults.map((item) => {
//                         return (
//                             <Card>
//                                 <Card.Content>
//                                     <Card.Header >{item.name}</Card.Header>
//                                     <Card.Description>
//                                         {item.email}
//                                     </Card.Description>
//                                 </Card.Content>
//                             </Card>
//                         )
//                     })
//                 ) : (
//                     APIData.map((item) => {
//                         return (
//                             <Card>
//                                 <Card.Content>
//                                     <Card.Header>{item.name}</Card.Header>
//                                     <Card.Description>
//                                         {item.email}
//                                     </Card.Description>
//                                 </Card.Content>
//                             </Card>
//                         )
//                     })
//                 ) }
//             </Card.Group>
              

//        </form>    */}


// {/* <SearchBar/> */}




//       <div class="topnav" id="myTopnav">

//      {/* <a  class="active">Login</a>
//      <a class="signup ">Sign Up</a>
//      <a class="logout">Log Out</a> */}
// {/* 
//     <Link to="/" className="home" > <AiOutlineHome className="homeIcon" size="30" /> </Link>
//     <Link to="/favoriteItems" class="favoriteList" >   <FiHeart className="favoriteIcon" size="30"/> </Link>
//     <Link to="/orderList"class="orderList" ><BsBag className="bagIcon" size="30"/></Link>  */}

//     <div class="dropdown">
//     {/* <button class="dropbtn"> */}
//       {/* <i>&#9776;</i> */}
//       {/* <i class="fa fa-caret-down"></i> */}
//       {/* <CgProfile class="dropbtn" size="30"/> */}
//     {/* </button>  */}
//     <div class="dropdown-content">
// {/*   
//       <Link to="/" className="home"> Home </Link>
    
//       <Link to="/orderList"class="orderlist">Order List</Link>
//       <Link to="/favoriteItems" class="favorite">Favorite Items</Link>
//        */}
//       {/* <SearchBar/> */}


//     </div>
//   </div>
// </div>
// {/* <SearchBar/> */}
// <SearchBar/>

//     </nav>
//     {/* <SearchBar/> */}

//     </>
 
// )
 
//       }
 
 


// function CustomLink({to , children , ...props}){
//   const resolvedPath=useResolvedPath(to)
//   const isActive=useMatch({path:resolvedPath.pathname , end:true});

//   return(
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}> 
//       {children}
//       </Link>
//     </li>
//   )
// }



// export default Navbar ;

// // import React from "react";
// // import classes  from "./Try.css";
// // import {Link , useMatch , useResolvedPath} from "react-router-dom";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// // import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
// // import SearchBar from "./SearchBar";
// // import {BsBag} from "react-icons/bs"
// // import {FaHeart} from "react-icons/fa"
// // import {FiHeart} from "react-icons/fi"
// // import {AiOutlineHome} from "react-icons/ai"
// // // import { Nav, Navbar } from "react-bootstrap"
// // import {
// //   Collapse,
// //   Navbar,
// //   NavbarToggler,
// //   NavbarBrand,
// //   Nav,
// //   NavItem,
// //   NavLink,
// // } from 'reactstrap';

// // // import {FaHeart} from "react-icons/fa"
// // import {CgProfile} from "react-icons/cg"
// // import {FcList} from "react-icons/fc"
// // import    "./Style.css";

// // const refresh=() =>
// // window.location.reload(true);

// //  function Try() {


// // return (
// //     <>

// //   {/* <nav className="nav">

// //     <img   src={require('../images/Logo.png')}  className="logo" alt="Logo"></img> 

// //     <SearchBar/> 

        

// //     <a  class="login">Login</a>
// //     <a class="signup ">Sign Up</a>
// //     <a class="logout">Log Out</a>
    
// //     <Link to="/" className="home" > <AiOutlineHome className="homeIcon" size="30" onClick={refresh}/> </Link>
// //     <Link to="/favoriteItems" class="favoriteList" >   <FiHeart className="favoriteIcon" size="30"onClick={refresh}/> </Link>
// //     <Link to="/orderList"class="orderList" ><BsBag className="bagIcon" size="30"onClick={refresh}/></Link>


// //     </nav>  */}
// //         {/* <Navbar
// //       expand="md"
// //       bg="light"
// //       variant="light"
// //       className="px-4 py-8"
// //       fixed="bottom"
// //     >
// //       <Navbar.Brand>    <img   src={require('../images/Logo.png')}  className="logo" alt="Logo"></img> 
// // </Navbar.Brand>
  
// //           <SearchBar />
        
// //           <Nav.Link className="ha" to='/about' activeStyle>
// //             <AiOutlineHome  />
// //           </Nav.Link>
// //           <Nav.Link><FiHeart/></Nav.Link>
// //           <Link to="/" className="home" > <AiOutlineHome className="homeIcon" size="30" /> </Link>
// //     <Link to="/favoriteItems" class="favoriteList" >   <FiHeart className="favoriteIcon" size="30"/> </Link>
// //     <Link to="/orderList"class="orderList" ><BsBag className="bagIcon" size="30"/></Link>

// //           <Nav.Link className="pl-4"> <BsBag/> </Nav.Link>
// //         <Navbar.Toggle  aria-controls="responsive-navbar-na" /> 
// //       <Navbar.Collapse id="responsive-navbar-nav">
// //         <Nav className="mr-auto align-items-end px-3">
// //           <Nav.Link >Login</Nav.Link>
// //           <Nav.Link>SignUp</Nav.Link>
// //         </Nav>
// //         <Nav className="ml-auto align-items-end px-3">
// //           <Nav.Link className="pl-4">Logout</Nav.Link>
// //         </Nav>
// //       </Navbar.Collapse>
          
// //     </Navbar> */}

// // <Nav
// //       expand="md"
// //       bg="light"
// //       variant="light"
// //       className="px-4 py-8"
// //       fixed="bottom"
// //     >
// //       <NavbarBrand>    <img   src={require('../images/Logo.png')}  className="logo" alt="Logo"></img> 
// // </NavbarBrand>
  
// //           <SearchBar />
        
// //           <NavLink className="ha" to='/about' activeStyle>
// //             <AiOutlineHome to="/" />
// //           </NavLink>
// //           <NavLink><FiHeart to="/favoriteItems"/></NavLink>
// //           {/* <Link to="/" className="home" > <AiOutlineHome className="homeIcon" size="30" /> </Link>
// //     <Link to="/favoriteItems" class="favoriteList" >   <FiHeart className="favoriteIcon" size="30"/> </Link>
// //     <Link to="/orderList"class="orderList" ><BsBag className="bagIcon" size="30"/></Link> */}

// //           <NavLink className="pl-4" > <BsBag/> </NavLink>
// //         {/* <NavbarToggler  aria-controls="responsive-navbar-na" /> 
// //       <Collapse id="responsive-navbar-nav">
// //         <Nav className="mr-auto align-items-end px-3">
// //           <NavLink >Login</NavLink>
// //           <NavLink>SignUp</NavLink>
// //         </Nav>
// //         <Nav className="ml-auto align-items-end px-3">
// //           <NavLink className="pl-4">Logout</NavLink>
// //         </Nav>
// //       </Collapse> */}
// //        <div class="dropdown">
// //    <button class="dropbtn"><i>&#9776;</i>
// //       <i class="fa fa-caret-down"></i>
// //     </button> 
// //     <div class="dropdown-content">
  
// //       <Link to="/" className="home"> Home </Link>
    
// //       <Link to="/orderList"class="orderlist">Order List</Link>
// //       <Link to="/favoriteItems" class="favorite">Favorite Items</Link>
// //       <Link to="/Example" class="favorite">Example</Link>



// //     </div>
// //   </div>
          
// //     </Nav>

// //     </>
 
// // )
 
// //       }
 
 


// // function CustomLink({to , children , ...props}){
// //   const resolvedPath=useResolvedPath(to)
// //   const isActive=useMatch({path:resolvedPath.pathname , end:true});

// //   return(
// //     <li className={isActive ? "active" : ""}>
// //       <Link to={to} {...props}> 
// //       {children}
// //       </Link>
// //     </li>
// //   )
// // }



// // export default Try ;