import AssignTaskDialog from "@/components/dialogs/AssignTaskDialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MakeAdmin, removeAdmin } from "@/hooks/api";
import { ColDef } from "ag-grid-community";
import { EllipsisVertical, Shield, ShieldOff } from "lucide-react";

export const getColumnDefs = (): ColDef[] => [
  {
    headerName: "Username",
    field: "username",
    flex: 1,
  },
  {
    headerName: "Email",
    field: "email",
    flex: 1,
  },
  {
    headerName: "Roles",
    field: "roles",
    valueGetter: (params) => params.data.roles.join(", "),
    flex: 1,
    cellRenderer: (params: any) => {
      return (
        <div className="space-x-2">
          {params.value.split(", ").map((role: string, index: number) => (
            <span
              key={index}
              className={`role-badge ${role === "Admin" ? "admin-role" : ""} ${
                role === "Tenant" ? "tenant-role" : ""
              }`}
            >
              {role}
            </span>
          ))}
        </div>
      );
    },
  },
  {
    headerName: "Profile Image",
    field: "profileImage",
    cellRenderer: (params: any) => (
      <img
        src={params.value}
        alt="Profile"
        className="w-7 h-7 rounded-full mt-2"
      />
    ),
    flex: 1,
  },
  {
    headerName: "Actions",
    field: "actions",
    cellRenderer: (params: any) => (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <EllipsisVertical className="text-stone-400 mt-2 cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex-col-1">
          {!params.data.roles.includes("Admin") && (
            <Button onClick={() => MakeAdmin(params.data.id)}>
              <Shield />
              Make Admin
            </Button>
          )}

          {params.data.roles.includes("Admin") && (
            <Button variant={"destructive"} onClick={() => removeAdmin(params.data.id)}>
              <ShieldOff />
              Remove Admin
            </Button>
          )}
          <AssignTaskDialog username={params.data.username}/>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    flex: 1,
  },
];
