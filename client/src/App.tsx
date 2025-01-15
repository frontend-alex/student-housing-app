import AuthLayout from "./components/layouts/AuthLayout";

import { Route, Routes } from "react-router-dom";
import {
  Aboutroute,
  Contactroute,
  LoginRoute,
  Mainroute,
  RegisterRoute,
} from "./routes/(auth)";
import {
  AssingTaskRoute,
  ComplainsRoute,
  ComplaintManagerRoute,
  DashboardRoute,
  ProfileRoute,
  SettingsRoute,
  UserManagementRoute,
} from "./routes/(root)";

import Unavailable from "./routes/(error)/Unavailable";

import RootLayout from "./components/layouts/RootLayout";
import AdminLayouts from "./components/layouts/AdminLayouts";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Mainroute />} />
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/register" element={<RegisterRoute />} />
          <Route path="/about" element={<Aboutroute />} />
          <Route path="/contact" element={<Contactroute />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route path="/dashboard" element={<DashboardRoute />} />
          <Route path="/profile/:id" element={<ProfileRoute />} />
          <Route path="/complaints/:id" element={<ComplainsRoute />} />
          <Route path="/settings" element={<SettingsRoute />} />
        </Route>
        <Route path="/admin" element={<AdminLayouts />}>
          <Route path="assign-task" element={<AssingTaskRoute />} />
          <Route path="users" element={<UserManagementRoute />} />
          <Route path="complain-manager" element={<ComplaintManagerRoute />} />
        </Route>
        <Route path="*" element={<Unavailable />} />
      </Routes>
    </div>
  );
};

export default App;
