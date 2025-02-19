import React from "react";
import { NavLink } from "react-router-dom";

    import { Link } from "react-router-dom";
    import {
      BiLogOut,
      BiUserPlus,
      BiBook,
    } from "react-icons/bi";
import BrandLogo from "../BrandLogo";

    function Navbar() {
      return (
        
        <div className="flex items-center w-full fixed h-[60px] dark:bg-[#1B232B] bg-white top-0 z-10">
        
        {/* <div className="flex-1">
          <NavLink to="/admin" className="text-xl font-bold cursor-pointer">ReserveEase</NavLink>
        </div> */}
      
          <div className="navbar bg-base-100 px-10 md:px-20">
            <div className="flex-1">
              <Link to="/admin" className="flex gap-3 items-center normal-case text-xl">
                <BrandLogo /> Admin
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