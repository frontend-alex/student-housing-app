import { NotificationDot } from "@/components/layouts/partials/DashboardAuthNavbar";
import useAuthData from "@/hooks/useAuthData";
import useFetch from "@/hooks/useFetch";
import { ArrowLeft } from "lucide-react";

const Events = () => {
  const { user } = useAuthData();

  const { data, isLoading } = useFetch("/user/get-all-events", []);

  return (
    <div className="bg-neutral-100 border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 shadow-lg rounded-md p-3 col-span-2">
      <div className="relative">
        <div className="flex-between">
          <h1 className="text-2xl font-bold mb-2">Events</h1>
          <div className="flex-2 cursor-pointer">
            <ArrowLeft size={15} className="text-stone-400" />
            <p>See all</p>
          </div>
        </div>
        {data?.length !== 0 && (
          <NotificationDot className="border-neutral-100 left-[4.3rem] top-2" />
        )}
      </div>
      <div
        className={`${
          data?.length === 0 ? "flex" : "grid grid-cols-2"
        } gap-3 lg:h-[30vh] overflow-y-auto w-full`}
      >
        {data?.length === 0 ? (
          <div className="flex-col-3 h-full w-full flex-center ">
            <img className="w-1/4 mx-auto" src="/assets/partyImage.png" />
            <h1 className="text-xl font-semibold">No current events</h1>
          </div>
        ) : (
          user?.tasks.map((task, idx) => <div></div>)
        )}
      </div>
    </div>
  );
};

export default Events;
