import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useAuth } from "../middleware/AuthContext";

// React MUI components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

// icons

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

export default QuestionRating;
