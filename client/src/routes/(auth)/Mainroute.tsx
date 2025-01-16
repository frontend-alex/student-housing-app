import Navbar from "@/components/Navbar";
import Gridbackround from "@/components/ui/backgrounds/grid-backround";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const Mainroute = () => {
  const { theme } = useTheme();
  return (
    <div>
      <div className="max-h-screen w-full overflow-hidden">
        <Navbar />
        <Gridbackround
          className={`${
            theme === "light" ? "opacity-30" : "opacity-5"
          } absolute top-0 h-[50vh]  z-[-1]`}
        />
        <header className="flex flex-col gap-5 items-center justify-center min-h-[70vh] text-center max-w-5xl mx-auto">
          <div className="bg-orange-100 dark:bg-orange-600/10 rounded-lg px-2 py-1">
            <p className="text-orange-500 font-medium">
              Introducing HousingVB 1.0
            </p>
          </div>
          <h1 className="font-bold text-5xl lg:text-8xl">
            Simplify Your Life, <span className="text-main">Empower</span> Your
            Living.
          </h1>
          <p className="text-lg">
            Streamline your daily tasks, stay effortlessly organized, and access
            everything you need to make managing your home a breeze. From
            handling maintenance requests to staying updated on community news,
            we’re here to ensure your experience is as stress-free and
            convenient as possible
          </p>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white">
            <a href="/register">Try for free</a>
          </Button>
        </header>
        <span className="hidden lg:flex absolute bottom-0 left-1/2 w-[600px] h-[600px] overflow-hidden bg-orange-600/30 z-[-1] dark:bg-orange-600/10 blur-3xl"></span>
      </div>
    </div>
  );
};

export default Mainroute;
