import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";
import { DashbaordSidebarLinks } from "@/constants/Data";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";

import useAuthData from "@/hooks/useAuthData";
import DashboardAuthNavbar from "./partials/DashboardAuthNavbar";
import { Avatar } from "../ui/loading-elemnts";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const { user, isLoading } = useAuthData();

  const dashboardLinks = user ? DashbaordSidebarLinks(user) : [];

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row w-full flex-1  mx-auto overflow-hidden",
        "min-h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="px-2">
              {open ? <Logo /> : <LogoIcon />}
            </div>
            <div className="mt-8 flex flex-col gap-2">
              {dashboardLinks.map((link, idx) => (
                <div key={idx}>
                  <motion.span
                    className="text-sm text-stone-400 px-2"
                    animate={{
                      display: true
                        ? open
                          ? "inline-block"
                          : "none"
                        : "inline-block",
                      opacity: true ? (open ? 1 : 0) : 1,
                    }}
                  >
                    {link.name}
                  </motion.span>
                  {link.links.map((l, idx) => (
                    <SidebarLink className={`px-3 ${window.location.pathname === l.href ? "bg-neutral-200 dark:bg-neutral-800" : ""} rounded-md`} key={idx} link={l} />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: user?.username,
                href: "#",
                icon: user && (
                  <Avatar
                    className="h-8 w-8"
                    data={user}
                    isLoading={isLoading}
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="w-full">
        <DashboardAuthNavbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export const Logo = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20"
    >
      <div className="flex-2">
      <div className="bg-orange-400 p-2 rounded-lg">
        <Calendar className="text-white" size={15}/>
      </div>
    </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium dark:text-white whitespace-pre"
      >
        Housing<span className="text-orange-600">VB</span>
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <div className="flex-2">
      <div className="bg-orange-400 p-2 rounded-lg">
        <Calendar className="text-white" size={15}/>
      </div>
    </div>
  );
};

export default DashboardLayout;
