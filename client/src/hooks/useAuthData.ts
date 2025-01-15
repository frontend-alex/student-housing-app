import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '@/types/Types';

const useAuthData = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('authToken');  

      if (!token) {
        setError("No token found");
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:5166/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,  
          },
        });
        setUser(response.data);  
      } catch (err) {
        setError('Failed to fetch user profile');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  return { user, isLoading, error };
};

export default useAuthData;
