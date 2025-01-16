import Gridbackround from "@/components/ui/backgrounds/grid-backround";
import { Button } from "@/components/ui/button";
import useAuthData from "@/hooks/useAuthData";
import { useGoBack } from "@/lib/utils";

const Unavailable = () => {

  const { user } = useAuthData();

  return (
    <div className="min-h-screen flex-center max-w-wrapper">
      <Gridbackround className="absolute z-[-1] top-0 opacity-5 h-[70dvh]" />
      <div className="flex-col-5 text-center max-w-xl">
        <img
          className="max-w-[300px] h-auto mx-auto"
          src="/assets/accessDenied.png"
          alt="access denied"
        />
        <h1 className="text-5xl font-bold">Oops! Page Not Found</h1>
        <p>
          Sorry, the page you’re looking for doesn’t exist or has been moved.
          Please check the URL for errors, or go back to our homepage to
          continue exploring.
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

export default Unavailable;
