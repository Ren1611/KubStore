import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import About from "../pages/Auth/About";
import Contact from "../pages/Auth/Contact";
import Favorites from "../pages/Favorites/Favorites";
import Cart from "../pages/Cart/Cart";

const Mainroutes = () => {
  const routes = [
    {
      link: "/",
      element: <Home />,
    },
    {
      link: "/contact",
      element: <Contact />,
    },
    {
      link: "/login",
      element: <Login />,
    },
    {
      link: "/about",
      element: <About />,
    },
    {
      link: "/register",
      element: <Register />,
    },
    {
      link: "/favorites",
      element: <Favorites />,
    },
    {
      link: "/card",
      element: <Cart />,
    },
  ];
  return (
    <Routes>
      {routes.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}
    </Routes>
  );
};

export default Mainroutes;
