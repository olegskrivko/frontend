import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import html2canvas from "html2canvas";
// React MUI components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import IconButton from "@mui/material/IconButton";
// import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import { useSnackbar } from "notistack";

// Icons
import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import BlenderIcon from "@mui/icons-material/Blender";
import SpaIcon from "@mui/icons-material/Spa";
import StepIcon from "@mui/material/StepIcon";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import TimelapseIcon from "@mui/icons-material/Timelapse";
// import { createTheme } from "@mui/material/styles";

// Installed Components
import Confetti from "react-confetti";

// Custom Components
import RecipeReviewForm from "../components/recipeDetails/RecipeReviewForm";
import QuestionRating from "../components/recipeDetails/QuestionRating";
import TipsCarousel from "../components/recipeDetails/TipsCarousel";
import RecipeDescription from "../components/recipeDetails/RecipeDescription";
import IconLabelTabs from "../components/recipeDetails/IconLabelTabs";
import DietLabel from "../components/recipeDetails/DietLabel";
// import TotalCalories from "../components/recipeDetails/TotalCalories";
import ReviewComponent from "../components/ReviewComponent";
import SimilarRecipes from "../components/SimilarRecipes";
import RecipeTimeComponent from "../components/recipeDetails/RecipeTimeComponent";
import RecipePreparationButton from "../components/recipeDetails/RecipePreparationButton";
import RecipeTags from "../components/recipeDetails/RecipeTags";
import RecipeMeals from "../components/recipeDetails/RecipeMeals";
import RecipeCuisines from "../components/recipeDetails/RecipeCuisines";

import RecipeUpdated from "../components/recipeDetails/RecipeUpdated";
import ParentComponent from "../components/recipeDetails/ParentComponent";
import ActivitiesInfo from "../components/recipeDetails/ActivitiesInfo";
import StartCookButton from "../components/recipeDetails/StartCookButton";
// import { useAuth } from "../middleware/AuthContext";

// BASE_URL
import { BASE_URL } from "../middleware/config";
import RatingForm from "../components/recipeDetails/RatingForm";
// Custom Components
import { useAuth } from "../middleware/AuthContext";
{
  /* <Typography gutterBottom variant="h6"></Typography> */
}
const LoginToReview = ({ recipe }) => {
  return (
    // <Grid container spacing={3}>
    <Grid item xs={12} sm={12} md={12} lg={12}>
      {/* <div style={{ textAlign: "center", marginTop: "2rem" }}> */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
        Ready to share your thoughts on the {recipe.title} recipe?
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ textAlign: "center" }}>
        Login to review and rate your experience!
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <Button
          component={Link}
          to="/auth" // Update this to your login page path
          variant="contained"
          color="primary"
          size="medium"
          sx={{ fontWeight: "bold", textDecoration: "none", color: "#fff" }}
        >
          Login Now
        </Button>
      </Box>
      {/* </div> */}
    </Grid>
    // </Grid>
  );
};

function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}
const calculateTotalNutrition = (data, servings) => {
  return data.reduce(
    (total, category) => {
      category.items.forEach((item) => {
        const allowedUnit = item.ingredient.allowedUnits.find((unit) => unit.unit.name === item.unit);

        if (allowedUnit) {
          const adjustedQuantity = item.quantity * allowedUnit.conversionFactor;
          total.calories += (item.ingredient.calories / 100) * adjustedQuantity;
        } else {
          console.error(`Conversion factor not found for unit ${item.unit} in ingredient ${item.ingredient.name}`);
        }
      });

      return total;
    },
    { calories: 0 }
  );
};

const TotalCalories = ({ ingredients, servings }) => {
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    const calculatedTotalNutrition = calculateTotalNutrition(ingredients, servings);
    setTotalCalories(calculatedTotalNutrition.calories.toFixed());
  }, [ingredients, servings]);

  return <>{totalCalories}</>;
};

const RecipeDetails = () => {
  const handleStartCooking = () => {
    // Handle the start cooking action
    console.log("Start cooking clicked!");
  };
  // const theme = createTheme();
  // const hoverBackgroundColor = theme.palette.action.hover;
  // console.log(hoverBackgroundColor);
  const { id } = useParams();

  const API_URL = `${BASE_URL}/recipes/${id}`;
  const REVIEWS_URL = `${BASE_URL}/recipes/${id}/reviews`;

  const [reviews, setReviews] = useState([]);

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [calories, setCalories] = useState(0); // State for total calories
  const { isAuthenticated } = useAuth();
  // const { obtainAccessToken, user } = useAuth();

  const handleShare = async ({ enqueueSnackbar }) => {
    try {
      if (navigator.share) {
        // Use Web Share API if available
        await navigator.share({
          title: recipe.title,
          text: recipe.description,
          url: window.location.href,
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        throw new Error("Web Share API not supported");
      }
    } catch (error) {
      console.error("Error sharing recipe:", error);
      // You can use the notistack to display an error message
      enqueueSnackbar("Error sharing recipe. Please try again later.", { variant: "error" });
    }
  };

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        // const accessToken = await obtainAccessToken();
        // const response = await fetch(API_URL, {
        //   headers: {
        //     Authorization: `Bearer ${accessToken}`,
        //   },
        // });
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
          console.log("RECIPE DATA", data);
          const calculatedTotalNutrition = calculateTotalNutrition(data.ingredients, data.servings);
          const adjustedCalories = calculatedTotalNutrition.calories / data.servings;
          setCalories(adjustedCalories.toFixed());
          setRecipe(data);
        } else {
          throw new Error("Failed to fetch recipe details");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchReviews = async () => {
      try {
        // const accessToken = await obtainAccessToken();
        // const response = await fetch(REVIEWS_URL, {
        //   headers: {
        //     Authorization: `Bearer ${accessToken}`,
        //   },
        // });
        const response = await fetch(REVIEWS_URL);

        if (response.ok) {
          const data = await response.json();
          //console.log("reviews", data); // Log the fetched reviews
          setReviews(data);
        } else {
          throw new Error("Failed to fetch reviews");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRecipeDetails();
    fetchReviews();
    // [API_URL, REVIEWS_URL]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [API_URL, REVIEWS_URL]);

  if (loading) {
    return <Typography variant="h4">Loading Recipe Details...</Typography>;
  }

  if (error) {
    return <Typography variant="h4">Error Loading Recipe Details: {error}</Typography>;
  }

  return (
    <React.Fragment>
      {/* {calories > 0 && (
        <Typography style={{ marginLeft: "16px" }}>
          Total Calories: <TotalCalories ingredients={recipe.ingredients} servings={recipe.servings} />
        </Typography>
      )}
      {calories} */}
      {/* General Info */}
      <Grid container spacing={3}>
        {/* Title | Rating | Action Buttons | Author | Description */}
        {/* {recipe && recipe.diets && <DietCheckbox recipeDiets={recipe.diets} dietName="Vegetarian" />} */}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {recipe && recipe.title && (
            <Typography gutterBottom variant="h4" sx={{ fontWeight: "bold" }}>
              {recipe.title}
            </Typography>
          )}
          {/* <div style={{ display: "flex", alignItems: "center" }}> */}
          {recipe && recipe.source && recipe.source.name && (
            <Typography
              gutterBottom
              variant="subtitle2"
              sx={{
                marginRight: "0.5rem", // Add right margin
              }}
            >
              Recipe by{" "}
              <Link href={recipe.source.url} rel="noreferrer" target="_blank" style={{ textDecoration: "none" }}>
                {recipe.source.name && recipe.source.name === "Unknown" ? "Cookify" : "Unknown"}
              </Link>
            </Typography>
          )}
          {/* {recipe && recipe.updatedAt && (
              <Typography
                gutterBottom
                variant="subtitle2"
                sx={
                  {
                    // marginLeft: "0.5rem",
                  }
                }
              >
                {recipe && <RecipeUpdated timestamp={recipe.updatedAt} />}
              </Typography>
            )} */}
          {/* </div> */}

          {recipe && recipe.description && <RecipeDescription recipe={recipe} />}
        </Grid>
        {/* <Grid item xs={12} sm={12} md={7} lg={7} style={{ display: "flex", alignItems: "center" }}>
          <Chip label="95%" style={{ backgroundColor: "#424242", color: "#ffffff" }} />
          <Typography style={{ marginLeft: "4px" }}>would make this again</Typography>
        </Grid> */}
        {/* <Grid item xs={12} sm={12} md={7} lg={7} style={{ display: "flex", alignItems: "center" }}>
          {recipe && recipe.tags && <RecipeTags tags={recipe.tags} />}
        </Grid> */}
        <Grid item xs={12} sm={12} md={7} lg={7} sx={{ paddingTop: "1rem !important", display: "flex", alignItems: "center" }}>
          {recipe && recipe.meals && <RecipeMeals meals={recipe.meals} />} {recipe && recipe.cuisines && <RecipeCuisines cuisines={recipe.cuisines} />}
        </Grid>
        {/* Image Section */}
        <Grid item xs={12} sm={12} md={7} lg={7} position="relative">
          {recipe && recipe.coverImage && (
            <Card
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <CardMedia
                component="img"
                image={recipe.coverImage}
                alt={recipe.title}
                // style={{
                //   width: "100%",
                //   height: "400px",
                //   objectFit: "cover",
                // }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <IconButton
                aria-label="add to favorites"
                sx={{
                  position: "absolute",
                  top: "40px",
                  right: "20px",
                  background: "#FFFFFF", // Customize as needed
                }}
              >
                <FavoriteIcon />
              </IconButton>

              <IconButton
                aria-label="Download"
                sx={{
                  position: "absolute",
                  top: "95px",
                  right: "20px",
                  background: "#FFFFFF", // Customize as needed
                }}
              >
                <DownloadIcon />
              </IconButton>

              <IconButton
                aria-label="Share"
                sx={{
                  position: "absolute",
                  top: "150px",
                  right: "20px",
                  background: "#FFFFFF", // Customize as needed
                }}
                onClick={handleShare}
              >
                <ShareIcon />
              </IconButton>
            </Card>
          )}
          {/* <Stack direction="row" spacing={1} position="absolute" bottom={10} right={10}>
            <Button variant="contained" color="primary" size="small" sx={{ background: "#1D1D1D" }}>
              Save <BookmarkIcon />
            </Button>
            <Button variant="contained" color="primary" size="small" sx={{ background: "#1D1D1D" }}>
              Download <DownloadIcon />
            </Button>
            <Button variant="contained" color="primary" size="small" sx={{ background: "#1D1D1D" }}>
              Share <ShareIcon />
            </Button>
          </Stack> */}
          {/* {recipe && recipe.coverImage && (
            <CardMedia
              component="img"
              image={recipe.coverImage}
              alt={recipe.title}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
            />
          )} */}
          {/* <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{
                background: "#1D1D1D",
              }}
            >
              Save <BookmarkIcon />
            </Button>

            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{
                background: "#1D1D1D",
              }}
            >
              Download <DownloadIcon />
            </Button>

            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{
                background: "#1D1D1D",
              }}
            >
              Share <ShareIcon />
            </Button>
          </Stack> */}
        </Grid>
        {/* Icons Sections */}
        <Grid item xs={12} sm={12} md={5} lg={5}>
          {recipe ? (
            <Card sx={{ backgroundColor: "rgba(0, 0, 0, 0.04)", paddingBottom: "1rem" }}>
              <CardContent sx={{ paddingBottom: "0 !important" }}>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  <Grid item>
                    <LocalFireDepartmentIcon />
                  </Grid>
                  <Grid item>
                    <Typography>
                      {recipe && calories > 0 && calories} kcal per serving
                      {/* <TotalCalories ingredients={recipe.ingredients} servings={recipe.servings} /> kcal */}
                    </Typography>
                  </Grid>
                </Grid>
                {/* Difficulty */}
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  <Grid item>
                    <SignalCellularAltIcon />
                  </Grid>
                  <Grid item>{recipe && recipe.difficulty && <Typography>{recipe.difficulty}</Typography>}</Grid>
                </Grid>
                {/* Preparation */}
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  <Grid item>
                    <BlenderIcon />
                  </Grid>
                  <Grid item>{recipe && recipe.times && <RecipeTimeComponent recipe={recipe} targetLabel="Preparation" />}</Grid>
                </Grid>
                {/* Cooking */}
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  <Grid item>
                    <OutdoorGrillIcon />
                  </Grid>
                  <Grid item>{recipe && recipe.times && <RecipeTimeComponent recipe={recipe} targetLabel="Cooking" />}</Grid>
                </Grid>
                {/* Rest Time */}
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  <Grid item>
                    <TimelapseIcon />
                  </Grid>
                  <Grid item>
                    <Grid item>{recipe && recipe.times && <RecipeTimeComponent recipe={recipe} targetLabel="Resting" />}</Grid>
                  </Grid>
                </Grid>
                {/* Total Time */}
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  <Grid item>
                    <AccessTimeIcon />
                  </Grid>
                  <Grid item>{recipe && recipe.totalTime && recipe.totalTime && <Typography>Ready in {recipe.totalTime} min</Typography>}</Grid>
                </Grid>

                {/* Price Per Serving */}
                {/* <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  <Grid item>
                    <MonetizationOnIcon />
                  </Grid>
                  <Grid item>{recipe && recipe.totalTime && recipe.totalTime && <Typography> 2.67 $ per serving</Typography>}</Grid>
                </Grid> */}
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  <Grid item>
                    <SoupKitchenIcon />
                  </Grid>
                  <Grid item>
                    {recipe && recipe.diets && <DietLabel recipeDiets={recipe.diets} dietName="Spicy" fallbackLabel="Not Spicy" />}
                    {/* <Typography>{recipe.isVegetarian ? "Vegetarian" : "Non Vegetarian"}</Typography> */}
                  </Grid>
                </Grid>
                {/* Vegetarian */}
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  <Grid item>
                    <SpaIcon />
                  </Grid>
                  <Grid item>
                    {recipe && recipe.diets && <DietLabel recipeDiets={recipe.diets} dietName="Vegetarian" fallbackLabel="Non Vegetarian" />}
                    {/* <Typography>{recipe.isVegetarian ? "Vegetarian" : "Non Vegetarian"}</Typography> */}
                  </Grid>
                </Grid>
                {/* Vegan */}
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  <Grid item>
                    <SpaIcon />
                  </Grid>
                  <Grid item>
                    {recipe && recipe.diets && <DietLabel recipeDiets={recipe.diets} dietName="Vegan" fallbackLabel="Non Vegan" />}
                    {/* <Typography>{recipe.isVegan ? "Vegan" : "Non Vegan"}</Typography> */}
                  </Grid>
                </Grid>
                {/* Gluten Free */}
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  <Grid item>
                    <SpaIcon />
                  </Grid>
                  <Grid item>
                    {/* <Typography>{recipe.isGlutenFree ? "Gluten Free" : "Non Gluten Free"}</Typography> */}
                    {recipe && recipe.diets && <DietLabel recipeDiets={recipe.diets} dietName="Gluten Free" fallbackLabel="Gluten Free" />}
                  </Grid>
                </Grid>
                {/* Dairy Free */}
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  <Grid item>
                    <SpaIcon />
                  </Grid>
                  <Grid item>
                    {/* <Typography>{recipe.isDairyFree ? "Dairy Free" : "Non Dairy Free"}</Typography> */}
                    {recipe && recipe.diets && <DietLabel recipeDiets={recipe.diets} dietName="Dairy Free" fallbackLabel="Non Dairy Free" />}
                  </Grid>
                </Grid>
                {/* Servings */}
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  // style={{
                  //   marginBottom: "5px",
                  // }}
                >
                  <Grid
                    item
                    // style={{
                    //   marginTop: "1rem",
                    // }}
                  >
                    <RamenDiningIcon />
                  </Grid>
                  <Grid
                    item
                    // style={{
                    //   marginTop: "1rem",
                    // }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          marginRight: "1rem",
                        }}
                      >
                        Servings
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{
                          background: "#1D1D1D !important",
                          minWidth: "2rem",
                        }}
                      >
                        -
                      </Button>
                      <Typography
                        style={{
                          margin: "0 12px",
                        }}
                      >
                        {recipe?.servings}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{
                          background: "#1D1D1D !important",
                          minWidth: "2rem",
                        }}
                      >
                        +
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ) : (
            <CircularIndeterminate />
            // <Typography variant="body1">Loading...</Typography>
          )}
        </Grid>
      </Grid>
      {/* Horizontal Tabs - Ingredients | Equipment | Price | Notes */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <IconLabelTabs recipe={recipe} />
        </Grid>
      </Grid>
      {/* Tips */}
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          // sx={{
          //   margin: "20px 0",
          // }}
        >
          <Typography gutterBottom variant="h6">
            Author Tips
          </Typography>
          {recipe && recipe.tips && <TipsCarousel tips={recipe.tips} />}
        </Grid>
      </Grid>
      {/* Instructions */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {recipe && recipe.instructions && <ParentComponent recipeInstructions={recipe.instructions} />}
        </Grid>
      </Grid>

      {/* Similar Recipes */}
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            margin: "20px 0",
          }}
        >
          <Typography gutterBottom variant="h6">
            Similar Recipes
          </Typography>
          <SimilarRecipes />
        </Grid>
      </Grid>
      {/* Activities */}
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            margin: "20px 0",
          }}
        >
          <Typography gutterBottom variant="h6">
            {/* Time to Burn <TotalCalories ingredients={recipe.ingredients} servings={recipe.servings} /> kcal */}
          </Typography>
          <Typography gutterBottom variant="h6">
            How long would it take to burn off {recipe && calories > 0 && calories} kcal?
          </Typography>
          {recipe && calories > 0 && <ActivitiesInfo totalCalories={calories} />}
          <Typography gutterBottom variant="caption">
            Values estimated based on person weighing 70 kg. Personalize your experience and explore additional calculators <Link to="/tools">Sports Calculator</Link>.
          </Typography>
        </Grid>
      </Grid>

      {/* <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            margin: "20px 0",
          }}
        >
          <RecipePreparationButton />
        </Grid>
      </Grid> */}
      {/* Questions */}
      {/* <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            margin: "40px 0",
          }}
        >
          <Typography gutterBottom variant="h6">
            Rate the Recipe
          </Typography>
        </Grid>
      </Grid> */}

      <Grid container spacing={3}>
        {/* <RatingForm /> */}

        {isAuthenticated() ? <QuestionRating recipeId={id} /> : <LoginToReview recipe={recipe} />}
      </Grid>
      {/* RecipeReviewForm */}
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            margin: "20px 0",
          }}
        >
          {isAuthenticated() && <RecipeReviewForm recipeId={id} />}
        </Grid>
      </Grid>
      {/* ReviewComponent */}
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            margin: "20px 0",
          }}
        >
          <Typography gutterBottom variant="h6">
            Reviews ({recipe && reviews && reviews.length})
          </Typography>
          <ReviewComponent key={reviews._id} reviewData={reviews} />
          {/* <ReviewComponent /> */}
        </Grid>
      </Grid>

      {/* You May Also Like */}
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            margin: "20px 0",
          }}
        >
          <Typography gutterBottom variant="h6">
            You May Also Like
          </Typography>
          <SimilarRecipes />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            margin: "20px 0",
            position: "relative",
          }}
        >
          {/* Start to Cook Button */}
          <div style={{ position: "fixed", bottom: "20px", left: "50%", transform: "translateX(-50%)", zIndex: 99 }}>
            <StartCookButton onClick={handleStartCooking} />
          </div>
        </Grid>
      </Grid>

      {/* Reviews */}
      {/* <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            margin: "20px 0",
          }}
        >
          <Typography variant="h6">Reviews</Typography>
          <ReviewComponent key={reviews._id} reviewData={reviews} />
    
        </Grid>
      </Grid> */}
    </React.Fragment>
  );
};

export default RecipeDetails;
