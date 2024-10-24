import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../pages/layout/layout";
import Home from "../pages/home";
import About from "../pages/about/index";
const Route = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="home" /> },
        {
          path: "home",
          element: <Home />,
        },
        { path: "about", element: <About /> },
      ],
    },
  ]);
  return element;
};

export default Route;
