import React, { createContext } from "react";

export const RoleContext = createContext();

export function RoleProvider({ children }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const isAuthenticated = !!token;

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <RoleContext.Provider value={{ isAuthenticated, role, logout }}>
      {children}
    </RoleContext.Provider>
  );
}
