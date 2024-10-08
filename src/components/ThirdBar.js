import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import { CgProfile } from "react-icons/cg";
import { BsBag, BsBagFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import "./TwoTry.css";
import { userStatus } from "../services/api";

function Navbar() {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false); // User's active status
  const [navLinks, setNavLinks] = useState([]); // State to store the generated links

  // Fetch user status from API
  const fetchUserStatus = async () => {
    const userId = JSON.parse(sessionStorage.getItem("id"));
    if (!userId) return false; // Return false if no user ID

    try {
      const response = await userStatus(userId);
      return response.data; // Expecting the boolean value directly
    } catch (error) {
      return false; // Handle errors gracefully
    }
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
      case "/ProfilePage":
        return <CgProfile className="homeIcon" />;
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
      case "/ProfilePage":
        return <CgProfile className="homeIcon" />;
      default:
        return null;
    }
  };

  // Generate links based on user's status and location
  useEffect(() => {
    const checkUserStatusAndGenerateLinks = async () => {
      const isActiveStatus = await fetchUserStatus();
      setIsActive(isActiveStatus); // Update user's active status

      const links = [
        <Link to="/ProfilePage" className="pagesLink" key="profile">
          {location.pathname === "/ProfilePage" ? getIconForPath("/ProfilePage") : getInactiveIconForPath("/ProfilePage")}
        </Link>
      ];

      if (isActiveStatus) {
        links.push(
          <Link to="/shop" className="pagesLink" key="home">
            {location.pathname === "/" ? getIconForPath("/") : getInactiveIconForPath("/")}
          </Link>
        );
        links.push(
          <Link to="/favoriteItems" className="pagesLink" key="favoriteItems">
            {location.pathname === "/favoriteItems" ? getIconForPath("/favoriteItems") : getInactiveIconForPath("/favoriteItems")}
          </Link>
        );
        links.push(
          <Link to="/cart" className="pagesLink" key="cart">
            {location.pathname === "/cart" ? getIconForPath("/cart") : getInactiveIconForPath("/cart")}
          </Link>
        );
      }

      setNavLinks(links); // Update the state with generated links
    };

    checkUserStatusAndGenerateLinks();
  }, [location]); // Run when the location changes

  return (
    <nav className="nav">
      {/* Navigation Links from state */}
      {navLinks}

      {/* Logo */}
      <img src={require('../images/Logo.png')} className="logo" alt="Logo" />

      {/* Search Bar */}
      <SearchBar />
    </nav>
  );
}

export default Navbar;
