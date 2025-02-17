    // Mock Data (Replace with actual API calls)
    const reservations = [
        {
          id: 1,
          customerName: "Alice Smith",
          time: "2024-11-28T19:00:00.000Z",
          tableNumber: 1,
        },
        {
          id: 2,
          customerName: "Bob Jones",
           time: "2024-11-28T20:30:00.000Z",
          tableNumber: 3,
        },
        {
            id: 3,
            customerName: "Charlie Davis",
             time: "2024-11-28T18:30:00.000Z",
            tableNumber: 2,
          },
    ];
    const tables = [
    {id:1, number: 1, isReserved: false},
    {id:2, number: 2, isReserved: true},
    {id:3, number: 3, isReserved: false},
    {id:4, number: 4, isReserved: false},
    {id:5, number: 5, isReserved: false},
    {id:6, number: 6, isReserved: false},

    ];
    const fetchReservations = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(reservations)
            }, 500)
        })
    };
    const createReservation = async (reservation) => {
         return new Promise((resolve) => {
            setTimeout(() => {
                const newId = reservations.length +1
                const newReservation = {id:newId, ...reservation}
                reservations.push(newReservation)
                resolve(reservations)
            }, 500)
        })
    };
    const fetchTables = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
               resolve(tables)
            }, 500)
        })

    };
    
    export { fetchReservations, createReservation, fetchTables };
