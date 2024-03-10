// RecipesPage.js
import React, { useEffect, useState } from "react";
// import { Link, Navigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { BASE_URL } from "../middleware/config";
// import { useAuth } from "../middleware/AuthContext";
import Grid from "@mui/material/Grid";
import { List, ListItem, ListItemText, Box } from "@mui/material";
import SkeletonRecipeCard from "../components/SkeletonRecipeCard";
import CustomAlert from "../components/CustomAlert";
import RecipeCardHome from "../components/RecipeCardHome";
import Drinks from "../images/img-1.jpg";
import Drinks5 from "../images/img-5.png";
import Drinks6 from "../images/img-6.png";
import Drinks7 from "../images/img-7.jpg";
import Drinks8 from "../images/img-8.png";
import Drinks10 from "../images/img-10.png";
import Drinks11 from "../images/img-11.png";

const Home = () => {
  // const { isAuthenticated } = useAuth();
  const API_URL = `${BASE_URL}/recipes`;
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [categories, setCategories] = useState([]);
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
        setRecipes(recipesData);

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

  // if (redirectToLogin || !isAuthenticated()) {
  //   // If redirectToLogin is true or user is not authenticated, redirect to the login page
  //   return <Navigate to="/auth" state={{ from: "/recipes" }} />;
  // }

  const RecipesPageTitle = "Explore Our Recipe Collection";

  if (loading) {
    return (
      <React.Fragment>
        <Typography variant="h4" style={{ margin: "2rem", textAlign: "center", fontSize: "2rem" }}>
          {RecipesPageTitle}
        </Typography>
        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          {[...Array(12)].map((_, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
              <SkeletonRecipeCard />
            </Grid>
          ))}
        </Grid>
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

        <Grid item xs={8} sm={8} md={8} lg={8}>
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
          >
            <Typography variant="h2" style={{ textAlign: "left", fontSize: "2rem", marginBottom: "0.5rem", fontWeight: "700", textShadow: "-2px -2px 3px  #fff" }}>
              Unleash Your Inner Chef
            </Typography>
            {/* <Typography variant="h2" style={{ fontSize: "3rem", marginBottom: "0.5rem", fontWeight: "700", textShadow: "-1px -1px 3px #000" }}>
                Unleash Your Inner Chef
              </Typography> */}
            {/* <div sx={{ filter: "invert(0.6)" }}> */}
            <Typography variant="subtitle1" style={{ fontSize: "1rem", fontWeight: "500", textShadow: "-1px -1px 3px  #fff" }}>
              Master the art of cooking with our diverse and inspiring recipe collection.
            </Typography>
            {/* </div> */}
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}>
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
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ paddingTop: "0 !important" }}>
          <Typography variant="h6" style={{ margin: "0 1rem 1rem 1rem", textAlign: "center" }}>
            {RecipesPageTitle}
          </Typography>
          <Grid container spacing={3}>
            {recipes.map((recipe) => (
              <RecipeCardHome key={recipe._id} recipe={recipe} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
