import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Hero from "../components/common/Hero";
import Statistics from "../components/dashboard/Statistics";
import image4 from "../assets/tableFour.jpg";

function AdHome() {
  return (
    <DashboardLayout>
      <Hero
        title="Restaurant Admin Dashboard"
        subtitle="Manage your bookings and tables with ease."
        className="mb-4"
        image={image4}
      />
      <h1 className="text-4xl font-bold text-center my-8">Reservations</h1>
      <Statistics />
    

      <section className="my-8">
        <h2 className="text-3xl font-bold text-center my-4">Upcoming Events</h2>
        {
          <h3  className="text-1.5xl text-center color-red" >TABLES FOR RESERVATION ARE LIMITED ON WEEKENDS! </h3>
        }
      </section>

      

      

    </DashboardLayout>
  );
}

export default AdHome;

/*import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Hero from "../components/common/Hero";
import Statistics from "../components/dashboard/Statistics";
import image4 from "../assets/tableFour.jpg";

function AdHome() {
  return (
    <DashboardLayout>
      <Hero
        title="Restaurant Admin Dashboard"
        subtitle="Manage your bookings and tables with ease."
        className="mb-4"
        image={image4}
      />
      <h1 className="text-4xl font-bold text-center my-8">Current Reservations</h1>
      <Statistics />
   
    </DashboardLayout>
  );
}

export default AdHome;
*/