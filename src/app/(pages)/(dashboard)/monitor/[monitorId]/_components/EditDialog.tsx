import React, {
  ActionDispatch,
  Dispatch,
  FormEvent,
  FormEventHandler,
  SetStateAction,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { handleClientScriptLoad } from "next/script";

interface DialogProp {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
function EditDialog({ open, setOpen }: DialogProp) {
  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit your monitor</DialogTitle>
          <form className="  p-2 flex flex-col gap-2" onSubmit={handelSubmit}>
            <div className=" flex flex-col gap-y-1.5">
              <label className=" text-xs ">Monitor Name:</label>
              <input
                className="  border-2 w-full  h-10 rounded-md text-sm p-2"
                placeholder="Personal portfolio"
              />
            </div>
            <div className=" flex flex-col gap-y-1.5">
              <label className=" text-xs">Monitor Url:</label>
              <input
                className=" w-full border-2 h-10 rounded-md text-sm p-2"
                placeholder="https://example.com"
              />
            </div>
            <div className=" flex flex-col gap-y-1.5">
              <label className=" text-xs">Check Interval:</label>
              <input className=" w-full border-2  h-10 rounded-md text-sm p-2" />
            </div>
            <Button type="submit">
              <span>Save Changes</span>
              <Save />
            </Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default EditDialog;
