import * as React from "react";
import "../css/style.css";
import { SidebarData } from "./SidebarData";
import { Typography } from "@mui/material";
import { Link as MaterialLink } from "@mui/material";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Sidebar = (props) => {
  const linkStart = "Ofir-Shaya/Restaurant";
  let navigate = useNavigate();

  return (
    <>
      {props.currentIcon === 2 ? (
        <div className="SideBar">
          <ul className="SidebarList">
            {SidebarData.map((value, key) => {
              return (
                <li
                  key={key}
                  className="row"
                  id={
                    window.location.pathname === `${linkStart}` + value.link
                      ? "active"
                      : ""
                  }
                  onClick={() => navigate(0)}
                >
                  <div id="icon">{value.icon}</div>
                  <div id="title">
                    <Typography>{value.title}</Typography>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="SideBarMinimized">
          <ul className="SidebarList">
            {SidebarData.map((value, key) => {
              return (
                <li
                  key={key}
                  className="row"
                  id={
                    window.location.pathname === `${linkStart}` + value.link
                      ? "active"
                      : ""
                  }
                  onClick={() => navigate(0)}
                >
                  <div id="icon">{value.icon}</div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <React.StrictMode>
        <Outlet />
      </React.StrictMode>
    </>
  );
};
