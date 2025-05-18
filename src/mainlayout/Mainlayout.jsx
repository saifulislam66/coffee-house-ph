import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";

function mainlayout() {
  return (
    <div>
      <Header></Header>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default mainlayout;
