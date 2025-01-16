import { Button } from "@/components/ui/button";
import useAuthData from "@/hooks/useAuthData";
import { useGoBack } from "@/lib/utils";

const Unauthorized = () => {
  const { user } = useAuthData();

  return (
    <div className="min-h-screen flex-center max-w-wrapper">
      <div className="flex-col-5 text-center max-w-md">
        <img
          className="max-w-[300px] h-auto mx-auto"
          src="/assets/accessDenied.png"
          alt="access denied"
        />
        <h1 className="text-5xl font-bold">Unauthorized Access</h1>
        <p>
          You do not have permission to view this page. Please ensure you are
          logged in with the correct account, or contact support if you believe
          this is an error.
        </p>
        <div className="flex-3 mx-auto w-full">
          <Button
          className="w-full"
            onClick={() => (window.location.href = "/")}
            variant={"outline"}
          >
            Go Back
          </Button>
          {!user && (
            <Button className="py-5 bg-orange-600 hover:bg-orange-700 text-white">
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
