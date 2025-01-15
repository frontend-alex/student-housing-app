import AuthLayout from "./components/layouts/AuthLayout";

import { Route, Routes } from "react-router-dom"
import { Aboutroute, Contactroute, LoginRoute, Mainroute, RegisterRoute } from "./routes/(auth)"
import RootLayout from "./components/layouts/RootLayout";
import { DashboardRoute } from "./routes/(root)";
import Unavailable from "./routes/(error)/Unavailable";

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
        </Route>
        <Route path="*" element={<Unavailable/>} />
      </Routes>
    </div>
  );
}

export default App