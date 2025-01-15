import useAuthData from '@/hooks/useAuthData';
import { Outlet, useNavigate } from 'react-router-dom'

const AuthLayout = () => {

  const navigate = useNavigate();

  const { user } = useAuthData();

  console.log(user)

  if(user) navigate('/dashboard')

  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default AuthLayout