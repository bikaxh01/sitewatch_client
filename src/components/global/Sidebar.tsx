import { Globe, icons, Settings, ShieldAlert } from "lucide-react";
import Link from "next/link";
import React from "react";

const sidebarLinks = [
  {
    title: "Monitors",
    href: "/monitors",
    icon: Globe,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "Incidents",
    href: "/incidents",
    icon: ShieldAlert,
  },
 
];

function Sidebar() {
  return (
    <div className="  h-full grid grid-rows-12  fixed    bg-sidebar  p-4  ">
      <div className=" row-span-1   flex items-start  ">
        <span className="text-secondary-foreground text-1xl  font-semibold">
          Site watch.
        </span>
      </div>
      <div className=" row-span-6 flex flex-col gap-2  ">
        {sidebarLinks.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className=" h-8    px-3 rounded-md hover:bg-sidebar-accent flex gap-2 items-center "
          >
            <item.icon className=" size-4" />
            <span className=" text-sm">{item.title}</span>
          </Link>
        ))}
      </div>
      <div className=" row-span-5 h-full  grid grid-rows-12 ">
        <div className=" row-span-9"> list </div>
        <div className="row-span-3 ">
          <div className=" bg-sidebar-accent hover:bg-sidebar-accent/75  truncate rounded-md flex gap-4 py-2 px-1">
            <div className=" rounded-full bg-sidebar-foreground size-12 items-center justify-center flex ">
              BM
            </div>
            <div className=" flex flex-col">
              <div className=" truncate">Bikash Mishra </div>
              <div className=" truncate">example@gmail.com </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
