import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// React MUI components
import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
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
import TimelapseIcon from "@mui/icons-material/Timelapse";

// Installed Components
import Confetti from "react-confetti";

// Custom Components
import RecipeReviewForm from "../components/recipeDetails/RecipeReviewForm";
import QuestionRating from "../components/recipeDetails/QuestionRating";
import TipsCarousel from "../components/recipeDetails/TipsCarousel";
import RecipeDescription from "../components/recipeDetails/RecipeDescription";
import IconLabelTabs from "../components/recipeDetails/IconLabelTabs";
import DietLabel from "../components/recipeDetails/DietLabel";
import TotalCalories from "../components/recipeDetails/TotalCalories";
import ReviewComponent from "../components/ReviewComponent";
import SimilarRecipes from "../components/SimilarRecipes";
import RecipeTimeComponent from "../components/recipeDetails/RecipeTimeComponent";
import RecipePreparationButton from "../components/recipeDetails/RecipePreparationButton";
import RecipeTags from "../components/recipeDetails/RecipeTags";
import RecipeUpdated from "../components/recipeDetails/RecipeUpdated";
import ParentComponent from "../components/recipeDetails/ParentComponent";
import { useAuth } from "../middleware/AuthContext";

// BASE_URL
import { BASE_URL } from "../middleware/config";

function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}

const RecipeDetails = () => {
  const { id } = useParams();

  const API_URL = `${BASE_URL}/recipes/${id}`;
  const REVIEWS_URL = `${BASE_URL}/recipes/${id}/reviews`;
  const [reviews, setReviews] = useState([]);

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { obtainAccessToken, user } = useAuth();

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const accessToken = await obtainAccessToken();
        const response = await fetch(API_URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          console.log("RECIPE DATA", data);
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
        const accessToken = await obtainAccessToken();
        const response = await fetch(REVIEWS_URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          console.log("reviews", data); // Log the fetched reviews
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
      {/* General Info */}
      <Grid container spacing={3}>
        {/* Title | Rating | Action Buttons | Author | Description */}
        {/* {recipe && recipe.diets && <DietCheckbox recipeDiets={recipe.diets} dietName="Vegetarian" />} */}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {recipe && recipe.title && (
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {recipe.title}
            </Typography>
          )}
          {recipe && recipe.source && recipe.source.name && recipe.updatedAt && (
            <Typography
              variant="subtitle2"
              sx={{
                margin: "0.8rem 0",
              }}
            >
              Recipe by{" "}
              <Link href={recipe.source.url} rel="noreferrer" target="_blank" underline="always">
                {recipe.source.name && recipe.source.name === "Unknown" ? "Cookify" : "Unknown"}
              </Link>{" "}
            </Typography>
          )}
          {recipe && recipe.description && <RecipeDescription recipe={recipe} />}
          {recipe && recipe.updatedAt && <RecipeUpdated timestamp={recipe.updatedAt} />}
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7} style={{ display: "flex", alignItems: "center" }}>
          <Chip label="95%" style={{ backgroundColor: "#424242", color: "#ffffff" }} />
          <Typography style={{ marginLeft: "4px" }}>would make this again</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7} style={{ display: "flex", alignItems: "center" }}>
          {recipe && recipe.tags && <RecipeTags tags={recipe.tags} />}
        </Grid>
        {/* Image Section */}
        <Grid item xs={12} sm={12} md={7} lg={7} position="relative">
          {recipe && recipe.coverImage && (
            <>
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
              >
                <ShareIcon />
              </IconButton>
            </>
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
            <>
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
                    <TotalCalories ingredients={recipe.ingredients} servings={recipe.servings} /> kcal
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
                <Grid item>
                  {recipe && recipe.pricePerServing && (
                    <Typography>
                      {recipe.pricePerServing.amount}
                      {recipe.pricePerServing.currency} per serving
                    </Typography>
                  )}
                </Grid>
              </Grid> */}
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
                style={{
                  marginBottom: "5px",
                }}
              >
                <Grid item>
                  <RamenDiningIcon />
                </Grid>
                <Grid item>
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
            </>
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
          sx={{
            margin: "20px 0",
          }}
        >
          <Typography variant="h6">Author Tips</Typography>
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
          <Typography variant="h6">Similar Recipes</Typography>
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
          }}
        >
          <RecipePreparationButton />
        </Grid>
      </Grid>
      {/* Questions */}
      <Grid container spacing={3}>
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
          <Typography variant="h6">Rate the Recipe</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <QuestionRating />
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
          <RecipeReviewForm recipeId={id} />
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
          <Typography
            variant="h6"
            sx={{
              margin: "0 0 20px 0",
            }}
          >
            Reviews
          </Typography>
          <ReviewComponent key={reviews._id} reviewData={reviews} />
          {/* <ReviewComponent /> */}
        </Grid>
      </Grid>
      {/* You May Also Like */}
      <Typography variant="h6">You May Also Like</Typography>
      <SimilarRecipes />
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
