import "./App.css";

import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="ADMIN">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute role="MEMBER">
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-book"
            element={
              <ProtectedRoute role="ADMIN">
                <AddBook />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-book/:id"
            element={
              <ProtectedRoute role="ADMIN">
                <AddBook />
              </ProtectedRoute>
            }
          />
          {/* REMOVED DUPLICATE ROUTE */}
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
