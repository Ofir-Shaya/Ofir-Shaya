import { Box } from "@mui/material";
import * as React from "react";
import { CardContent } from "./CardContent";

export const Content = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#A39A92",
          width: "100%",
          height: "100%",
        }}
      >
        <CardContent />
        <CardContent />
        <CardContent />
      </Box>
    </>
  );
};
