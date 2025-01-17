import { Announcements, Complaints, Events, Tasks, Profile } from "./Partials";

const DashboardRoute = () => {
  return (
    <div className="flex-col-5 p-3 px-5">
      <div className="grid-3 gap-5">
        <Profile/>
        <Announcements/>
      </div>
      <div className="grid-4 gap-5 xl:max-h-[40vh]">
        <Tasks/>
        <Complaints/>
        <Events/>
      </div>
    </div>
  );
};

export default DashboardRoute;
