import { AiOutlineInfoCircle } from "react-icons/ai";
import { ModuleData } from "../ModulePages/ModuleData";
import classes from "./ModulePage.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Module() {
  const [overview, setOverview] = useState("Selct module info for an overview");
  const handleClick = (itemOverview) => {
    setOverview(itemOverview);
  };

  return (
    <>
      <div className={classes.title}>
        <h2> Modules </h2>
      </div>
      <div className={classes.Module_Overview}>
        <div className={classes.moduleOverall}>
          {ModuleData.map((item, index) => {
            return (
              <>
                <div className={classes.moduleContainer}>
                  <Link to={item.path}>
                    <div key={index} className={classes[item.cName]}>
                      {item.title}
                    </div>
                  </Link>
                  <div
                    className={classes.info}
                    onClick={() => handleClick(item.overview)}
                  >
                    {/* <img className={classes.moduleImage} src={item.imagePath} /> */}
                    <AiOutlineInfoCircle />
                    <p className={classes.infoText}>info</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className={classes.Overview}>
          <div className={classes.OverviewText}>
            <h3>Overview</h3>
            <div>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Module;
