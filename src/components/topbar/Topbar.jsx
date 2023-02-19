import React from "react";
import "./topbar.css";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="topbarleft">
          <span className="logo">penguin</span>
        </div>

        <div className="topbarright">
          <div className="topbariconcontainer">
            <NotificationsNoneIcon />
            <span className="topiconbadge">0</span>
          </div>
          <div className="topbariconcontainer">
            <LanguageIcon />
            <span className="topiconbadge">0</span>
          </div>
          <div className="topbariconcontainer">
            <SettingsIcon />
          </div>
          <img
            className="topavatar"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="profile"
          ></img>
        </div>
      </div>
    </div>
  );
}
export default Topbar;
