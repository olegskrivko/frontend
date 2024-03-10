import React from "react";
import { Button, Typography } from "@mui/material";

const StartCookButton = ({ onClick }) => {
  return (
    <Button variant="contained" size="large" color="primary" onClick={onClick} sx={{ background: "#1D1D1D !important" }}>
      <Typography variant="button">Start to Cook</Typography>
    </Button>
  );
};

export default StartCookButton;
