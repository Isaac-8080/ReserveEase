import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/Footer";

function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar className="w-1/4 h-screen bg-gray-800 text-white" />
      <main className="flex-1 p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
// 