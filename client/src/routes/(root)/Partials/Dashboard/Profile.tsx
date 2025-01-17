import { Button } from "@/components/ui/button";
import useAuthData from "@/hooks/useAuthData";
import { Pen } from "lucide-react";

const Profile = () => {
  const { user } = useAuthData();

  return (
    <div className="relative bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg rounded-md lg:col-span-2 z-[-2] pb-5">
      {/* <h1 className="text-2xl font-bold mb-2">Profile</h1> */}
      <div className="absolute top-0 bg-orange-200 dark:bg-orange-400 w-full h-[100px] rounded-t-md z-[-1]" />
      <div className="z-[10000000] flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center  px-10 mt-14">
        <div>
          <img
            src={user?.profileImage}
            className="w-32 h-32 rounded-full border-4 border-neutral-100 dark:border-neutral-900 bg-white dark:bg-black"
          />
          <h1 className="font-bold text-2xl capitalize">{user?.username}</h1>
          <p>{user?.email}</p>
        </div>
        <Button variant={'outline'} className="cursor-pointer"><Pen/>Update Profile</Button>
      </div>
    </div>
  );
};

export default Profile;
