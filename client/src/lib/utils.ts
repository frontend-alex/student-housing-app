import { Task } from "@/types/Types";
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



export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Ensure two digits
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

export function formatTasks(input: Array<any>): Array<any> {
  return input?.map((task: Task, index) => {
      const startDate = new Date(task.start);
      const endDate = new Date(task.end);

      console.log(startDate, endDate)

      const formattedStartDate = startDate.toISOString().slice(0, 16).replace('T', ' ');
      const formattedEndDate = endDate.toISOString().slice(0, 16).replace('T', ' ');



      return {
          id: index + 1, 
          title: task.title,
          start: formattedStartDate,
          description: task.description,
          end: formattedEndDate
      };
  });
}
