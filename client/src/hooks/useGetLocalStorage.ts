import { useState, useEffect } from "react";

/**
 * Custom hook to get and track a value from localStorage.
 * @param key - The key of the localStorage item.
 * @returns The current value of the localStorage item.
 */

const useLocalStorage = (key: string): string | null => {
  const [value, setValue] = useState<string | null>(() =>
    localStorage.getItem(key)
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setValue(localStorage.getItem(key));
    };

    // Listen for storage events
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key]);

  return value;
};

export default useLocalStorage;