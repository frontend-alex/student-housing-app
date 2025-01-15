import useAuthData from "@/hooks/useAuthData";

import { Button } from "./ui/button";
import { LogOut, Menu } from "lucide-react";
import { NavbarLinks } from "@/constants/Data";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { logoutUser } from "@/hooks/api";
import { useRef } from "react";

const Logo = ({ navigate }: { navigate: NavigateFunction }) => {
  return (
    <div onClick={() => navigate(0)}>
      <h1 className="font-bold text-2xl">Logo.</h1>
    </div>
  );
};

const Navbar = () => {

  const sidebarRef = useRef<HTMLDivElement>(null);

  const { user } = useAuthData();
  const navigate = useNavigate();
  const navbarLinks = NavbarLinks(user);

  const toggleSidebar = () => {
    sidebarRef.current?.classList.toggle("active");
  };

  return (
    <nav className="sticky top-0 flex-between p-5 max-w-wrapper">
      <Logo navigate={navigate} />
      <ul
        className={`${user ? "" : "ml-32"} hidden lg:flex items-center gap-3`}
      >
        {navbarLinks.map((links, id) => (
          <li key={id}>
            <a href={links.path}>{links.name}</a>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex">
        {user ? (
          <div className={`flex-2 items-center gap-3`}>
            <h1 className="capitalize">Hello, {user?.username}</h1>
            <Button onClick={logoutUser} variant={"ghost"}>
              <LogOut />
            </Button>
          </div>
        ) : (
          <div className="flex-2">
            <Button>
              <a href="/register">Register</a>
            </Button>
            <Button variant={"outline"}>
              <a href="/login">Login</a>
            </Button>
          </div>
        )}
      </div>

      <div className="lg:hidden">
        <Menu className="cursor-pointer" onClick={toggleSidebar}/>

        <div className="side" ref={sidebarRef}>
          <h1 className="font-bold text-2xl">Logo.</h1>
          <ul className="flex-col-5 gap-3">
            {navbarLinks.map((links, id) => (
              <li key={id}>
                <a href={links.path}>{links.name}</a>
              </li>
            ))}
          </ul>
          <div className="flex-2">
            {user ? (
              <div className={`flex-2 items-center gap-3`}>
                <h1 className="capitalize">Hello, {user?.username}</h1>
                <Button onClick={logoutUser} variant={"ghost"}>
                  <LogOut />
                </Button>
              </div>
            ) : (
              <div className="flex-2">
                <Button>
                  <a href="/register">Register</a>
                </Button>
                <Button variant={"outline"}>
                  <a href="/login">Login</a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
