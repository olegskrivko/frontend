import React, { useState } from "react";

// React MUI components
import Typography from "@mui/material/Typography";

const RecipeDescription = ({ recipe }) => {
  const [expanded, setExpanded] = useState(false);
  const { description } = recipe;

  const truncatedDescription = expanded ? description : `${description.slice(0, 150)}...`;
  const linkText = expanded ? "Read Less" : "Read More";

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Typography variant="body2" sx={{ textAlign: "justify" }}>
        {truncatedDescription}
        {description.length > 150 && (
          <span>
            <Typography variant="body2" color="primary" sx={{ cursor: "pointer", display: "inline-block" }} onClick={handleToggleExpand}>
              {linkText}
            </Typography>
          </span>
        )}
      </Typography>
    </div>
  );
};

export default RecipeDescription;
