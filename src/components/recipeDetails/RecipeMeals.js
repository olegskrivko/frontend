import React from "react";

// React MUI components
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

const RecipeMeals = ({ meals }) => {
  return (
    <Box>
      {meals.map((meal, index) => (
        <Chip key={meal._id} size="small" label={meal.name} style={{ marginRight: 5, marginBottom: 5, backgroundColor: "#424242", color: "#ffffff", textTransform: "Capitalize" }} />
      ))}
    </Box>
  );
};

export default RecipeMeals;
