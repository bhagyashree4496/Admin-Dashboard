import React, { useState } from "react";
import "./Userlist.css";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import AdjustIcon from "@mui/icons-material/Adjust";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userrows } from "../../dummydata";
import { Link } from "react-router-dom";
function Userlist() {
  const [data, setdata] = useState(userrows);
  function Handledelete(clickedid) {
    setdata(data.filter((item) => item.id != clickedid));
  }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userlistuser">
            <img className="userlistimg" src={params.row.avatar} alt=""></img>
            {params.row.username}
          </div>
        );
      },
    },

    {
      field: "email",
      headerName: "Email",

      width: 200,
    },
    {
      field: "statuswithicon",
      headerName: "Status",

      width: 150,
      renderCell: (params) => {
        return (
          <div className="userliststatus">
            {params.row.status === "active" ? (
              <AdjustIcon className="useractive"></AdjustIcon>
            ) : (
              <AdjustIcon className="userpassive"></AdjustIcon>
            )}
            {params.row.status}
          </div>
        );
      },
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userlistaction">
            <Link to={"/user" + params.row.id}>
              <button className=" ulistbutton">Edit</button>
            </Link>

            <DeleteOutlineIcon
              className="ulistdelete"
              onClick={() => {
                Handledelete(params.row.id);
              }}
            ></DeleteOutlineIcon>
          </div>
        );
      },
    },
  ];

  return (
    <div className="userlist">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
export default Userlist;
