import React from "react";

// React MUI components
import Typography from "@mui/material/Typography";

const RecipeUpdated = ({ timestamp }) => {
  const date = new Date(timestamp);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return (
    <Typography
      variant="subtitle2"
      // sx={{
      //   margin: "1rem 0 0 0",
      // }}
    >
      Updated on {date.toLocaleDateString("en-US", options)}
    </Typography>
  );
};

export default RecipeUpdated;
