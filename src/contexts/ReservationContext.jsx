import { createContext, useState, useCallback, useEffect } from "react";

const ReservationsContext = createContext();

function ReservationProvider({ children }) {
  const [reservationList, setReservationList] = useState(() => {
    const storedList = localStorage.getItem("reservationList");
    return storedList ? JSON.parse(storedList) : [];
  });

  useEffect(() => {
    localStorage.setItem("reservationList", JSON.stringify(reservationList));
  }, [reservationList]);

  // Add selected reservation to the list
  const handleAddList = useCallback((selectedList) => {
    setReservationList((prevList) => [...prevList, selectedList]);
  }, []);

  // Delete a single reservation by ID
  const handleDelete = useCallback((id) => {
    setReservationList((prevList) => prevList.filter((table) => table.tableId !== id));
  }, []);

  // Delete all reservations
  const handleClearList = useCallback(() => {
    setReservationList([]);
    localStorage.removeItem("reservationList");
  }, []);

  return (
    <ReservationsContext.Provider value={{ handleAddList, reservationList, handleDelete, handleClearList }}>
      {children}
    </ReservationsContext.Provider>
  );
}

export { ReservationsContext };
export default ReservationProvider;
