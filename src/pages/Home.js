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
import Drinks from "../images/img-1.jpg";
import Drinks5 from "../images/img-5.png";
import Drinks6 from "../images/img-6.png";
import Drinks7 from "../images/img-7.jpg";
import Drinks8 from "../images/img-8.png";
import Drinks10 from "../images/img-10.png";
import coverimg from "../images/cover.jpg";
import coverimg1 from "../images/ban1.jpg";
import coverimg2 from "../images/ban2.jpg";
import coverimg3 from "../images/pic3.jpg";
import procimg from "../images/image-processing.gif";
import saltimg from "../images/image-salt.gif";
import smokeimg from "../images/image-smoke.gif";
import miximg from "../images/image-mix.gif";
import catimg from "../images/image-categories.gif";
import rabbitimg from "../images/image-rabbit.gif";
import cookingmix from "../images/cooking-min.gif";
import cookingmix2 from "../images/cooking-min2.gif";
// const SeasonalRecipeTab = () => {
//   const [season, setSeason] = useState("");
//   const [month, setMonth] = useState("");
//   const [seasonalTitle, setSeasonalTitle] = useState("");
//   const [seasonalSubtitle, setSeasonalSubtitle] = useState("");

//   useEffect(() => {
//     // Function to determine seasonal title and subtitle
//     const getSeasonalTitleAndSubtitle = () => {
//       const currentDate = new Date();
//       const currentMonth = currentDate.getMonth();

//       let season = "";
//       let month = "";
//       let title = "";
//       let subtitle = "";

//       switch (currentMonth) {
//         case 0: // January
//           season = "Winter";
//           month = "January";
//           title = "Explore Our January Specials";
//           subtitle = "Savor unique recipes handpicked for this month";
//           break;
//         case 1: // February
//           season = "Winter";
//           month = "February";
//           title = "Winter Wonderland";
//           subtitle = "Experience the magic of winter with cozy and festive recipes";
//           break;
//         case 2: // March
//           season = "Spring";
//           month = "March";
//           title = "Spring Delights";
//           subtitle = "Celebrate the freshness of spring with vibrant recipes";
//           break;
//         case 3: // April
//           season = "Spring";
//           month = "April";
//           title = "Discover Our April Specials";
//           subtitle = "Delight in exclusive recipes curated for this month";
//           break;
//         case 4: // May
//           season = "Spring";
//           month = "May";
//           title = "Blooming Gardens";
//           subtitle = "Explore seasonal dishes inspired by nature's awakening";
//           break;
//         case 5: // June
//           season = "Summer";
//           month = "June";
//           title = "Coastal Escapes";
//           subtitle = "Transport yourself to the seaside with coastal-inspired dishes";
//           break;
//         case 6: // July
//           season = "Summer";
//           month = "July";
//           title = "Explore Our July Specials";
//           subtitle = "Savor unique recipes handpicked for this month";
//           break;
//         case 7: // August
//           season = "Summer";
//           month = "August";
//           title = "Summer Sensations";
//           subtitle = "Beat the heat with refreshing recipes inspired by summer";
//           break;
//         case 8: // September
//           season = "Autumn";
//           month = "September";
//           title = "Autumn Harvest";
//           subtitle = "Embrace the bounty of the season with hearty autumn recipes";
//           break;
//         case 9: // October
//           season = "Autumn";
//           month = "October";
//           title = "Discover Our October Specials";
//           subtitle = "Indulge in exclusive recipes curated for this month";
//           break;
//         case 10: // November
//           season = "Autumn";
//           month = "November";
//           title = "Cozy Comforts";
//           subtitle = "Stay warm and cozy with comforting dishes perfect for fall";
//           break;
//         case 11: // December
//           season = "Winter";
//           month = "December";
//           title = "Festive Feasts";
//           subtitle = "Gather around the table and enjoy the flavors of the holiday season";
//           break;
//         // Add more cases for other months and holidays as needed
//         default:
//           title = "Seasonal Specials";
//           subtitle = "Explore seasonal recipes and culinary delights";
//       }

//       return { season, month, title, subtitle };
//     };

//     const { season, month, title, subtitle } = getSeasonalTitleAndSubtitle();
//     setSeason(season);
//     setMonth(month);
//     setSeasonalTitle(title);
//     setSeasonalSubtitle(subtitle);
//   }, []); // Empty dependency array to run the effect only once

//   return (
//     <Grid item xs={12} sm={12} md={12} lg={12}>
//       <div>
//         {/* <Typography variant="h2">{season}</Typography>
//       <Typography variant="h2">{month}</Typography> */}
//         {/* <Slide direction="left" in={true} timeout={1000}>
//             <Typography variant="h3" align="center" gutterBottom>
//               Let AI and Users Guide Your Decisions
//             </Typography>
//           </Slide> */}
//         <Grow in={true}>
//           <Typography variant="h3" gutterBottom sx={{ textAlign: "center", marginTop: "3rem", zIndex: 999 }}>
//             {seasonalTitle}
//           </Typography>
//         </Grow>
//         <Grow in={true} timeout={1500}>
//           <Typography variant="h6" gutterBottom sx={{ textAlign: "center", zIndex: 999 }}>
//             {seasonalSubtitle}
//           </Typography>
//         </Grow>
//         <Box display="flex" justifyContent="center" alignItems="center" height="100%">
//           <img
//             src={rabbitimg}
//             alt="Image Description"
//             style={{
//               width: "auto",
//               maxHeight: "280px",
//               // objectFit: "cover",
//             }}
//           />
//         </Box>
//         {/* <Typography sx={{ zIndex: 999 }} variant="subtitle1">
//         {seasonalSubtitle}
//       </Typography> */}

//         {/* <Typography variant="h6" gutterBottom sx={{ textAlign: "center", zIndex: 999 }}>
//           {seasonalSubtitle}
//         </Typography> */}

//         {/* Render your seasonal recipe and relevant picture here */}
//       </div>
//     </Grid>
//   );
// };

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
      {/* <Typography variant="h4" style={{ margin: "2rem", textAlign: "center" }}>
        {RecipesPageTitle}
      </Typography> */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h3" gutterBottom style={{ color: "#252C35", fontWeight: "700", textAlign: "center" }}>
            COOKING IS <span style={{ color: "#ff6600" }}>EASY</span>
          </Typography>
          <Box position="relative">
            {/* Banner Image */}
            <img
              src={coverimg3}
              alt=""
              style={{
                // width: "100%",
                width: isLargeScreen ? "90%" : "100%",
                maxHeight: isLargeScreen ? "300px" : "600px", // Adjust height for large screens
                objectFit: "cover",
                // borderRadius: "3rem",
              }}
            />
            {/* Buttons */}
          </Box>
          {/* <Box position="absolute" top="10%" left="10%" transform="translate(-50%, -50%)" textAlign="center">
            <Typography variant="h3" gutterBottom style={{ color: "#000", fontWeight: "700" }}>
              COOKING IS <span style={{ color: "#ff6600" }}>EASY</span>
            </Typography>
          </Box> */}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/recipes">
              <Button variant="contained" style={{ marginRight: "20px", backgroundColor: "#ff6600" }}>
                Find Your Recipe
              </Button>
            </Link>
            <Link to="/create-recipe">
              <Button variant="outlined" style={{ color: "#ff6600", borderColor: "#ff6600" }}>
                Share Your Recipe
              </Button>
            </Link>
          </Box>
        </Grid>
        {/* <Grid item xs={4} sm={2} md={2} lg={0}>
          <List>
            {categories.map((category) => (
              <ListItem button key={category._id} sx={{ padding: "0" }}>
                <ListItemText primary={category.name} />
              </ListItem>
            ))}
          </List>
        </Grid> */}

        {/* Main content */}

        {/* <Grid item xs={8} sm={8} md={8} lg={8}>
          <div
          // style={{
          //   position: "absolute",
          //   top: "50%",
          //   right: "0%",
          //   transform: "translate(0%, -50%)",
          //   textAlign: "right",
          //   fontWeight: "700",
          //   color: "#000",
          // }}
          > */}
        {/* <Typography variant="h2" style={{ textAlign: "left", fontSize: "2rem", marginBottom: "0.5rem", fontWeight: "700", textShadow: "-2px -2px 3px  #fff" }}>
              Unleash Your Inner Chef
            </Typography> */}
        {/* <Typography variant="h2" style={{ fontSize: "3rem", marginBottom: "0.5rem", fontWeight: "700", textShadow: "-1px -1px 3px #000" }}>
                Unleash Your Inner Chef
              </Typography> */}
        {/* <div sx={{ filter: "invert(0.6)" }}> */}
        {/* <Typography variant="subtitle1" style={{ fontSize: "1rem", fontWeight: "500", textShadow: "-1px -1px 3px  #fff" }}>
              Master the art of cooking with our diverse and inspiring recipe collection.
            </Typography> */}
        {/* </div> */}
        {/* </div>
        </Grid> */}
        {/* <Grid item xs={4} sm={4} md={4} lg={4}>
          <Box style={{ position: "relative", left: -90, top: -40 }}>
            <img
              src={Drinks10}
              alt="Image Description"
              style={{
                width: "auto",
                maxHeight: "220px",
                // objectFit: "cover",
                borderRadius: "3rem",
              }}
            />
          </Box>
        </Grid> */}
        {/* <Grid item xs={4} sm={4} md={12} lg={12}>
          <Box>
            <img
              src={procimg}
              alt="Image Description"
              style={{
                width: "auto",
                maxHeight: "280px",
                // objectFit: "cover",
              }}
            />
          </Box>
        </Grid> */}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Slide direction="left" in={true}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: isSmallScreen ? "center" : "left" }}>
              {seasonalTitle}
            </Typography>
          </Slide>
          <Slide direction="left" in={true}>
            <Typography variant="body1" gutterBottom sx={{ textAlign: isSmallScreen ? "center" : "left" }}>
              {seasonalSubtitle}
            </Typography>
          </Slide>
        </Grid>

        {/* <Grid item xs={5} sm={5} md={5} lg={4}>
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <img
              src={rabbitimg}
              alt="Image Description"
              style={{
                width: "auto",
                maxHeight: "280px",
                // objectFit: "cover",
              }}
            />
          </Box>
        </Grid> */}
        {/* <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
            Seasonal inspiration
          </Typography>
        </Grid> */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={7} lg={8} order={{ xs: 2, md: 1 }}>
            <Grid container spacing={3}>
              {/* Map over a slice of the recipes array containing only the first 6 elements */}
              {recipes.slice(0, 4).map((recipe) => (
                <RecipeCardHome key={recipe._id} recipe={recipe} />
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={4} order={{ xs: 1, md: 2 }}>
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
              <img
                src={rabbitimg}
                alt="Image Description"
                style={{
                  width: "auto",
                  maxHeight: "280px",
                  // objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Slide direction="right" in={true}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: isSmallScreen ? "center" : "right" }}>
              Trending recipes
            </Typography>
          </Slide>
          <Slide direction="right" in={true}>
            <Typography variant="body1" gutterBottom sx={{ textAlign: isSmallScreen ? "center" : "right" }}>
              Discover what's hot in the culinary world right now!
            </Typography>
          </Slide>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={4}>
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <img
              src={saltimg}
              alt="Image Description"
              style={{
                width: "auto",
                maxHeight: "280px",
                // objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={8}>
          <Grid container spacing={3}>
            {/* Map over a slice of the recipes array containing only the first 6 elements */}
            {recipes.slice(0, 4).map((recipe) => (
              <RecipeCardHome key={recipe._id} recipe={recipe} />
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Slide direction="left" in={true}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: isSmallScreen ? "center" : "left" }}>
              Popular recipe collections
            </Typography>
          </Slide>
          <Slide direction="left" in={true}>
            <Typography variant="body1" gutterBottom sx={{ textAlign: isSmallScreen ? "center" : "left" }}>
              Discover our most beloved recipe collections!
            </Typography>
          </Slide>
        </Grid>

        <Grid item xs={12} sm={12} md={7} lg={8} order={{ xs: 2, md: 1 }}>
          <Grid container spacing={3}>
            {/* Map over a slice of the recipes array containing only the first 6 elements */}
            {recipes.slice(0, 4).map((recipe) => (
              <RecipeCardHome key={recipe._id} recipe={recipe} />
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={4} order={{ xs: 1, md: 2 }}>
          <Box display="flex" justifyContent="center" alignItems="center" height="100%" style={{ overflow: "hidden" }}>
            <img
              src={smokeimg}
              // src={cookingmix2}
              alt="Image Description"
              style={{
                width: "auto",
                maxHeight: "280px",
                // objectFit: "cover",
              }}
            />
          </Box>
        </Grid>

        {/* <Grid item xs={4} sm={4} md={12} lg={12}>
          <Box>
            <img
              src={saltimg}
              alt="Image Description"
              style={{
                width: "auto",
                maxHeight: "280px",
                // objectFit: "cover",
              }}
            />
          </Box>
        </Grid> */}
        {/* <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
            Seasonal inspiration
          </Typography>
        </Grid> */}

        {/* <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h6" gutterBottom sx={{ textAlign: "left" }}>
            Latest added recipes...
          </Typography>
          <Grid container spacing={3}>
          
            {recipes.slice(0, 3).map((recipe) => (
              <RecipeCardHome key={recipe._id} recipe={recipe} />
            ))}
          </Grid>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
};

export default Home;
