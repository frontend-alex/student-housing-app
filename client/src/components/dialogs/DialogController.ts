import { z } from "zod";
import { assingTaskSchemaForm } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { assingTask } from "@/hooks/api";
import useAuthData from "@/hooks/useAuthData";

const DialogController = (username: string) => {

  const { user } = useAuthData();

  const [isLoading, setIsLoading] = useState(false);

  const assingTasksForm = useForm<z.infer<typeof assingTaskSchemaForm>>({
    resolver: zodResolver(assingTaskSchemaForm),
    defaultValues: {
      title: "",
      description: "",
      start: undefined,
      end: undefined,
    },
  });

  const onAssingTaskSubmit = async (data: z.infer<typeof assingTaskSchemaForm>): Promise<any> => {
  
    const taskData = {
      Id: user?.id,
      Username: username,
      Title: data.title,
      Description: data.description,
      Start: data.start, 
      End: data.end, 
    };

    await assingTask(taskData);
  };

  return {
    assingTasksForm,
    onAssingTaskSubmit,
    isLoading,
  };
};

export default DialogController;
