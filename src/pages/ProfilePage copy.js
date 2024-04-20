// import React, { useState } from "react";
// import { Box, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox } from "@mui/material";
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

// const ShoppingList = () => {
//   // Sample shopping list data
//   const [shoppingItems, setShoppingItems] = useState([
//     { id: 1, name: "Tomatoes", quantity: 2, checked: false },
//     { id: 2, name: "Onions", quantity: 3, checked: false },
//     { id: 3, name: "Chicken Breast", quantity: 1, checked: false },
//     { id: 4, name: "Garlic Cloves", quantity: 6, checked: false },
//     // Add more items as needed
//   ]);

//   // Calculate total quantity needed
//   const totalQuantityNeeded = shoppingItems.reduce((total, item) => total + item.quantity, 0);

//   // Handle checkbox toggle
//   const handleCheckboxToggle = (id) => {
//     setShoppingItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
//   };

//   return (
//     <Box>
//       <Typography variant="h6" gutterBottom>
//         Shopping List
//       </Typography>
//       <Typography variant="body1" gutterBottom>
//         Total Quantity Needed: {totalQuantityNeeded}
//       </Typography>
//       <List>
//         {shoppingItems.map((item) => (
//           <ListItem key={item.id} disablePadding>
//             <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
//             <ListItemSecondaryAction>
//               <Checkbox edge="end" checked={item.checked} onChange={() => handleCheckboxToggle(item.id)} />
//             </ListItemSecondaryAction>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };

// const ProfilePage = () => {
// // Dummy data for demonstration
// const user = {
//   name: "John Doe",
//   avatar: "/path/to/avatar.jpg",
//   followers: 1200,
//   following: 560,
//   recipesPrepared: 50,
//   level: 3,
//   nextLevelRecipes: 20,
//   favorites: [
//     { id: 1, title: "Spaghetti Carbonara" },
//     { id: 2, title: "Chicken Tikka Masala" },
//     { id: 3, title: "Vegetable Stir-Fry" },
//   ],
//   ownRecipes: [
//     { id: 4, title: "Chocolate Chip Cookies" },
//     { id: 5, title: "Grilled Salmon with Lemon" },
//   ],
//   reviewedRecipes: [
//     { id: 4, title: "Mango Chips" },
//     { id: 5, title: "Salmon with Lemon" },
//   ],
//   preparedRecipes: [
//     { id: 4, title: "Mango Chips", preparationCount: 5, firstPrepared: "2023-05-15", lastPrepared: "2024-03-20" },
//     { id: 5, title: "Salmon with Lemon", preparationCount: 10, firstPrepared: "2023-07-10", lastPrepared: "2024-04-08" },
//   ],
//   dietaryRestrictions: ["Vegetarian", "Gluten-Free"],
//   kitchenTools: ["Blender", "Oven", "Knife Set", "Mixing Bowls"],
//   mealPlan: [
//     { day: "Monday", recipe: "Spaghetti Carbonara" },
//     { day: "Tuesday", recipe: "Chicken Tikka Masala" },
//     { day: "Wednesday", recipe: "Vegetable Stir-Fry" },
//     { day: "Thursday", recipe: "Grilled Salmon with Lemon" },
//     { day: "Friday", recipe: "Chocolate Chip Cookies" },
//     { day: "Saturday", recipe: "Pizza" },
//     { day: "Sunday", recipe: "Pasta with Mushrooms" },
//   ],
//   socialProfiles: {
//     facebook: "https://www.facebook.com/johndoe",
//     twitter: "https://twitter.com/johndoe",
//     instagram: "https://www.instagram.com/johndoe/",
//   },
//   bio: "Passionate home cook exploring new recipes and flavors. Follow me for tasty inspiration!",
// };

// // Dummy user type based on questionnaire
// const userType = "Family Person"; // Example user type

//   return (
//     <>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={3}>
//           <Paper style={{ padding: "1rem", textAlign: "center" }}>
//             <Avatar alt={user.name} src={user.avatar} sx={{ width: 150, height: 150, margin: "auto" }} />
//             <Typography variant="h6" gutterBottom sx={{ marginTop: "1rem" }}>
//               {user.name}
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               Followers: {user.followers} | Following: {user.following}
//             </Typography>
//             <Button variant="outlined" startIcon={<EditIcon />} component={Link} to="/edit-profile" sx={{ marginTop: "1rem" }}>
//               Edit Profile
//             </Button>
//           </Paper>
//           <Paper sx={{ padding: "1rem", marginTop: "1rem" }}>
//             <Typography variant="h6" gutterBottom>
//               Social Network Profiles
//             </Typography>
//             <Divider sx={{ my: "0.5rem" }} />
//             <Typography variant="body1" gutterBottom>
//               <FacebookIcon sx={{ marginRight: "0.5rem" }} />
//               <Link href={user.socialProfiles.facebook} target="_blank" rel="noopener noreferrer">
//                 Facebook
//               </Link>
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               <TwitterIcon sx={{ marginRight: "0.5rem" }} />
//               <Link href={user.socialProfiles.twitter} target="_blank" rel="noopener noreferrer">
//                 Twitter
//               </Link>
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               <InstagramIcon sx={{ marginRight: "0.5rem" }} />
//               <Link href={user.socialProfiles.instagram} target="_blank" rel="noopener noreferrer">
//                 Instagram
//               </Link>
//             </Typography>
//           </Paper>
//           <Paper sx={{ padding: "1rem", marginTop: "1rem" }}>
//             <Typography variant="h6" gutterBottom>
//               Bio
//             </Typography>
//             <Divider sx={{ my: "0.5rem" }} />
//             <Typography variant="body1" gutterBottom>
//               {user.bio}
//             </Typography>
//           </Paper>
//           <Paper sx={{ padding: "1rem", marginTop: "1rem" }}>
//             <Typography variant="h6" gutterBottom>
//               Pages
//             </Typography>
//             <Divider sx={{ my: "0.5rem" }} />
//             <Typography variant="body1" gutterBottom>
//               Favorites Recipes
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               Own Recipes
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               Shopping List Recipes
//             </Typography>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={9}>
//           <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
// <Paper style={{ padding: "1rem" }}>
//   <Typography variant="h6" gutterBottom>
//     User Statistics
//   </Typography>
//   <Divider sx={{ my: "0.5rem" }} />
//   <Typography variant="body1" gutterBottom>
//     Recipes Prepared: {user.recipesPrepared}
//   </Typography>
//   <Typography variant="body1" gutterBottom>
//     Level: {user.level}
//   </Typography>
//   <Typography variant="body1" gutterBottom>
//     Recipes to Next Level: {user.nextLevelRecipes}
//   </Typography>
// </Paper>
//           {/* </Grid>
//         <Grid item xs={12} md={6}> */}
//           <Paper style={{ padding: "1rem" }}>
//             <Typography variant="h6" gutterBottom>
//               User Type
//             </Typography>
//             <Divider sx={{ my: "0.5rem" }} />
//             <Typography variant="body1" gutterBottom>
//               {`You are a ${userType}.`}
//             </Typography>
//             <Typography variant="body2" gutterBottom>
//               {userType === "Student" ? "As a student, you may want to focus on budget-friendly recipes." : userType === "Family Person" ? "As a family person, you may want to prioritize simple and diverse meals to feed your family." : userType === "Sporty Type" ? "As a sporty type, you may need protein-rich meals to support your athletic lifestyle." : ""}
//             </Typography>
//           </Paper>
//           </Grid>
//       </Grid>

// //           <Paper style={{ padding: "1rem" }}>
// // <Typography variant="h6" gutterBottom>
// //   Favorites Recipes
// // </Typography>
// // <List>
// //   {user.favorites.map((recipe) => (
//     <ListItem key={recipe.id} disableGutters>
//       <ListItemAvatar>
//         <Avatar>
//           <FavoriteIcon />
//         </Avatar>
//       </ListItemAvatar>
//       <ListItemText primary={recipe.title} />
//       <ListItemSecondaryAction>
//         <IconButton edge="end">
//           <BookmarkIcon />
//         </IconButton>
//       </ListItemSecondaryAction>
//     </ListItem>
//   ))}
// </List>
// <Divider sx={{ my: "1rem" }} />
// <Typography variant="h6" gutterBottom>
//   Own Recipes
// </Typography>
// <List>
//   {user.ownRecipes.map((recipe) => (
//     <ListItem key={recipe.id} disableGutters>
//       <ListItemAvatar>
//         <Avatar>
//           <RecipeIcon />
//         </Avatar>
//       </ListItemAvatar>
//       <ListItemText primary={recipe.title} />
//       <ListItemSecondaryAction>
//         <IconButton edge="end">
//           <EditIcon />
//         </IconButton>
//       </ListItemSecondaryAction>
//     </ListItem>
//   ))}
// </List>
//             <Divider sx={{ my: "1rem" }} />
//             <ShoppingList />
//             <Divider sx={{ my: "1rem" }} />
//             <CookingAchievements />
//             <Divider sx={{ my: "1rem" }} />
// <Typography variant="h6" gutterBottom>
//   Reviewed Recipes
// </Typography>
// <List>
//   {user.reviewedRecipes.map((recipe) => (
//     <ListItem key={recipe.id} disableGutters>
//       <ListItemAvatar>
//         <Avatar>
//           <ReviewsIcon />
//         </Avatar>
//       </ListItemAvatar>
//       <ListItemText primary={recipe.title} />
//       <ListItemSecondaryAction>
//         <IconButton edge="end">
//           <EditIcon />
//         </IconButton>
//       </ListItemSecondaryAction>
//     </ListItem>
//   ))}
// </List>
// <Divider sx={{ my: "1rem" }} />
// <Typography variant="h6" gutterBottom>
//   Prepared Recipes
// </Typography>
// <List>
//   {user.preparedRecipes.map((recipe) => (
//     <ListItem key={recipe.id} disableGutters>
//       <ListItemAvatar>
//         <Avatar>
//           <ReviewsIcon />
//         </Avatar>
//       </ListItemAvatar>
//       <ListItemText primary={recipe.title} secondary={`Prepared: ${recipe.preparationCount} times | First Time: ${recipe.firstPrepared} | Last Time: ${recipe.lastPrepared}`} />
//       <ListItemSecondaryAction>
//         <IconButton edge="end">
//           <EditIcon />
//         </IconButton>
//       </ListItemSecondaryAction>
//     </ListItem>
//   ))}
// </List>
//             <Divider sx={{ my: "1rem" }} />
//             <Typography variant="h6" gutterBottom>
//               Dietary Restrictions
//             </Typography>
//             <List>
//               {user.dietaryRestrictions.map((restriction, index) => (
//                 <ListItem key={index}>
//                   <ListItemText primary={restriction} />
//                 </ListItem>
//               ))}
//             </List>
//             <Divider sx={{ my: "1rem" }} />
// <Typography variant="h6" gutterBottom>
//   Kitchen Tools
// </Typography>
// <List>
//   {user.kitchenTools.map((tool, index) => (
//     <ListItem key={index}>
//       <ListItemAvatar>
//         <Avatar>
//           <KitchenIcon />
//         </Avatar>
//       </ListItemAvatar>
//       <ListItemText primary={tool} />
//     </ListItem>
//   ))}
// </List>
// <Divider sx={{ my: "1rem" }} />
//             <Typography variant="h6" gutterBottom>
//               Meal Planner
//             </Typography>
//             <List>
//               {user.mealPlan.map((item, index) => (
//                 <ListItem key={index}>
//                   <ListItemAvatar>
//                     <Avatar>
//                       <EventIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText primary={`${item.day}: ${item.recipe}`} />
//                 </ListItem>
//               ))}
//             </List>
//           </Paper>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default ProfilePage;

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
import NoMealsIcon from "@mui/icons-material/NoMeals";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ReviewsIcon from "@mui/icons-material/Reviews";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

import ShoppingList from "../components/profile/ShoppingList";
import CookingAchievements from "../components/profile/CookingAchievements";
import FavoritesRecipes from "../components/profile/FavoritesRecipes";
import MyRecipes from "../components/profile/MyRecipes";
import ReviewedRecipes from "../components/profile/ReviewedRecipes";
import PreparedRecipes from "../components/profile/PreparedRecipes";
import DietaryRestrictions from "../components/profile/DietaryRestrictions";
import KitchenTools from "../components/profile/KitchenTools";
import MealPlanner from "../components/profile/MealPlanner";

// import { Box, Typography, Paper, Divider, Tab, Tabs, Grid } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import RecipeIcon from "@mui/icons-material/Receipt";
// import ReviewsIcon from "@mui/icons-material/Reviews";
// import EventIcon from "@mui/icons-material/Event";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import KitchenIcon from "@mui/icons-material/Kitchen";

// import CookingAchievements from "../components/CookingAchievements";
// import { Link } from "react-router-dom";
// const ProfilePage = ({user}) => {
const ProfilePage = () => {
  // Dummy data for demonstration
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

  // Dummy user type based on questionnaire
  const userType = "Family Person"; // Example user type
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <Paper style={{ padding: "1rem", textAlign: "center" }}>
          <Typography variant="h6" color="textSecondary" gutterBottom sx={{ textAlign: "start" }}>
            PERSONAL
          </Typography>
          <Avatar alt={user.name} src={user.avatar} sx={{ width: 150, height: 150, margin: "auto" }} />
          <Typography variant="h6" gutterBottom sx={{ marginTop: "1rem" }}>
            {user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Followers: {user.followers} | Following: {user.following}
          </Typography>
          {/* <Typography variant="h6" gutterBottom>
            Bio
          </Typography> */}
          <Divider sx={{ my: "0.5rem" }} />
          <Typography sx={{ padding: "1rem", textAlign: "start" }} variant="body1" gutterBottom>
            {user.bio}
          </Typography>
          {/* <Typography variant="h6" gutterBottom>
            Social Networks
          </Typography> */}
          <Divider sx={{ my: "0.5rem" }} />
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start", padding: "1rem" }}>
            <Typography variant="body1" gutterBottom sx={{ paddingTop: "0.4rem", paddingBottom: "0.4rem", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <FacebookIcon sx={{ marginRight: "0.5rem" }} />
              <Link href={user.socialProfiles.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </Link>
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ paddingTop: "0.4rem", paddingBottom: "0.4rem", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <LanguageIcon sx={{ marginRight: "0.5rem" }} />
              <Link href={user.socialProfiles.website} target="_blank" rel="noopener noreferrer">
                Website
              </Link>
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ paddingTop: "0.4rem", paddingBottom: "0.4rem", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <InstagramIcon sx={{ marginRight: "0.5rem" }} />
              <Link href={user.socialProfiles.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </Link>
            </Typography>
          </Box>
          <Box>
            <Button sx={{ display: "flex", justifyContent: "start", marginBottom: "0.8rem" }} variant="outlined" size="small" startIcon={<EditIcon />} component={Link} to="/edit-profile">
              Edit Profile
            </Button>
            <Button sx={{ display: "flex", justifyContent: "start" }} variant="outlined" size="small" startIcon={<SettingsIcon />} component={Link} to="/settings-profile">
              Profile Settings
            </Button>
          </Box>
        </Paper>
        {/* <Paper sx={{ padding: "1rem", marginTop: "1rem" }}>
          <Typography variant="h6" gutterBottom>
            Social Networks
          </Typography>
          <Divider sx={{ my: "0.5rem" }} />
          <Typography variant="body1" gutterBottom>
            <FacebookIcon sx={{ marginRight: "0.5rem" }} />
            <Link href={user.socialProfiles.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </Link>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <TwitterIcon sx={{ marginRight: "0.5rem" }} />
            <Link href={user.socialProfiles.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </Link>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <InstagramIcon sx={{ marginRight: "0.5rem" }} />
            <Link href={user.socialProfiles.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </Link>
          </Typography>
        </Paper> */}

        <Paper style={{ padding: "1rem", marginTop: "1rem" }}>
          <Typography variant="h6" color="textSecondary" gutterBottom sx={{ textAlign: "start" }}>
            WORKSPACE
          </Typography>
          <Tabs value={tabIndex} onChange={handleTabChange} orientation="vertical" variant="scrollable" textColor="primary" indicatorColor="primary">
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FavoriteIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Favorites Recipes</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <MenuBookIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">My Recipes</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ShoppingCartIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Shopping List</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <EmojiEventsIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Achievements</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ReviewsIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Reviewed Recipes</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <RecipeIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Prepared Recipes</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <NoMealsIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Diet Restrictions</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <KitchenIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Kitchen Tools</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <EventIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Meal Planner</Typography>
                </Box>
              }
            />
            {/* <Tab label="Own Recipes" icon={<RecipeIcon />} />
            <Tab label="Shopping List" icon={<BookmarkIcon />} />
            <Tab label="Cooking Achievements" icon={<BookmarkIcon />} />
            <Tab label="Reviewed Recipes" icon={<ReviewsIcon />} />
            <Tab label="Prepared Recipes" icon={<ReviewsIcon />} />
            <Tab label="Dietary Restrictions" icon={<BookmarkIcon />} />
            <Tab label="Kitchen Tools" icon={<KitchenIcon />} />
            <Tab label="Meal Planner" icon={<EventIcon />} /> */}
            <Divider sx={{ my: "1rem" }} />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LogoutIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Log out</Typography>
                </Box>
              }
            />
          </Tabs>
        </Paper>
      </Grid>
      <Grid item xs={12} md={9}>
        {/* Display content based on selected tab */}
        {tabIndex === 0 && (
          <Paper style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <FavoritesRecipes />
            </Typography>
          </Paper>
        )}
        {tabIndex === 1 && (
          <Paper style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <MyRecipes />
            </Typography>
          </Paper>
        )}
        {tabIndex === 2 && (
          <Paper style={{ padding: "1rem" }}>
            <ShoppingList />
          </Paper>
        )}
        {tabIndex === 3 && (
          <Paper style={{ padding: "1rem" }}>
            <CookingAchievements />
          </Paper>
        )}
        {tabIndex === 4 && (
          <Paper style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <ReviewedRecipes />
            </Typography>
          </Paper>
        )}
        {tabIndex === 5 && (
          <Paper style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <PreparedRecipes />
            </Typography>
          </Paper>
        )}
        {tabIndex === 6 && (
          <Paper style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <DietaryRestrictions />
            </Typography>
          </Paper>
        )}
        {tabIndex === 7 && (
          <Paper style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <KitchenTools />
            </Typography>
          </Paper>
        )}
        {tabIndex === 8 && (
          <Paper style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <MealPlanner />
            </Typography>
          </Paper>
        )}
      </Grid>
    </Grid>
  );
};

export default ProfilePage;

// "Local Spotlight"
// "Community Showcase"
// "Neighbor Profiles"
// "Small Business Showcase"
// "Local Talent Hub"
// For the page where people can buy fresh veggies from locals and locals can add their products, you could call it:

// "Farmers Market"
// "Local Produce Market"
// "Fresh Harvest Hub"
// "Community Garden Marketplace"
// "Locally Grown Goods"
