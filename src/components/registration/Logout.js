
import React from "react";
import "./Logout.css";
import {userLogOut} from "../../services/api";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Logout() {
  var loggedInUserId = JSON.parse(sessionStorage.getItem("id"))

  const userSecondBody = {
    uesrId: loggedInUserId,
    active: 0
  };

  userLogOut(userSecondBody);

  return (
    <>
       <Link to="/" > <h2 class="homeS"> Go To Main Page </h2></Link> 
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