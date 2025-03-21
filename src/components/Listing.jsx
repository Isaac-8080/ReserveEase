import { useState, useContext } from "react";
import Card from "./Card";
import Button from "./Button";
import { GrGroup } from "react-icons/gr";
import { BsClock } from "react-icons/bs";
import { v4 as uuid } from "uuid";
import { MdNumbers } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";
import tableOne from "../assets/tableOne.jpg";
import tableTwo from "../assets/tableTwo.jpg";
import tableThree from "../assets/tableThree.jpg";
import tableFour from "../assets/tableFour.jpg";
import tableFive from "../assets/tableFive.jpg";
import tableSix from "../assets/tableSix.jpg";
import { ReservationsContext } from "../contexts/ReservationContext";

// Initial Listing Data
const initialListing = [
  { tableNumber: 1, guests: 7, status: "available", price: 130, image: tableOne, tableId: uuid() },
  { tableNumber: 2, guests: 5, status: "available", price: 100, image: tableTwo, tableId: uuid() },
  { tableNumber: 3, guests: 10, status: "available", price: 200, image: tableThree, tableId: uuid() },
  { tableNumber: 4, guests: 10, status: "available", price: 200, image: tableFour, tableId: uuid() },
  { tableNumber: 5, guests: 2, status: "available", price: 30, image: tableFive, tableId: uuid() },
  { tableNumber: 6, guests: 3, status: "available", price: 75, image: tableSix, tableId: uuid() },
  // { tableNumber: 6, guests: 3, status: "available", price: 75, image: tableSix, tableId: uuid() },
];

const Listing = () => {
  const [listing, setListing] = useState(initialListing);
  const { handleAddList } = useContext(ReservationsContext)

  // Handle Reservation
  const handleReservation = (e, tableImage, tableNumber, tableGuests, tablePrice, tableId) => {
    e.preventDefault();

    // Store reservation details
    const reservation = { tableImage, tableNumber, tableGuests, tablePrice, tableId };

    handleAddList(reservation);

    // Update table status
    setListing(() =>
      listing.map((table) =>
        table.tableId === tableId ? { ...table, status: "Added to List" } : table
      )
    );
  };

  return (
    <>
      {listing.map((list) => {
        const isAvailable = list.status === "available";

        return (
          <form
            key={list.tableId}
            onSubmit={(e) =>
              handleReservation(e, list.image, list.tableNumber, list.guests, list.price, list.tableId)
            }
          >
            <Card cardStyle="bg-white pb-3">
              <img src={list.image} className="w-full h-45 rounded-t-md object-cover" alt="Table" />
              <div className="px-3 pt-5 space-y-3">
                {/* Table Number */}
                <div className="flex items-center gap-2 opacity-80">
                  <MdNumbers className="text-[20px] font-semibold text-gray-900" />
                  <p className="text-[16px] font-semibold text-gray-900 uppercase opacity-90">Table {list.tableNumber}</p>
                </div>

                {/* Guest Capacity */}
                <div className="flex items-center gap-2 opacity-80 mt-5">
                  <GrGroup className="text-[20px] font-semibold text-gray-900" />
                  <p className="text-[16px] font-semibold text-gray-900 uppercase">{list.guests} guests maximum</p>
                </div>

                {/* Status and Price */}
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 opacity-80">
                    <BsClock className="text-[20px] font-semibold text-gray-900" />
                    <p className={`text-[16px] font-semibold text-gray-900 uppercase ${isAvailable ? "text-indigo-700" : "line-through text-red-500"}`}>
                      {list.status}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 opacity-80">
                    <RiPriceTag3Line className="text-[20px] font-semibold text-gray-900" />
                    <p className="text-[16px] font-semibold uppercase text-indigo-700">{`$${list.price}`}</p>
                  </div>
                </div>

                {/* Reserve Button */}
                <div>
                  <Button type="submit" text={isAvailable ? "Reserve table" : "Added to list"} />
                </div>
              </div>
            </Card>
          </form>
        );
      })}
    </>
  );
};

export default Listing;
