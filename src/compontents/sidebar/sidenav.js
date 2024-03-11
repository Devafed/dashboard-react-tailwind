import React from "react";
import { useState } from "react";
import Dashboard from "../../assets/dashboard.png";
import Linechart from "../../assets/line-chart.png";
import Group from "../../assets/group.png";
import Calendar from "../../assets/calendar.png";
import Settings from "../../assets/settings.png";
import Power from "../../assets/power.png";
import Control from "../../assets/control.png";

export default function SidebarNav() {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: Dashboard },
    { title: "Analytics", src: Linechart },
    { title: "Accounts", src: Group },
    { title: "Schedule ", src: Calendar },
    { title: "Setting", src: Settings },
    { title: "LogOut", src: Power, gap: true },
  ];

  return (
    <div
      className={` ${
        open ? "w-20" : "w-52"
      }  mble-nav bg-dark-purple min-h-screen h-screen p-5  pt-8 sticky top-0 duration-300 items-center flex justify-items-center`}
    >
      <img
        src={Control}
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
        alt="control"
        onClick={() => setOpen(!open)}
      />
      <ul className="pt-2">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center  gap-x-4 ${
              Menu.gap ? "absolute bottom-5" : "mb-4"
            }`}
          >
            <img
              src={`${Menu.src}`}
              className={`w-7 text-white invert`}
              alt="menu-icons"
            />
            <span className={`${open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
