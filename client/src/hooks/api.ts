import axios, { AxiosResponse } from "axios";
import { TLoginData, TRegisterData } from "@/types/Types";
import { URL } from "@/constants/Data";

const BASE_URL = `http://localhost:5166/api`; // Example: `http://localhost:5000/api`

/**
 * Sends a POST request to register a new user.
 * @param data - The registration data to be sent in the POST request.
 * @param setLoading - A function to set the loading state.
 * @returns A Promise that resolves to the Axios response object on success.
 * @throws Logs any errors that occur during the POST request.
 */
export const registerUser = async (
  data: TRegisterData,
  setLoading: (loading: boolean) => void
): Promise<AxiosResponse<any> | undefined> => {
  const { username, email, password } = data;

  try {
    setLoading(true);

    const response: AxiosResponse<any> = await axios.post(
      `${BASE_URL}/auth/register`, {
        username,
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ); 

    return response;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  } finally {
    setLoading(false);
  }
};

/**
 * Sends a POST request to log in the user with provided email and password.
 * @param email - The user's email address.
 * @param password - The user's password.
 * @param setLoading - A function to set the loading state.
 * @returns A Promise that resolves to the Axios response object on success.
 * @throws Logs any errors that occur during the POST request.
 */
export const loginUser = async (
  data: TLoginData,
  setLoading: (loading: boolean) => void
): Promise<any | undefined> => {
  try {
    setLoading(true);
    const { email, password } = data;

    const response: AxiosResponse<any> = await axios.post(
      `${BASE_URL}/auth/login`,  {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  } finally {
    setLoading(false);
  }
};

/**
 * @returns A logout function that removes the auth token from local storage.
 */
export const logoutUser = async () => {
  localStorage.removeItem('authToken');
  window.location.reload();
  window.location.href="/";
};