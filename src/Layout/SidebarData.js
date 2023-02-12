import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { ImStatsDots } from "react-icons/im";
import Homepage from "../Pages/SidebarPages/HomePage";
import Module from "../Pages/SidebarPages/ModulePage";
import Stats from "../Pages/SidebarPages/Stats";
import Settings from "../Pages/SidebarPages/Settings";
import Support from "../Pages/SidebarPages/Support";

export const SidebarData = [
  {
    title: "Home",
    path: <Homepage />,
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Module",
    path: <Module />,
    icon: <FaIcons.FaBook />,
    cName: "nav-text",
  },
  {
    title: "Stats",
    path: <Stats />,
    icon: <ImStatsDots />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: <Settings />,
    icon: <AiIcons.AiFillSetting />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: <Support />,
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
