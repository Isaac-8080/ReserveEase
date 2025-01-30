import { useState } from "react"
import Card from "./Card";
import { FaRegUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [isOpened, setIsOpened] = useState(false);

  const handleIsOpened = () => {
    setIsOpened(true);
  }
  
  const handleIsClosed = () => {
    setIsOpened(false);
  }

  return (
    <>
      <div className="flex w-full px-5 md:px-10 py-3 fixed dark:bg-[#1B232B] bg-white top-0 opacity-95 z-10">
        
        <div className="flex-1">
          <NavLink to="/" className="text-xl font-bold cursor-pointer">ReserveEase</NavLink>
        </div>

        {!isOpened ? (
          <div onClick={handleIsOpened} className="cursor-pointer flex flex-row gap-2 border border-gray-300 rounded-full py-2 px-3 items-center">
            <FaRegUser className="font-bold text-xl" />
            <RiMenu3Line className="font-bold text-xl" />
          </div>
        ) : (
          <div onClick={handleIsClosed} className="cursor-pointer flex flex-row gap-2 border border-gray-300 rounded-full py-2 px-3 items-center">
            <FaRegUser className="font-bold text-xl" />
            <IoMdClose className="font-bold text-xl" />
          </div>
        )}

      </div>

      {isOpened && (
        <div className="flex">
          <div onClick={handleIsClosed} className="h-screen w-full bg-black fixed z-10 opacity-10 transition-all ease-in-out duration-1000"></div>
          <Card cardStyle="fixed right-5 md:right-10 top-15 bg-white dark:bg-gray-800 shadow-sm w-50 z-10">
            <ul>
              <NavLink to="/">
                <li onClick={handleIsClosed} className="py-1.5 px-5 hover:bg-[#F2F2F2] cursor-pointer opacity-90 hover:opacity-100">
                  Home
                </li>
              </NavLink>
              <NavLink to="/reservations">
                <li onClick={handleIsClosed} className="py-1.5 px-5 hover:bg-[#F2F2F2] cursor-pointer opacity-90 hover:opacity-100">
                  My Resevations
                </li>
              </NavLink>
              <hr className="border-[lightgray]" />
              <NavLink to="/login">
                <li onClick={handleIsClosed} className="py-1.5 px-5 hover:bg-[#F2F2F2] cursor-pointer opacity-90 hover:opacity-100">
                  Log In
                </li>
              </NavLink>
              <NavLink to="/register">
                <li onClick={handleIsClosed} className="py-1.5 px-5 hover:bg-[#F2F2F2] cursor-pointer opacity-90 hover:opacity-100">
                  Resgister
                </li>
              </NavLink>
              <hr className="border-[lightgray]" />
              <li onClick={handleIsClosed} className="py-1.5 px-5 hover:bg-[#F2F2F2] cursor-pointer opacity-90 hover:opacity-100">Help</li>
            </ul>
          </Card>
        </div>
      )}
    </>
  )
}

export default Navbar