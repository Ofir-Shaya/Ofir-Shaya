import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export const SelectiveIcon = (props) => {
  return (
    <>
      <MenuIcon
        fontSize="large"
        sx={{
          display: { xs: "none", md: "flex" },
          mr: 1,
          display: props.currentIcon === 1 ? "true" : "none",
        }}
      />
      <MenuOpenIcon
        fontSize="large"
        sx={{
          display: { xs: "none", md: "flex" },
          mr: 1,
          display: props.currentIcon === 2 ? "true" : "none",
        }}
      />
    </>
  );
};
