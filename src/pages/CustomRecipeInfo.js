import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// React MUI components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import ReactPlayer from "react-player";
import Confetti from "react-confetti";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
// import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

import Paper from "@mui/material/Paper";
// components
import HalfRating from "../components/HalfRating";
// import IconLabelTabs from "../components/IconLabelTabs";
import ReviewComponent from "../components/ReviewComponent";
import { Table, TableContainer, IconButton, CardActions, Container, CardActionArea, Chip, TextField, Rating, Slider, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import NutritionDonutChart from "../../src/components/NutritionDonutChart";

// icons
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import BoltIcon from "@mui/icons-material/Bolt";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";

import EuroIcon from "@mui/icons-material/Euro";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import BlenderIcon from "@mui/icons-material/Blender";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import EventIcon from "@mui/icons-material/Event";
import SpaIcon from "@mui/icons-material/Spa";
import StepIcon from "@mui/material/StepIcon";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import RecipeCard from "../components/RecipeCard";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RestoreIcon from "@mui/icons-material/Restore";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import Carousel from "react-material-ui-carousel";
import Chart from "react-google-charts";
import TotalCalories from "../../src/components/recipeDetails/TotalCalories";
import { BASE_URL } from "../middleware/config";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// const tips = [
//   {
//     title: "Prevent Pastry Sticking",
//     description: "To avoid sticking, lightly flour your work surface and rolling pin when working with pastry dough. This ensures easy rolling and prevents tearing.",
//   },
//   {
//     title: "Chill Dough Properly",
//     description: "When a recipe calls for chilling the dough, don't rush it. Proper chilling enhances flavors and helps achieve the right texture.",
//   },
//   {
//     title: "Perfect Whipped Cream",
//     description: "Use chilled bowls, beaters, and add sugar gradually while whipping. Stop when soft peaks form for a light and fluffy texture.",
//   },
// ];
const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`${BASE_URL}/recipes`);
        if (response.ok) {
          const data = await response.json();
          setRecipes(data);
        } else {
          throw new Error("Failed to fetch recipes");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <Container maxWidth="lg" style={{ textAlign: "center", padding: "0" }}>
      {/* Static image or any other layout you desire */}

      <Grid container spacing={3} justifyContent="center" style={{ marginTop: "4px" }}>
        {recipes.slice(0, 6).map((recipe, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Card sx={{ maxWidth: 345, background: "#F3F1EF", position: "relative" }}>
              <IconButton
                aria-label="add to favorites"
                sx={{
                  position: "absolute",
                  top: "4px",
                  right: "4px",
                  background: "#FFFFFF", // Customize as needed
                }}
              >
                <FavoriteIcon />
              </IconButton>

              {/* <CardContent
              sx={{
                display: "flex",
                
                alignItems: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "100%", // Ensures proper width for ellipsis,
                  textOverflow: "ellipsis",
                }}
              >
                {recipe.title}
              </Typography>
              <CardActions disableSpacing>
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              </CardActions>
            </CardContent> */}

              <CardMedia
                component="img"
                image={recipe.coverImage}
                alt={recipe.title}
                sx={{
                  width: "100%", // Take up full width
                  height: "auto", // Automatically adjust height to maintain aspect ratio
                  display: "block", // Center the image within the container
                  objectFit: "cover", // Maintain aspect ratio and cover entire area
                }}
              />
              <CardContent sx={{ margin: "0", padding: "4px 0 !important" }}>
                <Typography
                  variant="body1"
                  sx={{
                    // fontSize: "0.9rem",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    fontWeight: "500",
                    fontSize: "0.9rem",
                  }}
                >
                  <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    {recipe.title}
                  </Link>
                </Typography>
              </CardContent>
              {/* <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton> */}
              {/* <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton> */}

              {/* <div
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AccessTimeIcon color="action" sx={{ mr: 1 }} />
                  <Typography color="gray" sx={{ marginRight: "1rem" }}>
                    {recipe.readyInMinutes} mins
                  </Typography>
                </div> */}
              {/* </CardActions> */}
            </Card>
          </Grid>
          // <RecipeCard recipe={recipe} />
          // <Grid item key={index}>
          //   <Card>
          //     <CardActionArea component={Link} to={`/recipes/${recipe._id}`}>
          //       <CardMedia component="img" alt={recipe.title} height="120" image={recipe.coverImage} />

          //       <Typography variant="h6" component="div" style={{ padding: "2px 8px" }}>
          //         {recipe.title}
          //       </Typography>
          //     </CardActionArea>
          //   </Card>
          // </Grid>
        ))}
      </Grid>

      {/* Include your RecipeList component or any other components as needed */}
      {/* <RecipeList
        recipes={recipes}
        loading={loading}
        error={error}
      /> */}
    </Container>
  );
};
const QuestionRating = () => {
  const [taste, setTaste] = useState(5);
  const [visualAppeal, setVisualAppeal] = useState(5);
  const [originality, setOriginality] = useState(5);
  const [accuracy, setAccuracy] = useState(5);
  const [availability, setAvailability] = useState(5);
  const [difficulty, setDifficulty] = useState(5);

  const [wouldMakeAgain, setWouldMakeAgain] = useState(null);

  const handleButtonClick = (value) => {
    setWouldMakeAgain(value);
  };

  const handleSubmit = () => {
    // Implement your logic to submit the review with the chosen ratings.
    console.log("Taste:", taste);
    console.log("Visual Appeal:", visualAppeal);
    console.log("Originality:", originality);
    console.log("Accuracy:", accuracy);
    console.log("Availability:", availability);
    console.log("Difficulty:", difficulty);
    console.log("Would Make Again:", wouldMakeAgain);
  };

  return (
    <>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        sx={{
          margin: "0 0",
          paddingTop: "0 !important",
        }}
      >
        <Box
          mb={0}
          sx={{
            margin: "0 0 0 0",
          }}
        >
          <Typography>Taste:</Typography>
          <Slider
            value={taste}
            onChange={(_, newValue) => setTaste(newValue)}
            valueLabelDisplay="auto"
            step={1} // Set the step to 1
            marks={[
              { value: 0, label: "" },
              { value: 1, label: "" },
              { value: 2, label: "" },
              { value: 3, label: "" },
              { value: 4, label: "" },
              { value: 5, label: "" },
              { value: 6, label: "" },
              { value: 7, label: "" },
              { value: 8, label: "" },
              { value: 9, label: "" },
              { value: 10, label: "" },
            ]}
            max={10} // Set the maximum value to 10
          />
        </Box>

        <Box
          mb={0}
          sx={{
            margin: "0 0",
          }}
        >
          <Typography>Accuracy of Instructions:</Typography>
          <Slider
            value={accuracy}
            onChange={(_, newValue) => setAccuracy(newValue)}
            valueLabelDisplay="auto"
            step={1} // Set the step to 1
            marks={[
              { value: 0, label: "" },
              { value: 1, label: "" },
              { value: 2, label: "" },
              { value: 3, label: "" },
              { value: 4, label: "" },
              { value: 5, label: "" },
              { value: 6, label: "" },
              { value: 7, label: "" },
              { value: 8, label: "" },
              { value: 9, label: "" },
              { value: 10, label: "" },
            ]}
            max={10} // Set the maximum value to 10
          />
        </Box>

        <Box
          mb={0}
          sx={{
            margin: "0 0",
          }}
        >
          <Typography>Originality:</Typography>
          <Slider
            value={originality}
            onChange={(_, newValue) => setOriginality(newValue)}
            valueLabelDisplay="auto"
            step={1} // Set the step to 1
            marks={[
              { value: 0, label: "" },
              { value: 1, label: "" },
              { value: 2, label: "" },
              { value: 3, label: "" },
              { value: 4, label: "" },
              { value: 5, label: "" },
              { value: 6, label: "" },
              { value: 7, label: "" },
              { value: 8, label: "" },
              { value: 9, label: "" },
              { value: 10, label: "" },
            ]}
            max={10} // Set the maximum value to 10
          />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        sx={{
          margin: "0 0",
          paddingTop: "0 !important",
        }}
      >
        <Box mb={0}>
          <Typography>Visual Appeal:</Typography>
          <Slider
            value={visualAppeal}
            onChange={(_, newValue) => setVisualAppeal(newValue)}
            valueLabelDisplay="auto"
            step={1} // Set the step to 1
            marks={[
              { value: 0, label: "" },
              { value: 1, label: "" },
              { value: 2, label: "" },
              { value: 3, label: "" },
              { value: 4, label: "" },
              { value: 5, label: "" },
              { value: 6, label: "" },
              { value: 7, label: "" },
              { value: 8, label: "" },
              { value: 9, label: "" },
              { value: 10, label: "" },
            ]}
            max={10} // Set the maximum value to 10
          />
        </Box>

        <Box m={0}>
          <Typography>Availability of Ingredients:</Typography>
          <Slider
            value={availability}
            onChange={(_, newValue) => setAvailability(newValue)}
            valueLabelDisplay="auto"
            step={1} // Set the step to 1
            marks={[
              { value: 0, label: "" },
              { value: 1, label: "" },
              { value: 2, label: "" },
              { value: 3, label: "" },
              { value: 4, label: "" },
              { value: 5, label: "" },
              { value: 6, label: "" },
              { value: 7, label: "" },
              { value: 8, label: "" },
              { value: 9, label: "" },
              { value: 10, label: "" },
            ]}
            max={10} // Set the maximum value to 10
          />
        </Box>

        <Box mb={0}>
          <Typography>Difficulty:</Typography>
          <Slider
            value={difficulty}
            onChange={(_, newValue) => setDifficulty(newValue)}
            valueLabelDisplay="auto"
            step={1} // Set the step to 1
            marks={[
              { value: 0, label: "" },
              { value: 1, label: "" },
              { value: 2, label: "" },
              { value: 3, label: "" },
              { value: 4, label: "" },
              { value: 5, label: "" },
              { value: 6, label: "" },
              { value: 7, label: "" },
              { value: 8, label: "" },
              { value: 9, label: "" },
              { value: 10, label: "" },
            ]}
            max={10} // Set the maximum value to 10
          />
        </Box>
      </Grid>
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
        <div>
          <div>
            <Typography variant="h6" textAlign="center">
              Would You Make It Again?
            </Typography>

            <Box display="flex" justifyContent="center" mt={2}>
              <Button variant={wouldMakeAgain === "Yes" ? "contained" : "outlined"} color="primary" onClick={() => handleButtonClick("Yes")}>
                Yes
              </Button>
              <Button variant={wouldMakeAgain === "No" ? "contained" : "outlined"} color="primary" onClick={() => handleButtonClick("No")} sx={{ marginLeft: 2 }}>
                No
              </Button>
            </Box>
            <Box display="flex" justifyContent="left" mt={2}>
              <Button variant="contained" color="primary" onClick={handleSubmit} disabled={wouldMakeAgain === null}>
                Submit Rating
              </Button>
            </Box>
          </div>

          {/* <Button variant="contained" color="primary" onClick={handleSubmit} disabled={wouldMakeAgain === null}>
        Submit Ratings
      </Button> */}
        </div>
      </Grid>
    </>
  );
};
const RecipeReviewForm = () => {
  // const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  // const handleRatingChange = (event, newValue) => {
  //   setRating(newValue);
  // };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // Implement your logic to submit the review
    // console.log("Rating:", rating);
    console.log("Comment:", comment);

    // Clear the form after submission if needed
    // setRating(0);
    setComment("");
  };

  return (
    <div>
      <Typography variant="h6">Leave a Review</Typography>
      {/* <Rating name="recipe-rating" value={rating} onChange={handleRatingChange} precision={0.5} size="large" /> */}
      <TextField label="Your Comment" multiline rows={4} fullWidth value={comment} onChange={handleCommentChange} margin="normal" variant="outlined" />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Review
      </Button>
    </div>
  );
};
const ThumbsUpDown = () => {
  const [liked, setLiked] = useState(null);

  const handleThumbClick = (isLiked) => {
    setLiked(isLiked);
  };

  return (
    <div>
      <Typography variant="h6">Leave Feedback</Typography>
      <Button variant={liked === true ? "contained" : "outlined"} onClick={() => handleThumbClick(true)}>
        👍 Like
      </Button>
      <Button variant={liked === false ? "contained" : "outlined"} onClick={() => handleThumbClick(false)}>
        👎 Dislike
      </Button>
    </div>
  );
};
const SliderRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (_, value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    // Implement your logic to submit the review with the chosen rating.
    console.log("Rating:", rating);
  };

  return (
    <div>
      <Typography variant="h6">Rate the Recipe</Typography>
      <Slider value={rating} min={0} max={10} step={1} onChange={handleRatingChange} valueLabelDisplay="auto" />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Rating
      </Button>
    </div>
  );
};
const VideoPlayer = ({ videoUrl }) => {
  return (
    <Paper elevation={3} style={{ padding: "16px", textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        Video
      </Typography>
      <ReactPlayer url={videoUrl} controls width="100%" height="auto" />
    </Paper>
  );
};
const TipsCarousel = ({ tips }) => {
  // Find the maximum height among all tips
  // const maxHeight = Math.max(...tips.map((tip) => tip.description.length));

  return (
    <Carousel navButtonsAlwaysInvisible={true} stopAutoPlayOnHover={true} indicators={true}>
      {tips.map((tip, index) => (
        <Card key={index} style={{ backgroundColor: "#f2f2f2" }}>
          {/* <Card key={index} style={{ height: `${maxHeight * 0.6}px` }}> */}
          {/* Adjust the multiplier (20) as needed to control the card height */}
          <CardContent>
            <Typography style={{ fontWeight: "bold" }}>{tip.title}</Typography>
            <Typography>{tip.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
};
// const TotalNutritionDonutChart = ({ ingredients, servings }) => {
//   const calculateTotalNutrition = (data) => {
//     return data.reduce(
//       (total, category) => {
//         category.items.forEach((item) => {
//           const allowedUnit = item.ingredient.allowedUnits.find((unit) => unit.unit.name === item.unit);

//           if (allowedUnit) {
//             const adjustedQuantity = item.quantity * allowedUnit.conversionFactor;
//             // total.calories += (item.ingredient.calories / 100) * adjustedQuantity;
//             total.fat += (item.ingredient.fat / 100) * adjustedQuantity;
//             total.carbohydrates += (item.ingredient.carbohydrates / 100) * adjustedQuantity;
//             total.fiber += (item.ingredient.fiber / 100) * adjustedQuantity;
//             total.sugar += (item.ingredient.sugar / 100) * adjustedQuantity;
//             total.protein += (item.ingredient.protein / 100) * adjustedQuantity;
//           } else {
//             console.error(`Conversion factor not found for unit ${item.unit} in ingredient ${item.ingredient.name}`);
//           }
//         });

//         return total;
//       },
//       // { calories: 0, fat: 0, carbohydrates: 0, fiber: 0, sugar: 0, protein: 0 }
//       { fat: 0, carbohydrates: 0, fiber: 0, sugar: 0, protein: 0 }
//     );
//   };
//   // Calculate the total nutrition for all ingredients
//   const totalNutrition = calculateTotalNutrition(ingredients);

//   const chartData = Object.entries(totalNutrition).map(([nutrient, amount]) => [nutrient, amount]);

//   return (
//     <div style={{ textAlign: "center" }}>
//       <Chart
//         width={"100%"}
//         height={"300px"}
//         chartType="PieChart"
//         loader={<div>Loading Chart</div>}
//         data={[["Nutrient", "Amount"], ...chartData]}
//         options={{
//           pieHole: 0.3,
//           legend: { position: "right" },
//           pieSliceText: "none",
//           slices: [
//             { color: "#FFB6C1" }, // Light Pink - Fat
//             { color: "#FF69B4" }, // Deep Pink - Saturated Fat
//             { color: "#FFD700" }, // Gold - Carbohydrates
//             // Add more colors as needed
//           ],
//           tooltip: {
//             text: "value",
//             textStyle: {
//               fontName: "Arial",
//               fontSize: 12,
//             },
//           },
//           pieStartAngle: 100,
//           pieSliceTextStyle: {
//             color: "black",
//             fontName: "Arial",
//             fontSize: 14,
//           },
//         }}
//       />
//     </div>
//   );
// };

const TotalNutritionDonutChart = ({ ingredients, servings, perServing = true }) => {
  const calculateTotalNutrition = (data, servings) => {
    const factor = perServing ? 1 : 100 / servings;

    return data.reduce(
      (total, category) => {
        category.items.forEach((item) => {
          const allowedUnit = item.ingredient.allowedUnits.find((unit) => unit.unit.name === item.unit);

          if (allowedUnit) {
            const adjustedQuantity = item.quantity * allowedUnit.conversionFactor * factor;
            total.fat += (item.ingredient.fat / 100) * adjustedQuantity;
            total.carbohydrates += (item.ingredient.carbohydrates / 100) * adjustedQuantity;
            total.fiber += (item.ingredient.fiber / 100) * adjustedQuantity;
            total.sugar += (item.ingredient.sugar / 100) * adjustedQuantity;
            total.protein += (item.ingredient.protein / 100) * adjustedQuantity;
          } else {
            console.error(`Conversion factor not found for unit ${item.unit} in ingredient ${item.ingredient.name}`);
          }
        });

        return total;
      },
      { fat: 0, carbohydrates: 0, fiber: 0, sugar: 0, protein: 0 }
    );
  };

  const totalNutrition = calculateTotalNutrition(ingredients, servings);

  const chartData = Object.entries(totalNutrition).map(([nutrient, amount]) => [nutrient, amount]);

  // Capitalize the legend labels (can use chartData if capitalization is not needed)
  const capitalizedChartData = chartData.map(([nutrient, amount]) => [nutrient.charAt(0).toUpperCase() + nutrient.slice(1), amount]);

  const viewLabel = perServing ? "Per Serving" : "Per 100g";

  return (
    <div style={{ textAlign: "center" }}>
      <h5>{viewLabel}</h5>
      <Chart
        width={280} // Adjust the width as needed
        height={280} // Adjust the height as needed
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[["Nutrient", "Amount"], ...capitalizedChartData]}
        options={{
          chartArea: { left: 10, top: 10, bottom: 10, right: 10, width: "100%", height: "100%" }, // Adjust the values as needed
          pieHole: 0.3,
          legend: { position: "none" },
          pieSliceText: "Nutrient",
          slices: [
            { color: "#FFB6C1" }, // Light Pink - Fat
            { color: "#FF69B4" }, // Deep Pink - Saturated Fat
            { color: "#FFD700" }, // Gold - Carbohydrates
            { color: "#00CED1" }, // Dark Turquoise - Fiber
            { color: "#8A2BE2" }, // Blue Violet - Sugar
            { color: "#3CB371" }, // Medium Sea Green - Protein
            { color: "#FF8C00" }, // Dark Orange - Vitamins
            { color: "#9370DB" }, // Medium Purple - Minerals
            { color: "#20B2AA" }, // Light Sea Green - Antioxidants
            { color: "#FF4500" }, // Orange Red - Other
          ],
          tooltip: {
            text: "value",
            textStyle: {
              fontName: "Arial",
              fontSize: 12,
            },
          },
          pieStartAngle: 100,
          pieSliceTextStyle: {
            color: "black",
            fontName: "Arial",
            fontSize: 14,
          },
        }}
      />
    </div>
    // <div style={{ textAlign: "center" }}>
    //   <h3>{viewLabel}</h3>
    //   <Chart
    //     width={"100%"}
    //     height={"300px"}
    //     chartType="PieChart"
    //     loader={<div>Loading Chart</div>}
    //     data={[["Nutrient", "Amount"], ...chartData]}
    //     options={{
    //       pieHole: 0.3,
    //       legend: { position: "right" },
    //       pieSliceText: "none",
    //       slices: [
    //         { color: "#FFB6C1" }, // Light Pink - Fat
    //         { color: "#FF69B4" }, // Deep Pink - Saturated Fat
    //         { color: "#FFD700" }, // Gold - Carbohydrates
    //         // Add more colors as needed
    //       ],
    //       tooltip: {
    //         text: "value",
    //         textStyle: {
    //           fontName: "Arial",
    //           fontSize: 12,
    //         },
    //       },
    //       pieStartAngle: 100,
    //       pieSliceTextStyle: {
    //         color: "black",
    //         fontName: "Arial",
    //         fontSize: 14,
    //       },
    //     }}
    //   />
    // </div>
  );
};

const IngredientTable = ({ ingredients }) => {
  const calculateTotalNutrition = (data) => {
    return data.reduce(
      (total, category) => {
        category.items.forEach((item) => {
          const allowedUnit = item.ingredient.allowedUnits.find((unit) => unit.unit.name === item.unit);

          if (allowedUnit) {
            const adjustedQuantity = item.quantity * allowedUnit.conversionFactor;
            total.calories += (item.ingredient.calories / 100) * adjustedQuantity;
            total.fat += (item.ingredient.fat / 100) * adjustedQuantity;
            total.carbohydrates += (item.ingredient.carbohydrates / 100) * adjustedQuantity;
            total.fiber += (item.ingredient.fiber / 100) * adjustedQuantity;
            total.sugar += (item.ingredient.sugar / 100) * adjustedQuantity;
            total.protein += (item.ingredient.protein / 100) * adjustedQuantity;
          } else {
            console.error(`Conversion factor not found for unit ${item.unit} in ingredient ${item.ingredient.name}`);
          }
        });

        return total;
      },
      { calories: 0, fat: 0, carbohydrates: 0, fiber: 0, sugar: 0, protein: 0 }
    );
  };
  // Calculate the total nutrition for all ingredients
  const totalNutrition = calculateTotalNutrition(ingredients);
  //const totalNutrition = calculateTotalNutrition(ingredients.reduce((allItems, category) => allItems.concat(category.items), []));

  return (
    <TableContainer component={Paper}>
      <Table aria-label="ingredient nutrition table">
        <TableHead>
          <TableRow>
            <TableCell>Nutrition Property</TableCell>
            <TableCell>Total Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Total Calories</TableCell>
            <TableCell>{totalNutrition.calories.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Fat</TableCell>
            <TableCell>{totalNutrition.fat.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Carbohydrates</TableCell>
            <TableCell>{totalNutrition.carbohydrates.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Fiber</TableCell>
            <TableCell>{totalNutrition.fiber.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Sugar</TableCell>
            <TableCell>{totalNutrition.sugar.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Protein</TableCell>
            <TableCell>{totalNutrition.protein.toFixed(2)}</TableCell>
          </TableRow>
          {/* Add other nutrition properties as needed */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
function IconLabelTabs({ recipe }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Section = ({ ingredients }) => (
    <div>
      {ingredients.map((ingredientGroup) => (
        <div key={ingredientGroup.name}>
          <Typography variant="h6">{ingredientGroup.name}</Typography>
          {ingredientGroup.items.map((ingredient) => (
            <div key={ingredient._id}>
              {console.log(ingredient)} {/* Log the entire ingredient object */}
              <FormControlLabel control={<Checkbox checked color="default" icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} />} label={`${ingredient.ingredient.name} (${ingredient.quantity} ${ingredient.unit})`} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  const TabPanel = ({ value, index, children }) => {
    return (
      <div role="tabpanel" hidden={value !== index}>
        {value === index && <Box sx={{ padding: "1rem 0" }}>{children}</Box>}
      </div>
    );
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div style={{ margin: "2rem 0" }}>
      <Tabs value={value} variant="fullWidth" indicatorColor="secondary" centered onChange={handleChange} aria-label="icon label tabs example">
        <Tab icon={<RestaurantIcon sx={{ fontSize: "1.5rem", mb: 0 }} />} label="INGREDIENTS" sx={{ fontSize: "0.7rem", minWidth: "70px" }} />
        <Tab icon={<BlenderIcon sx={{ fontSize: "1.5rem", mb: 0 }} />} label="TOOLS" sx={{ fontSize: "0.7rem", minWidth: "70px" }} />
        <Tab icon={<ShoppingCartIcon sx={{ fontSize: "1.5rem", mb: 0 }} />} label="PRICE" sx={{ fontSize: "0.7rem", minWidth: "70px" }} />
        <Tab icon={<DonutSmallIcon sx={{ fontSize: "1.5rem", mb: 0 }} />} label="NUTRITION" sx={{ fontSize: "0.7rem", minWidth: "70px" }} />
        {/* <Tab icon={<RestaurantIcon />} label="INGREDIENTS" sx={{ fontSize: "0.7rem" }} />
        <Tab icon={<BlenderIcon />} label="TOOLS" sx={{ fontSize: "0.7rem" }} />
        <Tab icon={<ShoppingCartIcon />} label="PRICE" sx={{ fontSize: "0.7rem" }} />
        <Tab icon={<DonutSmallIcon />} label="NUTRITION" sx={{ fontSize: "0.7rem" }} /> */}
      </Tabs>

      <TabPanel value={value} index={0}>
        {/* {ingredients.map((section) => (
          <Section key={section.section} section={section} />
        ))} */}
        {recipe.ingredients && <Section ingredients={recipe.ingredients} />}
      </TabPanel>

      <TabPanel value={value} index={1}>
        {recipe && recipe.tools && (
          <div>
            {recipe.tools.map((instrument) => (
              <div
                key={instrument.id} // Ensure each key is unique
                style={{
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FormControlLabel control={<Checkbox defaultChecked color="default" icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} />} label={instrument.name} />
              </div>
            ))}
          </div>
        )}
      </TabPanel>

      <TabPanel value={value} index={2}>
        {/* {ingredients.map((section) => (
          <Section key={section.section} section={section} />
        ))} */}
      </TabPanel>

      <TabPanel value={value} index={3}>
        {/* <IngredientTable ingredients={recipe.ingredients} /> */}
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              margin: "20px 0",
            }}
          >
            <IngredientTable ingredients={recipe.ingredients} />

            {/* <NutritionFactsTable /> */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              margin: "20px 0",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <TotalNutritionDonutChart ingredients={recipe.ingredients} servings={recipe.servings} />
            </div>
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}
const RecipePreparationButton = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [preparedRecipe, setPreparedRecipe] = useState(false);

  const handleButtonClick = (value) => {
    console.log(value);
    if (value === "Yes") {
      setShowConfetti(true);
      setButtonDisabled(true);
      setPreparedRecipe("Yes");
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    } else {
      console.log("start now");
    }
  };

  return (
    <>
      <div>
        <Typography variant="h6" textAlign="center">
          Have you successfully prepared this delicious recipe?
        </Typography>

        <Box display="flex" justifyContent="center" mt={2}>
          <Button variant={preparedRecipe === "Yes" ? "contained" : "outlined"} color="primary" onClick={() => handleButtonClick("Yes")}>
            Yes
          </Button>
          <Button variant={preparedRecipe === "No" ? "contained" : "outlined"} color="primary" onClick={() => handleButtonClick("No")} sx={{ marginLeft: 2 }}>
            I'am still thinking
          </Button>
        </Box>

        {/* <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
      <Typography variant="h6" sx={{ textAlign: "center" }} gutterBottom>
        Have you successfully prepared this delicious recipe?
      </Typography>

      <div style={{ marginTop: "10px" }}>
        <Button variant="contained" color="primary" onClick={handleButtonClick} disabled={buttonDisabled}>
          Yes
        </Button>
      </div> */}

        <div style={{ position: "relative" }}>{showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} recycle={false} style={{ position: "fixed", top: 0, left: 0 }} />}</div>
      </div>
    </>
  );
};

// const DietCheckbox = ({ recipeDiets, dietName }) => {
//   const isChecked = recipeDiets.some((diet) => diet.name === dietName);

//   return <FormControlLabel control={<Checkbox checked={isChecked} />} label={dietName} />;
// };

const DietLabel = ({ recipeDiets, dietName, fallbackLabel }) => {
  const foundDiet = recipeDiets.find((diet) => diet.name === dietName);

  return <span>{foundDiet ? foundDiet.name : fallbackLabel}</span>;
};

function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}
const RecipeTags = ({ tags }) => {
  return (
    <Box style={{ marginTop: 10 }}>
      {tags.map((tag, index) => (
        <Chip key={index} label={tag} style={{ marginRight: 5, marginBottom: 5, backgroundColor: "#424242", color: "#ffffff", textTransform: "Capitalize" }} />
      ))}
    </Box>
  );
};

const RecipeTimeComponent = ({ recipe, targetLabel }) => {
  const getTimeByLabel = (times, label) => {
    const timeObj = times.find((time) => time.label === label);
    return timeObj ? `${timeObj.hours} h ${timeObj.minutes} min` : "Time not found";
  };

  return <Typography>{`${targetLabel} ${getTimeByLabel(recipe.times, targetLabel)}`}</Typography>;
};
// const RecipeDescription = ({ recipe }) => {
//   const [expanded, setExpanded] = useState(false);
//   const { description } = recipe;

//   const truncatedDescription = expanded ? description : `${description.slice(0, 150)}...`;

//   const handleToggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Box>
//       <Typography variant="body2" sx={{ textAlign: "justify" }}>
//         {truncatedDescription}
//       </Typography>
//       {description.length > 150 && (
//         <IconButton size="small" onClick={handleToggleExpand} sx={{ padding: 0, marginTop: 1 }}>
//           {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//         </IconButton>
//       )}
//     </Box>
//   );
// };
// const RecipeDescription = ({ recipe }) => {
//   const [expanded, setExpanded] = useState(false);
//   const { description } = recipe;

//   const truncatedDescription = expanded ? description : `${description.slice(0, 150)}...`;
//   const linkText = expanded ? "Read Less" : "Read More";

//   const handleToggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div>
//       <Typography variant="body2" sx={{ textAlign: "justify" }}>
//         {truncatedDescription}
//       </Typography>
//       {description.length > 150 && (
//         <Typography variant="body2" color="primary" sx={{ cursor: "pointer", textDecoration: "underline", marginTop: 1 }} onClick={handleToggleExpand}>
//           {linkText}
//         </Typography>
//       )}
//     </div>
//   );
// };
const RecipeDescription = ({ recipe }) => {
  const [expanded, setExpanded] = useState(false);
  const { description } = recipe;

  const truncatedDescription = expanded ? description : `${description.slice(0, 150)}...`;
  const linkText = expanded ? "Read Less" : "Read More";

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Typography variant="body2" sx={{ textAlign: "justify" }}>
        {truncatedDescription}
        {description.length > 150 && (
          <span>
            <Typography variant="body2" color="primary" sx={{ cursor: "pointer", display: "inline-block" }} onClick={handleToggleExpand}>
              {linkText}
            </Typography>
          </span>
        )}
      </Typography>
    </div>
  );
};
// const RecipeDescription = ({ recipe }) => {
//   const [expanded, setExpanded] = useState(false);
//   const { description } = recipe;

//   const truncatedDescription = expanded ? description : `${description.slice(0, 150)}...`;
//   const linkText = expanded ? "Read Less" : "Read More";

//   const handleToggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div>
//       <Typography variant="body2" sx={{ textAlign: "justify" }}>
//         {truncatedDescription}
//         {description.length > 150 && (
//           <span>
//             {" "}
//             <Typography variant="body2" color="primary" sx={{ cursor: "pointer", textDecoration: "underline" }} onClick={handleToggleExpand}>
//               {linkText}
//             </Typography>
//           </span>
//         )}
//       </Typography>
//     </div>
//   );
// };

// const RecipeDescription = ({ recipe }) => {
//   const [expanded, setExpanded] = useState(false);
//   const { description } = recipe;

//   const truncatedDescription = expanded ? description : `${description.slice(0, 150)}...`;

//   const handleToggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Box position="relative" overflow="hidden" maxHeight={expanded ? "none" : 100}>
//       <Typography variant="body2" sx={{ textAlign: "justify" }}>
//         {truncatedDescription}
//       </Typography>
//       {!expanded && description.length > 150 && (
//         <>
//           <Box
//             position="absolute"
//             bottom={0}
//             left={0}
//             width="100%"
//             height={50}
//             style={{
//               background: "linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
//             }}
//           />
//           <Button onClick={handleToggleExpand} color="primary" style={{ zIndex: 1 }}>
//             Read More
//           </Button>
//         </>
//       )}
//     </Box>
//   );
// };

const CustomRecipeInfo = () => {
  const { id } = useParams();
  const API_URL = `https://cookbook.cyclic.app/api/recipes/${id}`;

  const [recipe, setRecipe] = useState(null);
  // const [totalCalories, setTotalCalories] = useState(0); // New state for total calories
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatUpdatedAt = (timestamp) => {
    const date = new Date(timestamp);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setRecipe(data);

          // Calculate total calories when recipe data is available
          // const newTotalCalories = data.ingredients.reduce((total, category) => total + category.items.reduce((sum, item) => sum + item.ingredient.calories * (item.quantity / 100), 0), 0);
          // setTotalCalories(newTotalCalories);
        } else {
          throw new Error("Failed to fetch recipe details");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [API_URL]);

  function ParentComponent({ recipeInstructions }) {
    return (
      <div>
        {recipeInstructions.map((section, index) => (
          <MultipleSteppers key={index} section={section} />
        ))}
      </div>
    );
  }
  function MultipleSteppers({ section }) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [showReset, setShowReset] = React.useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    console.log(activeStep);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      console.log(section.steps.length);
      if (activeStep + 1 === section.steps.length) {
        console.log("its max");
        setShowReset(true);
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
        }, 5000); // Adjust the duration for confetti as needed
      }
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
      setActiveStep(0);
      setShowReset(false);
    };

    const handleFinish = () => {
      setShowReset(true);
      console.log("finished");
    };

    const CustomStepIcon = (props) => {
      const { active, completed } = props;

      // Define your custom styles for completed steps
      const completedStyles = {
        color: "green", // Change the color for completed steps
        zIndex: 1, // Adjust additional styles if needed
      };

      return <StepIcon {...props} style={completed ? completedStyles : {}} />;
    };

    return (
      <div>
        <div style={{ position: "relative" }}>{showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} recycle={false} style={{ position: "fixed", top: 0, left: 0 }} />}</div>

        <Box sx={{ maxWidth: 600 }}>
          <Typography variant="h6" gutterBottom>
            {section.name}
          </Typography>
          <Stepper activeStep={activeStep} orientation="vertical">
            {section.steps.map((step, stepIndex) => (
              <Step key={stepIndex}>
                <StepLabel StepIconComponent={CustomStepIcon}>{`${step.description}`}</StepLabel>
                <StepContent>
                  <img src={step.image} alt="" style={{ maxWidth: "100%", height: "auto" }} />

                  <Box sx={{ mb: 2 }}>
                    <div>
                      {activeStep !== section.steps.length && (
                        <Button variant="contained" size="small" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                          {activeStep === section.steps.length - 1 ? "Finish" : "Next Step"}
                        </Button>
                      )}
                      <Button disabled={activeStep === 0} size="small" onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
        {showReset && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Button variant="contained" size="small" onClick={handleReset}>
              Reset
            </Button>
          </div>
        )}
      </div>
    );
  }

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

          {/* {recipe && recipe.description && (
            <Typography variant="body2" sx={{ textAlign: "justify" }}>
              {recipe.description}
            </Typography>
          )} */}
          {recipe && recipe.description && <RecipeDescription recipe={recipe} />}
          {/* <Typography
            variant="subtitle2"
            sx={{
              margin: "1rem 0 0 0",
            }}
          >
            Updated on {formatUpdatedAt(recipe.updatedAt)}
          </Typography> */}
        </Grid>

        <Grid item xs={12} sm={12} md={7} lg={7} style={{ display: "flex", alignItems: "center" }}>
          <Chip label="95%" style={{ backgroundColor: "#424242", color: "#ffffff" }} />
          <Typography style={{ marginLeft: "4px" }}>would make this again</Typography>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={7} lg={7} style={{ display: "flex", alignItems: "center" }}>
          {recipe && recipe.tags && <RecipeTags tags={recipe.tags} />}
        </Grid> */}

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
            </>
          )}
          <Stack direction="row" spacing={1} position="absolute" bottom={10} right={10}>
            <Button variant="contained" color="primary" size="small" sx={{ background: "#1D1D1D" }}>
              Save <BookmarkIcon />
            </Button>
            <Button variant="contained" color="primary" size="small" sx={{ background: "#1D1D1D" }}>
              Download <DownloadIcon />
            </Button>
            <Button variant="contained" color="primary" size="small" sx={{ background: "#1D1D1D" }}>
              Share <ShareIcon />
            </Button>
          </Stack>
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
      {/* Video Instruction if Available */}
      {/* <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            margin: "20px 0",
          }}
        >
          {recipe.video && <VideoPlayer videoUrl={recipe.video} />}
        </Grid>
      </Grid> */}
      {/* Similar Recipes */}
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            margin: "20px 0",
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            margin: "20px 0",
          }}
        ></Grid>
      </Grid>
      <Typography variant="h6">Similar Recipes</Typography>
      <Home />
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
      <Typography
        variant="h6"
        sx={{
          margin: "20px 0",
          paddingBottom: "24px !important",
        }}
      >
        Rate the Recipe
      </Typography>
      <Grid container spacing={3}>
        <QuestionRating />
        {/* <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            margin: "20px 0",
          }}
        >
          <QuestionRating />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            margin: "20px 0",
          }}
        >
          <QuestionRating />
        </Grid> */}
      </Grid>
      {/* Make Again */}

      {/* <Grid container spacing={3}>
        <Grid
          item
          xs={12} // On extra-small screens, take up the full width
          sm={6} // On small screens, take up half of the width (2 columns)
          md={4} // On medium screens, take up one-third of the width (3 columns)
          lg={3} // On large screens, take up one-fourth of the width (4 columns)
          sx={{
            margin: "20px 0",
          }}
        >

        </Grid>
      </Grid> */}

      {/* Reviews */}

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
          <RecipeReviewForm />
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
          <Typography
            variant="h6"
            sx={{
              margin: "0 0 20px 0",
            }}
          >
            Reviews
          </Typography>
          <ReviewComponent />
        </Grid>
        {/* <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            margin: "20px 0",
          }}
        >
          <RecipeReviewForm />
        </Grid> */}
      </Grid>
      {/* You May Also Like */}

      <Typography variant="h6">You May Also Like</Typography>

      <Home />
    </React.Fragment>
  );
};

export default CustomRecipeInfo;
