import axios, { AxiosError, AxiosResponse } from "axios";
import {
  TLoginData,
  TRegisterData,
  TAnnouncement,
  TEvent,
  TComplaint,
} from "@/types/Types";
import { toast } from "react-toastify";

export const BASE_URL = `http://localhost:5166/api`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Handles errors and returns a standardized error object.
 * @param error - The Axios error.
 * @returns A standardized error message.
 */
const handleError = (error: AxiosError) => {
  if (error.response) {
    // Server responded with a status code outside of the range 2xx
    const errorMessage = (error.response.data as { message: string }).message;
    return errorMessage || error.response.statusText;
  } else if (error.request) {
    // The request was made but no response was received
    return "No response from server.";
  } else {
    // Something happened while setting up the request
    return "An error occurred while setting up the request.";
  }
};

/**
 * Sends a POST request to register a new user.
 * @param data - The registration data to be sent in the POST request.
 * @param setLoading - A function to set the loading state.
 * @returns A Promise that resolves to the data returned from the API, or throws an error.
 */
export const registerUser = async (
  data: TRegisterData,
  setLoading: (loading: boolean) => void
): Promise<any> => {
  try {
    setLoading(true);

    const response: AxiosResponse<any> = await axiosInstance.post(
      "/auth/register",
      data
    );
    if (response?.status === 200) {
      if (window.location.pathname === "/admin/users") {
        window.location.reload();
      } else {
        window.location.href = "/login";
      }
    }
    return response.data;
  } catch (error: any) {
    toast.error(handleError(error));
  } finally {
    setLoading(false);
  }
};

/**
 * Sends a POST request to log in the user with provided email and password.
 * @param data - The login data containing the user's email and password.
 * @param setLoading - A function to set the loading state.
 * @returns A Promise that resolves to the login response data, or throws an error.
 */
export const loginUser = async (
  data: TLoginData,
  setLoading: (loading: boolean) => void
): Promise<any> => {
  try {
    setLoading(true);

    const response: AxiosResponse<any> = await axiosInstance.post(
      "/auth/login",
      data
    );

    if (response.data.token) {
      localStorage.setItem("authToken", response.data.token);
      window.location.href = "/dashboard";
    }
    return response.data;
  } catch (error: any) {
    toast.error(handleError(error));
  } finally {
    setLoading(false);
  }
};

/**
 * Logs out the user by removing the auth token from localStorage and redirecting.
 */
export const logoutUser = async () => {
  localStorage.removeItem("authToken");
  window.location.href = "/";
};

/**
 * Makes a user an admin.
 * @param id - The ID of the user to be promoted to admin.
 * @returns A Promise that resolves when the user is made an admin.
 */
export const MakeAdmin = async (id: string): Promise<any> => {
  try {
    const response = await axiosInstance.post(`/admin/add-admin-role/${id}`);

    if (response?.status === 200) {
      window.location.reload();
      toast.success("User is now an admin");
    }
  } catch (err) {
    toast.error("Failed to add admin role");
  }
};

/**
 * Removes the admin role from a user.
 * @param id - The ID of the user to remove the admin role from.
 * @returns A Promise that resolves when the admin role is removed.
 */
export const removeAdmin = async (id: string): Promise<any> => {
  try {
    const response = await axiosInstance.post(`/admin/remove-admin-role/${id}`);

    if (response?.status === 200) {
      window.location.reload();
      toast.success("User is no longer an admin");
    }
  } catch (err) {
    toast.error("Failed to remove admin role");
  }
};

/**
 * Assigns a task to a user.
 * @param data - The task assignment data.
 * @returns A Promise that resolves when the task is assigned successfully.
 */
export const assingTask = async (data: any): Promise<any> => {
  try {
    const response = await axiosInstance.post(`/auth/assign-task`, data);

    if (response.status === 200) {
      window.location.reload();
    }
  } catch (err: any) {
    toast.error(err.response.data.message);
  }
};

/**
 * Creates a new announcement.
 * @param data - The announcement data to be posted.
 * @returns A Promise that resolves with the created announcement data.
 */
export const createAnnouncement = async (data: TAnnouncement): Promise<any> => {
  try {
    const response = await axiosInstance.post(
      `/user/create-announcement`,
      data
    );
    toast.success("Announcement created successfully");
    return response.data;
  } catch (err) {
    toast.error("Failed to create announcement");
    throw err;
  }
};

/**
 * Creates a new event.
 * @param data - The event data to be posted.
 * @returns A Promise that resolves with the created event data.
 */
export const createEvent = async (data: TEvent): Promise<any> => {
  try {
    const response = await axiosInstance.post(`/user/create-event`, data);
    toast.success("Event created successfully");
    return response.data;
  } catch (err) {
    toast.error("Failed to create event");
    throw err;
  }
};

/**
 * Creates a new complaint.
 * @param data - The complaint data to be posted.
 * @returns A Promise that resolves with the created complaint data.
 */
export const createComplaint = async (data: TComplaint): Promise<any> => {
  try {
    const response = await axiosInstance.post(`/user/create-complaint`, data);
    toast.success("Complaint created successfully");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    return response.data;
  } catch (err) {
    toast.error("Failed to create complaint");
    throw err;
  }
};
