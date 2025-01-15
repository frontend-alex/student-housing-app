
import { Outlet  } from 'react-router-dom'
import { useTheme } from '@/contexts/ThemeContext';

import useLocalStorage from '@/hooks/useGetLocalStorage';
import Unauthorized from '@/routes/(error)/Unauthorized';
import Gridbackround from '../ui/backgrounds/grid-backround';

const RootLayout = () => {

  const { theme } = useTheme();
  const token = useLocalStorage('authToken');

  if (!token) return <Unauthorized />;

  return (
    <div>
        <Gridbackround className={`${theme === 'light'  ? "opacity-30" : "opacity-5"} absolute top-0 h-[50vh]  z-[-1]`}/>
        <Outlet/>
    </div>
  )
}

export default RootLayout;