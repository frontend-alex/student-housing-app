import { logoutUser } from "@/hooks/api";
import { ArrowLeft, LayoutDashboard, Settings, User } from "lucide-react"

export const URL = 'http://localhost:5166'

export const NavbarLinks = (user: any) => [
    {
        name: "Home",
        path: '/',
    },
    {
        name: "About",
        path: '/about',
    },
    {
        name: "Contact us",
        path: '/contact',
    },
    {
        name: user ? "Dashboard"  : "" ,
        path: user ? '/dashboard' : "",
    },
]


export const DashbaordSidebarLinks = [
    {
      label: "Dashboard",
      href: "#",
      onClick: () => {},
      icon: (
        <LayoutDashboard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      onClick: () => {},
      icon: (
        <User className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      onClick: () => {},
      icon: (
        <Settings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "",
      onClick: () => logoutUser(),
      icon: (
        <ArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];