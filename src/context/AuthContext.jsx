import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .get("/api/users/me")
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        })

        .catch(() => {
          localStorage.removeItem("token");
          setUser(null);
          setLoading(false);
        });
    } else {
      setLoading(false);
      // navigate("/login");
    }
  }, []);
  const register = async (member) => {
    await api.post("/api/users/register", member);
  };
  const login = async (email, password) => {
    const token = (await api.post("/api/users/login", { email, password })).data
      .token;
    localStorage.setItem("token", token);
    const meResponse = await api.get("/api/users/me");
    setUser(meResponse.data);
    // console.log(meResponse.data);
  };
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ register, login, user, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
