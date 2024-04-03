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
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [collections, setCollections] = useState([]);
  const [currentCollection, setCurrentCollection] = useState("");
  const [loading, setLoading] = useState(true);

  const [appliedFilters, setAppliedFilters] = useState({
    recipeTitle: queryParams.get("recipeTitle") || "",
    recipeAuthor: queryParams.get("recipeAuthor") || "",
    // Add other filter keys and their default values here
  });

  useEffect(() => {
    const fetchCurrentMeal = async () => {
      try {
        const response = await fetch(`${BASE_URL}/collections/${slug}`);
        const data = await response.json();

        setCurrentCollection(data.collection);
        console.log("data", data);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCurrentMeal();
  }, [slug]); // Include id in the dependency array

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        setLoading(true);

        // Derive queryParams directly inside the useEffect
        const queryParams = new URLSearchParams(location.search);

        // Use the `navigate` function to update the URL with the new query parameters
        navigate(`/collections/${slug}?${queryParams.toString()}`);

        const response = await fetch(`${BASE_URL}/collections/${slug}?${queryParams.toString()}`);
        const data = await response.json();
        console.log("datadata", data);
        if (Array.isArray(data.recipes)) {
          setCollections(data.recipes);
        } else {
          console.error("Error: Expected an array of collections, but received:", data);
        }
      } catch (error) {
        console.error("Error fetching filtered collections:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, [slug, location.search, navigate]);

  const applyFilters = async (filters) => {
    try {
      setLoading(true);

      const newFilters = { ...appliedFilters, ...filters };
      setAppliedFilters(newFilters);

      // Use the `navigate` function to update the URL with the new query parameters
      navigate(`/collections/${slug}?${new URLSearchParams(newFilters).toString()}`);

      const response = await fetch(`${BASE_URL}/collections/${slug}?${new URLSearchParams(newFilters).toString()}`);
      const data = await response.json();

      if (Array.isArray(data.recipes)) {
        setCollections(data.recipes);
      } else {
        console.error("Error: Expected an array of collections, but received:", data);
      }
    } catch (error) {
      console.error("Error fetching filtered collections:", error);
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
      navigate(`/collections/${slug}`);

      const response = await fetch(`${BASE_URL}/collections/${slug}`);
      const data = await response.json();

      if (Array.isArray(data.recipes)) {
        setCollections(data.recipes);
      } else {
        console.error("Error: Expected an array of collections, but received:", data);
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
              src={`${process.env.PUBLIC_URL}/logos/${currentCollection.name}.jpg`}
              alt={currentCollection.name}
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
            Recipes for {currentCollection && currentCollection.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {currentCollection && currentCollection.description}
          </Typography>
          {loading ? (
            <CircularProgress />
          ) : collections.length > 0 ? (
            <Grid container spacing={2}>
              {collections.map((collection) => (
                // <Grid item key={recipe._id} xs={6} sm={6} md={4} lg={3}>
                <RecipeCardMeals key={collection._id} recipe={collection} />
              ))}
            </Grid>
          ) : (
            <Typography variant="body1">No recipes available for this collection.</Typography>
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
