import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import { CgProfile } from "react-icons/cg";
import { BsBag, BsBagFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import "./TwoTry.css";
import { userStatus } from "../services/api";

function Navbar() {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false); // User's active status

  // Fetch user status from API
  const fetchUserStatus = async () => {
    const userId = JSON.parse(sessionStorage.getItem("id"));
    if (!userId) return false; // Return false if no user ID

    try {
      const response = await userStatus(userId);
      console.log("User status response:", response); // Debugging line
      return response.data; // Expecting the boolean value directly
    } catch (error) {
      console.error("Error fetching user status:", error);
      return false; // Handle errors gracefully
    }
  };

  // Check user status on component mount and when the session ID changes
  useEffect(() => {
    const checkUserStatus = async () => {
      const isActiveStatus = await fetchUserStatus(); // Get the boolean value directly
      console.log("Fetched user status:", isActiveStatus); // Additional debug line
      setIsActive(isActiveStatus); // Update state with the boolean value
    };

    checkUserStatus();
  }, []); // Only run on mount, could add dependencies if necessary

  // Logout handler
  const handleLogout = () => {
    sessionStorage.removeItem("id"); // Clear user ID from session storage
    setIsActive(false); // Update state to reflect that user is logged out
  };

  // Navigation icon for active paths
  const getIconForPath = (path) => {
    switch (path) {
      case "/":
        return <AiFillHome className="homeIcon" />;
      case "/cart":
        return <BsBagFill className="homeIcon" />;
      case "/favoriteItems":
        return <FaHeart className="homeIcon" />;
      default:
        return null;
    }
  };

  // Navigation icon for inactive paths
  const getInactiveIconForPath = (path) => {
    switch (path) {
      case "/":
        return <AiOutlineHome className="homeIcon" />;
      case "/cart":
        return <BsBag className="homeIcon" />;
      case "/favoriteItems":
        return <FiHeart className="homeIcon" />;
      default:
        return null;
    }
  };

  return (
    <nav className="nav">


      {/* Profile Section */}
      {isActive ? (
        <div id="ThisDivDosenotAppers">
          <Link to="/profile" className="userSecurityStatus" id="profile">
            <CgProfile />
          </Link>
          <Link to="/logout" className="userSecurityStatus" id="logout" onClick={handleLogout}>
            <CiLogout />
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login" className="userSecurityStatus" id="login">
            Log In
          </Link>
          /
          <Link to="/signUp" className="userSecurityStatus" id="signup">
            Sign Up
          </Link>
        </div>
      )}

      {/* Navigation Links */}
      <Link to="/" className="pagesLink">
        {location.pathname === "/" ? getIconForPath("/") : getInactiveIconForPath("/") }
      </Link>
      <Link to="/cart" className="pagesLink">
        {location.pathname === "/cart" ? getIconForPath("/cart") : getInactiveIconForPath("/cart") }
      </Link>
      <Link to="/favoriteItems" className="pagesLink">
        {location.pathname === "/favoriteItems" ? getIconForPath("/favoriteItems") : getInactiveIconForPath("/favoriteItems") }
      </Link>

      {/* Logo */}
      <img src={require('../images/Logo.png')} className="logo" alt="Logo" />

      <Link to="/ProfilePage" className="userSecurityStatus" id="profile">
            <CgProfile />
          </Link>
      {/* Search Bar */}
      <SearchBar />
    </nav>
  );
}

export default Navbar;
