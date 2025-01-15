import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { DashbaordSidebarLinks } from "@/constants/Data";
import useAuthData from "@/hooks/useAuthData";
import { User } from "lucide-react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const { user } = useAuthData();

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row w-full flex-1 gap-5  mx-auto overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {DashbaordSidebarLinks.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: user?.username,
                href: "#",
                icon: <User />,
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex-col-1">
        <div></div>
        <div className="p-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export const Logo = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </a>
  );
};

export default DashboardLayout;
