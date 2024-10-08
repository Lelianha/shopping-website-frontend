
import React from "react";
import './App.css';
import {Route , Routes} from "react-router-dom";

import Navbar from './components/NavBar';
import Footer from './components/Footer';
import SearchedItems from "./pages/SearchedItems";

import Login from "./components/registration/Login";
import Logout from "./components/registration/Logout";
import Register from "./components/registration/Register";
import ProfilePage from "./components/registration/ProfilePage";

import Home from "./pages/Home";
import Items from './pages/Items';
import Shop from './pages/Shop';

import FavoriteItems from "./pages/FavoriteItems";
import Cart from './pages/Cart';
import OrdersList from "./pages/OrdersList";
import OrderDetails from "./pages/OrderDetails";



function App() {


  
        return (
      <>
      <Navbar/>
   
<div className="container">
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/items" element={<Items/>}/>
       <Route path="/shop" element={<Shop/>}/>

       <Route path="/searchedItems" element={<SearchedItems/>}/>

       <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signUp" element={<Register />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />

       <Route path="/favoriteItems" element={<FavoriteItems/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/ordersList" element={<OrdersList/>}/>
       <Route path="/order-details/:id" element={<OrderDetails />} />

        
    </Routes>
</div>
<Footer />
      </>
    
        )
}
    
export default App;
