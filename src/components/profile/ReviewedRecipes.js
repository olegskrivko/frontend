import React, { useState } from "react";
import { Box, Tab, Tabs, Grid, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox } from "@mui/material";
import Avatar from "@mui/material/Avatar";

// import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

import ListItemAvatar from "@mui/material/ListItemAvatar";

import FavoriteIcon from "@mui/icons-material/Favorite";
import PeopleIcon from "@mui/icons-material/People";
import RecipeIcon from "@mui/icons-material/Receipt";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import KitchenIcon from "@mui/icons-material/Kitchen";

import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ReviewsIcon from "@mui/icons-material/Reviews";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link } from "react-router-dom";

function ReviewedRecipes() {
  const user = {
    name: "John Doe",
    avatar: "/path/to/avatar.jpg",
    followers: 1200,
    following: 560,
    recipesPrepared: 50,
    level: 3,
    nextLevelRecipes: 20,
    favorites: [
      { id: 1, title: "Spaghetti Carbonara" },
      { id: 2, title: "Chicken Tikka Masala" },
      { id: 3, title: "Vegetable Stir-Fry" },
    ],
    ownRecipes: [
      { id: 4, title: "Chocolate Chip Cookies" },
      { id: 5, title: "Grilled Salmon with Lemon" },
    ],
    reviewedRecipes: [
      { id: 4, title: "Mango Chips" },
      { id: 5, title: "Salmon with Lemon" },
    ],
    preparedRecipes: [
      { id: 4, title: "Mango Chips", preparationCount: 5, firstPrepared: "2023-05-15", lastPrepared: "2024-03-20" },
      { id: 5, title: "Salmon with Lemon", preparationCount: 10, firstPrepared: "2023-07-10", lastPrepared: "2024-04-08" },
    ],
    dietaryRestrictions: ["Vegetarian", "Gluten-Free"],
    kitchenTools: ["Blender", "Oven", "Knife Set", "Mixing Bowls"],
    mealPlan: [
      { day: "Monday", recipe: "Spaghetti Carbonara" },
      { day: "Tuesday", recipe: "Chicken Tikka Masala" },
      { day: "Wednesday", recipe: "Vegetable Stir-Fry" },
      { day: "Thursday", recipe: "Grilled Salmon with Lemon" },
      { day: "Friday", recipe: "Chocolate Chip Cookies" },
      { day: "Saturday", recipe: "Pizza" },
      { day: "Sunday", recipe: "Pasta with Mushrooms" },
    ],
    socialProfiles: {
      facebook: "https://www.facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/johndoe/",
    },
    bio: "Passionate home cook exploring new recipes and flavors. Follow me for tasty inspiration!",
  };
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Reviewed Recipes
      </Typography>
      <Divider sx={{ my: "1rem" }} />
      <List>
        {user.reviewedRecipes.map((recipe) => (
          <ListItem key={recipe.id} disableGutters>
            <ListItemAvatar>
              <Avatar>
                <ReviewsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={recipe.title} />
            <ListItemSecondaryAction>
              <IconButton edge="end">
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default ReviewedRecipes;
