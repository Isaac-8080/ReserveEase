import { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import Card from "./Card";
import { ReservationsContext } from "../contexts/ReservationContext";
import BrandLogo from "./BrandLogo";

const Navbar = () => {
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { reservationList } = useContext(ReservationsContext);

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    };

    checkAuthStatus();

    const storageListener = () => checkAuthStatus();

    window.addEventListener("storage", storageListener);

    return () => window.removeEventListener("storage", storageListener);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
    handleIsNavMenuClosed();
  };

  const handleIsNavMenuOpened = () => setIsNavMenuOpened(true);
  const handleIsNavMenuClosed = () => setIsNavMenuOpened(false);

  return (
    <>
      <div className="flex w-full items-center px-5 md:px-10 py-2 fixed dark:bg-[#111827] bg-white top-0 opacity-95 z-10">
        <div className="flex-1">
          <NavLink to="/" className="flex gap-2">
            <BrandLogo />
            <p className="text-xl font-bold">ReserveEase</p>
          </NavLink>
        </div>

        <div onClick={handleIsNavMenuOpened} className="cursor-pointer flex flex-row gap-2 border border-gray-300 rounded-full py-2 px-3 items-center">
          <FaRegUser className="font-bold text-xl" />
          <div className={`${reservationList.length > 0 ? "bg-blue-400 text-white" : ""} text-md border border-gray-300 px-2 rounded-full`}>
            {reservationList.length}
          </div>
          {isNavMenuOpened ? (
            <IoMdClose className="font-bold text-xl" />
          ) : (
            <RiMenu3Line className="font-bold text-xl" />
          )}
        </div>
      </div>

      {isNavMenuOpened && (
        <div className="flex p-0 m-0">
          <div onClick={handleIsNavMenuClosed} className="h-screen w-full bg-black fixed top-0 z-10 opacity-60 transition-all ease-in-out duration-1000"></div>
          <Card cardStyle="fixed right-5 md:right-10 top-15 bg-white dark:bg-gray-800 shadow-sm w-50 z-10">
            <ul>
              <NavLink to="/">
                <li onClick={handleIsNavMenuClosed} className="py-1.5 px-5 hover:bg-[#F2F2F2] cursor-pointer opacity-90 hover:opacity-100">
                  Home
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li onClick={handleIsNavMenuClosed} className="flex justify-between py-1.5 px-5 hover:bg-[#F2F2F2] cursor-pointer opacity-90 hover:opacity-100">
                  My Reservations
                  <div className={`${reservationList.length > 0 ? "bg-blue-400 text-white" : ""} text-md border border-gray-300 px-2 rounded-full`}>
                    {reservationList.length}
                  </div>
                </li>
              </NavLink>
              <hr className="border-[lightgray]" />

              {isAuthenticated ? (
                <li onClick={handleLogout} className="py-1.5 px-5 hover:bg-red-500 cursor-pointer opacity-90 hover:opacity-100 text-red-600">
                  Logout
                </li>
              ) : (
                <>
                  <NavLink to="/login">
                    <li onClick={handleIsNavMenuClosed} className="py-1.5 px-5 hover:bg-[#F2F2F2] cursor-pointer opacity-90 hover:opacity-100">
                      User Log In
                    </li>
                  </NavLink>
                  <NavLink to="/admin/login">
                    <li onClick={handleIsNavMenuClosed} className="py-1.5 px-5 hover:bg-[#F2F2F2] cursor-pointer opacity-90 hover:opacity-100">
                      Admin Log In
                    </li>
                  </NavLink>
                  <NavLink to="/register">
                    <li onClick={handleIsNavMenuClosed} className="py-1.5 px-5 hover:bg-[#F2F2F2] cursor-pointer opacity-90 hover:opacity-100">
                      Register
                    </li>
                  </NavLink>
                </>
              )}

              <hr className="border-[lightgray]" />
              <li onClick={handleIsNavMenuClosed} className="py-1.5 px-5 hover:bg-[#F2F2F2] cursor-pointer opacity-90 hover:opacity-100">
                Help
              </li>
            </ul>
          </Card>
        </div>
      )}
    </>
  );
};

export default Navbar;
