import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../middleware/config";
import { Typography, Box, Grid, Card, CardContent, CardActionArea, CardMedia, CircularProgress } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Import AccessTime icon
import RecipeCardMeals from "../components/RecipeCardMeals";
// import Desserts from "../images/Desserts.jpg";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import BasicPagination from "../components/BasicPagination";
import SideBar from "./SideBar";

const CollectionRecipes = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [meals, setMeals] = useState([]);
  const [currentMeal, setCurrentMeal] = useState("");
  const [loading, setLoading] = useState(true);

  const [appliedFilters, setAppliedFilters] = useState({
    recipeTitle: queryParams.get("recipeTitle") || "",
    recipeAuthor: queryParams.get("recipeAuthor") || "",
    // Add other filter keys and their default values here
  });

  // State variable to track applied filters
  // const [appliedFilters, setAppliedFilters] = useState({
  //   recipeTitle: "",
  //   recipeAuthor: "",
  //   // Add other filter keys and their default values here
  // });

  useEffect(() => {
    const fetchCurrentMeal = async () => {
      try {
        const response = await fetch(`${BASE_URL}/meals/${id}`);
        const data = await response.json();

        setCurrentMeal(data);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchCurrentMeal();
  }, [id]); // Include id in the dependency array

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true);

        // Derive queryParams directly inside the useEffect
        const queryParams = new URLSearchParams(location.search);

        // Use the `navigate` function to update the URL with the new query parameters
        navigate(`/meals/${id}/recipes?${queryParams.toString()}`);

        const response = await fetch(`${BASE_URL}/meals/${id}/recipes?${queryParams.toString()}`);
        const data = await response.json();

        if (Array.isArray(data)) {
          setMeals(data);
        } else {
          console.error("Error: Expected an array of meals, but received:", data);
        }
      } catch (error) {
        console.error("Error fetching filtered meals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [id, location.search, navigate]);

  // useEffect(() => {
  //   const fetchMeals = async () => {
  //     try {
  //       const response = await fetch(`${BASE_URL}/meals/${id}/recipes`);
  //       const data = await response.json();

  //       // Check if data is an array before setting the state
  //       if (Array.isArray(data)) {
  //         setMeals(data);
  //       } else {
  //         console.error("Error: Expected an array of meals, but received:", data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching meals:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMeals();
  // }, [id, appliedFilters, queryParams]); // Include id in the dependency array

  // useEffect(() => {
  //   const fetchCurrentMeal = async () => {
  //     try {
  //       const response = await fetch(`${BASE_URL}/meals/${id}`);
  //       const data = await response.json();

  //       setCurrentMeal(data);
  //     } catch (error) {
  //       console.error("Error fetching meals:", error);
  //     }
  //   };

  //   fetchCurrentMeal();
  // }, [id]); // Include id in the dependency array

  // const applyFilters = async (filters) => {
  //   // Implement your logic to fetch and display filtered recipes
  //   console.log("Applied Filters:", filters);

  //   try {
  //     setLoading(true);

  //     // Constructing query parameters
  //     const queryParams = new URLSearchParams();
  //     if (filters.recipeTitle) {
  //       queryParams.append("recipeTitle", filters.recipeTitle);
  //     }

  //     if (filters.recipeAuthor) {
  //       queryParams.append("recipeAuthor", filters.recipeAuthor);
  //     }

  //     // Replace this with your actual API endpoint for recipes with query parameters
  //     const response = await fetch(`${BASE_URL}/meals/${id}/recipes?${queryParams}`);
  //     const data = await response.json();

  //     // Check if data is an array before setting the state
  //     if (Array.isArray(data)) {
  //       setMeals(data);
  //       // Update the state to reflect applied filters
  //       setAppliedFilters(filters);
  //     } else {
  //       console.error("Error: Expected an array of meals, but received:", data);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching filtered meals:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const resetFilters = async () => {
  //   try {
  //     setLoading(true);

  //     // Clear any applied filters
  //     const emptyFilters = {
  //       recipeTitle: "",
  //       recipeAuthor: "",
  //       // Add other filter keys and their default values here
  //     };

  //     // Call applyFilters with the empty filters to fetch all recipes
  //     await applyFilters(emptyFilters);

  //     // Update the state to reflect cleared filters
  //     setAppliedFilters(emptyFilters);

  //     console.log("Filters Reset");
  //   } catch (error) {
  //     console.error("Error resetting filters:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const applyFilters = async (filters) => {
    try {
      setLoading(true);

      const newFilters = { ...appliedFilters, ...filters };
      setAppliedFilters(newFilters);

      // Use the `navigate` function to update the URL with the new query parameters
      navigate(`/meals/${id}/recipes?${new URLSearchParams(newFilters).toString()}`);

      const response = await fetch(`${BASE_URL}/meals/${id}/recipes?${new URLSearchParams(newFilters).toString()}`);
      const data = await response.json();

      if (Array.isArray(data)) {
        setMeals(data);
      } else {
        console.error("Error: Expected an array of meals, but received:", data);
      }
    } catch (error) {
      console.error("Error fetching filtered meals:", error);
    } finally {
      setLoading(false);
    }
  };

  const resetFilters = async () => {
    try {
      setLoading(true);

      // Clear any applied filters
      const emptyFilters = {
        recipeTitle: "",
        recipeAuthor: "",
        cookingMethods: [],
        // Add other filter keys and their default values here
        // Add other filter keys and their default values here
      };

      setAppliedFilters(emptyFilters);

      // Use the `navigate` function to update the URL with the cleared query parameters
      navigate(`/meals/${id}/recipes`);

      const response = await fetch(`${BASE_URL}/meals/${id}/recipes`);
      const data = await response.json();

      if (Array.isArray(data)) {
        setMeals(data);
      } else {
        console.error("Error: Expected an array of meals, but received:", data);
      }

      console.log("Filters Reset");
    } catch (error) {
      console.error("Error resetting filters:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <SideBar applyFilters={applyFilters} resetFilters={resetFilters} />
      </Grid>

      <Grid item xs={12} sm={12} md={9} lg={9}>
        <Box>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/logos/${currentMeal.name}.jpg`}
              alt={currentMeal.name}
              style={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "cover",
                // borderRadius: "3rem",
              }}
            />
          </div>

          {/* Display recipes */}
          <Typography variant="h4" gutterBottom>
            Recipes for {currentMeal && currentMeal.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {currentMeal && currentMeal.description}
          </Typography>
          {loading ? (
            <CircularProgress />
          ) : meals.length > 0 ? (
            <Grid container spacing={2}>
              {meals.map((meal) => (
                // <Grid item key={recipe._id} xs={6} sm={6} md={4} lg={3}>
                <RecipeCardMeals key={meal._id} recipe={meal} />
              ))}
            </Grid>
          ) : (
            <Typography variant="body1">No recipes available for this meal.</Typography>
          )}
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={3} lg={3}></Grid>
      <Grid item xs={12} sm={12} md={9} lg={9}>
        {/* <Box sx={{ my: "1rem" }}> */}
        <BasicPagination />
        {/* </Box> */}
      </Grid>
    </Grid>
  );
};
export default CollectionRecipes;
