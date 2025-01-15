import { z } from "zod";
import { useForm } from "react-hook-form";
import { loginSchemaForm, registerSchemaForm } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { loginUser, registerUser } from "@/hooks/api";
import { useNavigate } from "react-router-dom";

const AuthController = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const loginform = useForm<z.infer<typeof loginSchemaForm>>({
    resolver: zodResolver(loginSchemaForm),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const registerForm = useForm<z.infer<typeof registerSchemaForm>>({
    resolver: zodResolver(registerSchemaForm),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmitRegister = async (data: z.infer<typeof registerSchemaForm>) => {
    await registerUser(data, setIsLoading);
  };

  const onSubmitLogin = async (data: z.infer<typeof loginSchemaForm>) => {
    await loginUser(data, setIsLoading);
  };

  return {
    isLoading,
    loginform,
    registerForm,
    onSubmitLogin,
    onSubmitRegister,
  };
};

export default AuthController;
