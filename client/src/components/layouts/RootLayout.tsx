
import { Outlet  } from 'react-router-dom'
import { useTheme } from '@/contexts/ThemeContext';

import useLocalStorage from '@/hooks/useGetLocalStorage';
import Unauthorized from '@/routes/(error)/Unauthorized';
import DashboardLayout from './DashboardLayout';

const RootLayout = () => {

  const { theme } = useTheme();
  const token = useLocalStorage('authToken');

  if (!token) return <Unauthorized />;

  return (
    <DashboardLayout>
        <Outlet/>
    </DashboardLayout>
  )
}

export default RootLayout;