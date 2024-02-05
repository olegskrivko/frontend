import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const SkeletonRecipeCard = () => {
  return (
    <Card>
      <CardContent>
        <Skeleton variant="text" />
      </CardContent>
      <Skeleton variant="rectangular" height={200} />
      <CardContent sx={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
        <Box sx={{ display: "flex" }}>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton sx={{ marginLeft: "6px" }} variant="circular" width={40} height={40} />
        </Box>
        <Skeleton variant="rounded" width={100} height={40} />
      </CardContent>
    </Card>
  );
};

export default SkeletonRecipeCard;
