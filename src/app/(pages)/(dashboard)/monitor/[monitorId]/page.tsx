"use client";
import React, { useState } from "react";
import HeaderCard from "./_components/HeaderCard";
import StatusCard from "./_components/StatusCard";
import ChartComponent from "./_components/chart";
import IncidentTable from "./_components/IncidentTable";
import EditDialog from "./_components/EditDialog";

interface MonitorPageParams {
  params:Promise<{monitorId:string}>
}

 function Monitors({ params }: MonitorPageParams) {
  const {monitorId} = React.use(params)
 

  const [open, setOpen] = useState(false);
  return (
    <div className="grid gap-2   grid-flow-row auto-rows-min">
      <div className="row-span-2  min-h-34">
        <HeaderCard open={open} setOpen={setOpen} />
        <EditDialog open={open} setOpen={setOpen} />
      </div>
      <div className="row-span-3  min-h-34   ">
        <StatusCard />
      </div>
      <div className="row-span-4 max-h-[25rem]  ">
        <ChartComponent />
      </div>
      <div className="row-span-3 min-h-[25rem]">
        <IncidentTable />
      </div>
    </div>
  );
}

export default Monitors;
