import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/AdHome";
import Login from "../pages/AdLogin";
import Register from "../pages/AdRegister";
import NotFound from "../pages/AdNotFound";
import Reservations from "../pages/AdReservations";
import Tables from "../pages/AdTables";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/tables" element={<Tables />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
