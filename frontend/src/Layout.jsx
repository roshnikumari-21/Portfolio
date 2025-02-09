
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import React from "react";

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
