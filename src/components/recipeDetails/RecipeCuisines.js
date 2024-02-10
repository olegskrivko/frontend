import React from "react";

// React MUI components
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

const RecipeCuisines = ({ cuisines }) => {
  return (
    <Box>
      {cuisines.map((cuisine, index) => (
        <Chip key={cuisine._id} size="small" label={cuisine.name} style={{ marginRight: 5, marginBottom: 5, backgroundColor: "#424242", color: "#ffffff", textTransform: "Capitalize" }} />
      ))}
    </Box>
  );
};

export default RecipeCuisines;
