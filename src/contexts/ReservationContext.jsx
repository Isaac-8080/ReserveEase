import { createContext, useState, useCallback } from "react";

const ReservationsContext = createContext();

function ReservationProvider({children}) {
  const [reservationList, setReservationList] = useState([]);

  // Add selected reservation to the list
  const handleAddList = useCallback((selectedList) => {
    setReservationList((prevList) => [...prevList, selectedList]);
  }, []);

  const handleDelete = (id) => {
    setReservationList(
      reservationList.filter((table) => table.tableId !== id)
    );
  };

  return (
    <ReservationsContext.Provider value={{ handleAddList, reservationList, handleDelete }}>
      {children}
    </ReservationsContext.Provider>
  );
}

export { ReservationsContext };
export default ReservationProvider;
