import React from "react";
import classes from "./LoginOverlay.module.css";

function LoginOverlay() {
  console.log("here");
  return (
    <div className={classes.loginWrapper}>
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default LoginOverlay;
