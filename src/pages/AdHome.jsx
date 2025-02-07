import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Hero from "../components/common/Hero";
import Statistics from "../components/dashboard/Statistics";
import image4 from "../assets/tableFour.jpg";

function Home() {
  return (
    <DashboardLayout>
      <Hero
        title="Restaurant Admin Dashboard"
        subtitle="Manage your bookings and tables with ease."
        className="mb-4"
        image={image4}
      />
      <Statistics />
    </DashboardLayout>
  );
}

export default Home;
