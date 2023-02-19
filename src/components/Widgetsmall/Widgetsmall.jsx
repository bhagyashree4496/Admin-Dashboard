import React from "react";
import "./Widgetsm.css";
import profile from "../Data/Bhagya.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Widgetsmall() {
  return (
    <div className="widgetsmall">
      <span className="widgetsmtitle">New Join Members</span>
      <ul>
        <li className="widgetsmlistitem">
          <img
            className="widgetsmimage"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
          ></img>
          <div className="widgetsmuser">
            <span className="widgetsmusername">John Miller</span>
            <span className="widgetsmjob">Software Engineer</span>
          </div>
          <button className="widgetsmbutton">
            <VisibilityIcon className="widgetbtnicon"></VisibilityIcon>
            Display
          </button>
        </li>
        <li className="widgetsmlistitem">
          <img
            className="widgetsmimage"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ></img>
          <div className="widgetsmuser">
            <span className="widgetsmusername">John Miller</span>
            <span className="widgetsmjob">Software Engineer</span>
          </div>
          <button className="widgetsmbutton">
            <VisibilityIcon className="widgetbtnicon"></VisibilityIcon>
            Display
          </button>
        </li>
        <li className="widgetsmlistitem">
          <img
            className="widgetsmimage"
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="image1"
          />
          <div className="widgetsmuser">
            <span className="widgetsmusername">John Miller</span>
            <span className="widgetsmjob">Software Engineer</span>
          </div>
          <button className="widgetsmbutton">
            <VisibilityIcon className="widgetbtnicon"></VisibilityIcon>
            Display
          </button>
        </li>
        <li className="widgetsmlistitem">
          <img
            className="widgetsmimage"
            src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=400"
          ></img>
          <div className="widgetsmuser">
            <span className="widgetsmusername">John Miller</span>
            <span className="widgetsmjob">Software Engineer</span>
          </div>
          <button className="widgetsmbutton">
            <VisibilityIcon className="widgetbtnicon"></VisibilityIcon>
            Display
          </button>
        </li>
        <li className="widgetsmlistitem">
          <img
            className="widgetsmimage"
            src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400"
          ></img>
          <div className="widgetsmuser">
            <span className="widgetsmusername">John Miller</span>
            <span className="widgetsmjob">Software Engineer</span>
          </div>
          <button className="widgetsmbutton">
            <VisibilityIcon className="widgetbtnicon"></VisibilityIcon>
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Widgetsmall;
