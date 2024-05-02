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
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    // <Grid
    //   item
    //   xs={6}
    //   sm={6}
    //   md={6}
    //   lg={12}
    //   sx={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "100%",
    //   }}
    // >
    <Card
      sx={{
        overflow: "hidden", // Ensure that the overflow is hidden to prevent zooming out of borders
        "&:hover img": {
          transform: "scale(1.05)", // Adjust the scale value for your desired zoom level
          transition: "transform 0.5s ease", // Adjust the transition speed
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
      <Box
        sx={{
          overflow: "hidden", // Ensure that the overflow is hidden to prevent zooming out of borders
        }}
      >
        <CardMedia
          component="img"
          image={recipe.coverImage}
          alt={recipe.title}
          sx={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
            transition: "transform 0.5s ease", // Adjust the transition speed
            transform: isHovered ? "scale(1.05)" : "scale(1)", // Initial scale is 1
          }}
        />
      </Box>
      <CardActions disableSpacing sx={{ padding: "0.3rem 0" }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
        <Box
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <AccessTimeIcon color="action" sx={{ mr: 1 }} /> */}
          <Typography color="gray" sx={{ marginRight: "1rem" }}>
            {recipe.totalTime} mins
          </Typography>
        </Box>
      </CardActions>
    </Card>
    // </Grid>
  );
}
