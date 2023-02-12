import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import classes from "./Sidebar.module.css";

function Sidebar(props) {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div
        className={
          sidebar
            ? classes.navbar
            : [classes.navbar, classes.navbarClosed].join(" ")
        }
      >
        <Link to="#" className={classes.menuArrow}>
          <AiIcons.AiOutlineDoubleRight onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? classes.navActive : classes.navMenu}>
        <ul className={classes.navItems}>
          {SidebarData.map((item, index) => {
            return (
              <>
                <li key={index} className={classes[item.cName]}>
                  <Link
                    to="#"
                    onClick={() => {
                      props.setCurrentPage(item.path);
                      // console.log(item.path + " hi");
                      localStorage.setItem(
                        "currentPage",
                        JSON.stringify(item.title)
                      );
                    }}
                  >
                    {item.icon}
                    {!sidebar && <span>{item.title}</span>}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
