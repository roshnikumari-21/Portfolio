import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";

import React from "react";

function Layout() {
  return (
    <div>
      <div>
        <Navbar />
        <main>
          <Outlet /> 
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
