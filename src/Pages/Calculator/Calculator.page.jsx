import React from "react";
import { Box, Grid, TextField, Typography, Card } from "@mui/material";
import "@mui/material/styles";
import Button from "@mui/material/Button";
import "../../css/style.css";

export const Calculator = () => {
  const [firstNum, setFirstNum] = React.useState(null);
  const [secondNum, setSecondNum] = React.useState(null);
  const [sign, setSign] = React.useState(null);
  const [result, setResult] = React.useState("");
  const [oldFirstNum, setOldFirstNum] = React.useState(null);
  const [oldSecondNum, setOldSecondNum] = React.useState(null);
  const [oldSign, setOldSign] = React.useState(null);
  const [lowerRow, setLowerRow] = React.useState([firstNum, sign, secondNum]);
  const [numButtons, setNumButtons] = React.useState([
    7,
    8,
    9,
    "/",
    4,
    5,
    6,
    "X",
    1,
    2,
    3,
    "-",
    0,
    ".",
    "+",
    "CALC",
  ]);

  const calculateResult = () => {
    let first = firstNum;
    let oldFirst = oldFirstNum;
    let second = secondNum;
    if (sign === null || oldFirst === null || second === null) {
      if (first != null) {
        if (first === ".") {
          first = ".0";
        }
        setResult(first);
        setOldFirstNum(first);
        setFirstNum(null);
        setOldSecondNum(null);
        setOldSign(null);
      }
    } else {
      if (sign === "/" && (second === "0" || isNaN(parseFloat(second)))) {
        setResult("Cannot divide by zero");
        setOldSign(sign);
        setFirstNum(null);
        setSign(null);
        setSecondNum(null);
        if (second === ".") {
          setOldSecondNum(".0");
        } else {
          setOldSecondNum(second);
        }
      } else {
        if (oldFirst === ".") {
          oldFirst = ".0";
        }
        if (second === ".") {
          second = ".0";
        }
        if (sign === "+") {
          setResult(parseFloat(oldFirst) + parseFloat(second));
        }
        if (sign === "-") {
          setResult(parseFloat(oldFirst) - parseFloat(second));
        }
        if (sign === "/") {
          setResult(parseFloat(oldFirst) / parseFloat(second));
        }
        if (sign === "X") {
          setResult(parseFloat(oldFirst) * parseFloat(second));
        }
        setOldFirstNum(oldFirst);
        setFirstNum(null);
        setSign(null);
        setSecondNum(null);
        setOldSecondNum(second + " =");
        setOldSign(sign);
      }
    }
  };

  const handleClick = () => (event) => {
    let clicked = event.target.value;
    if (clicked === "CALC") calculateResult(); // handleCalc
    if (clicked >= 0 || clicked === ".") {
      // handleNum
      if (sign === null) {
        if (
          firstNum != null &&
          oldFirstNum === null &&
          (result === null || result === 0 || result === "")
        )
          setFirstNum(firstNum + clicked);
        else if (firstNum != null && oldFirstNum != null && result != null) {
          setFirstNum(firstNum + clicked);
        } else {
          if (clicked === ".") {
            setFirstNum(".0");
          } else {
            setFirstNum(clicked);
          }
        }
      } else {
        if (secondNum != null) {
          setSecondNum(secondNum + clicked);
        } else {
          setSecondNum(clicked);
        }
      }
    } else {
      // handleSign
      if (
        clicked === "/" ||
        clicked === "X" ||
        clicked === "+" ||
        clicked === "-"
      ) {
        if (result === null || result === "") {
          if (firstNum != null || oldFirstNum != null) {
            if (sign != null) {
              setSign(clicked);
              setOldSign(null);
            } else {
              setSign(clicked);
              setOldSign(null);
              setOldFirstNum(firstNum);
              setFirstNum(null);
            }
          } else {
            if (firstNum === null && oldFirstNum === null) {
              setSign(clicked);
              setOldFirstNum(0);
            }
          }
        } else {
          if (firstNum != null) {
            setSign(clicked);
            setFirstNum(null);
            setOldSecondNum(null);
            setResult("");
            if (firstNum === ".") {
              setOldFirstNum(".0");
            } else setOldFirstNum(firstNum);
          } else {
            setSign(clicked);
            setOldSign(clicked);
            setOldFirstNum(result);
            setResult("");
            setOldSecondNum(null);
          }
        }
      } else {
        // handleClear
        if (clicked === "CLEAR") {
          setFirstNum(null);
          setOldFirstNum(null);
          setSecondNum(null);
          setOldSecondNum(null);
          setSign(null);
          setOldSign(null);
          setResult("");
        }
      }
    }
  };

  const createUpperRow = () => {
    return (
      <>
        <Typography
          fontWeight="bold"
          color="warning.main"
          display="inline"
          variant="subtitle1"
        >
          {oldFirstNum}
        </Typography>
        <Typography
          fontWeight="bold"
          color="warning.main"
          display="inline"
          variant="subtitle1"
        >
          {oldSign}
        </Typography>
        <Typography
          fontWeight="bold"
          color="warning.main"
          display="inline"
          variant="subtitle1"
        >
          {oldSecondNum}
        </Typography>
      </>
    );
  };

  return (
    <div className="Calculator">
      <br />
      <Box
        display="flex"
        alignItems="center"
        sx={{
          direction: "ltr",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            borderRadius: "2em",
            border: "1px solid",
            width: "18em",
            height: "19em",
            bgcolor: "text.disabled",
            color: "warning.main",
          }}
        >
          <br />

          <TextField
            id="filled-multiline-flexible"
            label={createUpperRow()}
            error={false}
            multiline
            focused
            maxRows={2}
            value={result}
            InputProps={{
              error: false,
              readOnly: true,
            }}
            inputProps={{ style: { color: "gold", fontWeight: "bold" } }}
            sx={{
              fontWeight: "bolder",
              color: "warning.main",
            }}
            variant="filled"
          />
          <br />
          <Typography
            fontWeight="bold"
            color="error.main"
            display="inline"
            variant="subtitle1"
          >
            {firstNum}
          </Typography>
          <Typography
            fontWeight="bold"
            color="error.main"
            display="inline"
            variant="subtitle1"
          >
            {sign}
          </Typography>
          <Typography
            fontWeight="bold"
            color="error.main"
            display="inline"
            variant="subtitle1"
          >
            {secondNum}
          </Typography>
          <br />

          <Button
            variant="contained"
            size="small"
            width="1em"
            value={"CLEAR"}
            onClick={handleClick()}
            sx={{ margin: "0 0 0px 4px", flex: "wrap" }}
          >
            {"CLEAR"}
          </Button>

          <Grid
            container
            spacing={0}
            direction="row"
            justifyContent="center"
            alignItems="center"
            width="16em"
            marginLeft={"0.7em"}
          >
            <br />
            {numButtons.map((element) => (
              <Grid item xs={3} key={element}>
                <Button
                  variant="contained"
                  size="small"
                  width="1em"
                  value={element}
                  onClick={handleClick()}
                  sx={{
                    margin: "0 0 0px 4px",
                    flex: "wrap",
                    borderRadius: "0",
                  }}
                >
                  {element}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Box>
      <br />
    </div>
  );
};
