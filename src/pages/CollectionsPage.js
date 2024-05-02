import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import CakeIcon from "@mui/icons-material/Cake";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import KebabDiningIcon from "@mui/icons-material/KebabDining";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import Drinks from "../images/img-1.jpg";
import Appetizers from "../images/img-2.jpg";
import MainCourse from "../images/img-3.jpg";
import Desserts from "../images/img-4.jpg";
import CookieIcon from "@mui/icons-material/Cookie";
import SetMealIcon from "@mui/icons-material/SetMeal";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import RecipeCardAllCollections from "../components/RecipeCardAllCollections";
import CustomAlert from "../components/CustomAlert";
import RecipeCardSolo from "../components/RecipeCardSolo";
import RecipeCardCollection from "../components/RecipeCardCollection";
import Chip from "@mui/material/Chip";
import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { BASE_URL } from "../middleware/config";
import { Box, Typography, Drawer, Divider, List, ListItemButton, ListItemText, Collapse, ListItem, Card, CardMedia, CardContent } from "@mui/material";
import Breadcrumbs from "../components/Breadcrumbs";

import Stack from "@mui/material/Stack";
import SideBar from "./SideBar";
import Drinks10 from "../images/img-10.png";
import coverImg from "../images/cover.jpg";

const categories = [
  {
    title: "Appetizer",
    name: "appetizer",
    icon: <SetMealIcon width={30} height={30} fill="white" />,
    image: Appetizers,
  },
  {
    title: "Main Course",
    name: "main course",
    icon: <BrunchDiningIcon width={30} height={30} fill="white" />,
    image: MainCourse,
  },
  {
    title: "Desserts",
    name: "dessert",
    icon: <CakeIcon width={30} height={30} fill="white" />,
    image: Desserts,
  },
  {
    title: "Drinks",
    name: "drink",
    icon: <LocalCafeIcon width={30} height={30} fill="white" />,
    image: Drinks,
  },
  {
    title: "Side Dish",
    name: "side dish",
    icon: <DinnerDiningIcon width={30} height={30} fill="white" />,
    image: Appetizers,
  },
  {
    title: "Salad",
    name: "salad",
    icon: <RiceBowlIcon width={30} height={30} fill="white" />,
    image: Appetizers,
  },
  {
    title: "Bread",
    name: "bread",
    icon: <BreakfastDiningIcon width={30} height={30} fill="white" />,
    image: Appetizers,
  },
  {
    title: "Breakfast",
    name: "breakfast",
    icon: <BakeryDiningIcon width={30} height={30} fill="white" />,
    image: Appetizers,
  },
  {
    title: "Soup",
    name: "soup",
    icon: <SoupKitchenIcon width={30} height={30} fill="white" />,
    image: Appetizers,
  },
  {
    title: "Beverage",
    name: "beverage",
    icon: <LocalBarIcon width={30} height={30} fill="white" />,
    image: Appetizers,
  },
  {
    title: "Sauce",
    name: "sauce",
    icon: <WaterDropIcon width={30} height={30} fill="white" />,
    image: Appetizers,
  },
  {
    title: "Marinade",
    name: "marinade",
    icon: <KebabDiningIcon width={30} height={30} fill="white" />,
    image: Appetizers,
  },
  {
    title: "Finger Food",
    name: "fingerfood",
    icon: <LocalPizzaIcon width={30} height={30} fill="white" />,
    image: Appetizers,
  },
  {
    title: "Snack",
    name: "snack",
    icon: <CookieIcon width={30} height={30} fill="white" />,
    image: Appetizers,
  },
];

const iconMapping = {
  appetizer: <SetMealIcon color="white" />,
  "main course": <BrunchDiningIcon color="white" />,
  desserts: <CakeIcon color="white" />,
  drinks: <LocalCafeIcon color="white" />,
  "side dish": <DinnerDiningIcon color="white" />,
  salad: <RiceBowlIcon color="white" />,
  bread: <BreakfastDiningIcon color="white" />,
  soup: <SoupKitchenIcon color="white" />,
  sauce: <WaterDropIcon color="white" />,
  marinade: <KebabDiningIcon color="white" />,
  "street food": <FastfoodIcon color="white" />,
  snack: <CookieIcon color="white" />,
  breakfast: <BakeryDiningIcon color="white" />,
  brunch: <BrunchDiningIcon color="white" />,
  lunch: <BrunchDiningIcon color="white" />,
  dinner: <BrunchDiningIcon color="white" />,

  // Add more mappings as needed
};

const CollectionsPage = () => {
  const { id } = useParams();
  const [collections, setCollections] = useState([]);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // New loading state
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch(`${BASE_URL}/collections`);
        const data = await response.json();
        setCollections(data);
        setIsLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching collections:", error);
        setIsLoading(false); // Set loading to false in case of an error
      }
    };

    fetchCollections();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleCollectionsToggle = () => {
    setCollectionsOpen(!collectionsOpen);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  if (isLoading) {
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
    <Grid container spacing={3}>
      {/* Collections Page Title */}
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h4" textAlign="center">
          Recipe inspiration
        </Typography>
        <Typography variant="subtitle1" textAlign="center">
          Whether you're after an old favourite or inspiration for something new, we have the perfect recipe.
        </Typography>
      </Grid>
      {/* Collections Page Cover */}
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <CardMedia
          component="img"
          src={coverImg}
          alt=""
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            // borderRadius: "3rem",
          }}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h5" textAlign="center">
          Most popular recipe collections
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box>
          {collections.map((collection, index) => (
            <Box key={index} mb={3}>
              <Typography variant="h6" textAlign="left" mb={1}>
                <Link
                  to={`/collections/${collection.slug}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  sx={{
                    "&:visited": {
                      color: "black",
                    },
                  }}
                >
                  {collection.name}
                </Link>
              </Typography>

              <Grid container spacing={3} sx={{ display: "flex" }}>
                {collection.recipes.slice(0, 4).map((recipe) => (
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={3}
                    lg={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <RecipeCardAllCollections key={recipe._id} recipe={recipe} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};
export default CollectionsPage;
