import React from "react";
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
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-xl">
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
                <Link to="/reservations" className="btn btn-ghost">
                  <BiBook className="mr-2" /> Reservations
                </Link>
              </li>
              <li>
                <Link to="/login" className="btn btn-ghost">
                  <BiLogIn className="mr-2" /> Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="btn btn-ghost">
                  <BiUserPlus className="mr-2" /> Register
                </Link>
              </li>
              <li>
                <button className="btn btn-ghost">
                  <BiLogOut className="mr-2" /> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      );
    }

    export default Navbar;