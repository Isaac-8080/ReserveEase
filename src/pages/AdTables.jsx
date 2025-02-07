import React, { useState, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import TableStatus from "../components/dashboard/TableStatus";
import { fetchTables } from "../utils/api";

function Tables() {
  const [tables, setTables] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetchTables();
    setTables(data);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Restaurant Tables</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4">
          {tables.map((table) => (
            <TableStatus key={table.id} table={table} className="bg-blue-900 p-4 rounded-lg shadow-lg"/>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Tables;


/*import React, { useState, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import TableStatus from "../components/dashboard/TableStatus";
import { fetchTables } from "../utils/api";
function Tables() {
    const [tables, setTables] = useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetchTables()
        setTables(data)
    }
  return (
    <DashboardLayout>
      <h2 className="text-3xl font-bold mb-5">Restaurant Tables</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tables.map((table) => (
          <TableStatus key={table.id} table={table} />
        ))}
      </div>
    </DashboardLayout>
  );
}

export default Tables;
*/