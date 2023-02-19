import React from "react";
import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart(props) {
  return (
    <div className="chart">
      <h3 className="charttitle">{props.title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={props.data}>
          <XAxis dataKey="name" stroke="#5550bd"></XAxis>
          <Line type="monotone" dataKey={props.datakey} stroke="#5550bd"></Line>
          <Tooltip></Tooltip>

          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"></CartesianGrid>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Chart;
