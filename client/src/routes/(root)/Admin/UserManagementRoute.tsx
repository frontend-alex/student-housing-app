import { ListFilter, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import useFetch from "@/hooks/useFetch";

import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { getColumnDefs } from "@/constants/DataTableRows";
import AddUserDialog from "@/components/dialogs/AddUserDialog";

ModuleRegistry.registerModules([AllCommunityModule]);


const UserManagementRoute = () => {
  const { data, isLoading, error } = useFetch(
    "http://localhost:5166/api/user/get-all-users",
    []
  );

  const [rowData, setRowData] = useState<any[]>(data || []);
  
  useEffect(() => {
    if (data) {
      setRowData(data);
    }
  }, [data]);


  return (
    <div className="flex-col-5 py-5 p-5 lg:px-10">
      <div className="w-max flex-col-1">
        <h1 className="font-bold text-4xl">Manage Users</h1>
        <p className="text-base">
          Manage your tenants and their account permissions from here.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 lg:justify-between lg:items-center">
        <h1 className="font-bold text-2xl">
          All users{" "}
          <span className="font-semibold text-2x text-stone-400">
            {data?.length}
          </span>
        </h1>
        <div className="flex-3">
          <div className="relative">
            <Search className="absolute left-3 text-stone-400 top-[18%]" />
            <Input className="box-border px-10" placeholder="Search" />
          </div>
          <Button variant={"outline"} className="p-4">
            <ListFilter className="text-stone-400" />
            Filters
          </Button>
         <AddUserDialog/>
        </div>
      </div>
      <div className="h-[70vh] overflow-auto">
        <AgGridReact
          rowData={rowData} 
          columnDefs={getColumnDefs()}
        />
      </div>
    </div>
  );
};

export default UserManagementRoute;
