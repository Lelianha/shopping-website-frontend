// // import React from "react";
// // import './App.css';
// // import Navbar from './Navbar'
// // import './App.css'
// // import Home from "./pages/Home";
// // import OrderList from "./pages/OrderList";
// // import FavoriteItems from "./pages/FavoriteItems";
// // import {Route , Routes} from "react-router-dom";


// // function App() {
   
  
  
// //         return (
// //       <>

// //       <Navbar/>

  
      
// // <div className="container">
// //     <Routes>
// //        <Route path="/" element={<Home/>}/>
// //        <Route path="/orderList" element={<OrderList/>}/>
// //        <Route path="/favoriteItems" element={<FavoriteItems/>}/>


// //     </Routes>
// // </div>


// //       </>



// //         )
// // }
    






// // export default App;

import React from "react";
import './App.css';
import Navbar from './components/NavBar'
import Home from "./pages/Home";
import OrderList from "./pages/OrderList";
import FavoriteItems from "./pages/FavoriteItems";
import TempFavoriteItems from "./pages/TempFavoriteItems";

import SecondSearchBar from "./components/SecondSearchBar";
import {Route , Routes} from "react-router-dom";
import Try from "./components/Try"
import ThirdSearchBar from "./components/ThirdSearchBar";
import TowTry from "./components/TwoTry";
import Footer from './components/Footer';
import Shop from './pages/Shop'
import Cart from './pages/Cart'

import Register from "./components/registration/Register";
import Login from "./components/registration/Login";
import Logout from "./components/registration/Logout";
import Profile from "./components/registration/Profile";
import ProfilePage from "./components/registration/ProfilePage";


import TempOrder from "./components/TempOrder";


import ThirdBar from "./components/ThirdBar";


// import DeleteAccount from "./components/DeleteAccount";
function App() {


  
        return (
      <>
      <ThirdBar/>
   
<div className="container">
    <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/orderList" element={<OrderList/>}/>
     {/*  <Route path="/favoriteItems" element={<FavoriteItems/>}/>*/}
     <Route path="/TempFavoriteItems" element={<TempFavoriteItems/>}/>
       <Route path="/shop" element={<Shop/>}/>
       <Route path="/cart" element={<Cart/>}/>

       <Route path="/tempOrder" element={<TempOrder />} />

       <Route path="/login" element={<Login />} />
       <Route path="/signUp" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        
     {/*  <Route path="/deleteAccount" element={<DeleteAccount />} /> */}

     
    </Routes>
</div>
<Footer />
      </>
    
        )
}
    
export default App;
