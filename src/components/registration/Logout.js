
import React, { useRef, useState, useEffect, Fragment, useContext } from "react";
import classes from "./Logout.css";
import { authenticate, updateUserActive,userLogOut} from "../../services/api";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

function Logout() {
  // const { setAuth } = useContext(AuthContext);

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  // var loggedInUserName = JSON.parse(localStorage.getItem("username"))
  var loggedInUserId = JSON.parse(sessionStorage.getItem("id"))

  const userSecondBody = {
    uesrId: loggedInUserId,
    active: 0
  };

  userLogOut(userSecondBody);



  // setAuth(response.data.jwt)

  // };
  return (
    <>
       <Link to="/" > <h2 class="homeS"> Go To Main Page </h2></Link> 
      {/* {localStorage.setItem('isActive', JSON.stringify(false))} */}
      {sessionStorage.setItem('isActive', JSON.stringify(false))}

    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Logout;