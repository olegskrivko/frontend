// RecipesPage.js
import React, { useEffect, useState } from "react";
// import { Link, Navigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { BASE_URL } from "../middleware/config";
// import { useAuth } from "../middleware/AuthContext";
import Grid from "@mui/material/Grid";

import SkeletonRecipeCard from "../components/SkeletonRecipeCard";
import CustomAlert from "../components/CustomAlert";
import RecipeCard from "../components/RecipeCard";

const RecipesPage = () => {
  // const { isAuthenticated } = useAuth();
  const API_URL = `${BASE_URL}/recipes`;
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [redirectToLogin, setRedirectToLogin] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // const token = localStorage.getItem("token");

        // if (!token) {
        //   // Handle case where token is missing
        //   throw new Error("User not authenticated. Please log in.");
        // }
        // const response = await fetch(API_URL, {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // });

        const response = await fetch(API_URL);

        // if (!response.ok) {
        //   throw new Error("Failed to fetch recipes");
        // }
        if (!response.ok) {
          if (response.status === 401) {
            // If unauthorized, set redirectToLogin to true
            // setRedirectToLogin(true);
          } else {
            throw new Error("Failed to fetch recipes");
          }
        }

        const data = await response.json();
        // console.log("Fetched recipes:", data);

        setRecipes(data);
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

  const RecipesPageTitle = "All Recipes";

  if (loading) {
    return (
      <React.Fragment>
        <Typography variant="h4" style={{ margin: "2rem", textAlign: "center" }}>
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
      <Typography variant="h4" style={{ margin: "2rem", textAlign: "center" }}>
        {RecipesPageTitle}
      </Typography>
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default RecipesPage;
