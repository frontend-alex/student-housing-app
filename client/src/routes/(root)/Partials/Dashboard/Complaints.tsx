import useFetch from "@/hooks/useFetch";

import { format } from "date-fns";
import { TComplaint } from "@/types/Types";
import { ArrowLeft, Clock } from "lucide-react";
import { NotificationDot } from "@/components/layouts/partials/DashboardAuthNavbar";


export const ComplaintCard = ({title, description, createdAt }: TComplaint) => {
  return (
    <div className="flex-col-1 bg-white dark:bg-black shadow-sm border border-neutral-200 dark:border-neutral-800 rounded-md p-2 h-max  w-full">
      <div className="flex-2"> 
        <Clock className="text-stone-400" size={15}/>
        <p>{format(createdAt, 'd MMMM yyyy, h:mm a')}</p>
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

const Complaints = () => {
  const { data, isLoading, error } = useFetch("/user/get-all-complaints", []);

  return (
    <div className="bg-neutral-100 border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 shadow-lg col-span-2 lg:col-span-1 rounded-md p-3 w-full">
      <div className="relative">
        <div className="flex-between">
          <h1 className="text-2xl font-bold mb-2">Complaints</h1>
          <div className="flex-2 cursor-pointer">
            <ArrowLeft size={15} className="text-stone-400"/>
            <p>See all</p>
          </div>
        </div>
        {data?.length !== 0 && (
          <NotificationDot className="border-neutral-100 left-[7.7rem] top-2" />
        )}
      </div>
      <div
        className={`flex flex-col gap-3 lg:h-[30vh] overflow-y-auto w-full`}
      >
        {(data?.length ?? 0) < 0 ? (
          <div className="flex-col-3 h-full w-full flex-center ">
            <img className="w-1/2 mx-auto" src="/assets/problemImage.png" />
            <h1 className="text-xl font-semibold">No current complaints</h1>
          </div>
        ) : (
          data?.map((complaints: TComplaint, idx: number) => <ComplaintCard {...complaints} key={idx}/>)
        )}
      </div>
    </div>
  );
};

export default Complaints;
