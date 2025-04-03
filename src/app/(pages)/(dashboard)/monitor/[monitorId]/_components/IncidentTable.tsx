import React from "react";

function IncidentTable() {
  return (
    <div className=" h-full border border-sidebar rounded-md">
      <table className="w-full">
        <thead>
          <tr className="">
            <th className="border  px-4 py-2 text-left">Status</th>
            <th className="border  px-4 py-2 text-left">Start Time</th>
            <th className="border  px-4 py-2 text-left">End Time</th>
          </tr>
        </thead>
        <tbody className="   gap-2">
          <tr className="hover:bg-gray-500 border  rounded-md">
            <td className=" rounded-l-md px-4 py-2">John Doe</td>
            <td className="   px-4 py-2">30</td>
            <td className=" rounded-r-md  px-4 py-2">john@example.com</td>
          </tr>
          <tr className="hover:bg-gray-500 border  rounded-md">
            <td className=" rounded-l-md px-4 py-2">John Doe</td>
            <td className="   px-4 py-2">30</td>
            <td className=" rounded-r-md  px-4 py-2">john@example.com</td>
          </tr>
          <tr className="hover:bg-gray-500 border  rounded-md">
            <td className=" rounded-l-md px-4 py-2">John Doe</td>
            <td className="   px-4 py-2">30</td>
            <td className=" rounded-r-md  px-4 py-2">john@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default IncidentTable;
