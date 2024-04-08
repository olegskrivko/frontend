// RecipesPage.js
import React, { useEffect, useState } from "react";
// import { Link, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { BASE_URL } from "../middleware/config";
// import { useAuth } from "../middleware/AuthContext";
import Grid from "@mui/material/Grid";
import { List, Button, ListItem, ListItemText, CircularProgress, Box, Slide } from "@mui/material";
import SkeletonRecipeCard from "../components/SkeletonRecipeCard";
import CustomAlert from "../components/CustomAlert";
import RecipeCardHome from "../components/RecipeCardHome";
import Grow from "@mui/material/Grow";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
// Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import imgChef from "../images/svg/vecteezy_cooking-chef-concept_1270240.svg";
import procimg from "../images/image-processing.gif";
import saltimg from "../images/image-salt.gif";
import smokeimg from "../images/image-smoke.gif";
import miximg from "../images/image-mix.gif";
import catimg from "../images/image-categories.gif";
import rabbitimg from "../images/image-rabbit.gif";
import cookingmix from "../images/cooking-min.gif";
import cookingmix2 from "../images/cooking-min2.gif";

const Home = () => {
  const theme = useTheme();
  // variant={isSmallScreen ? "h4" : "h1"}
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  // const { isAuthenticated } = useAuth();
  const API_URL = `${BASE_URL}/recipes`;
  const API_URL_COLLECTION_ONE = `${BASE_URL}/collections/quick-and-easy-recipes`;
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [categories, setCategories] = useState([]);
  const [collectionOne, setCollectionOne] = useState([]);

  const [season, setSeason] = useState("");
  const [month, setMonth] = useState("");
  const [seasonalTitle, setSeasonalTitle] = useState("");
  const [seasonalSubtitle, setSeasonalSubtitle] = useState("");

  useEffect(() => {
    // Function to determine seasonal title and subtitle
    const getSeasonalTitleAndSubtitle = () => {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();

      let season = "";
      let month = "";
      let title = "";
      let subtitle = "";

      switch (currentMonth) {
        case 0: // January
          season = "Winter";
          month = "January";
          title = "Explore Our January Specials";
          subtitle = "Savor unique recipes handpicked for this month";
          break;
        case 1: // February
          season = "Winter";
          month = "February";
          title = "Winter Wonderland";
          subtitle = "Experience the magic of winter with cozy and festive recipes";
          break;
        case 2: // March
          season = "Spring";
          month = "March";
          title = "Spring Delights";
          subtitle = "Celebrate the freshness of spring with vibrant recipes";
          break;
        case 3: // April
          season = "Spring";
          month = "April";
          title = "Discover Our April Specials";
          subtitle = "Delight in exclusive recipes curated for this month";
          break;
        case 4: // May
          season = "Spring";
          month = "May";
          title = "Blooming Gardens";
          subtitle = "Explore seasonal dishes inspired by nature's awakening";
          break;
        case 5: // June
          season = "Summer";
          month = "June";
          title = "Coastal Escapes";
          subtitle = "Transport yourself to the seaside with coastal-inspired dishes";
          break;
        case 6: // July
          season = "Summer";
          month = "July";
          title = "Explore Our July Specials";
          subtitle = "Savor unique recipes handpicked for this month";
          break;
        case 7: // August
          season = "Summer";
          month = "August";
          title = "Summer Sensations";
          subtitle = "Beat the heat with refreshing recipes inspired by summer";
          break;
        case 8: // September
          season = "Autumn";
          month = "September";
          title = "Autumn Harvest";
          subtitle = "Embrace the bounty of the season with hearty autumn recipes";
          break;
        case 9: // October
          season = "Autumn";
          month = "October";
          title = "Discover Our October Specials";
          subtitle = "Indulge in exclusive recipes curated for this month";
          break;
        case 10: // November
          season = "Autumn";
          month = "November";
          title = "Cozy Comforts";
          subtitle = "Stay warm and cozy with comforting dishes perfect for fall";
          break;
        case 11: // December
          season = "Winter";
          month = "December";
          title = "Festive Feasts";
          subtitle = "Gather around the table and enjoy the flavors of the holiday season";
          break;
        // Add more cases for other months and holidays as needed
        default:
          title = "Seasonal Specials";
          subtitle = "Explore seasonal recipes and culinary delights";
      }

      return { season, month, title, subtitle };
    };

    const { season, month, title, subtitle } = getSeasonalTitleAndSubtitle();
    setSeason(season);
    setMonth(month);
    setSeasonalTitle(title);
    setSeasonalSubtitle(subtitle);
  }, []); // Empty dependency array to run the effect only once

  // useEffect(() => {
  //   const fetchRecipes = async () => {
  //     try {
  //       // const token = localStorage.getItem("token");

  //       // if (!token) {
  //       //   // Handle case where token is missing
  //       //   throw new Error("User not authenticated. Please log in.");
  //       // }
  //       // const response = await fetch(API_URL, {
  //       //   headers: {
  //       //     Authorization: `Bearer ${token}`,
  //       //   },
  //       // });

  //       const response = await fetch(API_URL);

  //       // if (!response.ok) {
  //       //   throw new Error("Failed to fetch recipes");
  //       // }
  //       if (!response.ok) {
  //         if (response.status === 401) {
  //           // If unauthorized, set redirectToLogin to true
  //           // setRedirectToLogin(true);
  //         } else {
  //           throw new Error("Failed to fetch recipes");
  //         }
  //       }

  //       const data = await response.json();
  //       // console.log("Fetched recipes:", data);

  //       setRecipes(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchRecipes();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [API_URL]);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // Fetch recipes
        const recipesResponse = await fetch(API_URL);
        if (!recipesResponse.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const recipesData = await recipesResponse.json();
        setRecipes(recipesData.recipes);

        // Fetch categories
        const categoriesResponse = await fetch(`${BASE_URL}/meals`);
        if (categoriesResponse.ok) {
          const categoriesData = await categoriesResponse.json();
          setCategories(categoriesData);
        } else {
          console.error("Failed to fetch categories");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [API_URL]);

  useEffect(() => {
    const fetchCollectionOne = async () => {
      try {
        // Fetch collectionOne
        const recipesResponse = await fetch(API_URL_COLLECTION_ONE);
        if (!recipesResponse.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const recipesData = await recipesResponse.json();
        setCollectionOne(recipesData);

        // Fetch categories
        // const categoriesResponse = await fetch(`${BASE_URL}/meals`);
        // if (categoriesResponse.ok) {
        //   const categoriesData = await categoriesResponse.json();
        //   setCategories(categoriesData);
        // } else {
        //   console.error("Failed to fetch categories");
        // }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCollectionOne();
  }, []);

  // if (redirectToLogin || !isAuthenticated()) {
  //   // If redirectToLogin is true or user is not authenticated, redirect to the login page
  //   return <Navigate to="/auth" state={{ from: "/recipes" }} />;
  // }

  const RecipesPageTitle = "Explore Our Recipe Collection";

  if (loading) {
    return (
      <React.Fragment>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh", // Make the spinner cover the entire viewport vertically
          }}
        >
          <CircularProgress size={80} style={{ color: "#ff6600" }} /> {/* Adjust the size of the spinner as needed */}
        </div>
        {/* <Typography variant="h4" style={{ margin: "2rem", textAlign: "center", fontSize: "2rem" }}>
          {RecipesPageTitle}
        </Typography>
        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          {[...Array(12)].map((_, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
              <SkeletonRecipeCard />
            </Grid>
          ))}
        </Grid> */}
        {/* <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 102, 0, 0.8)", // Orange background color with opacity
            zIndex: 9999, // Ensure the spinner is on top of other content
          }}
        >
          <CircularProgress
            size={80} // Adjust the size of the spinner as needed
            style={{ color: "white" }} // Set the color of the spinner to white
          />
        </div> */}
      </React.Fragment>
    );
  }

  if (error) {
    return <CustomAlert errorMessage={error} />;
  }

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h3" gutterBottom style={{ fontSize: isSmallScreen ? "2.2rem" : "3.2rem", color: "#252C35", fontWeight: "700", textAlign: "center" }}>
            COOKING IS <span style={{ color: "#ff6600" }}>EASY</span>
          </Typography>
          <Box position="relative">
            {/* Banner Image */}
            <img
              src={imgChef}
              alt=""
              style={{
                width: isLargeScreen ? "90%" : "100%",
                maxHeight: isLargeScreen ? "60vh" : "600px", // Adjust height for large screens
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ paddingTop: "0 !important", marginBottom: "2rem" }}>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/recipes">
              {isSmallScreen ? (
                <Button variant="contained" size="small" style={{ marginRight: "20px", backgroundColor: "#ff6600" }}>
                  Find Your Recipe
                </Button>
              ) : (
                <Button variant="contained" size="large" style={{ marginRight: "20px", backgroundColor: "#ff6600" }}>
                  Find Your Recipe
                </Button>
              )}
            </Link>
            <Link to="/create-recipe">
              {isSmallScreen ? (
                <Button variant="outlined" size="small" style={{ color: "#ff6600", borderColor: "#ff6600" }}>
                  Share Your Recipe
                </Button>
              ) : (
                <Button variant="outlined" size="large" style={{ color: "#ff6600", borderColor: "#ff6600" }}>
                  Share Your Recipe
                </Button>
              )}
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {/* Seasonal title */}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Slide direction="left" in={true}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: isSmallScreen ? "center" : "left", fontSize: isSmallScreen ? "1.8rem" : "2.2rem" }}>
              {seasonalTitle}
            </Typography>
          </Slide>
          <Slide direction="left" in={true}>
            <Typography variant="body1" gutterBottom sx={{ textAlign: isSmallScreen ? "center" : "left", fontSize: isSmallScreen ? "1rem" : "1rem" }}>
              {seasonalSubtitle}
            </Typography>
          </Slide>
        </Grid>

        {/* Seasonal recipes */}
        <Grid item xs={12} sm={12} md={7} lg={8} order={{ xs: 2, md: 1 }}>
          <Grid container spacing={3}>
            {/* Map over a slice of the recipes array containing only the first 6 elements */}
            {recipes.slice(0, 4).map((recipe) => (
              <RecipeCardHome key={recipe._id} recipe={recipe} />
            ))}
          </Grid>
        </Grid>
        {/* Seasonal image */}
        <Grid item xs={12} sm={12} md={5} lg={4} order={{ xs: 1, md: 2 }}>
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <img
              src={rabbitimg}
              alt="Description"
              style={{
                width: "auto",
                maxHeight: "280px",
                // objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {/* Trending title */}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Slide direction="right" in={true}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: isSmallScreen ? "center" : "right", fontSize: isSmallScreen ? "1.8rem" : "2.2rem" }}>
              Trending recipes
            </Typography>
          </Slide>
          <Slide direction="right" in={true}>
            <Typography variant="body1" gutterBottom sx={{ textAlign: isSmallScreen ? "center" : "right", fontSize: isSmallScreen ? "1rem" : "1rem" }}>
              Discover what's hot in the culinary world right now!
            </Typography>
          </Slide>
        </Grid>
        {/* Trending image */}
        <Grid item xs={12} sm={12} md={5} lg={4}>
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <img
              src={saltimg}
              alt="Description"
              style={{
                width: "auto",
                maxHeight: "280px",
                // objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        {/* Trending recipes */}
        <Grid item xs={12} sm={12} md={7} lg={8}>
          <Grid container spacing={3}>
            {/* Map over a slice of the recipes array containing only the first 6 elements */}
            {recipes.slice(0, 4).map((recipe) => (
              <RecipeCardHome key={recipe._id} recipe={recipe} />
            ))}
          </Grid>
        </Grid>

        {/* Popular title */}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Slide direction="left" in={true}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: isSmallScreen ? "center" : "left", fontSize: isSmallScreen ? "1.8rem" : "2.2rem" }}>
              Popular recipe collections
            </Typography>
          </Slide>
          <Slide direction="left" in={true}>
            <Typography variant="body1" gutterBottom sx={{ textAlign: isSmallScreen ? "center" : "left", fontSize: isSmallScreen ? "1rem" : "1rem" }}>
              Discover our most beloved recipe collections!
            </Typography>
          </Slide>
        </Grid>
        {/* Popular recipes */}
        <Grid item xs={12} sm={12} md={7} lg={8} order={{ xs: 2, md: 1 }}>
          <Grid container spacing={3}>
            {/* Map over a slice of the recipes array containing only the first 6 elements */}
            {recipes.slice(0, 4).map((recipe) => (
              <RecipeCardHome key={recipe._id} recipe={recipe} />
            ))}
          </Grid>
        </Grid>
        {/* Popular image */}
        <Grid item xs={12} sm={12} md={5} lg={4} order={{ xs: 1, md: 2 }}>
          <Box display="flex" justifyContent="center" alignItems="center" height="100%" style={{ overflow: "hidden" }}>
            <img
              src={smokeimg}
              alt="Description"
              style={{
                width: "auto",
                maxHeight: "280px",
                // objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
