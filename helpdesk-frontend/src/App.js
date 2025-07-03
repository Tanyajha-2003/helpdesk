import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SidebarLayout from "./components/SidebarLayout";
import Dashboard from "./components/Dashboard";
import NewTicket from "./components/NewTicket";
import MyTickets from "./components/MyTickets";
import ProfileFeedback from "./components/ProfileFeedback";
import ProfileSettings from "./components/ProfileSettings";
import HelpdeskHeader from "./components/HelpDeskHeader";
import Login from "./components/Login";
import SignUp from "./components/SignUp"; 
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Protected Layout */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <>
                <HelpdeskHeader />
                <SidebarLayout>
                  <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/new-ticket" element={<NewTicket />} />
                    <Route path="/my-tickets" element={<MyTickets />} />
                    <Route path="/profile-feedback" element={<ProfileFeedback />} />
                    <Route path="/profile-settings" element={<ProfileSettings />} />
                  </Routes>
                </SidebarLayout>
              </>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
