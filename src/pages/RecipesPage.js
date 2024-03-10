// // import React, { useState, useRef } from "react";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import Button from "@mui/material/Button";
// // import Container from "@mui/material/Container";
// // import Grid from "@mui/material/Grid";
// // import LocalCafeIcon from "@mui/icons-material/LocalCafe";
// // import CakeIcon from "@mui/icons-material/Cake";
// // import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
// // import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
// // import LocalBarIcon from "@mui/icons-material/LocalBar";
// // import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
// // import KebabDiningIcon from "@mui/icons-material/KebabDining";
// // import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
// // import Drinks from "../images/img-1.jpg";
// // import Appetizers from "../images/img-2.jpg";
// // import MainCourse from "../images/img-3.jpg";
// // import Desserts from "../images/img-4.jpg";
// // import CookieIcon from "@mui/icons-material/Cookie";
// // import SetMealIcon from "@mui/icons-material/SetMeal";
// // import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
// // import RiceBowlIcon from "@mui/icons-material/RiceBowl";
// // import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
// // import WaterDropIcon from "@mui/icons-material/WaterDrop";

// // const categories = [
// //   {
// //     title: "Appetizer",
// //     name: "appetizer",
// //     icon: <SetMealIcon width={30} height={30} fill="white" />,
// //     image: Appetizers,
// //   },
// //   {
// //     title: "Main Course",
// //     name: "main course",
// //     icon: <BrunchDiningIcon width={30} height={30} fill="white" />,
// //     image: MainCourse,
// //   },
// //   {
// //     title: "Desserts",
// //     name: "dessert",
// //     icon: <CakeIcon width={30} height={30} fill="white" />,
// //     image: Desserts,
// //   },
// //   {
// //     title: "Drinks",
// //     name: "drink",
// //     icon: <LocalCafeIcon width={30} height={30} fill="white" />,
// //     image: Drinks,
// //   },
// //   {
// //     title: "Side Dish",
// //     name: "side dish",
// //     icon: <DinnerDiningIcon width={30} height={30} fill="white" />,
// //     image: Appetizers,
// //   },
// //   {
// //     title: "Salad",
// //     name: "salad",
// //     icon: <RiceBowlIcon width={30} height={30} fill="white" />,
// //     image: Appetizers,
// //   },
// //   {
// //     title: "Bread",
// //     name: "bread",
// //     icon: <BreakfastDiningIcon width={30} height={30} fill="white" />,
// //     image: Appetizers,
// //   },
// //   {
// //     title: "Breakfast",
// //     name: "breakfast",
// //     icon: <BakeryDiningIcon width={30} height={30} fill="white" />,
// //     image: Appetizers,
// //   },
// //   {
// //     title: "Soup",
// //     name: "soup",
// //     icon: <SoupKitchenIcon width={30} height={30} fill="white" />,
// //     image: Appetizers,
// //   },
// //   {
// //     title: "Beverage",
// //     name: "beverage",
// //     icon: <LocalBarIcon width={30} height={30} fill="white" />,
// //     image: Appetizers,
// //   },
// //   {
// //     title: "Sauce",
// //     name: "sauce",
// //     icon: <WaterDropIcon width={30} height={30} fill="white" />,
// //     image: Appetizers,
// //   },
// //   {
// //     title: "Marinade",
// //     name: "marinade",
// //     icon: <KebabDiningIcon width={30} height={30} fill="white" />,
// //     image: Appetizers,
// //   },
// //   {
// //     title: "Finger Food",
// //     name: "fingerfood",
// //     icon: <LocalPizzaIcon width={30} height={30} fill="white" />,
// //     image: Appetizers,
// //   },
// //   {
// //     title: "Snack",
// //     name: "snack",
// //     icon: <CookieIcon width={30} height={30} fill="white" />,
// //     image: Appetizers,
// //   },
// // ];

// // const Home = () => {
// //   // const [selectedCategory, setSelectedCategory] = useState(0);
// //   const sliderRef = useRef(null);
// //   const initialCardCount = 6;

// //   const [recipes, setRecipes] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // useEffect(() => {
// //   //   const API_KEY = "88345194a6e34c5e83770bdfa6af399c";
// //   //   const API_URL = `https://api.spoonacular.com/recipes/random?number=${initialCardCount}&apiKey=${API_KEY}`;

// //   //   const fetchRecipes = async () => {
// //   //     try {
// //   //       const response = await fetch(API_URL);
// //   //       if (response.ok) {
// //   //         const data = await response.json();
// //   //         console.log(data.recipes);
// //   //         setRecipes(data.recipes);
// //   //       } else {
// //   //         throw new Error("Failed to fetch recipes");
// //   //       }
// //   //     } catch (error) {
// //   //       setError(error.message);
// //   //     } finally {
// //   //       setLoading(false);
// //   //     }
// //   //   };

// //   //   fetchRecipes();
// //   // }, []);

// //   // const handleCategoryChange = async (index) => {
// //   //   setSelectedCategory(index);
// //   //   setLoading(true);

// //   //   try {
// //   //     const API_KEY = "88345194a6e34c5e83770bdfa6af399c";
// //   //     const API_URL = "https://api.spoonacular.com/recipes/complexSearch";

// //   //     const category = categories[index].name.toLowerCase();
// //   //     const query = `?query=${category}&number=${initialCardCount}&apiKey=${API_KEY}`;

// //   //     const response = await fetch(API_URL + query);

// //   //     if (response.ok) {
// //   //       const data = await response.json();
// //   //       // console.log(data.recipes);
// //   //       setRecipes(data.results);
// //   //     } else {
// //   //       throw new Error("Failed to fetch recipes");
// //   //     }
// //   //   } catch (error) {
// //   //     setError(error.message);
// //   //   } finally {
// //   //     setLoading(false);
// //   //   }
// //   // };

// //   const settings = {
// //     dots: false,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     fade: true,
// //   };

// //   return (
// //     <Container maxWidth="lg" style={{ textAlign: "center", padding: "0" }}>
// //       <Slider ref={sliderRef} {...settings}>
// //         {categories.map((category, index) => (
// //           <div key={index}>
// //             <img
// //               src={category.image}
// //               alt={category.name}
// //               style={{
// //                 width: "100%",
// //                 maxHeight: "400px",
// //                 objectFit: "cover",
// //                 borderRadius: "3rem",
// //               }}
// //             />
// //           </div>
// //         ))}
// //       </Slider>
// //       <Grid container spacing={2} justifyContent="center" style={{ marginTop: "4px" }}>
// //         {categories.map((category, index) => (
// //           <Grid item key={index}>
// //             <Button
// //               variant="contained"
// //               startIcon={category.icon}
// //               size="small"
// //               sx={{
// //                 background: "#1D1D1D !important",
// //               }}
// //               // onClick={() => handleCategoryChange(index)}
// //             >
// //               {category.title}
// //             </Button>
// //           </Grid>
// //         ))}
// //       </Grid>

// //       {/* <Grid
// //         container
// //         spacing={2}
// //         justifyContent="center"
// //         style={{ marginTop: "20px" }}
// //       >

// //       </Grid> */}
// //       {/* <RecipeList
// //         recipes={recipes}
// //         loading={loading}
// //         initialCardCount={initialCardCount}
// //         error={error}
// //       /> */}
// //     </Container>
// //   );
// // };

// // export default Home;
// import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
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
import RecipeCard from "../components/RecipeCard";
import RecipeCardSolo from "../components/RecipeCardSolo";
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

const RecipesPage = () => {
  const { id } = useParams();
  const [meals, setMeals] = useState([]);
  const [mealsOpen, setMealsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // New loading state
  const sliderRef = useRef(null);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(`${BASE_URL}/meals`);
        const data = await response.json();
        setMeals(data);
        setIsLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching meals:", error);
        setIsLoading(false); // Set loading to false in case of an error
      }
    };

    fetchMeals();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleMealsToggle = () => {
    setMealsOpen(!mealsOpen);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <>
      {isLoading ? (
        // Render a loading indicator or message while data is being fetched
        <Typography variant="body1">Loading...</Typography>
      ) : (
        // Render the actual content once data is loaded
        <Grid container spacing={3}>
          {/* <Box> */}
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <SideBar />
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={9}>
            <Typography variant="h4" textAlign="center">
              Recipe inspiration
            </Typography>
            <Typography variant="subtitle1" textAlign="center">
              Whether you're after an old favourite or inspiration for something new, we have the perfect recipe.
            </Typography>
            {/* </Grid> */}
            {/* <Grid item xs={12} sm={12} md={12} lg={9}> */}
            <div>
              <img
                src={coverImg}
                alt={"aa"}
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                  // borderRadius: "3rem",
                }}
              />
            </div>
            {/* <Box sx={{ textAlign: "center" }}>
          <Container maxWidth="lg" style={{ textAlign: "center", padding: "0" }}></Container>

          <Box sx={{ textAlign: "center" }}>
            <Container maxWidth="lg" style={{ textAlign: "center", padding: "0" }}>
              <Grid container spacing={1} justifyContent="center" style={{ marginTop: "4px" }}>
                {meals.map((meal, index) => (
                  <Grid item key={index}>
                    <Link to={`/meals/${meal._id}`} style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        startIcon={iconMapping[meal.name.toLowerCase()]}
                        size="small"
                        sx={{
                          background: "#1D1D1D !important",
                          borderRadius: "1rem",
                          fontSize: "0.7rem",
                          textTransform: "capitalize",
                        }}
                      >
                        {meal.name}
                      </Button>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </Box> */}
            {/* </Grid> */}
            {/* <Grid item xs={12} sm={12} md={9} lg={9}> */}
            <Typography variant="h5" textAlign="left">
              Most popular recipe collections
            </Typography>
            {/* </Grid> */}
            {/* <Grid item xs={12} sm={12} md={9} lg={9}> */}
            <Box>
              {meals.map((meal, index) => (
                <Box key={index} mb={3}>
                  <Typography variant="h6" textAlign="left" mb={1}>
                    <Link
                      to={`/meals/${meal._id}/recipes`}
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
                      {meal.name}
                    </Link>
                  </Typography>

                  <Grid container spacing={3} sx={{ display: "flex" }}>
                    {meal.recipes.slice(0, 4).map((recipe) => (
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
                        <RecipeCard key={recipe._id} recipe={recipe} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              ))}
            </Box>
          </Grid>
          {/* </Box> */}
        </Grid>
      )}
    </>
  );
};

export default RecipesPage;
// {/* <Grid item xs={12} sm={12} md={12} lg={7}>
//   <Box>
//     {meals.map((meal, index) => (
//       <Box key={index} mb={3}>
//         <Typography variant="h6" textAlign="left" mb={1}>
//           <Link
//             to={`/meals/${meal._id}/recipes`}
//             style={{
//               textDecoration: "none",
//               color: "black",
//             }}
//             sx={{
//               "&:visited": {
//                 color: "black",
//               },
//             }}
//           >
//             {meal.name}
//           </Link>

//         </Typography>

//         <Grid container spacing={3} sx={{ display: "flex" }}>
//           {meal.recipes.slice(0, 1).map((recipe) => (

//             <RecipeCardSolo key={recipe._id} recipe={recipe} />

//           ))}
//         </Grid>
//       </Box>
//     ))}
//   </Box>
// </Grid> */}
// {/* <Grid item xs={12} sm={12} md={6} lg={6}>
//   <Typography variant="h5" textAlign="left">
//     Seasonal inspiration
//   </Typography>
// </Grid>
// <Grid item xs={12} sm={12} md={6} lg={6}>
//   <Typography variant="h5" textAlign="left">
//     Trending guides
//   </Typography>
// </Grid> */}

// {/* <Grid item xs={12} sm={12} md={12} lg={12}>
//   <Typography variant="h5" textAlign="left">
//     Latest added recipes...
//   </Typography>
// </Grid> */}
//<Grid container spacing={3}>
// {/* <Grid item xs={12} sm={12} md={12} lg={12}>
// <Breadcrumbs />
// </Grid> */}
// {/* <Grid item xs={12} sm={12} md={12} lg={12}>
//   <Typography variant="h4" textAlign="center">
//     Recipe inspiration
//   </Typography>
//   <Typography variant="subtitle1" textAlign="center">
//     Whether you're after an old favourite or inspiration for something new, we have the perfect recipe.
//   </Typography>
// </Grid> */}
//</Grid>
