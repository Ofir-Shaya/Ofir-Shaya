import React from "react";
import "./css/style.css";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { Link as MaterialLink } from "@mui/material";

export const App = () => {
  return (
    <>
      <div className="all">
        <br />
        <nav className="container">
          <div style={{ display: "inline" }}>
            <br />
            <MaterialLink
              component={RouterLink}
              underline="always"
              to="/Ofir-Shaya"
            >
              Home
            </MaterialLink>
            <hr />
            <MaterialLink
              component={RouterLink}
              underline="always"
              to="/Ofir-Shaya/TicTacToe"
            >
              TicTacToe
            </MaterialLink>{" "}
            |{" "}
            <MaterialLink
              component={RouterLink}
              underline="always"
              to="/Ofir-Shaya/Calculator"
            >
              Calculator
            </MaterialLink>{" "}
            |{" "}
            <MaterialLink
              component={RouterLink}
              underline="always"
              to="/Ofir-Shaya/Blackjack"
            >
              Blackjack
            </MaterialLink>{" "}
            |{" "}
            <MaterialLink
              component={RouterLink}
              underline="always"
              to="/Ofir-Shaya/Restaurant"
            >
              Restaurant
            </MaterialLink>
          </div>
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
