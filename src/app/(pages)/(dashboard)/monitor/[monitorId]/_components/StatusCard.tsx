import React from "react";

function StatusCard() {
  return (
    <div className="  rounded-md h-full    grid grid-cols-4 gap-3  ">
       

      <div className="   border border-sidebar-accent items-start rounded-md flex flex-col gap-1  h-[90%]  py-5 px-6 ">
        <span className=" text-1xl  text-neutral-300">Current status</span>
        <span className=" font-bold text-2xl text-green-400">UP</span>
        <span className=" text-neutral-300 text-xs">
          Currently up for 24 Days
        </span>
   
        </div>
      <div className="   border border-sidebar-accent items-start rounded-md flex flex-col gap-1  h-[90%]  py-5 px-6 ">
        <span className=" text-1xl  text-neutral-300">Current status</span>
        <span className=" font-bold text-2xl text-green-400">UP</span>
        <span className=" text-neutral-300 text-xs">
          Currently up for 24 Days
        </span>
   
        </div>
      <div className="   border border-sidebar-accent items-start rounded-md flex flex-col gap-1  h-[90%]  py-5 px-6 ">
        <span className=" text-1xl  text-neutral-300">Current status</span>
        <span className=" font-bold text-2xl text-green-400">UP</span>
        <span className=" text-neutral-300 text-xs">
          Currently up for 24 Days
        </span>
   
        </div>
      <div className="   border border-sidebar-accent items-start rounded-md flex flex-col gap-1  h-[90%]  py-5 px-6 ">
        <span className=" text-1xl  text-neutral-300">Current status</span>
        <span className=" font-bold text-2xl text-green-400">UP</span>
        <span className=" text-neutral-300 text-xs">
          Currently up for 24 Days
        </span>
   
        </div>
     
    </div>
  );
}

export default StatusCard;
