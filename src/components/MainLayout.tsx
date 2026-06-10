import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";

const MainLayout: React.FC = () => {
  return (
    <>
      {/* Permanent Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <Outlet />

      {/* Permanent Bottom Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
