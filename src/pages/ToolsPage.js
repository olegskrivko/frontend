import React, { useState, useContext } from "react";
import { PageContext } from "../App";
import { Box, Tab, Drawer, Tabs, Grid, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useLocation, useNavigate } from "react-router-dom";

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
import PersonIcon from "@mui/icons-material/Person";
import ShoppingList from "../components/profile/ShoppingList";
import CookingAchievements from "../components/profile/CookingAchievements";
import FavoritesRecipes from "../components/profile/FavoritesRecipes";
import MyRecipes from "../components/profile/MyRecipes";
import ScaleIcon from "@mui/icons-material/Scale";
import ReviewedRecipes from "../components/profile/ReviewedRecipes";
import PreparedRecipes from "../components/profile/PreparedRecipes";
import DietaryRestrictions from "../components/profile/DietaryRestrictions";
import KitchenTools from "../components/profile/KitchenTools";
import MealPlanner from "../components/profile/MealPlanner";
import MyAccount from "../components/profile/MyAccount";
import Marketplace from "../components/profile/Marketplace";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import StoreIcon from "@mui/icons-material/Store";
import WeightTool from "../components/converters/WeightTool";
import TimeTool from "../components/converters/TimeTool";
import VolumeTool from "../components/converters/VolumeTool";
import CalorieBurnerCalculator from "../components/converters/CalorieBurnerCalculator";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import TemperatureTool from "../components/converters/TemperatureTool";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KitchenConversionChart from "../components/converters/KitchenConversionChart";
import TocIcon from "@mui/icons-material/Toc";
import KitchenAbbreviationsList from "../components/converters/KitchenAbbreviationsList";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import KitchenAlarmTool from "../components/converters/KitchenAlarmTool";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

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
const ToolsPage = () => {
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

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Grid container spacing={3}>
      <Button onClick={handleDrawerToggle} style={{ margin: "8px ", color: "white" }} sx={{ display: { xs: "flex", md: "none", position: "fixed", bottom: "100px", backgroundColor: "orange", justifyContent: "center", alignItems: "center" } }}>
        <KeyboardDoubleArrowRightIcon style={{ margin: "8px " }} />
      </Button>
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
        <Box style={{ width: "100%", height: "3.5rem", backgroundColor: "orange", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography variant="h6" component="div">
            <Link to="/" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center" }}>
              <LocalFireDepartmentIcon sx={{ marginRight: 0.4 }} /> Cookify
            </Link>
          </Typography>
        </Box>

        <Box style={{ padding: "0 1rem" }}>
          {/* <Typography variant="h6" color="textSecondary" gutterBottom sx={{ textAlign: "start" }}>
            WORKSPACE
          </Typography> */}
          <Tabs value={tabIndex} onChange={handleTabChange} orientation="vertical" variant="scrollable" textColor="primary" indicatorColor="primary" sx={{ marginTop: "1rem" }}>
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ScaleIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Weight</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ThermostatIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Temperature</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AccessTimeIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Time</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocalDrinkIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Volume</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <TocIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Kitchen Conversions</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FormatSizeIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Kitchen Abbreviations</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AccessAlarmIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Kitchen Alarm</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <WhatshotIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Cal Burner</Typography>
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
            {/* <Divider sx={{ my: "1rem" }} /> */}
          </Tabs>
          {/* <Button onClick={handleDrawerToggle}>Toggle Sidebar</Button> */}
        </Box>
      </Drawer>

      <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
        {/* <MyAccount /> */}
        <Box style={{ padding: "1rem" }}>
          {/* <Typography variant="h6" color="textSecondary" gutterBottom sx={{ textAlign: "start" }}>
            Converters
          </Typography> */}
          <Tabs value={tabIndex} onChange={handleTabChange} orientation="vertical" variant="scrollable" textColor="primary" indicatorColor="primary">
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ScaleIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Weight</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ThermostatIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Temperature</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AccessTimeIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Time</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocalDrinkIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Volume</Typography>
                </Box>
              }
            />

            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <TocIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Chart</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FormatSizeIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Abbreviations</Typography>
                </Box>
              }
            />
            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AccessAlarmIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Kitchen Alarm</Typography>
                </Box>
              }
            />

            <Tab
              sx={{ display: "flex", alignItems: "start" }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <WhatshotIcon sx={{ marginRight: 1 }} />
                  <Typography variant="body1">Cal Burner</Typography>
                </Box>
              }
            />

            {/* <Divider sx={{ my: "1rem" }} /> */}
          </Tabs>
        </Box>
      </Grid>
      <Grid item xs={12} md={9}>
        {/* <Button onClick={handleDrawerToggle} sx={{ display: { xs: "block", md: "none", position: "absolute", top: "50px" } }}>
          <KeyboardDoubleArrowRightIcon />
        </Button> */}
        {/* Display content based on selected tab */}
        {tabIndex === 0 && (
          <Box style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <WeightTool />
            </Typography>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <TemperatureTool />
            </Typography>
          </Box>
        )}

        {tabIndex === 2 && (
          <Box style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <TimeTool />
            </Typography>
          </Box>
        )}
        {tabIndex === 3 && (
          <Box style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <VolumeTool />
            </Typography>
          </Box>
        )}
        {tabIndex === 4 && (
          <Box style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <KitchenConversionChart />
            </Typography>
          </Box>
        )}
        {tabIndex === 5 && (
          <Box style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <KitchenAbbreviationsList />
            </Typography>
          </Box>
        )}
        {tabIndex === 6 && (
          <Box style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <KitchenAlarmTool />
            </Typography>
          </Box>
        )}

        {tabIndex === 7 && (
          <Box style={{ padding: "1rem" }}>
            <Typography variant="body1">
              <CalorieBurnerCalculator />
            </Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default ToolsPage;
// Ingredient Substitution: Allow users to find substitutes for ingredients they may not have on hand. For example, if a recipe calls for buttermilk but the user doesn't have any, they could use the substitution tool to find an appropriate substitute like milk with lemon juice or vinegar.
// Temperature Conversion: Include a tool for converting between Celsius and Fahrenheit, as some recipes may use one measurement while others use the other.
// Volume Conversion: In addition to the basic unit conversion tool, you could include a separate tool specifically for converting between different volume measurements like cups, tablespoons, and milliliters.
// Weight Conversion: Similarly, you could include a tool specifically for converting between different weight measurements like grams, ounces, and pounds.
// Recipe Scaling: Allow users to scale recipes up or down based on the number of servings they need. This could involve adjusting ingredient quantities automatically based on the desired serving size.
// Time Conversion: Include a tool for converting between different time measurements like seconds, minutes, and hours, which can be useful for timing cooking processes.

// =======

// const TemperatureConverter = () => {
//   // Add temperature conversion logic here
// };

// const ToolsPage = () => {
//   const [selectedTab, setSelectedTab] = useState("weight");

//   const renderConverter = () => {
//     switch (selectedTab) {
//       case "weight":
//         return <WeightConverter />;
//       case "temperature":
//         return <TemperatureConverter />;
//       // Add cases for other converters
//       default:
//         return null;
//     }
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={3}>
//         {/* Sidebar with tabs */}
//         <Paper variant="outlined" sx={{ p: 2 }}>
//           <Typography variant="h5" gutterBottom>
//             Converters
//           </Typography>
//           <Button variant={selectedTab === "weight" ? "contained" : "outlined"} onClick={() => setSelectedTab("weight")}>
//             Weight Converter
//           </Button>
//           <Button variant={selectedTab === "temperature" ? "contained" : "outlined"} onClick={() => setSelectedTab("temperature")}>
//             Temperature Converter
//           </Button>
//           {/* Add buttons for other converters */}
//         </Paper>
//       </Grid>
//       <Grid item xs={9}>
//         {/* Main content area */}
//         {renderConverter()}
//       </Grid>
//     </Grid>
//   );
// };

// export default ToolsPage;

// import React, { useState } from "react";
// import { Container, TextField, Typography, MenuItem, Button, Grid, Paper, IconButton } from "@mui/material";
// import ScaleIcon from "@mui/icons-material/Scale";
// import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

// const ToolsPage = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [fromUnit, setFromUnit] = useState("gram");
//   const [toUnit, setToUnit] = useState("kilogram");
//   const [result, setResult] = useState("");

//   const handleConversion = () => {
//     // Define conversion factors
//     const conversionFactors = {
//       gram: {
//         kilogram: 0.001,
//         pound: 0.00220462,
//         ounce: 0.035274,
//         gram: 1,
//       },
//       kilogram: {
//         gram: 1000,
//         pound: 2.20462,
//         ounce: 35.274,
//         kilogram: 1,
//       },
//       pound: {
//         gram: 453.592,
//         kilogram: 0.453592,
//         ounce: 16,
//         pound: 1,
//       },
//       ounce: {
//         gram: 28.3495,
//         kilogram: 0.0283495,
//         pound: 0.0625,
//         ounce: 1,
//       },
//       // Add other units with their conversion factors
//     };

//     // Perform unit conversion
//     const convertedValue = (parseFloat(inputValue) * conversionFactors[fromUnit][toUnit]).toFixed(2);
//     setResult(`${inputValue} ${fromUnit} = ${convertedValue} ${toUnit}`);
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleFromUnitChange = (e) => {
//     setFromUnit(e.target.value);
//   };

//   const handleToUnitChange = (e) => {
//     setToUnit(e.target.value);
//   };

//   // Function to switch units
//   const switchUnits = () => {
//     const temp = fromUnit;
//     setFromUnit(toUnit);
//     setToUnit(temp);
//   };

//   return (
//     <Container maxWidth="md" sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h2" gutterBottom>
//         <ScaleIcon sx={{ width: "3rem", height: "3rem" }} /> Weight Converter
//       </Typography>
//       <div>
//         <TextField type="number" label="Value to Convert" value={inputValue} onChange={handleInputChange} variant="outlined" size="small" sx={{ mr: 2 }} />
//         <TextField select label="From" value={fromUnit} onChange={handleFromUnitChange} variant="outlined" size="small" sx={{ minWidth: "150px !important" }}>
//           <MenuItem value="gram">Gram</MenuItem>
//           <MenuItem value="kilogram">Kilogram</MenuItem>
//           <MenuItem value="pound">Pound</MenuItem>
//           <MenuItem value="ounce">Ounce</MenuItem>
//         </TextField>
//         <IconButton sx={{ mr: 2, ml: 2 }} onClick={switchUnits}>
//           <SwapHorizIcon />
//         </IconButton>
//         <TextField select label="To" value={toUnit} onChange={handleToUnitChange} variant="outlined" size="small" sx={{ mr: 2, minWidth: "150px !important" }}>
//           <MenuItem value="gram">Gram</MenuItem>
//           <MenuItem value="kilogram">Kilogram</MenuItem>
//           <MenuItem value="pound">Pound</MenuItem>
//           <MenuItem value="ounce">Ounce</MenuItem>
//         </TextField>
//         <Button variant="contained" onClick={handleConversion}>
//           Convert
//         </Button>
//       </div>
//       {result && (
//         <Typography variant="h5" sx={{ mt: 4 }}>
//           {result}
//         </Typography>
//       )}
//     </Container>
//   );
// };

// export default ToolsPage;

// const CalculatorGrid = () => {
//   return (
//     <Grid container spacing={2}>
//       {[...Array(16)].map((_, index) => (
//         <Grid item key={index} xs={6} sm={3} md={3} lg={3}>
//           <Paper variant="outlined" sx={{ p: 2 }}>
//             <Typography variant="h6" align="center">
//               Calculator {index + 1}
//             </Typography>
//           </Paper>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

{
  /* <Typography variant="h5">Food Calculators</Typography>
<p>https://www.omnicalculator.com/food</p>
<Typography>
  Food - naturally, the most essential (as well as controversial) part of our life. In this section, you can find calculators for food lovers, party organizers or calorie counting addicts, what perfectly reflects the complexity of feelings we have for the subject. Does the last bite of your favorite pizza make you think you’ve ordered it a tad too small? Check our pizza party or pizza comparison calculator never to make this mistake again. Are you dreaming about eating a real French crepe? Take a look at the
  pancake recipe calculator. And if you’re a coffee freak, stop by the coffee kick calculator to be sure you’ve made the most of your morning cup. If you’re celebrating Saint Patrick’s Day, identify the moment you should better stop. And if you plan the Thanksgiving Dinner, estimate the amount of food you need for a start and the level of activity you require at the end to burn all those calories.
</Typography>
<CalculatorGrid /> */
}
