import { useContext } from "react";
import Card from "../components/Card";
import { ReservationsContext } from "../contexts/ReservationContext";
import { GrGroup } from "react-icons/gr";
import { MdNumbers } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";
import Modal from "../components/Modal";

const UserDashboard = () => {
  const { reservationList, handleDelete } = useContext(ReservationsContext);

  return (
    <div className="bg-white w-full p-5 md:px-20 mt-[60px] dark:bg-[#111827]">
      <div className="mb-5">
        <div className="font-bold text-2xl mb-5">User Dashboard</div>
        <div className="font-bold text-xl ">My Reservations</div>
      </div>

      {reservationList.length === 0 ? (
        <p className="text-gray-500">No reservations yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reservationList.map((reservedTable) => (
            <Card key={reservedTable.tableId} cardStyle="p-3 bg-white dark:bg-gray-800">
              <div className="flex gap-3">
                <img src={reservedTable.tableImage} className="rounded-md w-[70px]" alt="Table" />

                <div className="w-full">
                  {/* Table Number */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
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
      )}
    </div>
  );
};

export default UserDashboard;
