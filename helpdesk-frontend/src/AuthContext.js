import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (auth === "true" && savedUser) {
      setIsAuthenticated(true);
      setUser(savedUser);
    }
  }, []);

  const login = (username, password) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (
      savedUser &&
      username === savedUser.username &&
      password === savedUser.password
    ) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      return true;
    }
    return false;
  };

  const signup = (username, password) => {
    localStorage.setItem("user", JSON.stringify({ username, password }));
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

