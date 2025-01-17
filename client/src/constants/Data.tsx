import { User as TUser } from "@/types/Types";
import {
  Angry,
  ArrowLeft,
  Calendar,
  Handshake,
  LayoutDashboard,
  ListCheck,
  Settings,
  User,
  Users,
} from "lucide-react";

export const URL = "http://localhost:5166";

export const NavbarLinks = (user: any) => [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact us",
    path: "/contact",
  },
  {
    name: user ? "Dashboard" : "",
    path: user ? "/dashboard" : "",
  },
];

export const DashbaordSidebarLinks = (user: TUser) => {
  return [
    {
      name: "Main Menu",
      links: [
        {
          label: "Dashboard",
          href: "/dashboard",
          icon: (
            <LayoutDashboard
              className={`${
                window.location.pathname === "/dashboard"
                  ? "text-main"
                  : "text-neutral-700 dark:text-neutral-200"
              }  h-5 w-5 flex-shrink-0`}
            />
          ),
        },
        {
          label: "Calendar",
          href: "/calendar",
          icon: (
            <Calendar
              className={`${
                window.location.pathname === "/calendar"
                  ? "text-main"
                  : "text-neutral-700 dark:text-neutral-200"
              }  h-5 w-5 flex-shrink-0`}
            />
          ),
        },
        {
          label: "Profile",
          href: `/profile/${user.id}`,
          icon: (
            <User
              className={`${
                window.location.pathname === `/profile/${user.id}`
                  ? "text-orange-600"
                  : "text-neutral-700 dark:text-neutral-200"
              }  h-5 w-5 flex-shrink-0`}
            />
          ),
        },
        {
          label: "Complaints",
          href: `/complaints/${user.id}`,
          icon: (
            <Angry
              className={`${
                window.location.pathname === `/complaints/${user.id}`
                  ? "text-orange-600"
                  : "text-neutral-700 dark:text-neutral-200"
              }  h-5 w-5 flex-shrink-0`}
            />
          ),
        },
      ],
    },
    {
      name: user?.roles.includes("Admin") ? "Admin Menu" : "",
      links: user?.roles.includes("Admin")
        ? [
            {
              label: "Assign Task",
              href: "/admin/assign-task",
              icon: (
                <LayoutDashboard
                  className={`${
                    window.location.pathname === "/admin/assign-task"
                      ? "text-orange-600"
                      : "text-neutral-700 dark:text-neutral-200"
                  }  h-5 w-5 flex-shrink-0`}
                />
              ),
            },
            {
              label: "User Management",
              href: "/admin/users",
              icon: (
                <ListCheck
                  className={`${
                    window.location.pathname === "/admin/users"
                      ? "text-orange-600"
                      : "text-neutral-700 dark:text-neutral-200"
                  }  h-5 w-5 flex-shrink-0`}
                />
              ),
            },
            {
              label: "Complaint Manager",
              href: "/admin/complain-manager",
              icon: (
                <Angry
                  className={`${
                    window.location.pathname === "/admin/complain-manager"
                      ? "text-orange-600"
                      : "text-neutral-700 dark:text-neutral-200"
                  }  h-5 w-5 flex-shrink-0`}
                />
              ),
            },
          ]
        : [],
    },
    {
      name: "Other Menu",
      links: [
        {
          label: "Terms & Conditions",
          href: "/users",
          icon: (
            <Handshake
              className={`${
                window.location.pathname === "/term-conditions"
                  ? "text-orange-600"
                  : "text-neutral-700 dark:text-neutral-200"
              }  h-5 w-5 flex-shrink-0`}
            />
          ),
        },
      ],
    },
    {
      name: "Help & Settings",
      links: [
        {
          label: "Settings",
          href: "/settings",
          icon: (
            <Settings
              className={`${
                window.location.pathname === "/settings"
                  ? "text-orange-600"
                  : "text-neutral-700 dark:text-neutral-200"
              }  h-5 w-5 flex-shrink-0`}
            />
          ),
        },
      ],
    },
  ];
};

export const ProfileDropdownMenuLinks = [
  {
    label: "Profile",
    href: "/profile",
    icon: <User size={15} />,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <Settings size={15} />,
  },
];


export const AssignTaskPriorityData = [
  {
    icon: <span className="h-4 w-4 rounded-full bg-green-500"></span>,
    name: "Later"
  },
  {
    icon: <span className="h-4 w-4 rounded-full bg-yellow-500"></span>,
    name: "Priority"
  },
  {
    icon: <span className="h-4 w-4 rounded-full bg-red-500"></span>,
    name: "Urgent"
  },
]