import React from "react";
import "./css/style.css";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { Link as MaterialLink } from "@mui/material";

export const App = () => {
  return (
    <>
      <div className="all">
        <br />
        <nav className="MainDiv">
          <div style={{ display: "inline" }}>
            <br />
            <MaterialLink component={RouterLink} underline="always" to="/">
              Home
            </MaterialLink>
            <hr />
            <MaterialLink
              component={RouterLink}
              underline="always"
              to="/TicTacToe"
            >
              TicTacToe
            </MaterialLink>{" "}
            |{" "}
            <MaterialLink
              component={RouterLink}
              underline="always"
              to="/Calculator"
            >
              Calculator
            </MaterialLink>{" "}
            |{" "}
          </div>
          <MaterialLink
            component={RouterLink}
            underline="always"
            to="/Blackjack"
          >
            Blackjack
          </MaterialLink>
          <br />
          <br />
        </nav>
        <React.StrictMode>
          <Outlet />
        </React.StrictMode>
      </div>
    </>
  );
};
