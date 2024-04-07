import React, { memo } from "react";
import { Outlet, Navigate } from "react-router-dom";

function Auth() {
  let islogin = localStorage.getItem("token");
  return islogin ? <Outlet /> : <Navigate replace to={"/login"} />;
}

export default memo(Auth);
