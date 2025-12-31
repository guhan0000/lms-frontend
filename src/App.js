import "./App.css";

// import UserDashboard from "./pages/UserDashboard";
// import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import SignUp from "./pages/SignUp";
// import AxioDemo from "./demoTests/AxioDemo";
// import Home from "./pages/Home";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <SignUp />
      </AuthProvider>
    </>
  );
}

export default App;
