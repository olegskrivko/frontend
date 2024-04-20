import React, { useState } from "react";
import { Box, Typography, Divider, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox } from "@mui/material";
// import Avatar from "@mui/material/Avatar";

// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import Divider from "@mui/material/Divider";

// import ListItemAvatar from "@mui/material/ListItemAvatar";

// import FavoriteIcon from "@mui/icons-material/Favorite";
// import PeopleIcon from "@mui/icons-material/People";
// import RecipeIcon from "@mui/icons-material/Receipt";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import KitchenIcon from "@mui/icons-material/Kitchen";

// import IconButton from "@mui/material/IconButton";
// import EditIcon from "@mui/icons-material/Edit";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import ReviewsIcon from "@mui/icons-material/Reviews";
// import EventIcon from "@mui/icons-material/Event";
// import CookingAchievements from "../components/CookingAchievements";
// import { Link } from "react-router-dom";

const ShoppingList = () => {
  // Sample shopping list data
  const [shoppingItems, setShoppingItems] = useState([
    { id: 1, name: "Tomatoes", quantity: 2, checked: false },
    { id: 2, name: "Onions", quantity: 3, checked: false },
    { id: 3, name: "Chicken Breast", quantity: 1, checked: false },
    { id: 4, name: "Garlic Cloves", quantity: 6, checked: false },
    // Add more items as needed
  ]);

  // Calculate total quantity needed
  const totalQuantityNeeded = shoppingItems.reduce((total, item) => total + item.quantity, 0);

  // Handle checkbox toggle
  const handleCheckboxToggle = (id) => {
    setShoppingItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Shopping List
      </Typography>
      <Divider sx={{ my: "1rem" }} />
      <Typography variant="body1" gutterBottom>
        Total Quantity Needed: {totalQuantityNeeded}
      </Typography>
      <List>
        {shoppingItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
            <ListItemSecondaryAction>
              <Checkbox edge="end" checked={item.checked} onChange={() => handleCheckboxToggle(item.id)} />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ShoppingList;
