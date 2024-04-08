import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import RecipeCard from "../components/RecipeCard";
import Chip from "@mui/material/Chip";

import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";

import { BASE_URL } from "../middleware/config";
import { Box, Typography, Drawer, Divider, List, ListItemButton, CircularProgress, ListItemText, Collapse, ListItem, Card, CardMedia, CardContent } from "@mui/material";
import Breadcrumbs from "../components/Breadcrumbs";

// import Pagination from "../components/BasicPagination";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SideBar from "./SideBar";
import CustomAlert from "../components/CustomAlert";
import coverImg from "../images/cover.jpg";

const RecipesPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [recipes, setRecipes] = useState([]);
  const [pagination, setPagination] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [appliedFilters, setAppliedFilters] = useState({
    recipeTitle: queryParams.get("recipeTitle") || "",
    // hasReviews: queryParams.get("hasReviews") || "",
    difficulties: queryParams.getAll("difficulties") || [],
    totalTime: queryParams.get("totalTime") || "",
    cuisines: queryParams.getAll("cuisines") || [],
    tastes: queryParams.getAll("tastes") || [],
    meals: queryParams.getAll("meals") || [],
    diets: queryParams.getAll("diets") || [],
    cookingMethods: queryParams.getAll("cookingMethods") || [],
    // Add other filter keys and their default values here
  });

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);

        const response = await fetch(`${BASE_URL}/recipes?${queryParams.toString()}`);

        const data = await response.json();
        // Check if the expected properties exist in the response
        if (data && data.recipes && data.pagination) {
          setRecipes(data.recipes);
          setPagination(data.pagination);
        } else {
          console.error("Invalid response structure:", data);
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, [location.search, navigate]);

  const applyFilters = async (filters) => {
    try {
      setIsLoading(true);

      const newFilters = { ...appliedFilters, ...filters };
      setAppliedFilters(newFilters);

      // Use the `navigate` function to update the URL with the new query parameters
      navigate(`/recipes?${new URLSearchParams(newFilters).toString()}`);

      const response = await fetch(`${BASE_URL}/recipes?${new URLSearchParams(newFilters).toString()}`);

      const data = await response.json();

      if (Array.isArray(data)) {
        setRecipes(data);
      } else {
        console.error("Error: Expected an array of recipes, but received:", data);
      }
    } catch (error) {
      console.error("Error fetching filtered recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetFilters = async () => {
    try {
      setIsLoading(true);

      // Clear any applied filters
      const emptyFilters = {
        recipeTitle: "",
        // hasReviews: "",
        difficulties: [],
        totalTime: "",
        cookingMethods: [],
        tastes: [],
        diets: [],
        meals: [],
        cuisines: [],
        // Add other filter keys and their default values here
      };

      setAppliedFilters(emptyFilters);

      // Use the `navigate` function to update the URL with the cleared query parameters
      navigate(`/recipes`);

      const response = await fetch(`${BASE_URL}/recipes`);
      const data = await response.json();

      if (Array.isArray(data)) {
        setRecipes(data);
      } else {
        console.error("Error: Expected an array of meals, but received:", data);
      }

      console.log("Filters Reset");
    } catch (error) {
      console.error("Error resetting filters:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaginationChange = async (event, page) => {
    try {
      setIsLoading(true);

      const response = await fetch(`${BASE_URL}/recipes?page=${page}&${new URLSearchParams(appliedFilters).toString()}`);
      const data = await response.json();

      if (data && data.recipes && data.pagination) {
        setRecipes(data.recipes);
        setPagination(data.pagination);
      } else {
        console.error("Invalid response structure:", data);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
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
      </React.Fragment>
    );
  }

  if (error) {
    return <CustomAlert errorMessage={error} />;
  }

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <SideBar applyFilters={applyFilters} resetFilters={resetFilters} />
        </Grid>

        <Grid item xs={12} sm={12} md={9} lg={9}>
          <Typography variant="h4" textAlign="center">
            Explore Our Recipes
          </Typography>
          <Typography variant="subtitle1" textAlign="center">
            Dive into a world of thousands recipes, each crafted to inspire your culinary journey.
            {/* Dive into a world of {pagination.totalRecipes} recipes, each crafted to inspire your culinary journey. */}
          </Typography>

          <div>
            <img
              src={coverImg}
              alt={"aa"}
              style={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "cover",
                // borderRadius: "3rem",
              }}
            />
          </div>

          {/* Render the recipes and use pagination information as needed */}
          <Grid container spacing={2}>
            {recipes.map((recipe) => (
              <Grid item key={recipe._id} xs={6} sm={6} md={4} lg={4}>
                <RecipeCard key={recipe._id} recipe={recipe} />
              </Grid>
            ))}
          </Grid>
          {/* Add pagination controls using the pagination state */}

          <Pagination sx={{ mt: 2 }} page={pagination.page} count={pagination.totalPages} onChange={handlePaginationChange} size="large" color="warning" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default RecipesPage;
