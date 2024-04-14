// export default QuestionRating;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useAuth } from "../middleware/AuthContext";
import { useAuth } from "../../middleware/AuthContext";
import { BASE_URL } from "../../middleware/config";
import { Chart } from "react-google-charts";
import RecipePreparationButton from "./RecipePreparationButton";

// React MUI components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

// Installed Components
import Confetti from "react-confetti";
import RecipeReviewForm from "./RecipeReviewForm";
// icons

const QuestionRating = ({ recipeId, aggregateRatings }) => {
  const [taste, setTaste] = useState(4);
  const [visualAppeal, setVisualAppeal] = useState(4);
  // const [originality, setOriginality] = useState(4);
  const [accuracy, setAccuracy] = useState(4);
  const [availability, setAvailability] = useState(4);
  const [preparation, setPreparation] = useState(4);

  const [showConfetti, setShowConfetti] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [preparedRecipe, setPreparedRecipe] = useState("No");

  const [wouldMakeAgain, setWouldMakeAgain] = useState(null);
  const [rateRecipe, setRateRecipe] = useState(null);
  const { obtainAccessToken, user } = useAuth();

  const handleButtonClick = (value) => {
    setWouldMakeAgain(value);
  };
  const handleRateRecipeButtonClick = (value) => {
    setRateRecipe(value);
  };

  const preparedRecipehandleButtonClick = (value) => {
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

  // const handleSubmit = () => {
  //   // Implement your logic to submit the review with the chosen ratings.
  //   console.log("Taste:", taste);
  //   console.log("Visual Appeal:", visualAppeal);
  //   console.log("Originality:", originality);
  //   console.log("Accuracy:", accuracy);
  //   console.log("Availability:", availability);
  //   console.log("Difficulty:", difficulty);
  //   console.log("Would Make Again:", wouldMakeAgain);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!user || !user.id) {
        throw new Error("User ID not available");
      }

      const ratingsData = {
        taste,
        visualAppeal,
        // originality,
        accuracy,
        availability,
        preparation,
      };

      const makeAgain = wouldMakeAgain;

      const accessToken = await obtainAccessToken();

      const response = await fetch(`${BASE_URL}/recipes/${recipeId}/reviews`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ user: user.id, ...ratingsData, makeAgain }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit ratings. Please try again later.");
      }

      console.log("Ratings submitted successfully!");
    } catch (error) {
      console.error("Error submitting ratings:", error);
    }
  };

  return (
    <React.Fragment>
      {/* <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{
          margin: "20px 0",
        }}
      > */}
      <Grid
        container
        spacing={3}
        sx={{
          margin: "20px 0",
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h6" textAlign="center">
            Have you successfully prepared this delicious recipe?
          </Typography>
          <Box display="flex" justifyContent="center" mt={2}>
            <Button variant={preparedRecipe === "Yes" ? "contained" : "outlined"} color="primary" onClick={() => preparedRecipehandleButtonClick("Yes")}>
              Yes
            </Button>
            <Button variant={preparedRecipe === "No" ? "contained" : "outlined"} color="primary" onClick={() => preparedRecipehandleButtonClick("No")} sx={{ marginLeft: 2 }}>
              I'am still thinking
            </Button>
          </Box>

          <div style={{ position: "relative" }}>{showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} recycle={false} style={{ position: "fixed", top: 0, left: 0 }} />}</div>
        </Grid>
        {preparedRecipe === "No" ? (
          ""
        ) : (
          <Grid item xs={12} sm={12} md={12} lg={12}>
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
              </div>
            </div>
          </Grid>
        )}
        {wouldMakeAgain === null ? (
          ""
        ) : (
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div>
              <div>
                <Typography variant="h6" textAlign="center">
                  Would You Like To Rate The Recipe?
                </Typography>

                <Box display="flex" justifyContent="center" mt={2}>
                  <Button variant={rateRecipe === "Yes" ? "contained" : "outlined"} color="primary" onClick={() => handleRateRecipeButtonClick("Yes")}>
                    Yes
                  </Button>
                  <Button variant={rateRecipe === "No" ? "contained" : "outlined"} color="primary" onClick={() => handleRateRecipeButtonClick("No")} sx={{ marginLeft: 2 }}>
                    No
                  </Button>
                </Box>
              </div>
            </div>
          </Grid>
        )}
      </Grid>
      {rateRecipe === "No" || rateRecipe === null ? (
        ""
      ) : (
        <>
          <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: 3 }}>
            <RecipeReviewForm />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{ mt: 3 }}
            // sx={{
            //   margin: "0 0",
            //   paddingTop: "0 !important",
            // }}
          >
            <Typography gutterBottom variant="h6">
              Rate the Recipe
            </Typography>
            <Box
              mb={0}
              sx={{
                margin: "0 0 0 0",
              }}
            >
              <Typography>Taste:</Typography>
              <Slider
                sx={{ color: "#ff6600", height: "7px" }}
                value={taste}
                disabled={!preparedRecipe}
                onChange={(_, newValue) => setTaste(newValue)}
                valueLabelDisplay="auto"
                step={1} // Set the step to 1
                marks={[
                  { value: 1, label: "" },
                  { value: 2, label: "" },
                  { value: 3, label: "" },
                  { value: 4, label: "" },
                  { value: 5, label: "" },
                ]}
                max={5} // Set the maximum value to 10
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
                sx={{ color: "#ff6600", height: "7px" }}
                value={accuracy}
                disabled={!preparedRecipe}
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
                ]}
                max={5} // Set the maximum value to 10
              />
            </Box>

            {/* <Box
          mb={0}
          sx={{
            margin: "0 0",
          }}
        >
          <Typography>Originality:</Typography>
          <Slider
            sx={{ color: "#ff6600", height: "8px" }}
            value={originality}
            disabled={!preparedRecipe}
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
            ]}
            max={5} // Set the maximum value to 10
          />
        </Box> */}

            <Box mb={0}>
              <Typography>Visual Appeal:</Typography>
              <Slider
                sx={{ color: "#ff6600", height: "7px" }}
                value={visualAppeal}
                disabled={!preparedRecipe}
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
                ]}
                max={5} // Set the maximum value to 10
              />
            </Box>

            <Box m={0}>
              <Typography>Availability of Ingredients:</Typography>
              <Slider
                sx={{ color: "#ff6600", height: "7px" }}
                value={availability}
                disabled={!preparedRecipe}
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
                ]}
                max={5} // Set the maximum value to 10
              />
            </Box>

            <Box mb={0}>
              <Typography>Ease of Preparation:</Typography>
              <Slider
                sx={{ color: "#ff6600", height: "7px" }}
                value={preparation}
                disabled={!preparedRecipe}
                onChange={(_, newValue) => setPreparation(newValue)}
                valueLabelDisplay="auto"
                step={1} // Set the step to 1
                marks={[
                  { value: 0, label: "" },
                  { value: 1, label: "" },
                  { value: 2, label: "" },
                  { value: 3, label: "" },
                  { value: 4, label: "" },
                  { value: 5, label: "" },
                ]}
                max={5} // Set the maximum value to 10
              />
            </Box>
          </Grid>

          {/* Button to submit ratings */}
          <Grid item xs={12} sm={12} md={12} lg={12} sx={{ textAlign: "center" }}>
            <Button variant="contained" size="large" color="warning" onClick={handleSubmit}>
              Submit Review
            </Button>
          </Grid>
        </>
      )}
    </React.Fragment>
  );
};

export default QuestionRating;
