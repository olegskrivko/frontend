import React from "react";

// React MUI components
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

const RecipeTags = ({ tags }) => {
  return (
    <Box style={{ marginTop: 10 }}>
      {tags.map((tag, index) => (
        <Chip key={index} label={tag} style={{ marginRight: 5, marginBottom: 5, backgroundColor: "#424242", color: "#ffffff", textTransform: "Capitalize" }} />
      ))}
    </Box>
  );
};

export default RecipeTags;
