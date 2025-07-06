// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import SidebarLayout from "./components/SidebarLayout";
// import Dashboard from "./components/Dashboard";
// import NewTicket from "./components/NewTicket";
// import MyTickets from "./components/MyTickets";
// import ProfileFeedback from "./components/ProfileFeedback";
// import ProfileSettings from "./components/ProfileSettings";
// import HelpdeskHeader from "./components/HelpDeskHeader";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp"; 
// import PrivateRoute from "./components/PrivateRoute";
// import ForgotPassword from "./components/ForgotPassword";
// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         {/* Protected Layout */}
//         <Route
//           path="/*"
//           element={
//             <PrivateRoute>
//               <>
//                 <HelpdeskHeader />
//                 <SidebarLayout>
//                   <Routes>
//                     <Route path="/" element={<Navigate to="/dashboard" />} />
//                     <Route path="/dashboard" element={<Dashboard />} />
//                     <Route path="/new-ticket" element={<NewTicket />} />
//                     <Route path="/my-tickets" element={<MyTickets />} />
//                     <Route path="/profile-feedback" element={<ProfileFeedback />} />
//                     <Route path="/profile-settings" element={<ProfileSettings />} />
//                   </Routes>
//                 </SidebarLayout>
//               </>
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SidebarLayout from "./components/SidebarLayout";
import Dashboard from "./components/User/Dashboard";
import NewTicket from "./components/User/NewTicket";
import MyTickets from "./components/User/MyTickets";
import Profile from "./components/User/Profile";
import ProfileFeedback from "./components/User/ProfileFeedback";
import ProfileSettings from "./components/User/ProfileSettings";
import HelpdeskHeader from "./components/HelpDeskHeader";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import RoleBasedRoute from "./RoleBasedRoute";
import Unauthorized from "./Unauthorized";
import SupportDashboard from "./components/Technical/SupportDashboard";
import SupportMyTicket from "./components/Technical/SupportMyTicket";
import SupportPerformance from "./components/Technical/SupportPerformance";
import SupportProfile from "./components/Technical/SupportProfile";
import SupportProfileSettings from "./components/Technical/SupportProfileSettings";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminSettings from "./components/Admin/AdminProfileSettings";
import AdminUserLogs from "./components/Admin/AdminUserLogs";
import AdminProfile from "./components/Admin/AdminProfile";
import AdminDatabase from "./components/Admin/AdminDatabase";
import AdminProfileSettings from "./components/Admin/AdminProfileSettings";
import { AuthProvider } from "./AuthContext";
import OperationDashboard from "./components/operation/OperationDashboard";
import OperationTicketApproval from "./components/operation/OperationTicketApproval";
import OperationMyTickets from "./components/operation/OperationMyTickets";
import OperationPerformance from "./components/operation/OperationPerformance";
import OperationProfile from "./components/operation/OperationProfile";
import OperationProfileSetting from "./components/operation/OperationProfileSetting";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protected Routes with Layout */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <>
                <HelpdeskHeader />
                <SidebarLayout />
              </>
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" />} />

          {/* User */}
          <Route
            path="dashboard"
            element={
              <RoleBasedRoute allowedRoles={["user"]}>
                <Dashboard />
              </RoleBasedRoute>
            }
          />
          <Route
            path="new-ticket"
            element={
              <RoleBasedRoute allowedRoles={["user"]}>
                <NewTicket />
              </RoleBasedRoute>
            }
          />
          <Route
            path="my-tickets"
            element={
              <RoleBasedRoute allowedRoles={["user"]}>
                <MyTickets />
              </RoleBasedRoute>
            }
          />
          <Route
            path="profile-feedback"
            element={
              <RoleBasedRoute allowedRoles={["user"]}>
                <ProfileFeedback />
              </RoleBasedRoute>
            }
          />
          <Route
            path="profile-setting"
            element={
              <RoleBasedRoute allowedRoles={["user"]}>
                <ProfileSettings />
              </RoleBasedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <RoleBasedRoute allowedRoles={["user"]}>
                <Profile />
              </RoleBasedRoute>
            }
          />

          {/* Operation  */}
          <Route
            path="operation-dashboard"
            element={
              <RoleBasedRoute allowedRoles={["operation"]}>
                <OperationDashboard />
              </RoleBasedRoute>
            }
          />
          <Route
            path="operation-approval"
            element={
              <RoleBasedRoute allowedRoles={["operation"]}>
                <OperationTicketApproval />
              </RoleBasedRoute>
            }
          />
          <Route
            path="operation-my-tickets"
            element={
              <RoleBasedRoute allowedRoles={["operation"]}>
                <OperationMyTickets />
              </RoleBasedRoute>
            }
          />
          <Route
            path="operation-performance"
            element={
              <RoleBasedRoute allowedRoles={["operation"]}>
                <OperationPerformance />
              </RoleBasedRoute>
            }
          />
          <Route
            path="operation-profile"
            element={
              <RoleBasedRoute allowedRoles={["operation"]}>
                <OperationProfile />
              </RoleBasedRoute>
            }
          />
          <Route
            path="operation-profile-setting"
            element={
              <RoleBasedRoute allowedRoles={["operation"]}>
                <OperationProfileSetting />
              </RoleBasedRoute>
            }
          />
{/* Support  */}
<Route
            path="support-dashboard"
            element={
              <RoleBasedRoute allowedRoles={["support"]}>
                <SupportDashboard />
              </RoleBasedRoute>
            }
          />
          <Route
            path="support-my-tickets"
            element={
              <RoleBasedRoute allowedRoles={["support"]}>
                <SupportMyTicket />
              </RoleBasedRoute>
            }
          />
          <Route
            path="support-performance"
            element={
              <RoleBasedRoute allowedRoles={["support"]}>
                <SupportPerformance />
              </RoleBasedRoute>
            }
          />
          <Route
            path="support-profile"
            element={
              <RoleBasedRoute allowedRoles={["support"]}>
                <SupportProfile />
              </RoleBasedRoute>
            }
          />
          <Route
            path="support-profile-setting"
            element={
              <RoleBasedRoute allowedRoles={["support"]}>
                <SupportProfileSettings />
              </RoleBasedRoute>
            }
          />
          {/* Admin */}
          <Route
            path="admin-dashboard"
            element={
              <RoleBasedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </RoleBasedRoute>
            }
          />
          <Route
            path="admin-profile-settings"
            element={
              <RoleBasedRoute allowedRoles={["admin"]}>
                <AdminProfileSettings />
              </RoleBasedRoute>
            }
          />
          <Route
            path="admin-settings"
            element={
              <RoleBasedRoute allowedRoles={["admin"]}>
                <AdminSettings />
              </RoleBasedRoute>
            }
          />
          <Route
            path="admin-database"
            element={
              <RoleBasedRoute allowedRoles={["admin"]}>
                <AdminDatabase />
              </RoleBasedRoute>
            }
          />
          <Route
            path="admin-user-logs"
            element={
              <RoleBasedRoute allowedRoles={["admin"]}>
                <AdminUserLogs />
              </RoleBasedRoute>
            }
          />
          <Route
            path="admin-profile"
            element={
              <RoleBasedRoute allowedRoles={["admin"]}>
                <AdminProfile />
              </RoleBasedRoute>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
