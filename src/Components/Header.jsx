import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Pages/Coffee-Auth-Context/ContextProvider";
import Hero from "./Hero";

function Header() {
  const data = use(AuthContext);
  console.log(data);
  return (
    <>
      <div className="flex items-center justify-between px-5 py-2 bg-orange-900">
        <div>
          <h1 className="text-2xl font-bold text-white">Coffee House</h1>
        </div>
        <nav className=" flex items-center gap-5 text-white">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/coffee">Add Coffee</NavLink>
          <NavLink to="/users">All Users</NavLink>
          <NavLink to="/Login">Login</NavLink>
        </nav>
      </div>
      <Hero></Hero>
    </>
  );
}

export default Header;
