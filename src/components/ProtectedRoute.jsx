import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ role, children }) => {
  const { user, loading } = useContext(AuthContext);

  console.log("=== ProtectedRoute Debug ===");
  console.log("Loading:", loading);
  console.log("User:", user);
  console.log("Required Role:", role);
  console.log("User Role:", user?.role);

  if (loading) {
    console.log("Still loading...");
    return <div>Loading...</div>;
  }
  
  if (!user) {
    console.log("No user found - Redirecting to /login");
    return <Navigate to="/login" />;
  }
  
  if (role && user.role !== role) {
    console.log(`Role mismatch: ${user.role} !== ${role} - Redirecting to /`);
    return <Navigate to="/" />;
  }

  console.log("Access granted!");
  return children;
};

export default ProtectedRoute;