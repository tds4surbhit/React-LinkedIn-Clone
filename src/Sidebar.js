import { Avatar } from "@material-ui/core";
import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src = "" alt="" />
        <Avatar className="sidebar__avatar"/>
        <h2>Surbhit Sinha</h2>
        <h4>surbhit.4zeracing@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statnumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statnumber">234</p>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;
