import React from "react";
import Navbar from "../components/common/Navbar";


function AuthLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4">
        {children}
      </main>
    
    </div>
  );
}

export default AuthLayout;
