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
    const response = await registerUser(data, setIsLoading);
    if(response?.status === 200) {
        window.location.href = "/login";
      }
  };

  const onSubmitLogin = async (data: z.infer<typeof loginSchemaForm>) => {
    const response = await loginUser(data, setIsLoading);
    if(response?.status === 200) {
        localStorage.setItem("authToken", response?.data.token);
        navigate('/dashboard')
      }
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
