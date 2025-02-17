import React, { useContext, useMemo } from "react";
import { BiUser, BiListCheck, BiBook, BiDollarCircle } from "react-icons/bi";
import Card from "./Cards";
import { ReservationsContext } from "../../contexts/ReservationContext";

function Statistics() {
  const { reservationList = [] } = useContext(ReservationsContext);

  const statistics = useMemo(() => {
    const reservationsToday = reservationList.length;
    const customersServed = reservationList.reduce(
      (total, res) => total + (res.tableGuests || 0),
      0
    );
    const activeTables = reservationsToday;
    const earnings = reservationList.reduce(
      (total, res) => total + (res.tablePrice || 0),
      0
    );

    return { reservationsToday, customersServed, activeTables, earnings };
  }, [reservationList]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
      <Card
        title="Reservations Today"
        content={statistics.reservationsToday}
        icon={<BiBook size={50} />}
      />
      <Card
        title="Customers Served"
        content={statistics.customersServed}
        icon={<BiUser size={50} />}
      />
      <Card
        title="Active Tables"
        content={statistics.activeTables}
        icon={<BiListCheck size={50} />}
      />
      <Card
        title="Earnings"
        content={`$${statistics.earnings.toFixed(2)}`} // Formats as currency
        icon={<BiDollarCircle size={50} />}
      />
    </div>
  );
}

export default Statistics;
