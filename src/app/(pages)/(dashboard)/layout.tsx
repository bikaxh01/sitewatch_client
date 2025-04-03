import Sidebar from "@/components/global/Sidebar";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className=" h-screen   grid grid-cols-12">
      <div className="    col-span-2">
        <Sidebar />
      </div>
      <div className=" p-2 col-span-10 bg-sidebar">
        <div className="    dark:bg-black rounded-2xl p-2  ">
          {children}
         

        </div>
      </div>
    </div>
  );
}

export default layout;
