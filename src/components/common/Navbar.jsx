import React from "react";
import { NavLink } from "react-router-dom";

    import { Link } from "react-router-dom";
    import {
      BiHomeAlt,
      BiLogIn,
      BiLogOut,
      BiUserPlus,
      BiBook,
      BiRestaurant,
    } from "react-icons/bi";

    function Navbar() {
      return (
        
         <div className="flex w-full px-5 md:px-10 py-3 fixed dark:bg-[#1B232B] bg-white top-0 opacity-95 z-10">
        
        <div className="flex-1">
          <NavLink to="/admin" className="text-xl font-bold cursor-pointer">ReserveEase</NavLink>
        
        </div>
      
        <div className="navbar bg-base-100">
          <div className="pt-10 flex-1">
            <Link to="/admin" className="btn btn-ghost normal-case text-xl">
              <BiRestaurant className="mr-2" /> Restaurant Admin
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <Link to="/tables" className="btn btn-ghost">
                         <BiBook className="mr-2" /> Tables
                    </Link>
                </li>
              <li>
                <Link to="/ad_reservations" className="btn btn-ghost">
                  <BiBook className="mr-2" /> Reservations
                </Link>
              </li>
             
              <li>
                <Link to="/ad_register" className="btn btn-ghost">
                  <BiUserPlus className="mr-2" /> Add
                </Link>
              </li>
              <li>
                <Link to="/" className="btn btn-ghost">
                  <BiLogOut className="mr-2" /> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </div>
      );
    }

    export default Navbar;
     /*<li>
                <Link to="/login" className="btn btn-ghost">
                  <BiLogIn className="mr-2" /> Login
                </Link>
              </li>*/