import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h4>header</h4>
      <Outlet />
    </>
  );
};

export default Layout;
