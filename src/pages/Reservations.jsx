import { useContext } from "react";
import Card from "../components/Card";
import { ReservationsContext } from "../App";
import { GrGroup } from "react-icons/gr";
import { MdNumbers } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Modal from "../components/Modal";

const Reservations = ({handleIsReservationClosed}) => {
  const { reservationList, handleDelete } = useContext(ReservationsContext);

  return (
    <>
      <div className="bg-white w-full h-screen overflow-auto mt-0 p-5 md:w-[400px] fixed md:right-0 dark:bg-gray-800 shadow-sm z-20">

        <div className="flex flex-row mb-3 items-center justify-between">
          <div className="font-bold text-xl">My Reservations</div>
          <IoMdClose onClick={handleIsReservationClosed} className="text-xl -translate-y-5" />
        </div>

        {reservationList.length === 0 ? (
          <p className="text-gray-500"> No reservations yet.</p>
        ) : (
          reservationList.map((reservedTable) => (
            <Card key={reservedTable.tableId} cardStyle="p-3 mb-3 bg-white dark:bg-[#1B232B]">
              <div className="flex gap-3">
                <div className="flex items-center">
                  <img src={reservedTable.tableImage} className="rounded-md w-70"  />
                </div>

                <div className="w-[100%]">
                  {/* Table Number */}
                  <div className="flex flex-row items-center w-[100%] justify-between">
                    <div className="flex items-center gap-2">
                      <MdNumbers className="text-[20px] text-blue-600" />
                      <p className="text-[16px] font-semibold">Table {reservedTable.tableNumber}</p>
                    </div>
                    <div className="">
                      <Modal onClickAction={() => handleDelete(reservedTable.tableId)} />
                    </div>
                  </div>

                  {/* Guest Capacity */}
                  <div className="flex items-center gap-2">
                    <GrGroup className="text-[20px] text-blue-600" />
                    <p className="text-[16px] font-semibold">{reservedTable.tableGuests} guests</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <RiPriceTag3Line className="text-[20px] text-blue-600" />
                    <p className="text-[16px] font-semibold text-blue-600">${reservedTable.tablePrice}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </>
  );
};

export default Reservations;
