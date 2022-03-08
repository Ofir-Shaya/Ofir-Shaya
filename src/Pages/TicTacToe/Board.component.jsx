import React from "react";
import { Button, Grid } from "@mui/material";

export const Board = (props) => {
  if (props.winnerValue[0] != null) {
    props.winnerValue.map((element) => {
      document.getElementById(`${element}TicTacToe`).style.fontWeight = "bold";
    });
  }

  return (
    <>
      <Grid
        spacing={0}
        container
        justifyContent="center"
        alignItems="center"
        width="5em"
      >
        {[...Array(9).keys()].map((element) => (
          <Grid item xs={4} key={element}>
            <Button
              id={element + "TicTacToe"}
              variant="contained"
              sx={{
                height: "1em",
                width: "1em",
                minWidth: "0",
                maxWidth: "1em",
                padding: "1em",
                fontSize: ".8em",
                fontWeight: "normal",
                backgroundColor: "lightgray",
                color: "black",
                ":hover": {
                  backgroundColor: "darkgray",
                },
              }}
              onClick={() => props.handleClick(element)}
            >
              {props.values[element]}
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
