import React from "react";
import "./Home.css";
import Featureinfo from "../components/Featureinfo/Featureinfo";
import Chart from "../components/charts/Chart";
import { userdata } from "../dummydata";
import Widgetlg from "../components/Widgetlarge/Widgetlg";
import Widgetsmall from "../components/Widgetsmall/Widgetsmall";
function Home() {
  return (
    <div className="home">
      <Featureinfo></Featureinfo>
      <Chart
        data={userdata}
        title="User Analytics"
        datakey="Active User"
      ></Chart>
      <div className="homewidgets">
        <Widgetsmall></Widgetsmall>
        <Widgetlg></Widgetlg>
      </div>
    </div>
  );
}
export default Home;
