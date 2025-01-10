import { NavbarLinks } from "@/constants/Data";
import { SignedIn, SignedOut, SignInButton, useAuth, UserButton } from "@clerk/clerk-react";

import { NavigateFunction, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Logo = ({navigate} : { navigate :  NavigateFunction}) => {
  return (
    <div onClick={() => navigate(0)}>
      <h1 className="font-bold text-2xl">Logo.</h1>
    </div>
  );
};

const Navbar = () => {

  const { userId } = useAuth();

  const navigate = useNavigate();
  const navbarLinks = NavbarLinks(userId)

  return (
    <nav className="sticky top-0  flex-between p-5 max-w-wrapper">
      <Logo navigate={navigate} />
      <ul className="hidden lg:flex items-center gap-3">
        {navbarLinks.map((links, id) => (
            <li key={id}><a href={links.path}>{links.name}</a></li>
        ))}
      </ul>
      <div>
        <SignedOut>
          <SignInButton>
            <Button>Register</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
