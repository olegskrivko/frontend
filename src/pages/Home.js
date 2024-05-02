// Home.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// React MUI
import { Link as MuiLink } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import CustomAlert from "../components/CustomAlert";
import RecipeCardHome from "../components/RecipeCardHome";
import RecipeCardHomeCollection from "../components/RecipeCardHomeCollection";
import RecipeCardCollection from "../components/RecipeCardCollection";
import CardMedia from "@mui/material/CardMedia";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// Images Imports
import ChefImage from "../images/svg/vecteezy_cooking-chef-concept_1270240.svg";

import januaryImage from "../images/svg/hamburger-cuate.svg";
import februaryImage from "../images/svg/hamburger-cuate.svg";
import marchImage from "../images/svg/hamburger-cuate.svg";
import aprilImage from "../images/svg/hamburger-cuate.svg";
import mayImage from "../images/svg/hamburger-cuate.svg";
import juneImage from "../images/svg/hamburger-cuate.svg";
import julyImage from "../images/svg/hamburger-cuate.svg";
import augustImage from "../images/svg/hamburger-cuate.svg";
import septemberImage from "../images/svg/hamburger-cuate.svg";
import octoberImage from "../images/svg/hamburger-cuate.svg";
import novemberImage from "../images/svg/hamburger-cuate.svg";
import decemberImage from "../images/svg/hamburger-cuate.svg";

import unknownImage from "../images/svg/hamburger-cuate.svg";

import sectionTrendingRecipesImage from "../images/svg/healthy-food-amico.svg";

import sectionPopularRecipesImage from "../images/svg/recipe-book-pana.svg";

// Import Config
import { BASE_URL } from "../middleware/config";
// Import Auth
import { useAuth } from "../middleware/AuthContext";

const Home = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { isAuthenticated } = useAuth();
  // console.log("isAuthenticated", isAuthenticated);
  const API_URL = `${BASE_URL}/recipes`;
  // const API_URL_COLLECTION_ONE = `${BASE_URL}/collections/quick-and-easy-recipes`;
  const API_URL_COLLECTIONS = `${BASE_URL}/collections`;

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [categories, setCategories] = useState([]);
  const [collectionOne, setCollectionOne] = useState([]);
  const [collections, setCollections] = useState([]);
  const [currentSeasonCollectionRecipes, setCurrentSeasonCollectionRecipes] = useState([]);
  const [currentSeasonCollection, setCurrentSeasonCollection] = useState([]);
  const API_URL_CURRENT_SEASON_COLLECTION = `${BASE_URL}/collections/${""}`;
  const [season, setSeason] = useState("");
  const [month, setMonth] = useState("");
  const [seasonalTitle, setSeasonalTitle] = useState("");
  const [seasonalSubtitle, setSeasonalSubtitle] = useState("");
  const [credit, setCredit] = useState("");
  const [altImg, setAltImg] = useState("");
  const [creditLink, setCreditLink] = useState("");
  const [seasonalImage, setSeasonalImage] = useState("");

  // const getSeasonalTitleAndSubtitle = () => {
  //   const currentDate = new Date();
  //   const currentMonth = currentDate.getMonth();
  //   let season = "";

  //   switch (currentMonth) {
  //     // Determine the season based on the current month
  //     // You may need to adjust this based on your definition of seasons
  //     case 2: // March, April, May: Spring
  //     case 3:
  //     case 4:
  //       season = "Spring";
  //       break;
  //     case 5: // June, July, August: Summer
  //     case 6:
  //     case 7:
  //       season = "Summer";
  //       break;
  //     case 8: // September, October, November: Autumn
  //     case 9:
  //     case 10:
  //       season = "Autumn";
  //       break;
  //     case 11: // December, January, February: Winter
  //     case 0:
  //     case 1:
  //       season = "Winter";
  //       break;
  //     default:
  //       season = "Unknown";
  //   }

  //   return season;
  // };

  useEffect(() => {
    // Function to determine seasonal title and subtitle
    const getSeasonalTitleAndSubtitle = () => {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();

      let season = "";
      let month = "";
      let title = "";
      let subtitle = "";
      let credit = "";
      let altImg = "";
      let creditLink = "";
      let seasonalImage = "";

      switch (currentMonth) {
        case 0: // January
          season = "winter";
          month = "January";
          title = "Explore Our January Specials";
          subtitle = "Savor unique recipes handpicked for this month";
          credit = "Food illustrations by Storyset";
          altImg = "Delicious food prepared with fresh ingredients, showcasing culinary artistry and flavors.";
          creditLink = "https://storyset.com/food";
          seasonalImage = januaryImage; // Use imported image
          break;
        case 1: // February
          season = "winter";
          month = "February";
          title = "Winter Wonderland";
          subtitle = "Experience the magic of winter with cozy and festive recipes";
          credit = "Food illustrations by Storyset";
          altImg = "Delicious food prepared with fresh ingredients, showcasing culinary artistry and flavors.";
          creditLink = "https://storyset.com/food";
          seasonalImage = februaryImage;
          break;
        case 2: // March
          season = "spring";
          month = "March";
          title = "Spring Delights";
          subtitle = "Celebrate the freshness of spring with vibrant recipes";
          credit = "Food illustrations by Storyset";
          altImg = "Delicious food prepared with fresh ingredients, showcasing culinary artistry and flavors.";
          creditLink = "https://storyset.com/food";
          seasonalImage = marchImage; // Use imported image
          break;
        case 3: // April
          season = "spring";
          month = "April";
          title = "Discover Our April Specials";
          subtitle = "Delight in exclusive recipes curated for this month";
          credit = "Food illustrations by Storyset";
          altImg = "Delicious food prepared with fresh ingredients, showcasing culinary artistry and flavors.";
          creditLink = "https://storyset.com/food";
          seasonalImage = aprilImage; // Use imported image
          break;
        case 4: // May
          season = "spring";
          month = "May";
          title = "Blooming Gardens";
          subtitle = "Explore seasonal dishes inspired by nature's awakening";
          credit = "Food illustrations by Storyset";
          altImg = "Delicious food prepared with fresh ingredients, showcasing culinary artistry and flavors.";
          creditLink = "https://storyset.com/food";
          seasonalImage = mayImage; // Use imported image
          break;
        case 5: // June
          season = "summer";
          month = "June";
          title = "Coastal Escapes";
          subtitle = "Transport yourself to the seaside with coastal-inspired dishes";
          credit = "Food illustrations by Storyset";
          altImg = "Delicious food prepared with fresh ingredients, showcasing culinary artistry and flavors.";
          creditLink = "https://storyset.com/food";
          seasonalImage = juneImage; // Use imported image
          break;
        case 6: // July
          season = "summer";
          month = "July";
          title = "Explore Our July Specials";
          subtitle = "Savor unique recipes handpicked for this month";
          credit = "Food illustrations by Storyset";
          altImg = "Delicious food prepared with fresh ingredients, showcasing culinary artistry and flavors.";
          creditLink = "https://storyset.com/food";
          seasonalImage = julyImage; // Use imported image
          break;
        case 7: // August
          season = "summer";
          month = "August";
          title = "Summer Sensations";
          subtitle = "Beat the heat with refreshing recipes inspired by summer";
          credit = "Food illustrations by Storyset";
          altImg = "Delicious food prepared with fresh ingredients, showcasing culinary artistry and flavors.";
          creditLink = "https://storyset.com/food";
          seasonalImage = augustImage; // Use imported image
          break;
        case 8: // September
          season = "autumn";
          month = "September";
          title = "Autumn Harvest";
          subtitle = "Embrace the bounty of the season with hearty autumn recipes";
          credit = "Food illustrations by Storyset";
          altImg = "Delicious food prepared with fresh ingredients, showcasing culinary artistry and flavors.";
          creditLink = "https://storyset.com/food";
          seasonalImage = septemberImage; // Use imported image
          break;
        case 9: // October
          season = "autumn";
          month = "October";
          title = "Discover Our October Specials";
          subtitle = "Indulge in exclusive recipes curated for this month";
          credit = "Food illustrations by Storyset";
          altImg = "Delicious food prepared with fresh ingredients, showcasing culinary artistry and flavors.";
          creditLink = "https://storyset.com/food";
          seasonalImage = octoberImage; // Use imported image
          break;
        case 10: // November
          season = "autumn";
          month = "November";
          title = "Cozy Comforts";
          subtitle = "Stay warm and cozy with comforting dishes perfect for fall";
          credit = "Food illustrations by Storyset";
          altImg = "Delicious food prepared with fresh ingredients, showcasing culinary artistry and flavors.";
          creditLink = "https://storyset.com/food";
          seasonalImage = novemberImage; // Use imported image
          break;
        case 11: // December
          season = "winter";
          month = "December";
          title = "Festive Feasts";
          subtitle = "Gather around the table and enjoy the flavors of the holiday season";
          credit = "Food illustrations by Storyset";
          altImg = "Delicious food prepared with fresh ingredients, showcasing culinary artistry and flavors.";
          creditLink = "https://storyset.com/food";
          seasonalImage = decemberImage; // Use imported image
          break;
        // Add more cases for other months and holidays as needed
        default:
          season = "unknown";
          month = "Unknown";
          title = "Seasonal Specials";
          subtitle = "Explore seasonal recipes and culinary delights";
          credit = "Food illustrations by Storyset";
          altImg = "Delicious food prepared with fresh ingredients, showcasing culinary artistry and flavors.";
          creditLink = "https://storyset.com/food";
          seasonalImage = unknownImage; // Use a placeholder image or handle accordingly
      }

      return { season, month, title, subtitle, credit, altImg, creditLink, seasonalImage };
    };

    const { season, month, title, subtitle, credit, altImg, creditLink, seasonalImage } = getSeasonalTitleAndSubtitle();
    setSeason(season);
    setMonth(month);
    setSeasonalTitle(title);
    setSeasonalSubtitle(subtitle);
    setCredit(credit);
    setAltImg(altImg);
    setCreditLink(creditLink);
    setSeasonalImage(seasonalImage);
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

  // Fetch recipes & categories
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

  // Fetch Current Season Collection
  // Fetch collection for the current season
  // useEffect(() => {
  //   const fetchCurrentSeasonCollection = async () => {
  //     try {
  //       const currentSeason = getSeasonalTitleAndSubtitle();
  //       const collectionResponse = await fetch(`${API_URL_COLLECTIONS}/${currentSeason}`);
  //       if (!collectionResponse.ok) {
  //         throw new Error("Failed to fetch current season collection");
  //       }
  //       const collectionData = await collectionResponse.json();
  //       setCurrentSeasonCollection(collectionData);
  //     } catch (error) {
  //       console.error(error.message);
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCurrentSeasonCollection();
  // }, []);
  useEffect(() => {
    const fetchCurrentSeasonCollection = async () => {
      try {
        // Fetch Current Season Collection

        const collectionResponse = await fetch(`${API_URL_COLLECTIONS}/${season}`);
        console.log("collectionResponse", collectionResponse);
        if (!collectionResponse.ok) {
          throw new Error("Failed to fetch current season collection");
        }
        const collectionData = await collectionResponse.json();
        //setCurrentSeasonCollection(collectionData);
        // collectionData.collections.name
        // collectionData.recipes.[]
        setCurrentSeasonCollection(collectionData.collection);
        setCurrentSeasonCollectionRecipes(collectionData.recipes);
        console.log("setCurrentSeasonCollectionRecipes", currentSeasonCollectionRecipes);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCurrentSeasonCollection();
  }, [season]);

  // Fetch All Collections
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        // Fetch All Collections
        const collectionsResponse = await fetch(API_URL_COLLECTIONS);
        if (!collectionsResponse.ok) {
          throw new Error("Failed to fetch collections");
        }
        const collectionsData = await collectionsResponse.json();
        setCollections(collectionsData);
        console.log("collectionsData", collectionsData);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCollections();
  }, []);

  // Fetch collectionOne
  // useEffect(() => {
  //   const fetchCollectionOne = async () => {
  //     try {
  //       // Fetch collectionOne
  //       const recipesResponse = await fetch(API_URL_COLLECTION_ONE);
  //       if (!recipesResponse.ok) {
  //         throw new Error("Failed to fetch recipes");
  //       }
  //       const recipesData = await recipesResponse.json();
  //       setCollectionOne(recipesData);

  //       // Fetch categories
  //       // const categoriesResponse = await fetch(`${BASE_URL}/meals`);
  //       // if (categoriesResponse.ok) {
  //       //   const categoriesData = await categoriesResponse.json();
  //       //   setCategories(categoriesData);
  //       // } else {
  //       //   console.error("Failed to fetch categories");
  //       // }
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchCollectionOne();
  // }, []);

  // if (redirectToLogin || !isAuthenticated()) {
  //   // If redirectToLogin is true or user is not authenticated, redirect to the login page
  //   return <Navigate to="/auth" state={{ from: "/recipes" }} />;
  // }

  if (loading) {
    return (
      <React.Fragment>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh", // Make the spinner cover the entire viewport vertically
          }}
        >
          <CircularProgress size={80} style={{ color: "#ff6600" }} /> {/* Adjust the size of the spinner as needed */}
        </div>
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
              src={ChefImage}
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
                <Button variant="contained" size="large" style={{ marginTop: "2rem", marginRight: "20px", backgroundColor: "#ff6600" }}>
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
                <Button variant="outlined" size="large" style={{ marginTop: "2rem", color: "#ff6600", borderColor: "#ff6600" }}>
                  Share Your Recipe
                </Button>
              )}
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {/* Seasonal Recipes Title */}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Slide direction="left" in={true}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: isSmallScreen ? "center" : "left", fontSize: isSmallScreen ? "1.8rem" : "2.2rem" }}>
              {currentSeasonCollection && seasonalTitle}
              {/* {currentSeasonCollection && currentSeasonCollection.name} */}
            </Typography>
          </Slide>
          <Slide direction="left" in={true}>
            <Typography variant="body1" gutterBottom sx={{ textAlign: isSmallScreen ? "center" : "left", fontSize: isSmallScreen ? "1rem" : "1rem" }}>
              {currentSeasonCollection && currentSeasonCollection.description}
            </Typography>
          </Slide>
        </Grid>
        {/* Seasonal Recipes */}
        <Grid item xs={12} sm={12} md={7} lg={8} order={{ xs: 2, md: 1 }}>
          <Grid container spacing={3}>
            {/* Map over a slice of the recipes array containing only the first 4 elements */}
            {/* {recipes.slice(0, 4).map((recipe) => (
              <RecipeCardHome key={recipe._id} recipe={recipe} />
            ))} */}
            {/* {collections.slice(0, 4).map((collection) => (
              <RecipeCardCollection key={collection._id} collection={collection} />
            ))} */}
            {/* {collections.slice(0, 4).map((collection) => (
              <RecipeCardCollection key={collection._id} collection={collection} />
            ))} */}
            {/* {currentSeasonCollectionRecipes && currentSeasonCollectionRecipes.slice(0, 4).map((collection) => <p>{collection.title}</p>)} */}
            {currentSeasonCollectionRecipes && currentSeasonCollectionRecipes.slice(0, 4).map((recipe) => <RecipeCardHomeCollection key={recipe._id} recipe={recipe} />)}
          </Grid>
        </Grid>
        {/* Seasonal Image */}
        <Grid item xs={12} sm={12} md={5} lg={4} order={{ xs: 1, md: 2 }}>
          <Box display="flex" justifyContent="center" alignItems="center" height="100%" style={{ flexDirection: "column", overflow: "hidden" }}>
            <CardMedia
              component="img"
              src={seasonalImage}
              alt={altImg}
              style={{
                width: "auto",
                maxHeight: "280px",
              }}
            />
            <Box style={{ marginTop: "0.5rem", display: "flex", alignItems: "center" }}>
              <MuiLink href={creditLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.6rem", fontStyle: "italic", color: "#999", fontWeight: "300" }}>
                {credit}
              </MuiLink>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {/* Section Trending Recipes Title  */}
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
        {/* Trending Recipes Image */}
        <Grid item xs={12} sm={12} md={5} lg={4}>
          <Box display="flex" justifyContent="center" alignItems="center" height="100%" style={{ flexDirection: "column", overflow: "hidden" }}>
            <CardMedia
              component="img"
              src={sectionTrendingRecipesImage}
              alt="Fresh ingredients, including vegetables, mushrooms, eggs, and shrimps, falling into a salad bowl, conveying motion and freshness."
              style={{
                // width: "auto",
                // maxHeight: "280px",
                objectFit: "cover",
              }}
            />
            <Box style={{ marginTop: "0.5rem", display: "flex", alignItems: "center" }}>
              <MuiLink href="https://storyset.com/food" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.6rem", fontStyle: "italic", color: "#999", fontWeight: "300" }}>
                Food illustrations by Storyset
              </MuiLink>
            </Box>
          </Box>
        </Grid>
        {/* Section Trending Recipes */}
        <Grid item xs={12} sm={12} md={7} lg={8}>
          <Grid container spacing={3}>
            {/* Map over a slice of the recipes array containing only the first 4 elements */}
            {recipes.slice(0, 4).map((recipe) => (
              <RecipeCardHome key={recipe._id} recipe={recipe} />
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {/* Section Popular Recipes Title */}
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
        {/* Section Popular Recipes */}
        <Grid item xs={12} sm={12} md={7} lg={8} order={{ xs: 2, md: 1 }}>
          <Grid container spacing={3}>
            {/* Map over a slice of the recipes array containing only the first 4 elements */}
            {/* {recipes.slice(0, 4).map((recipe) => (
              <RecipeCardHome key={recipe._id} recipe={recipe} />
            ))} */}
            {collections.slice(0, 4).map((collection) => (
              <RecipeCardCollection key={collection._id} collection={collection} />
            ))}
          </Grid>
        </Grid>
        {/* Popular Recipes Image */}
        <Grid item xs={12} sm={12} md={5} lg={4} order={{ xs: 1, md: 2 }}>
          <Box display="flex" justifyContent="center" alignItems="center" height="100%" style={{ flexDirection: "column", overflow: "hidden" }}>
            <CardMedia
              component="img"
              src={sectionPopularRecipesImage}
              alt="Recipe book placed on a table surrounded by pots, carrots, and a carafe filled with juice."
              style={{
                width: "auto",
                maxHeight: "280px",
              }}
            />
            <Box style={{ marginTop: "0.5rem", display: "flex", alignItems: "center" }}>
              <MuiLink href="https://storyset.com/information" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.6rem", fontStyle: "italic", color: "#999", fontWeight: "300" }}>
                Information illustrations by Storyset
              </MuiLink>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
