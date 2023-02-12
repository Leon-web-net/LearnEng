import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import LoginOverlay from "../Overlay/LoginOverlay";
import logo from "../Logo/logo-no-background.png";
import Sidebar from "./Sidebar";
import Homepage from "../Pages/SidebarPages/HomePage";
import Module from "../Pages/SidebarPages/ModulePage";
import Stats from "../Pages/SidebarPages/Stats";
import Settings from "../Pages/SidebarPages/Settings";
import Support from "../Pages/SidebarPages/Support";

function Navigation() {
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    const storedPage = JSON.parse(localStorage.getItem("currentPage"));
    let currentPage;
    // console.log(storedPage + " storedPage");

    switch (storedPage) {
      case "Home":
        currentPage = <Homepage />;
        break;
      case "Module":
        currentPage = <Module />;
        break;
      case "Stats":
        currentPage = <Stats />;
        break;
      case "Settings":
        currentPage = <Settings />;
        break;
      case "Support":
        currentPage = <Support />;
        break;
      default:
        currentPage = <Homepage />;
        break;
    }

    setCurrentPage(currentPage);
  }, []);

  return (
    <>
      <div>
        <header className={classes.header}>
          <div className={classes.logo}>
            <img src={logo} />
          </div>
          <div className={classes.navlist}>
            <ul>
              <li>
                <Link to="/HomePage">Exercises</Link>
              </li>
              <li>
                <Link to="/">WordBank</Link>
              </li>
              <li>
                <Link to="/">Resources</Link>
              </li>
            </ul>
          </div>
          <div className={classes.line}>
            <br></br>
          </div>
          <div className={classes.LogDiv}>
            <button onClick={LoginOverlay} className={classes.logBtn}>
              Login
            </button>
          </div>
        </header>
      </div>
      <div className={classes.HomePage}>
        <div className={classes.Sidebar}>
          <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
        <div className={classes.Content}>{currentPage}</div>
      </div>
    </>
  );
}

export default Navigation;
