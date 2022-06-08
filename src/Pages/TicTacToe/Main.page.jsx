import React, { useEffect } from "react";
import { Board } from "./Board.component";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import "../../css/style.css";

export const TicTacToe = () => {
  const [boardValues, setBoardValues] = React.useState(new Array(9).fill(" "));
  const [xTurn, setXTurn] = React.useState(true);
  const [isWinner, setIsWinner] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [winnerRow, setWinnerRow] = React.useState(new Array(3));

  useEffect(() => {
    checkWinner();
  }, [boardValues]);

  {
    useEffect(() => {
      createMessage();
    }, [boardValues]);

    useEffect(() => {
      createMessage();
    }, [isWinner]);
  }

  const handleClick = (i) => {
    checkWinner();
    if (!isWinner && boardValues[i] === " ") {
      const valuesCopy = [...boardValues];
      valuesCopy[i] = xTurn ? "X" : "O";
      setBoardValues(valuesCopy);
      setXTurn(!xTurn);
    } else {
    }
  };

  const resetAll = () => {
    setBoardValues(new Array(9).fill(" "));
    setXTurn(true);
    setIsWinner(false);
    setMessage("");
    for (let i = 0; i < 9; i++) {
      document.getElementById(`${i}TicTacToe`).style.fontWeight = "300";
      console.log(document.getElementById(`${i}TicTacToe`).style.fontWeight);
    }
  };

  const checkWinner = () => {
    if (isWinner) return true;
    if (
      checkThreeSame(0, 1, 2) ||
      checkThreeSame(3, 4, 5) ||
      checkThreeSame(6, 7, 8) ||
      checkThreeSame(0, 3, 6) ||
      checkThreeSame(1, 4, 7) ||
      checkThreeSame(2, 5, 8) ||
      checkThreeSame(0, 4, 8) ||
      checkThreeSame(2, 4, 6)
    ) {
      setIsWinner(true);
      setWinnerRow(whoWon);
      return true;
    }
  };

  const whoWon = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (checkThreeSame(a, b, c)) {
        return lines[i];
      }
    }
    return;
  };

  const checkThreeSame = (a, b, c) => {
    return (
      boardValues[a] === boardValues[b] &&
      boardValues[b] === boardValues[c] &&
      boardValues[a] !== " "
    );
  };

  const isDraw = () => {
    for (let i = 0; i < boardValues.length; i++) {
      if (boardValues[i] === " " || checkWinner()) return false;
    }
    return true;
  };

  const createMessage = () => {
    if (isWinner) setMessage(boardValues[winnerRow[0]] + " is the Winner!");
    else {
      if (isDraw()) setMessage("Game Ended, DRAW!");
      else if (xTurn) {
        setMessage("X is playing next!");
      } else setMessage("O is playing next!");
    }
  };

  return (
    <div className="TicTacToe">
      <br />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Board
          values={boardValues}
          winnerValue={winnerRow}
          handleClick={handleClick}
        />
      </Box>
      <br />
      <Typography fontWeight="bold" color="warning.main" variant="subtitle1">
        {message}
      </Typography>
      <Button variant="contained" onClick={() => resetAll()}>
        Reset
      </Button>
      <br />
      <br />
    </div>
  );
};
