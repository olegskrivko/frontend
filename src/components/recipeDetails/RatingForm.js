import React, { useState } from "react";
import { useAuth } from "../../middleware/AuthContext";
import { BASE_URL } from "../../middleware/config";

// React MUI components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Confetti from "react-confetti";

const RatingForm = ({ recipeId }) => {
  const [ratings, setRatings] = useState({
    taste: 5,
    visualAppeal: 5,
    originality: 5,
    accuracy: 5,
    availability: 5,
    difficulty: 5,
  });

  const [showConfetti, setShowConfetti] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [wouldMakeAgain, setWouldMakeAgain] = useState(null);

  const { obtainAccessToken, user } = useAuth();

  const handleSliderChange = (name, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [name]: value,
    }));
  };

  const handleButtonClick = (value) => {
    setWouldMakeAgain(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!user || !user.id) {
        throw new Error("User ID not available");
      }

      const accessToken = await obtainAccessToken();

      const response = await fetch(`${BASE_URL}/recipes/${recipeId}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          user: user.id,
          ...ratings,
          wouldMakeAgain,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit ratings. Please try again later.");
      }

      setShowConfetti(true);
      setButtonDisabled(true);

      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);

      console.log("Ratings submitted successfully!");
    } catch (error) {
      console.error("Error submitting ratings:", error);
    }
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ marginBottom: 2 }}>
          <Typography variant="h6" textAlign="center" sx={{ maxWidth: "100%" }}>
            Have you successfully prepared this delicious recipe?
          </Typography>

          <Box display="flex" justifyContent="center" mt={2}>
            <Button variant={wouldMakeAgain === "Yes" ? "contained" : "outlined"} color="primary" onClick={() => handleButtonClick("Yes")}>
              Yes
            </Button>
            <Button variant={wouldMakeAgain === "No" ? "contained" : "outlined"} color="primary" onClick={() => handleButtonClick("No")} sx={{ marginLeft: 2 }}>
              I'm still thinking
            </Button>
          </Box>

          <div style={{ position: "relative" }}>{showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} recycle={false} style={{ position: "fixed", top: 0, left: 0 }} />}</div>
        </Grid>

        {/* ... (Additional Grid items for other sliders) */}

        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ marginBottom: 2 }}>
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
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box display="flex" justifyContent="left" mt={2}>
            <Button variant="contained" color="primary" onClick={handleFormSubmit} disabled={wouldMakeAgain === null || buttonDisabled}>
              Submit Ratings
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RatingForm;
