import React, { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import { Routers } from "../../static/Router";
import Navbartop from "../navbartop/Navbartop";
import Navbar__middle from "../navbarmiddle/navbar__middle";
import Navbar__bottom from "../navbarbottom/navbar__bottom";
import Navigate from "../navigate/Navigate";

function Navbar() {
  return (
    <div className="navbar">
      <Navbartop />
      <Navbar__middle />
      <Navbar__bottom />
      <Navigate />
    </div>
  );
}

export default memo(Navbar);
