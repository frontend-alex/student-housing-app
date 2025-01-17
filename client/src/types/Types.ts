export type TRegisterData = {
    email: string;
    username: string;
    password: string;   
}

export type TLoginData = {
    email: string;
    password: string;
}

export type TAnnouncement = {

}

export type TComplaint = {
  username: string | undefined;
  title: string;
  description: string;
  createdAt: string;
}

export type TEvent = {
  
}

export type User = {
    id: string;
    username: string;
    email: string; 
    password: string;
    profileImage: string;
    roles: string[]; 
    tasks: Task[]; 
  };
  
export type Task = {
    id: string; 
    title: string;
    description: string; 
    urgencyLevel: string;
    start: Date;
    end: Date; 
}