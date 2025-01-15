import { Button } from "@/components/ui/button";
import { useGoBack } from "@/lib/utils";

const Unauthorized = () => {
  const goBack = useGoBack();

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
        <div className="flex-3 mx-auto">
          <Button onClick={goBack} variant={"outline"}>
            Go Back
          </Button>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;