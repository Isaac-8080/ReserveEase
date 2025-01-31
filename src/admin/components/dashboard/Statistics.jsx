import React from "react";
import {
  BiUser,
  BiListCheck,
  BiBook,
  BiDollarCircle,
} from "react-icons/bi";
import Card from "./Card";

function Statistics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
      <Card
        title="Reservations Today"
        content="25"
        icon={<BiBook />}
      />
      <Card
        title="Customers Served"
        content="150"
        icon={<BiUser />}
      />
      <Card
        title="Active Tables"
        content="10"
        icon={<BiListCheck />}
      />
       <Card
        title="Earnings"
        content="$2500"
        icon={<BiDollarCircle />}
      />
    </div>
  );
}

export default Statistics;
