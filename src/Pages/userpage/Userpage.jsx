import React from "react";
import "./Userpage.css";

function Userpage() {
  return (
    <div className="userpage">
      <div className="usertitlecontainer">
        <h1 className="usertitle">Edit User</h1>
        <button className="useraddbutton">Create</button>
      </div>
      <div className="usercontainer">
        <div className="usershow">
          <div className="usershowtop">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="usershowimage"
            ></img>
            <div className="usershowtoptitle">
              <span className="usershowusername">Anna Baker</span>
              <span className="usershowusertitle">Software Engineer</span>
            </div>
          </div>
          <div className="usershowbottom"></div>
        </div>
        <div className="userupdate"></div>
      </div>
    </div>
  );
}
export default Userpage;
