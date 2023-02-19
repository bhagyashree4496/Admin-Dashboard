import { Button } from "@mui/material";
import React from "react";
import "./Widgetlg.css";
function Widgetlg() {
  // const Button = ({ type }) => {
  //   return <button className={"widgetlgbtn" + type}>{type}</button>;
  // };
  return (
    <div className="widgetlg">
      <h3 className="widgetlgtitle">Latest transactions</h3>
      <table className="widgetlgtable">
        <tr className="widgetlgtr">
          <th className="widgetlgth">Customer</th>
          <th className="widgetlgth">Date</th>
          <th className="widgetlgth">Amount</th>
          <th className="widgetlgth">Status</th>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img
              className="widgetlgimag"
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            ></img>
            <span className="widgetlgname">Suson Carol</span>
          </td>
          <td className="widgetlgdate">2 Jan 2022</td>
          <td className="widgetlgamt">$122.00</td>
          <td className="widgetlgstatus">
            <button className="widgetlgbtn Approved">Approved</button>
          </td>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img
              className="widgetlgimag"
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            ></img>
            <span className="widgetlgname">Suson Carol</span>
          </td>
          <td className="widgetlgdate">2 Jan 2022</td>
          <td className="widgetlgamt">$122.00</td>
          <td className="widgetlgstatus">
            <button className="widgetlgbtn Approved">Approved</button>
          </td>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img
              className="widgetlgimag"
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            ></img>
            <span className="widgetlgname">Suson Carol</span>
          </td>
          <td className="widgetlgdate">2 Jan 2022</td>
          <td className="widgetlgamt">$122.00</td>
          <td className="widgetlgstatus">
            <button className="widgetlgbtn Declined">Declined</button>
          </td>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img
              className="widgetlgimag"
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            ></img>
            <span className="widgetlgname">Suson Carol</span>
          </td>
          <td className="widgetlgdate">2 Jan 2022</td>
          <td className="widgetlgamt">$122.00</td>
          <td className="widgetlgstatus">
            <button className="widgetlgbtn Pending">Pending</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Widgetlg;
