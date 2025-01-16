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

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { CalendarIcon, Check, Loader, Plus, X } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Calendar } from "../ui/calendar";
import DialogController from "./DialogController";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { AssignTaskPriorityData } from "@/constants/Data";

const AssignTaskDialog = ({ username }: { username: string }) => {
  const {
    isLoading,
    assingTasksForm,
    assignTaskPriority,
    onAssingTaskSubmit,
    setAssingTaskPriority,
  } = DialogController(username);

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="w-full" variant={"outline"}>
          <Plus />
          Assign Task
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex-col-1">
          <DialogTitle className="text-2xl font-bold">Assign Task</DialogTitle>
          <DialogDescription>
            Make changes to tenant schedule. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...assingTasksForm}>
            <form
              className="flex-col-10"
              onSubmit={assingTasksForm.handleSubmit(onAssingTaskSubmit)}
            >
              <div>
                <FormField
                  control={assingTasksForm.control}
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
                  control={assingTasksForm.control}
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

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-full mt-5">Chose urgency level</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    {AssignTaskPriorityData.map((pick, idx) => (
                      <DropdownMenuItem
                        onClick={() => setAssingTaskPriority(pick.name)}
                        key={idx}
                      >
                        {assignTaskPriority === pick.name && <Check/>}
                        <div className="flex-2">
                          {pick.icon}
                          <h1>{pick.name}</h1>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <div className="grid-2 gap-5 mt-5">
                  <FormField
                    control={assingTasksForm.control}
                    name="start"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Start Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  " pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={assingTasksForm.control}
                    name="end"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>End Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
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
                      <Loader className="animate-spin" /> Assinging Task...
                    </div>
                  ) : (
                    <div className="flex-2">
                      <Plus /> Assing Task
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

export default AssignTaskDialog;
