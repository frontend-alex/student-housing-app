import Gridbackround from "@/components/ui/backgrounds/grid-backround";
import { Button } from "@/components/ui/button";
import { useGoBack } from "@/lib/utils";

const Unavailable = () => {
  const goBack = useGoBack();

  return (
    <div className="max-h-container flex-center max-w-wrapper min-h-[70vh]">
      <Gridbackround className="absolute z-[-1] top-0 opacity-5 h-[70dvh]"/>
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

export default Unavailable;
