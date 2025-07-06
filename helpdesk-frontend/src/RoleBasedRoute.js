import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

    export default function RoleBasedRoute({ allowedRoles, children }) {
        const { isAuthenticated, user } = useContext(AuthContext);
        const role = user?.role;
      
        console.log("RoleBasedRoute: isAuthenticated =", isAuthenticated, "role =", role);
      
        if (!isAuthenticated) {
          return <Navigate to="/login" />;
        }
      
        if (!allowedRoles.includes(role)) {
          return <Navigate to="/unauthorized" />;
        }
      
        return children;
      }