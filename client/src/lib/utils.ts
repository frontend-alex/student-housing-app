import { clsx, type ClassValue } from "clsx"
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const useGoBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);  
  };

  return goBack;
};