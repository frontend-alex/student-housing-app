import CreateComplaint from "@/components/dialogs/CreateComplainDialog";
import useAuthData from "@/hooks/useAuthData";
import useFetch from "@/hooks/useFetch";
import { TComplaint } from "@/types/Types";
import { ComplaintCard } from "./Partials/Dashboard/Complaints";

const ComplainsRoute = () => {
  const { user } = useAuthData();

  const {
    data: userComplaints,
    isLoading: userIsLoading,
    error: userComplaintsError,
  } = useFetch(`/user/get-complaints-by-username/${user?.username}`, []);
  const {
    data: allComplaints,
    isLoading: allIsLoading,
    error: allComplaintsError,
  } = useFetch(`/user/get-all-complaints`, []);

  return (
    <div className="flex-col-5 p-3 px-5">
      <div className="flex-between mt-3">
        <h1 className="font-bold text-4xl">Complains</h1>
        <CreateComplaint username={user?.username} />
      </div>
      <div className="grid-2 gap-5">
        <div className="flex-col-3">
          <h1 className="text-2xl font-bold">Your complains</h1>
          <div className="custom-card-bg flex-col-3">
            {userComplaints?.map((complaints: TComplaint, idx: number) => (
              <ComplaintCard {...complaints} key={idx} />
            ))}
          </div>
        </div>
        <div className="flex-col-3">
          <h1 className="text-2xl font-bold">All complains</h1>
          <div className="custom-card-bg flex-col-3">
            {allComplaints?.map((complaints: TComplaint, idx: number) => (
              <ComplaintCard {...complaints} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplainsRoute;
