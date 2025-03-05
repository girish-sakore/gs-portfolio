import React from "react";
import { Outlet } from "react-router-dom";
import './Layout.css'
import Navigation from "./Navigation";

const Layout: React.FC = () => {
  return (
    <>
      <div className="layout">
        <div className="background my-0"></div>
        <div className="main-container min-h-screen my-10 py-12 px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
        <Navigation />
      </div>
    </>
  );
};

export default Layout;