import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";
import { User } from "@/types/Types";

type TLoading = {
  isLoading: boolean;
  data: User;
  className?: string;
};

export const Avatar = ({ isLoading, data, className }: TLoading) => {
  return (
    <div className={cn("rounded-full h-10 w-10 z-1", className)}>
      {isLoading ? (
        <Skeleton className="rounded-full h-10 w-10" />
      ) : data.profileImage ? (
        <img src={data.profileImage} className="rounded-full" />
      ) : null}
    </div>
  );
};

export const LoadingUsername = ({ isLoading, data, className }: TLoading) => {
  return (
    <div className={cn("z-10", className)}>
      {isLoading ? <Skeleton /> : <h1>{data.username}</h1>}
    </div>
  );
};