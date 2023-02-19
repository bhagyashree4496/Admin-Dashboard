import React from "react";
import "./Featureinfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { ArrowUpward } from "@mui/icons-material";

function Featureinfo() {
  return (
    <div className="featured">
      <div className="featureditem">
        <span className="featuredtitle">Revanue</span>
        <div className="featuredmoneycontainer">
          <span className="featuredmoney">$6745</span>
          <span className="featuredmoneyrate">
            -11.4 <ArrowDownwardIcon className="featuredicon negative" />
          </span>
        </div>
        <span className="featuredsub">Compared to others</span>
      </div>
      <div className="featureditem">
        <span className="featuredtitle">Sales</span>
        <div className="featuredmoneycontainer">
          <span className="featuredmoney">$3745</span>
          <span className="featuredmoneyrate">
            -1.4 <ArrowDownwardIcon className="featuredicon negative" />
          </span>
        </div>
        <span className="featuredsub">Compared to others</span>
      </div>
      <div className="featureditem">
        <span className="featuredtitle">cost</span>
        <div className="featuredmoneycontainer">
          <span className="featuredmoney">$2345</span>
          <span className="featuredmoneyrate">
            2.4 <ArrowUpward className="featuredicon" />
          </span>
        </div>
        <span className="featuredsub">Compared to others</span>
      </div>
    </div>
  );
}
export default Featureinfo;
