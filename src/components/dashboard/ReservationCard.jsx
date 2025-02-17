
import React from "react";
import PropTypes from "prop-types";
import { BiTimeFive, BiUser, BiTable } from "react-icons/bi";

function ReservationCard({ reservation }) {
  if (!reservation) {
    return null; // Add a check to return null if reservation is undefined
  }

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          <BiUser className="mr-2" /> {reservation.customerName}
        </h2>
        <div className="flex items-center my-2">
          <BiTimeFive className="mr-2" />{" "}
          {new Date(reservation.time).toLocaleString()}
        </div>
        <div className="flex items-center">
          <BiTable className="mr-2" /> Table: {reservation.tableNumber}
        </div>
        <div className="card-actions justify-end mt-2">
          <button className="btn btn-sm btn-primary">Edit</button>
          <button className="btn btn-sm btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
}

ReservationCard.propTypes = {
  reservation: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    tableNumber: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReservationCard;
/*import React from "react";
import { BiTimeFive, BiUser, BiTable } from "react-icons/bi";


function ReservationCard({ reservation }) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          <BiUser className="mr-2" /> {reservation.customerName}
        </h2>
        <div className="flex items-center my-2">
          <BiTimeFive className="mr-2" />{" "}
          {new Date(reservation.time).toLocaleString()}
        </div>
        <div className="flex items-center">
          <BiTable className="mr-2" /> Table: {reservation.tableNumber}
        </div>
        <div className="card-actions justify-end mt-2">
            <button className="btn btn-sm btn-primary">Edit</button>
             <button className="btn btn-sm btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ReservationCard;
*/
