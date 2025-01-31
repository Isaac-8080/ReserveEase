import { createContext, useState, useCallback, useEffect } from "react";
import PageLayout from "./layouts/PageLayout";

const ReservationsContext = createContext();

function App() {
  const [reservationList, setReservationList] = useState([]);

  // Add selected reservation to the list
  const handleAddList = useCallback((selectedList) => {
    setReservationList((prevList) => [...prevList, selectedList]);
  }, []);

  // Debugging: Log reservationList when it updates
  // useEffect(() => {
  //   console.log("Updated Reservation List:", reservationList);
  // }, [reservationList]);

  const handleDelete = (id) => {
    setReservationList(
      reservationList.filter((table) => table.tableId !== id)
    );
  };
  

  return (
    <ReservationsContext.Provider value={{ handleAddList, reservationList, handleDelete }}>
      <PageLayout />
    </ReservationsContext.Provider>
  );
}

export { ReservationsContext };
export default App;
