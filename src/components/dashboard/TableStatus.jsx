import React from "react";
import { BiChair } from "react-icons/bi";

function TableStatus({ table }) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl font-bold">Table {table.number}</h2>
        <div className="text-6xl my-3"><BiChair /></div>
          <div className={`badge badge-outline badge-md my-3 ${table.isReserved ? "badge-error" : "badge-success"}`}>
          {table.isReserved ? "Reserved" : "Available"}
          </div>
      </div>
    </div>
  );
}

export default TableStatus;
