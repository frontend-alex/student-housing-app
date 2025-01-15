import { BackgroundGradientAnimation } from "@/components/ui/backgrounds/gradient-backround";
import AuthController from "./AuthController";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Loader } from "lucide-react";
import Gridbackround from "@/components/ui/backgrounds/grid-backround";
import { useTheme } from "@/contexts/ThemeContext";

const LoginRoute = () => {
  const { isLoading, loginform, onSubmitLogin } = AuthController();

  const { theme } = useTheme();

  return (
    <div className="grid-2 min-h-screen fixed dark:bg-[#0A0A0A] top-0 w-full">
      <Gridbackround className={`${theme === 'light'  ? "opacity-100" : "opacity-5"} absolute top-0 h-[50vh]  z-[-1]`}/>
      <div className="flex-center max-w-lg mx-auto px-5 lg:px-0">
        <div className="flex-col-3 w-full">
          <div>
            <h1 className="font-bold text-3xl">Welcome Back! Please Log In</h1>
            <p>Enter your credentials below to access your account.</p>
          </div>
          <Form {...loginform}>
            <form
              className="flex-col-5"
              onSubmit={loginform.handleSubmit(onSubmitLogin)}
            >
              <div>
                <FormField
                  control={loginform.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="example@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex-col-1">
                  <FormField
                    control={loginform.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input placeholder="Paxxsword55$" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <a
                    href="#"
                    className="underline text-right text-sm text-main"
                  >
                    Forgoten password?
                  </a>
                </div>
              </div>

              <div className="flex-col-3">
                <Button disabled={isLoading} type="submit" className="py-5">
                  {isLoading ? (
                    <div className="flex-2">
                      <Loader className="animate-spin" /> Creating ...
                    </div>
                  ) : (
                    "Login"
                  )}
                </Button>
                <p className="text-right">
                  Don't have an account?{" "}
                  <a href="/register" className="underline text-main">
                    Create one
                  </a>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <BackgroundGradientAnimation containerClassName="hidden lg:flex relative">
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent text-6xl drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            StudentHousingVB
          </p>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default LoginRoute;
