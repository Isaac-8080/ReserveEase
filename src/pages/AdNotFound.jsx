import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import Hero from "../components/common/Hero";

function NotFound() {
  return (
    <AuthLayout>
      <Hero
        title="404 - Not Found"
        subtitle="The page you are looking for does not exist."
      />
    </AuthLayout>
  );
}

export default NotFound;
