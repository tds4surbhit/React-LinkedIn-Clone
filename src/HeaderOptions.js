import { Icon } from "@mui/material";
import React from "react";
import "./HeaderOption.css";

function HeaderOptions({ avatar , Icon, title }) {
  return (
    <div className="HeaderOption">
      {Icon && <Icon className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
