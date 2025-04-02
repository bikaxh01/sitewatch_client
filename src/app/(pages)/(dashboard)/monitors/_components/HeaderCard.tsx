"use client";

import React from "react";
import Down_animation from "@/../public/Down_animation.json";
import Up_animation from "@/../public/Up_animation.json";
import Lottie from "lottie-react";
import {
  BellRing,
  CirclePause,
  Settings,
  SquareArrowOutUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
function HeaderCard() {
  return (
    <div className=" border h-full  flex items-center justify-between w-full  px-4  py-8  rounded-md  border-sidebar-accent">
      <div className="  h-full flex items-center gap-2x">
        <Lottie animationData={Up_animation} loop={true} className=" size-14" />
        <div className=" flex flex-col ">
          <div className=" text-2xl font-semibold flex gap-2 ">
            <span>bikash.cloud</span>

            <span className="  py-2  text-muted-foreground hover:text-white">
              <SquareArrowOutUpRight className=" size-3" />
            </span>
          </div>

          <div className=" flex gap-1 w-full  text-muted-foreground ">
            <span className=" text-xs  ">HTTP/S monitor for:</span>
            <span className=" text-xs  max-w-48  truncate  ">
              https://bikash.cloud
            </span>
          </div>
        </div>
      </div>
      <div className="  h-full  flex items-center  gap-4">
        <Button className=" text-secondary-foreground" variant={"secondary"}>
          <span>
            <CirclePause className=" size-4" />
          </span>
          <span>Pause</span>
        </Button>
        <Button className=" text-secondary-foreground" variant={"secondary"}>
          <span>
            <BellRing className=" size-4" />
          </span>
          <span>Test alert</span>
        </Button>
        <Button className=" text-secondary-foreground" variant={"secondary"}>
          <span>
            <Settings className=" size-4" />
          </span>
          <span>Edit</span>
        </Button>
      </div>
    </div>
  );
}

export default HeaderCard;
