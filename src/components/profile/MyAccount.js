// import React, { useState } from "react";
// import { Box, Tab, Tabs, Grid, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox } from "@mui/material";
// import Avatar from "@mui/material/Avatar";

// // import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import Divider from "@mui/material/Divider";

// import ListItemAvatar from "@mui/material/ListItemAvatar";

// import FavoriteIcon from "@mui/icons-material/Favorite";
// import PeopleIcon from "@mui/icons-material/People";
// import RecipeIcon from "@mui/icons-material/Receipt";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import KitchenIcon from "@mui/icons-material/Kitchen";
// import NoMealsIcon from "@mui/icons-material/NoMeals";
// import IconButton from "@mui/material/IconButton";
// import EditIcon from "@mui/icons-material/Edit";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import ReviewsIcon from "@mui/icons-material/Reviews";
// import EventIcon from "@mui/icons-material/Event";
// import LogoutIcon from "@mui/icons-material/Logout";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
// import LanguageIcon from "@mui/icons-material/Language";
// import SettingsIcon from "@mui/icons-material/Settings";
// import { Link } from "react-router-dom";
// import PersonIcon from "@mui/icons-material/Person";

// function MyAccount() {
//   const user = {
//     name: "John Doe",
//     avatar: "/path/to/avatar.jpg",
//     followers: 1200,
//     following: 560,
//     recipesPrepared: 50,
//     level: 3,
//     nextLevelRecipes: 20,
//     favorites: [
//       { id: 1, title: "Spaghetti Carbonara" },
//       { id: 2, title: "Chicken Tikka Masala" },
//       { id: 3, title: "Vegetable Stir-Fry" },
//     ],
//     ownRecipes: [
//       { id: 4, title: "Chocolate Chip Cookies" },
//       { id: 5, title: "Grilled Salmon with Lemon" },
//     ],
//     reviewedRecipes: [
//       { id: 4, title: "Mango Chips" },
//       { id: 5, title: "Salmon with Lemon" },
//     ],
//     preparedRecipes: [
//       { id: 4, title: "Mango Chips", preparationCount: 5, firstPrepared: "2023-05-15", lastPrepared: "2024-03-20" },
//       { id: 5, title: "Salmon with Lemon", preparationCount: 10, firstPrepared: "2023-07-10", lastPrepared: "2024-04-08" },
//     ],
//     dietaryRestrictions: ["Vegetarian", "Gluten-Free"],
//     kitchenTools: ["Blender", "Oven", "Knife Set", "Mixing Bowls"],
//     mealPlan: [
//       { day: "Monday", recipe: "Spaghetti Carbonara" },
//       { day: "Tuesday", recipe: "Chicken Tikka Masala" },
//       { day: "Wednesday", recipe: "Vegetable Stir-Fry" },
//       { day: "Thursday", recipe: "Grilled Salmon with Lemon" },
//       { day: "Friday", recipe: "Chocolate Chip Cookies" },
//       { day: "Saturday", recipe: "Pizza" },
//       { day: "Sunday", recipe: "Pasta with Mushrooms" },
//     ],
//     socialProfiles: {
//       facebook: "https://www.facebook.com/johndoe",
//       twitter: "https://twitter.com/johndoe",
//       instagram: "https://www.instagram.com/johndoe/",
//     },
//     bio: "Passionate home cook exploring new recipes and flavors. Follow me for tasty inspiration!",
//   };
//   return (
//     <Grid item xs={12} md={12}>
//       {/* <Paper style={{ padding: "1rem", textAlign: "center" }}> */}
//       {/* <Typography variant="h6" color="textSecondary" gutterBottom sx={{ textAlign: "start" }}>
//         PERSONAL
//       </Typography> */}
//       <Box sx={{ textAlign: "center" }}>
//         <Avatar alt={user.name} src={user.avatar} sx={{ width: 150, height: 150, margin: "auto" }} />
//         <Typography variant="h6" gutterBottom sx={{ marginTop: "1rem" }}>
//           {user.name}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Followers: {user.followers} | Following: {user.following}
//         </Typography>
//         {/* <Typography variant="h6" gutterBottom>
//     Bio
//   </Typography> */}
//         <Divider sx={{ my: "0.5rem" }} />
//         <Typography sx={{ padding: "1rem", textAlign: "start" }} variant="body1" gutterBottom>
//           {user.bio}
//         </Typography>
//         <Divider sx={{ my: "0.5rem" }} />
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
//       </Box>
//       {/* <Typography variant="h6" gutterBottom>
//     Social Networks
//   </Typography> */}
//       <Divider sx={{ my: "0.5rem" }} />
//       <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start", padding: "1rem" }}>
//         <Typography variant="body1" gutterBottom sx={{ paddingTop: "0.4rem", paddingBottom: "0.4rem", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
//           <FacebookIcon sx={{ marginRight: "0.5rem" }} />
//           <Link href={user.socialProfiles.facebook} target="_blank" rel="noopener noreferrer">
//             Facebook
//           </Link>
//         </Typography>

//         <Typography variant="body1" gutterBottom sx={{ paddingTop: "0.4rem", paddingBottom: "0.4rem", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
//           <LanguageIcon sx={{ marginRight: "0.5rem" }} />
//           <Link href={user.socialProfiles.website} target="_blank" rel="noopener noreferrer">
//             Website
//           </Link>
//         </Typography>
//         <Typography variant="body1" gutterBottom sx={{ paddingTop: "0.4rem", paddingBottom: "0.4rem", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
//           <InstagramIcon sx={{ marginRight: "0.5rem" }} />
//           <Link href={user.socialProfiles.instagram} target="_blank" rel="noopener noreferrer">
//             Instagram
//           </Link>
//         </Typography>
//       </Box>
//       <Box>
//         <Button sx={{ display: "flex", justifyContent: "start", marginBottom: "0.8rem" }} variant="outlined" size="small" startIcon={<EditIcon />} component={Link} to="/edit-profile">
//           Edit Profile
//         </Button>
//         <Button sx={{ display: "flex", justifyContent: "start" }} variant="outlined" size="small" startIcon={<SettingsIcon />} component={Link} to="/settings-profile">
//           Profile Settings
//         </Button>
//       </Box>
//       {/* </Paper> */}
//     </Grid>
//   );
// }

// export default MyAccount;
import React from "react";
import { useState } from "react";
import { Box, Paper, FormControlLabel, Checkbox, Typography, Grid, TextField, Button, Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";

function MyAccount() {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "********",
    isSeller: true,
    businessName: "",

    avatar: "/path/to/avatar.jpg",
    followers: 1200,
    following: 560,
    bio: "Passionate home cook exploring new recipes and flavors. Follow me for tasty inspiration!",
    socialProfiles: {
      facebook: "https://www.facebook.com/johndoe",
      instagram: "https://www.instagram.com/johndoe/",
      website: "https://www.example.com",
    },
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setUser({
      ...user,
      isSeller: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit updated user data
    console.log("Updated user data:", user);
  };

  return (
    <Grid item xs={12} md={12}>
      <Box sx={{ textAlign: "center" }}>
        <Avatar alt={`${user.firstName} ${user.lastName}`} src={user.avatar} sx={{ width: 150, height: 150, margin: "auto" }} />
        <Typography variant="h6" gutterBottom sx={{ marginTop: "1rem" }}>
          {user.firstName} {user.lastName}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Followers: {user.followers} | Following: {user.following}
        </Typography>
        <Divider sx={{ my: "0.5rem" }} />
        <Typography sx={{ padding: "1rem", textAlign: "start" }} variant="body1" gutterBottom>
          {user.bio}
        </Typography>
        <Paper style={{ padding: "1rem" }}>
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
        </Paper>
        <Divider sx={{ my: "0.5rem" }} />
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <TextField fullWidth margin="normal" label="First Name" name="firstName" value={user.firstName} onChange={handleChange} />
          <TextField fullWidth margin="normal" label="Last Name" name="lastName" value={user.lastName} onChange={handleChange} />
          <TextField fullWidth margin="normal" label="Email" name="email" value={user.email} onChange={handleChange} />
          <TextField fullWidth margin="normal" type="password" label="Password" name="password" value={user.password} onChange={handleChange} />

          <FormControlLabel control={<Checkbox checked={user.isSeller} onChange={handleCheckboxChange} />} label="I am a seller" />
          {user.isSeller && <TextField fullWidth margin="normal" label="Business Name" name="businessName" value={user.businessName} onChange={handleChange} />}
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: "1rem" }}>
            Save Changes
          </Button>
        </Box>
      </Box>
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
    </Grid>
  );
}

export default MyAccount;
