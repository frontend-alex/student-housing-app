import { ArrowLeft } from "lucide-react";
import { NotificationDot } from "@/components/layouts/partials/DashboardAuthNavbar";

import useAuthData from "@/hooks/useAuthData";
import useFetch from "@/hooks/useFetch";

const Announcements = () => {
  const { user } = useAuthData();

  const { data, isLoading } = useFetch("/user/get-all-announcements", []);

  return (
    <div className="custom-card-bg">
      <div className="relative">
        <div className="flex-between">
          <h1 className="text-2xl font-bold mb-2">Announcements</h1>
          <div className="flex-2 cursor-pointer">
            <ArrowLeft size={15} className="text-stone-400" />
            <p>See all</p>
          </div>
        </div>
        {data?.length !== 0 && (
          <NotificationDot className="border-neutral-100 left-[11.2rem] top-2" />
        )}
      </div>
      <div
        className={`${
          data?.length === 0 ? "flex" : "grid grid-cols-2"
        } gap-3 lg:h-[30vh] overflow-y-auto w-full`}
      >
        {data?.length === 0 ? (
          <div className="flex-col-3 h-full w-full flex-center ">
            <img
              className="w-1/2 mx-auto"
              src="/assets/announcementImage.png"
            />
            <h1 className="text-xl font-semibold">No current Announcements</h1>
          </div>
        ) : (
          user?.tasks.map((task, idx) => <div></div>)
        )}
      </div>
    </div>
  );
};

export default Announcements;
