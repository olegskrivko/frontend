// RecipeCard.js
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
// Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function RecipeCard({ recipe }) {
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
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography
            variant="body1"
            sx={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              fontWeight: "600",
            }}
          >
            <Link to={`/recipes/${recipe._id}`} style={{ textDecoration: "none", color: "inherit" }}>
              {recipe.title}
            </Link>
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          image={recipe.coverImage}
          alt={recipe.title}
          sx={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
          }}
        />

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Box
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTimeIcon color="action" sx={{ mr: 1 }} />
            <Typography color="gray" sx={{ marginRight: "1rem" }}>
              {recipe.totalTime} mins
            </Typography>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
}
