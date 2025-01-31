import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function AuthLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default AuthLayout;
