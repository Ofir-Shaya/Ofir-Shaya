import * as React from "react";
import "../css/style.css";
import { SidebarData } from "./SidebarData";
import { Box, Typography } from "@mui/material";

export const Sidebar = (props) => {
  const link = "Ofir-Shaya/Restaurant";
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
                    window.location.pathname === `${link}` + value.link
                      ? "active"
                      : ""
                  }
                  onClick={() => {
                    window.location.pathname = `${link}` + value.link;
                  }}
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
                    window.location.pathname === `${link}` + value.link
                      ? "active"
                      : ""
                  }
                  onClick={() => {
                    window.location.pathname = `${link}` + value.link;
                  }}
                >
                  <div id="icon">{value.icon}</div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
