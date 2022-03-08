import { Avatar, Typography } from "@mui/material";
import React from "react";

export const GameCard = (props) => {
  return (
    <>
      <Avatar
        variant="square"
        sx={{
          height: "56px",
          width: "56px",
          backgroundColor: props.color,
          borderRadius: "0.7em",
        }}
      >
        {props.CardNumber}
      </Avatar>
    </>
  );
};
