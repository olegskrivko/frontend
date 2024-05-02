import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Box, Tab, Drawer, Tabs, Grid, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox } from "@mui/material";
import Avatar from "@mui/material/Avatar";

// import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Link as MuiLink } from "@mui/material";
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
import PersonIcon from "@mui/icons-material/Person";
import ShoppingList from "../components/profile/ShoppingList";
import CookingAchievements from "../components/profile/CookingAchievements";
import FavoriteRecipes from "../components/profile/FavoriteRecipes";
import MyRecipes from "../components/profile/MyRecipes";
import ReviewedRecipes from "../components/profile/ReviewedRecipes";
import PreparedRecipes from "../components/profile/PreparedRecipes";
import DietaryRestrictions from "../components/profile/DietaryRestrictions";
import KitchenTools from "../components/profile/KitchenTools";
import MealPlanner from "../components/profile/MealPlanner";
import MyAccount from "../components/profile/MyAccount";
import Marketplace from "../components/profile/Marketplace";
import StoreIcon from "@mui/icons-material/Store";
import { BASE_URL } from "../middleware/config";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useAuth } from "../middleware/AuthContext";
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
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
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

  const handleLogout = () => {
    console.log("Logging out...");
    logout();
    console.log("Logout successful");
    navigate("/"); // Redirect to the homepage after logout
  };

  return (
    <Grid container spacing={3}>
      {/* Button to toggle the drawer */}

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        variant="temporary"
        sx={{
          display: { xs: "block", md: "none" }, // Show only on small screens
        }}
      >
        {/* <MyAccount /> */}
        <Box style={{ marginTop: "3rem" }}>
          <Avatar alt={user.name} src={user.avatar} sx={{ width: 150, height: 150, margin: "auto" }} />
          <Typography variant="h6" gutterBottom sx={{ marginTop: "1rem", textAlign: "center" }}>
            {user.name}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" sx={{ textAlign: "center" }}>
            Followers: {user.followers} | Following: {user.following}
          </Typography> */}
          <Divider sx={{ my: "0.5rem" }} />
          {/* <Divider sx={{ my: "0.5rem" }} /> */}
          {/* <Typography sx={{ padding: "1rem", textAlign: "start" }} variant="body1" gutterBottom>
            {user.bio}
          </Typography> */}
          {/* <Divider sx={{ my: "0.5rem" }} /> */}
          {/* <Box style={{ padding: "1rem" }}>
            <Typography variant="h6" gutterBottom>
              User Statistics
            </Typography>
            <Divider sx={{ my: "0.5rem" }} />
            <Typography variant="body1" gutterBottom>
              Recipes Prepared: {user.recipesPrepared}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Level: {user.level}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Recipes to Next Level: {user.nextLevelRecipes}
            </Typography>
          </Box> */}
        </Box>

        <Box style={{ padding: "0 1rem", minWidth: "300px" }}>
          {/* <Typography variant="h6" color="textSecondary" gutterBottom sx={{ textAlign: "start" }}>
            WORKSPACE
          </Typography> */}
          <Tabs value={tabIndex} onChange={handleTabChange} orientation="vertical" variant="scrollable" textColor="primary" indicatorColor="primary">
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <PersonIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">My Account</Typography>
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
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FavoriteIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Favorite Recipes</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <StoreIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Marketplace</Typography>
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
            <Divider />

            {/* <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LogoutIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Log out</Typography>
                </Box>
              }
            /> */}
            {isAuthenticated() && (
              <Tab
                sx={{ display: "flex", alignItems: "start" }}
                label={
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Link to="/logout" style={{ color: "#757575", display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none" }}>
                      <LogoutIcon sx={{ marginRight: 1 }} />
                      <Box onClick={handleLogout} sx={{ fontWeight: "400" }}>
                        Logout
                      </Box>
                    </Link>
                  </Box>
                }
              />
              // <Link to="/auth">
              //   <Button onClick={handleLogout} sx={{ color: "#fff", fontWeight: "400" }}>
              //     Logout
              //   </Button>
              // </Link>
            )}
          </Tabs>
          {/* <Button onClick={handleDrawerToggle}>Toggle Sidebar</Button> */}
        </Box>
      </Drawer>

      <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
        {/* <MyAccount /> */}
        <Box style={{ padding: "1rem" }}>
          {/* <Typography variant="h6" color="textSecondary" gutterBottom sx={{ textAlign: "start" }}>
            WORKSPACE
          </Typography> */}
          <Tabs value={tabIndex} onChange={handleTabChange} orientation="vertical" variant="scrollable" textColor="primary" indicatorColor="primary">
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <PersonIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">My Account</Typography>
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
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FavoriteIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Favorite Recipes</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <StoreIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Marketplace</Typography>
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
            {/* <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LogoutIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Log out</Typography>
                </Box>
              }
            /> */}
            {isAuthenticated() && (
              <Tab
                sx={{ display: "flex", alignItems: "start" }}
                label={
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Link to="/logout" style={{ color: "#757575", display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none" }}>
                      <LogoutIcon sx={{ marginRight: 1 }} />
                      <Box onClick={handleLogout} sx={{ fontWeight: "400" }}>
                        Logout
                      </Box>
                    </Link>
                  </Box>
                }
              />
            )}
          </Tabs>
        </Box>
      </Grid>
      <Grid item xs={12} md={9}>
        <Button onClick={handleDrawerToggle}>Toggle Sidebarx</Button>
        {/* <Button onClick={handleDrawerToggle} style={{ margin: "8px ", color: "white" }} sx={{ display: { xs: "flex", md: "none", position: "fixed", bottom: "100px", backgroundColor: "orange", justifyContent: "center", alignItems: "center" } }}>
          <KeyboardDoubleArrowRightIcon style={{ margin: "8px " }} />
        </Button> */}
        {/* Display content based on selected tab */}
        {tabIndex === 0 && (
          <Box style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <MyAccount />
            </Typography>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <MyRecipes />
            </Typography>
          </Box>
        )}
        {tabIndex === 2 && (
          <Box style={{ padding: "1rem" }}>
            <ShoppingList />
          </Box>
        )}
        {tabIndex === 3 && (
          <Box style={{ padding: "1rem" }}>
            <CookingAchievements />
          </Box>
        )}
        {tabIndex === 4 && (
          <Box style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <ReviewedRecipes />
            </Typography>
          </Box>
        )}
        {tabIndex === 5 && (
          <Box style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <PreparedRecipes />
            </Typography>
          </Box>
        )}
        {tabIndex === 6 && (
          <Box style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <DietaryRestrictions />
            </Typography>
          </Box>
        )}
        {tabIndex === 7 && (
          <Box style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <KitchenTools />
            </Typography>
          </Box>
        )}
        {tabIndex === 8 && (
          <Box style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <MealPlanner />
            </Typography>
          </Box>
        )}
        {tabIndex === 9 && (
          <Box style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <FavoriteRecipes />
            </Typography>
          </Box>
        )}

        {tabIndex === 10 && (
          <Box style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <Marketplace />
            </Typography>
          </Box>
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
