import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../ui/dialog";
  
  import { Button } from "../ui/button";
  import { Loader, Plus, X } from "lucide-react";
  import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "../ui/form";
  import { Input } from "../ui/input";
  import DialogController from "./DialogController";

  
  const CreateComplaint = ({ username }: { username: string | undefined }) => {
    const {
      isLoading,
      onComplaintCreateSubmit,
      createComplaintsForm,
    } = DialogController(username);
  
    return (
      <Dialog>
        <DialogTrigger>
          <Button className="w-full" variant={"outline"}>
            <Plus />
            Create Comlpaint
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="flex-col-1">
            <DialogTitle className="text-2xl font-bold">Create new complaint anonymosly</DialogTitle>
            <DialogDescription>
              You can create a complaint completely anonymosly. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Form {...createComplaintsForm}>
              <form
                className="flex-col-10"
                onSubmit={createComplaintsForm.handleSubmit(onComplaintCreateSubmit)}
              >
                <div>
                  <FormField
                    control={createComplaintsForm.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Task 1" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={createComplaintsForm.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input placeholder="Cleaning the bathroom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
  
                </div>
                <DialogFooter className="flex gap-3 sm:gap-0 sm:justify-end">
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      <X /> Close
                    </Button>
                  </DialogClose>
                  <Button disabled={isLoading} type="submit" className="py-5">
                    {isLoading ? (
                      <div className="flex-2">
                        <Loader className="animate-spin" /> Creating Complaint...
                      </div>
                    ) : (
                      <div className="flex-2">
                        <Plus /> Create Complaint
                      </div>
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default CreateComplaint;
  