import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider(props) {
  const [value, setValue] = React.useState(Math.round(props.coins / 4));

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > props.coins) {
      setValue(props.coins);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Button
        onClick={() => props.handleBet(value)}
        id="input-slider"
        disabled={props.coinsPlaced !== 0}
        variant="h6"
        color={"#222"}
        sx={{
          marginTop: "1em",
          backgroundColor: "#fff",
          "&:hover": { backgroundColor: "lightgray" },
        }}
        gutterbottom="true"
      >
        Place Bet:
      </Button>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            disabled={props.coinsPlaced !== 0}
            value={typeof value === "number" ? value : 0}
            max={props.coins}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <InputLabel
            htmlFor="outlined-adornment-amount"
            sx={{ fontWeight: "700", opacity: "100", color: "#000" }}
          >
            Amount
          </InputLabel>
          <OutlinedInput
            disabled={props.coinsPlaced !== 0}
            id="outlined-adornment-amount"
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            startAdornment={
              <InputAdornment position="start">
                <PaidRoundedIcon />
              </InputAdornment>
            }
            label="Amount"
            sx={{
              width: "6rem",
              height: "3em",
              color: "#222",
              backgroundColor: "#fff",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
