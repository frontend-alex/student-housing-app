import { useIsAdmin } from "@/hooks/useAdmin";
import { Unauthorized } from "@/routes/(error)";
import { Outlet } from "react-router-dom";

import DashboardLayout from "./DashboardLayout";

const AdminLayouts = () => {
  const isAdmin = useIsAdmin();

  if (!isAdmin) return <Unauthorized />;

  return (
    <DashboardLayout>
        <Outlet />
    </DashboardLayout>
  );
};

export default AdminLayouts;
