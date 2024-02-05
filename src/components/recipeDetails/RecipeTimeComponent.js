import React from "react";

// React MUI components

import Typography from "@mui/material/Typography";

const RecipeTimeComponent = ({ recipe, targetLabel }) => {
  const getTimeByLabel = (times, label) => {
    const timeObj = times.find((time) => time.label === label);
    return timeObj ? `${timeObj.hours} h ${timeObj.minutes} min` : "Time not found";
  };

  return <Typography>{`${targetLabel} ${getTimeByLabel(recipe.times, targetLabel)}`}</Typography>;
};

export default RecipeTimeComponent;
