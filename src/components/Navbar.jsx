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
      <div className="flex w-full px-5 md:px-10 py-3 fixed dark:bg-gray-800 bg-white opacity-90">
        
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
        <Card cardStyle="fixed right-5 top-15  bg-white dark:bg-gray-800 border border-gray-300 w-50">
          <ul>
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
      )}
    </>
  )
}

export default Navbar