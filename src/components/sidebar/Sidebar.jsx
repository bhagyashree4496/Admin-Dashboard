import React from "react";
import "./Sidebar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PaidIcon from "@mui/icons-material/Paid";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import EmailIcon from "@mui/icons-material/Email";
import GradingIcon from "@mui/icons-material/Grading";
import MessageIcon from "@mui/icons-material/Message";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ReportIcon from "@mui/icons-material/Report";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Dashboard</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistitem active">
              <LineStyleIcon className="sidebaricon" />
              Home
            </li>

            <li className="sidebarlistitem">
              <TimelineIcon className="sidebaricon" />
              Analytics
            </li>
            <li className="sidebarlistitem">
              <TrendingUpIcon className="sidebaricon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Quickmenu</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistitem ">
              <PersonIcon className="sidebaricon" />
              Users
            </li>

            <li className="sidebarlistitem">
              <StorefrontIcon className="sidebaricon" />
              Products
            </li>
            <li className="sidebarlistitem">
              <PaidIcon className="sidebaricon" />
              Transactions
            </li>
            <li className="sidebarlistitem">
              <LeaderboardIcon className="sidebaricon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Notifications</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistitem ">
              <EmailIcon className="sidebaricon" />
              Mail
            </li>
            <li className="sidebarlistitem">
              <GradingIcon className="sidebaricon" />
              Feedback
            </li>
            <li className="sidebarlistitem">
              <MessageIcon className="sidebaricon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Staff</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistitem ">
              <ManageAccountsIcon className="sidebaricon" />
              Manage
            </li>
            <li className="sidebarlistitem">
              <ShowChartIcon className="sidebaricon" />
              Analytics
            </li>
            <li className="sidebarlistitem">
              <ReportIcon className="sidebaricon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
