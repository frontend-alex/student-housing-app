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
import { useTheme } from "@/contexts/ThemeContext";
import { BackgroundGradientAnimation } from "@/components/ui/backgrounds/gradient-backround";

import AuthController from "./AuthController";
import Gridbackround from "@/components/ui/backgrounds/grid-backround";

const RegisterRoute = () => {
  const { theme } = useTheme();
  const { isLoading, registerForm, onSubmitRegister } = AuthController();

  return (
    <div className="grid-2 min-h-screen fixed dark:bg-[#0A0A0A] top-0 w-full">
      <BackgroundGradientAnimation containerClassName="hidden lg:flex relative">
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent text-6xl drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            StudentHousingVB
          </p>
        </div>
      </BackgroundGradientAnimation>
      <div className="flex-center max-w-lg mx-auto px-5 lg:px-0">
      <Gridbackround className={`${theme === 'light'  ? "opacity-30" : "opacity-5"} absolute top-0 h-[50vh]  z-[-1]`}/>
        <div className="flex-col-3">
          <div>
            <h1 className="font-bold text-3xl">Create a New Account</h1>
            <p>
              Fill in the details below to create a new account. Once
              registered, you will be able to log in and access your
              personalized dashboard.
            </p>
          </div>
          <Form {...registerForm}>
            <form
              className="flex-col-10"
              onSubmit={registerForm.handleSubmit(onSubmitRegister)}
            >
              <div>
                <FormField
                  control={registerForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Johnny912" className="bg-neutral-100 dark:bg-neutral-900"{...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="example@gmail.com" className="bg-neutral-100 dark:bg-neutral-900"{...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Paxxsword55$" className="bg-neutral-100 dark:bg-neutral-900"{...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-col-3">
                <Button disabled={isLoading} type="submit" className="py-5 bg-orange-600 hover:bg-orange-700 text-white">
                  {isLoading ? (
                    <div className="flex-2">
                      <Loader /> Creating
                    </div>
                  ) : (
                    "Create an account"
                  )}
                </Button>
                <p className="text-right">
                  Already a tenant of our?{" "}
                  <a href="/login" className="underline text-main">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterRoute;
