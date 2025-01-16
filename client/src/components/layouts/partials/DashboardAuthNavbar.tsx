import useAuthData from "@/hooks/useAuthData";

import { ArrowLeft, Bell, Search } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar, LoadingUsername } from "@/components/ui/loading-elemnts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ProfileDropdownMenuLinks } from "@/constants/Data";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { logoutUser } from "@/hooks/api";
import { LogoIcon } from "../DashboardLayout";
import { cn } from "@/lib/utils";

export const NotificationDot = ({className} : { className?: string}) => {
  return (
    <span className={cn("h-3 w-3 border border-neutral-100 dark:border-neutral-900 text-sm text-center flex-center text-white absolute top-3 left-4 rounded-full bg-red-400", className)} />
  );
};

const DashboardAuthNavbar = () => {
  const { user, isLoading } = useAuthData();

  const checkTasks = user?.tasks?.length == 0;

  useEffect(() => {
    document.title = `Notifications (${user?.tasks?.length})`;
  }, [user]);

  return (
    <div className="flex-between border-b p-3 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 w-full">
      <Breadcrumb className="hidden lg:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <LogoIcon />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              className="capitalize"
              href={window.location.pathname}
            >
              {window.location.pathname.split("/")[1]}
            </BreadcrumbLink>
          </BreadcrumbItem>
          {window.location.pathname.split("/")[2] && (
            <div className="flex-2">
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbLink
                  className="capitalize"
                  href={window.location.pathname}
                >
                  {window.location.pathname.split("/")[2]}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          )}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center gap-5 justify-between lg:justify-normal w-full lg:w-max">
        <div className="relative w-full">
          <Search className="absolute right-3 top-[18%] text-stone-400" />
          <Input className="ring-0 focus:ring-0 w-full" placeholder="Search" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="relative">
              <Bell className="text-stone-400" />
              {!checkTasks && <NotificationDot />}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {checkTasks ? (
              <p className="p-5">You have no notifications</p>
            ) : (
              <p className="p-5 text-black text-base">You have new notifications</p>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex  items-center gap-2">
          {user && (
            <Avatar className="h-8 w-8" data={user} isLoading={isLoading} />
          )}
          <DropdownMenu>
            <DropdownMenuTrigger>
              {user && (
                <LoadingUsername
                  className="text-sm capitalize font-semibold"
                  data={user}
                  isLoading={isLoading}
                />
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {ProfileDropdownMenuLinks.map((link, idx) => (
                <DropdownMenuItem key={idx}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem>
                <a
                  onClick={logoutUser}
                  className="flex items-center gap-2 text-sm cursor-pointer"
                >
                  <ArrowLeft className="text-red-500" size={15} />
                  <span className="text-red-500">Logout</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default DashboardAuthNavbar;
