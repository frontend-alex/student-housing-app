import { format } from "date-fns";
import useAuthData from "@/hooks/useAuthData";
import { Separator } from "@/components/ui/separator";
import { NotificationDot } from "@/components/layouts/partials/DashboardAuthNavbar";
import { Timer } from "lucide-react";

type Task = {
  title: string;
  description: string;
  urgencyLevel: string;
  start: Date;
  end: Date;
};

const TasksCard = ({ title, description, start, end, urgencyLevel}: Task) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const colors = {
    urgent: ["bg-red-600", "bg-red-600", "bg-red-600"],
    priority: ["bg-yellow-400", "bg-yellow-400", "bg-neutral-300"], 
    later: ["bg-green-500", "bg-neutral-300", "bg-neutral-300"], 
  };

  const getColorClasses = () => {
    switch (urgencyLevel) {
      case "Urgent":
        return colors.urgent;
      case "Priority":
        return colors.priority;
      case "later":
        return colors.later;
      default:
        return ["bg-neutral-300", "bg-neutral-300", "bg-neutral-300"];
    }
  };

  const [first, second, third] = getColorClasses();

  return (
    <div className="flex-col-1 bg-white dark:bg-black shadow-sm border border-neutral-200 rounded-md p-2 h-max   w-full">
       <div className="flex-3 ">
      <span className={`block w-full h-1 rounded-lg ${first}`}></span>
      <span className={`block w-full h-1 rounded-lg ${second}`}></span>
      <span className={`block w-full h-1 rounded-lg ${third}`}></span>
    </div>
      <div className="flex-2">
        <p>{format(startDate, "M EE dd")}</p>
        <Separator className="w-5" />
        <p>{format(endDate, "M EE dd")}</p>
      </div>
      <h1 className="fond-bold text-xl max-w-[120px]">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

const Tasks = () => {
  const { user } = useAuthData();

  return (
    <div className="bg-neutral-100 border border-neutral-200 dark:border-neutral-800 shadow-lg col-span-2 lg:col-span-1 rounded-md p-3 w-full">
      <div className="relative">
        <h1 className="text-2xl font-bold mb-2">Tasks</h1>
        {user?.tasks.length !== 0 && <NotificationDot className="border-neutral-100 left-14 top-2"/>}
      </div>
      <div className="grid grid-cols-2 gap-3 lg:h-[30vh] overflow-y-auto w-full">
        {user?.tasks.map((task, idx) => (
          <TasksCard {...task} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
