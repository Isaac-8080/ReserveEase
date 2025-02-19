import { useContext } from "react";
import Card from "../components/Card";
import { ReservationsContext } from "../contexts/ReservationContext";
import { GrGroup } from "react-icons/gr";
import { MdNumbers } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";
import Modal from "../components/Modal";
import { NavLink } from "react-router-dom";
// import Listing from "../components/Listing";
// import Button from "../components/Button";

const UserDashboard = () => {
  const { reservationList, handleDelete } = useContext(ReservationsContext);

  return (
    <div className="bg-white w-full p-5 mt-[60px] dark:bg-[#111827]">
      <div className="mb-5 mx-5 md:mx-20 flex items-center justify-between">
        <div className="font-bold text-2xl ">My Reservations</div>
        {/* {reservationList.length > 0 ? <Button type="button" text="Book table" btnClassList=""></Button> : ""} */}
        
      </div>


      {reservationList.length === 0 ? (
        <div className="flex flex-col w-fit px-5 md:px-20">
          <p className="text-gray-500">No reservations yet.</p>
          <NavLink to="/" className="border rounded bg-black dark:bg-white dark:text-black text-center text-white p-2 mt-5">Reserve table</NavLink>
        </div>
      ) : (
        <div className="flex justify-between">

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 md:px-20 pb-15 font-bold text-4xl">
            <Listing />
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-fit md:mx-20">
            {reservationList.map((reservedTable) => (
              <Card key={reservedTable.tableId} cardStyle="p-3 bg-white dark:bg-gray-800">
                <div className="flex gap-5 md:gap-10">
                  <img src={reservedTable.tableImage} className="rounded-md w-[150px]" alt="Table" />

                  <div className="w-full">
                    {/* Table Number */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 pr-10">
                        <MdNumbers className="text-[20px] text-blue-600" />
                        <p className="text-[16px] font-semibold">Table {reservedTable.tableNumber}</p>
                      </div>
                      <Modal onClickAction={() => handleDelete(reservedTable.tableId)} />
                    </div>

                    {/* Guest Capacity */}
                    <div className="flex items-center gap-2 mt-1">
                      <GrGroup className="text-[20px] text-blue-600" />
                      <p className="text-[16px] font-semibold">{reservedTable.tableGuests} guests</p>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mt-1">
                      <RiPriceTag3Line className="text-[20px] text-blue-600" />
                      <p className="text-[16px] font-semibold text-blue-600">${reservedTable.tablePrice}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
