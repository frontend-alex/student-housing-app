import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

type FetchData<T> = {
  data: T | undefined;
  isLoading: boolean;
  error: string | null;
};

/**
 * A custom hook to fetch data from an API endpoint.
 * 
 * @param url - The API URL to fetch data from. If `null`, the request is skipped.
 * @param initialState - The initial state of the fetched data.
 * @returns An object containing:
 *   - `data`: The fetched data or `undefined` if not yet loaded.
 *   - `isLoading`: A boolean indicating the loading state.
 *   - `error`: An error message if the request fails, or `null` if successful.
 */

const useFetch = <T, >(url: string | null, initialState: T | undefined): FetchData<T> => {
  const [data, setData] = useState<T | undefined>(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!url) {
        return; 
      }

      setIsLoading(true);
      setError(null); 

      try {
        const response = await axios.get<T>(url);
        setData(response.data);
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError.message || 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;