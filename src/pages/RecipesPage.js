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
import { Box, Typography, Drawer, Divider, List, ListItemButton, ListItemText, Collapse, ListItem, Card, CardMedia, CardContent } from "@mui/material";
import Breadcrumbs from "../components/Breadcrumbs";
// import Pagination from "../components/BasicPagination";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SideBar from "./SideBar";
import coverImg from "../images/cover.jpg";

const RecipesPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [recipes, setRecipes] = useState([]);
  const [pagination, setPagination] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [appliedFilters, setAppliedFilters] = useState({
    recipeTitle: queryParams.get("recipeTitle") || "",
    // recipeAuthor: queryParams.get("recipeAuthor") || "",
    hasReviews: queryParams.get("hasReviews") || "",
    // difficulty: queryParams.get("difficulty") || "",
    difficulties: queryParams.getAll("difficulties") || [],

    totalTime: queryParams.get("totalTime") || "",

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
        // const response = await fetch(`${BASE_URL}/recipes${queryParams}`);
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

      //const response = await fetch(`/recipes?${new URLSearchParams(newFilters).toString()}`);
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
        // recipeAuthor: "",
        hasReviews: "",
        // difficulty: "",
        difficulties: [],
        totalTime: "",
        cookingMethods: [],
        tastes: [],
        diets: [],
        meals: [],
        cuisines: [],
        // Add other filter keys and their default values here
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

  return (
    <>
      {isLoading ? (
        <Typography variant="body1">Loading...</Typography>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <SideBar applyFilters={applyFilters} resetFilters={resetFilters} />
          </Grid>

          <Grid item xs={12} sm={12} md={9} lg={9}>
            <Typography variant="h4" textAlign="center">
              Explore Our Recipes
            </Typography>
            <Typography variant="subtitle1" textAlign="center">
              Dive into a world of {pagination.totalRecipes} recipes, each crafted to inspire your culinary journey.
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

            <Pagination sx={{ mt: 2 }} page={pagination.page} count={pagination.totalPages} onChange={handlePaginationChange} size="large" />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default RecipesPage;

// import LocalCafeIcon from "@mui/icons-material/LocalCafe";
// import CakeIcon from "@mui/icons-material/Cake";
// import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
// import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
// import LocalBarIcon from "@mui/icons-material/LocalBar";
// import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
// import KebabDiningIcon from "@mui/icons-material/KebabDining";
// import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
// import Drinks from "../images/img-1.jpg";
// import Appetizers from "../images/img-2.jpg";
// import MainCourse from "../images/img-3.jpg";
// import Desserts from "../images/img-4.jpg";
// import CookieIcon from "@mui/icons-material/Cookie";
// import SetMealIcon from "@mui/icons-material/SetMeal";
// import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
// import RiceBowlIcon from "@mui/icons-material/RiceBowl";
// import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
// import WaterDropIcon from "@mui/icons-material/WaterDrop";
// import FastfoodIcon from "@mui/icons-material/Fastfood";

// const categories = [
//   {
//     title: "Appetizer",
//     name: "appetizer",
//     icon: <SetMealIcon width={30} height={30} fill="white" />,
//     image: Appetizers,
//   },
//   {
//     title: "Main Course",
//     name: "main course",
//     icon: <BrunchDiningIcon width={30} height={30} fill="white" />,
//     image: MainCourse,
//   },
//   {
//     title: "Desserts",
//     name: "dessert",
//     icon: <CakeIcon width={30} height={30} fill="white" />,
//     image: Desserts,
//   },
//   {
//     title: "Drinks",
//     name: "drink",
//     icon: <LocalCafeIcon width={30} height={30} fill="white" />,
//     image: Drinks,
//   },
//   {
//     title: "Side Dish",
//     name: "side dish",
//     icon: <DinnerDiningIcon width={30} height={30} fill="white" />,
//     image: Appetizers,
//   },
//   {
//     title: "Salad",
//     name: "salad",
//     icon: <RiceBowlIcon width={30} height={30} fill="white" />,
//     image: Appetizers,
//   },
//   {
//     title: "Bread",
//     name: "bread",
//     icon: <BreakfastDiningIcon width={30} height={30} fill="white" />,
//     image: Appetizers,
//   },
//   {
//     title: "Breakfast",
//     name: "breakfast",
//     icon: <BakeryDiningIcon width={30} height={30} fill="white" />,
//     image: Appetizers,
//   },
//   {
//     title: "Soup",
//     name: "soup",
//     icon: <SoupKitchenIcon width={30} height={30} fill="white" />,
//     image: Appetizers,
//   },
//   {
//     title: "Beverage",
//     name: "beverage",
//     icon: <LocalBarIcon width={30} height={30} fill="white" />,
//     image: Appetizers,
//   },
//   {
//     title: "Sauce",
//     name: "sauce",
//     icon: <WaterDropIcon width={30} height={30} fill="white" />,
//     image: Appetizers,
//   },
//   {
//     title: "Marinade",
//     name: "marinade",
//     icon: <KebabDiningIcon width={30} height={30} fill="white" />,
//     image: Appetizers,
//   },
//   {
//     title: "Finger Food",
//     name: "fingerfood",
//     icon: <LocalPizzaIcon width={30} height={30} fill="white" />,
//     image: Appetizers,
//   },
//   {
//     title: "Snack",
//     name: "snack",
//     icon: <CookieIcon width={30} height={30} fill="white" />,
//     image: Appetizers,
//   },
// ];

// const iconMapping = {
//   appetizer: <SetMealIcon color="white" />,
//   "main course": <BrunchDiningIcon color="white" />,
//   desserts: <CakeIcon color="white" />,
//   drinks: <LocalCafeIcon color="white" />,
//   "side dish": <DinnerDiningIcon color="white" />,
//   salad: <RiceBowlIcon color="white" />,
//   bread: <BreakfastDiningIcon color="white" />,
//   soup: <SoupKitchenIcon color="white" />,
//   sauce: <WaterDropIcon color="white" />,
//   marinade: <KebabDiningIcon color="white" />,
//   "street food": <FastfoodIcon color="white" />,
//   snack: <CookieIcon color="white" />,
//   breakfast: <BakeryDiningIcon color="white" />,
//   brunch: <BrunchDiningIcon color="white" />,
//   lunch: <BrunchDiningIcon color="white" />,
//   dinner: <BrunchDiningIcon color="white" />,

//   // Add more mappings as needed
// };
