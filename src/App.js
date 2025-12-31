import "./App.css";

// import UserDashboard from "./pages/UserDashboard";
// import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
// import AxioDemo from "./demoTests/AxioDemo";
// import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* <AdminDashboard /> */}
      <Navbar />
      <SignUp/>
     
    </>
  );
}

export default App;
