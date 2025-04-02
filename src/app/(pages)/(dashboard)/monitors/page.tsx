import React from "react";
import HeaderCard from "./_components/HeaderCard";
import StatusCard from "./_components/StatusCard";
import ChartComponent from "./_components/chart";

function Monitors() {
  return (
    <div className="grid gap-2 h-full grid-flow-row auto-rows-min">
      <div className="row-span-2  min-h-34">
        <HeaderCard />
      </div>
      <div className="row-span-3  min-h-34   ">
        <StatusCard />
      </div>
      <div className="row-span-4max-h-[25rem] ">
        <ChartComponent />
      </div>
      <div className="row-span-3 border-2 bg-red-300 border-red-300  min-h-[25rem]">
        Incidents
      </div>
    </div>
  );
}

export default Monitors;
