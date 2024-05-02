// RecipeCardCollection.js
import React from "react";
import { Link } from "react-router-dom";
// React MUI
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import DefaultCollection from "../images/collections/appetizers-and-finger-foods.jpg";

// Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function RecipeCard({ collection }) {
  // const imagePath = `../../public/collections/${collection.imageUrl}`;
  // console.log("imagePath", imagePath);
  return (
    <Grid
      item
      xs={6}
      sm={6}
      md={4}
      lg={4}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Card sx={{ maxWidth: 345, boxShadow: "none" }}>
        {/* <CardMedia
          component="img"
          src={DefaultCollection}
          alt={collection.name}
          sx={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
          }}
        /> */}
        <CardMedia
          component="img"
          src={collection.coverImage}
          alt={collection.name}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
          }}
        />

        {/* <CardContent> */}
        <Typography
          variant="body1"
          sx={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            fontWeight: "600",
            padding: "4px 0",
          }}
        >
          <Link to={`/recipes/${collection._id}`} style={{ textDecoration: "none", color: "inherit" }}>
            {collection.title}
          </Link>
        </Typography>
      </Card>
    </Grid>
  );
}
