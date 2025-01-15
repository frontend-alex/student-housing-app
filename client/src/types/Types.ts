export type TRegisterData = {
    email: string;
    username: string;
    password: string;   
}

export type TLoginData = {
    email: string;
    password: string;
}

export type User = {
    id: string;
    username: string;
    email: string; 
    password: string;
    roles: string[]; 
    tasks: Task[]; 
  };
  
export type Task = {
    taskId: string; 
    title: string;
    description: string; 
    status: string; 
    dueDate: string;
    createdAt: string; 
  };