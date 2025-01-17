import { z } from "zod";
import { assingTaskSchemaForm, createComplaintSchemaForm } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { assingTask, createComplaint } from "@/hooks/api";
import useAuthData from "@/hooks/useAuthData";

const DialogController = (username: string | undefined) => {

  const { user } = useAuthData();

  const [isLoading, setIsLoading] = useState(false);

  const [assignTaskPriority, setAssingTaskPriority ] = useState("")

  const assingTasksForm = useForm<z.infer<typeof assingTaskSchemaForm>>({
    resolver: zodResolver(assingTaskSchemaForm),
    defaultValues: {
      title: "",
      description: "",
      start: undefined,
      end: undefined,
    },
  });

  const createComplaintsForm = useForm<z.infer<typeof createComplaintSchemaForm>>({
    resolver: zodResolver(createComplaintSchemaForm),
    defaultValues: {
      title: "",
      description: "",
    },
  });


  const onAssingTaskSubmit = async (data: z.infer<typeof assingTaskSchemaForm>): Promise<any> => {
    const taskData = {
      Id: user?.id,
      Username: username,
      Title: data.title,
      UrgencyLevel: assignTaskPriority,
      Description: data.description,
      Start: data.start, 
      End: data.end, 
    };

    await assingTask(taskData);
  };

  const onComplaintCreateSubmit = async (data: z.infer<typeof createComplaintSchemaForm>): Promise<any> =>{
    const complaintData = {
      username,
      title: data.title,
      description: data.description,
    }

    await createComplaint(complaintData);
  }

  return {
    isLoading,
    assingTasksForm,
    assignTaskPriority,
    createComplaintsForm,
    onAssingTaskSubmit,
    setAssingTaskPriority,
    onComplaintCreateSubmit
  };
};

export default DialogController;
