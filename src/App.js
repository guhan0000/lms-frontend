import "./App.css";

// import UserDashboard from "./pages/UserDashboard";
// import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
// import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import AxioDemo from "./demoTests/AxioDemo";
// import Home from "./pages/Home";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Login/>
        <Home />
      </AuthProvider>
    </>
  );
}

export default App;
