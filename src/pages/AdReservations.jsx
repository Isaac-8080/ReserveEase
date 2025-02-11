import React, { useState, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import ReservationCard from "../components/dashboard/ReservationCard";
import Button from "../components/common/Button";
import Modal from "../components/ui/Modal";
import Form from "../components/form/Form";
import Input from "../components/form/Input";
  import Select from "../components/form/Select";
import { fetchReservations, createReservation } from "../utils/api";

function Reservations() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reservations, setReservations] = useState([]);
    const [newReservation, setNewReservation] = useState({
        customerName:"",
        time: new Date().toISOString(),
        tableNumber: 1
    });
     useEffect(() => {
       fetchData()
      }, []);

     const fetchData = async () => {
        const data = await fetchReservations();
        setReservations(data)
     }


     const handleInputChange = (e) => {
      setNewReservation({ ...newReservation, [e.target.id]: e.target.value });
    };

    const handleCreateReservation = async (e) => {
        e.preventDefault();
        await createReservation(newReservation);
        fetchData()
        setIsModalOpen(false)
    }
    const tableOptions = [
      { label: "1", value: 1 },
      { label: "2", value: 2 },
      { label: "3", value: 3 },
      { label: "4", value: 4 },
    ];
  return (
    <DashboardLayout>
      <div className="pt-25 flex justify-between items-center mb-5">
        <h2 className="text-3xl font-bold">Reservations</h2>
        <Button onClick={() => setIsModalOpen(true)} className="btn-primary">
          Create Reservation
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reservations.map((reservation) => (
          <ReservationCard key={reservation.id} reservation={reservation} />
        ))}
      </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <Form  onSubmit={handleCreateReservation}>
                <Input label="Customer Name" placeholder="Customer Name" id="customerName" value={newReservation.customerName} onChange={handleInputChange} />
                <Input type="datetime-local" label="Reservation Time" id="time" value={newReservation.time} onChange={handleInputChange} />
                <Select id="tableNumber" label="Table Number"  options={tableOptions} value={newReservation.tableNumber} onChange={handleInputChange} />
            <Button type="submit" className="btn-primary mt-5">Create</Button>
            </Form>
        </Modal>
    </DashboardLayout>
  );
}

export default Reservations;
