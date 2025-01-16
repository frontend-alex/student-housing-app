import { z } from "zod";

export const loginSchemaForm = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export const registerSchemaForm = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  username: z.string().min(4, {
    message: "Username must be at least 4 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});


export const assingTaskSchemaForm = z.object({
  
  title: z.string().min(4, {
    message: "Name must be at least 4 characters.",
  }),
  description: z.string().min(6, {
    message: "Description must be at least 6 characters.",
  }),
  start: z.date({
    message: "Please enter a valid date.",
  }),
  end: z.date({
    message: "Please enter a valid date.",
  })
})