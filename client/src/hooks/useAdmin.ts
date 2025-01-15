import useAuthData from "./useAuthData";

export const useIsAdmin = () => {
    const { user } = useAuthData();

    return user?.roles?.includes("Admin");
  };