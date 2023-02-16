import React from "react";
import './App.css';
import Navbar from './Navbar'
import './App.css'
import Home from "./pages/Home";
import OrderList from "./pages/OrderList";
import FavoriteItems from "./pages/FavoriteItems";
import {Route , Routes} from "react-router-dom";


function App() {
   
  
  
        return (
      <>

      <Navbar/>

  
      
<div className="container">
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/orderList" element={<OrderList/>}/>
       <Route path="/favoriteItems" element={<FavoriteItems/>}/>


    </Routes>
</div>


      </>



        )
}
    






export default App;

