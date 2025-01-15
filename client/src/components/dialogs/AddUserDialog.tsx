import { Button } from "../ui/button";
import { Loader, Plus } from "lucide-react";
import {
  DialogContent,
  DialogTrigger,
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import AuthController from "@/routes/(auth)/Auth/AuthController";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const AddUserDialog = () => {
  const { registerForm, onSubmitRegister, isLoading } = AuthController();

  return (
    <Dialog>
      <DialogTrigger>
        <Button>
          <Plus />
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex-col-1">
          <DialogTitle className="text-2xl font-bold">
            Add new tenant
          </DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
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
                        <Input placeholder="Johnny912" {...field} />
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
                        <Input placeholder="example@gmail.com" {...field} />
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
                        <Input placeholder="Paxxsword55$" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-col-3">
                <Button disabled={isLoading} type="submit" className="py-5">
                  {isLoading ? (
                    <div className="flex-2">
                      <Loader /> Creating
                    </div>
                  ) : (
                    "Create an account"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserDialog;
