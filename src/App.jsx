import { AuthProvider } from "./contexts/AuthContext"; // Import AuthProvider
import PageLayout from "./layouts/PageLayout";
import ReservationProvider from "./contexts/ReservationContext";

const App = () => {
  return (
    <AuthProvider>
      <ReservationProvider>
        <PageLayout />
      </ReservationProvider>
    </AuthProvider>
  );
};

export default App;

