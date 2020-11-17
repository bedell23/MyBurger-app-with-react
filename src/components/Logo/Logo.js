import React from "react";
import Blogo from "../../Assets/Images/burger-logo.png";
import classes from "./Logo.module.css";

function Logo(props) {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={Blogo} alt="my Burger Logo" />
    </div>
  );
}

export default Logo;
