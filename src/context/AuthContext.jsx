import React, { createContext } from "react";
import api from "../services/api";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const register = async (member) => {
    await api.post("/api/users/register", member);
  };
  return (
    <AuthContext.Provider value={{ register }}>{children}</AuthContext.Provider>
  );
};
