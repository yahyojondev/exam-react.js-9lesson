import React from "react";
import { NavLink } from "react-router-dom";
import { LuHome } from "react-icons/lu";
import { CiLogin } from "react-icons/ci";

function Navigate() {
  return (
    <div className="navigate">
      <div className="container">
        <ul className="navigate__wrapper">
          <li>
            <LuHome />
            <NavLink to={"/"}> Home/</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}> Login</NavLink>
            <CiLogin />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigate;
