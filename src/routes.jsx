import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import ExploreBooks from "./pages/ExploreBooks/ExploreBooks";
import ReserveBooks from "./pages/ReserveBook/ReserveBooks";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import ManageNotificationes from "./pages/Notifications/ManageNotifications";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/explore" element={<ExploreBooks />} />
      <Route path="/reserve" element={<ReserveBooks />} />
      <Route path="/usuarios" element={<ManageUsers />} />
      <Route path="/notificaciones" element={<ManageNotificationes />} />
    </Routes>
  );
}

export default AppRoutes;
