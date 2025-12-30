import "./App.css";

import UserDashboard from "./pages/UserDashboard";
// import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <AdminDashboard /> */}
      <Navbar />
      <UserDashboard />
    </>
  );
}

export default App;
