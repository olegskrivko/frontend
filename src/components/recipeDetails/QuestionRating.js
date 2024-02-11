// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// // import { useAuth } from "../middleware/AuthContext";
// import { useAuth } from "../../middleware/AuthContext";
// import { BASE_URL } from "../../middleware/config";

// import RecipePreparationButton from "./RecipePreparationButton";

// // React MUI components
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";

// // Installed Components
// import Confetti from "react-confetti";

// // icons

// const QuestionRating = ({ recipeId }) => {
//   const [taste, setTaste] = useState(5);
//   const [visualAppeal, setVisualAppeal] = useState(5);
//   const [originality, setOriginality] = useState(5);
//   const [accuracy, setAccuracy] = useState(5);
//   const [availability, setAvailability] = useState(5);
//   const [difficulty, setDifficulty] = useState(5);

//   const [showConfetti, setShowConfetti] = useState(false);
//   const [buttonDisabled, setButtonDisabled] = useState(false);
//   const [preparedRecipe, setPreparedRecipe] = useState(false);

//   const [wouldMakeAgain, setWouldMakeAgain] = useState(null);
//   const { obtainAccessToken, user } = useAuth();

//   const handleButtonClick = (value) => {
//     setWouldMakeAgain(value);
//   };

//   const preparedRecipehandleButtonClick = (value) => {
//     console.log(value);
//     if (value === "Yes") {
//       setShowConfetti(true);
//       setButtonDisabled(true);
//       setPreparedRecipe("Yes");
//       setTimeout(() => {
//         setShowConfetti(false);
//       }, 5000);
//     } else {
//       console.log("start now");
//     }
//   };

//   // const handleSubmit = () => {
//   //   // Implement your logic to submit the review with the chosen ratings.
//   //   console.log("Taste:", taste);
//   //   console.log("Visual Appeal:", visualAppeal);
//   //   console.log("Originality:", originality);
//   //   console.log("Accuracy:", accuracy);
//   //   console.log("Availability:", availability);
//   //   console.log("Difficulty:", difficulty);
//   //   console.log("Would Make Again:", wouldMakeAgain);
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (!user || !user.id) {
//         throw new Error("User ID not available");
//       }

//       const ratingsData = {
//         taste,
//         visualAppeal,
//         originality,
//         accuracy,
//         availability,
//         difficulty,
//         wouldMakeAgain,
//       };

//       const accessToken = await obtainAccessToken();

//       const response = await fetch(`${BASE_URL}/recipes/${recipeId}/reviews`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${accessToken}`,
//         },
//         body: JSON.stringify({ user: user.id, ...ratingsData }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit ratings. Please try again later.");
//       }

//       console.log("Ratings submitted successfully!");
//     } catch (error) {
//       console.error("Error submitting ratings:", error);
//     }
//   };

//   return (
//     <React.Fragment>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={12} md={12} lg={12}>
//           <Typography variant="h6">Have you successfully prepared this delicious recipe?</Typography>

//           <Box display="flex" justifyContent="center" mt={2}>
//             <Button variant={preparedRecipe === "Yes" ? "contained" : "outlined"} color="primary" onClick={() => preparedRecipehandleButtonClick("Yes")}>
//               Yes
//             </Button>
//             <Button variant={preparedRecipe === "No" ? "contained" : "outlined"} color="primary" onClick={() => preparedRecipehandleButtonClick("No")} sx={{ marginLeft: 2 }}>
//               I'am still thinking
//             </Button>
//           </Box>

//           <div style={{ position: "relative" }}>{showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} recycle={false} style={{ position: "fixed", top: 0, left: 0 }} />}</div>
//         </Grid>
//       </Grid>

//       <Grid
//         item
//         xs={12}
//         sm={12}
//         md={6}
//         lg={6}
//         sx={{
//           margin: "0 0",
//           paddingTop: "0 !important",
//         }}
//       >
//         <Box
//           mb={0}
//           sx={{
//             margin: "0 0 0 0",
//           }}
//         >
//           <Typography>Taste:</Typography>
//           <Slider
//             value={taste}
//             disabled={!preparedRecipe}
//             onChange={(_, newValue) => setTaste(newValue)}
//             valueLabelDisplay="auto"
//             step={1} // Set the step to 1
//             marks={[
//               { value: 0, label: "" },
//               { value: 1, label: "" },
//               { value: 2, label: "" },
//               { value: 3, label: "" },
//               { value: 4, label: "" },
//               { value: 5, label: "" },
//               { value: 6, label: "" },
//               { value: 7, label: "" },
//               { value: 8, label: "" },
//               { value: 9, label: "" },
//               { value: 10, label: "" },
//             ]}
//             max={10} // Set the maximum value to 10
//           />
//         </Box>

//         <Box
//           mb={0}
//           sx={{
//             margin: "0 0",
//           }}
//         >
//           <Typography>Accuracy of Instructions:</Typography>
//           <Slider
//             value={accuracy}
//             disabled={!preparedRecipe}
//             onChange={(_, newValue) => setAccuracy(newValue)}
//             valueLabelDisplay="auto"
//             step={1} // Set the step to 1
//             marks={[
//               { value: 0, label: "" },
//               { value: 1, label: "" },
//               { value: 2, label: "" },
//               { value: 3, label: "" },
//               { value: 4, label: "" },
//               { value: 5, label: "" },
//               { value: 6, label: "" },
//               { value: 7, label: "" },
//               { value: 8, label: "" },
//               { value: 9, label: "" },
//               { value: 10, label: "" },
//             ]}
//             max={10} // Set the maximum value to 10
//           />
//         </Box>

//         <Box
//           mb={0}
//           sx={{
//             margin: "0 0",
//           }}
//         >
//           <Typography>Originality:</Typography>
//           <Slider
//             value={originality}
//             disabled={!preparedRecipe}
//             onChange={(_, newValue) => setOriginality(newValue)}
//             valueLabelDisplay="auto"
//             step={1} // Set the step to 1
//             marks={[
//               { value: 0, label: "" },
//               { value: 1, label: "" },
//               { value: 2, label: "" },
//               { value: 3, label: "" },
//               { value: 4, label: "" },
//               { value: 5, label: "" },
//               { value: 6, label: "" },
//               { value: 7, label: "" },
//               { value: 8, label: "" },
//               { value: 9, label: "" },
//               { value: 10, label: "" },
//             ]}
//             max={10} // Set the maximum value to 10
//           />
//         </Box>
//       </Grid>

//       <Grid
//         item
//         xs={12}
//         sm={12}
//         md={6}
//         lg={6}
//         sx={{
//           margin: "0 0",
//           paddingTop: "0 !important",
//         }}
//       >
//         <Box mb={0}>
//           <Typography>Visual Appeal:</Typography>
//           <Slider
//             value={visualAppeal}
//             disabled={!preparedRecipe}
//             onChange={(_, newValue) => setVisualAppeal(newValue)}
//             valueLabelDisplay="auto"
//             step={1} // Set the step to 1
//             marks={[
//               { value: 0, label: "" },
//               { value: 1, label: "" },
//               { value: 2, label: "" },
//               { value: 3, label: "" },
//               { value: 4, label: "" },
//               { value: 5, label: "" },
//               { value: 6, label: "" },
//               { value: 7, label: "" },
//               { value: 8, label: "" },
//               { value: 9, label: "" },
//               { value: 10, label: "" },
//             ]}
//             max={10} // Set the maximum value to 10
//           />
//         </Box>

//         <Box m={0}>
//           <Typography>Availability of Ingredients:</Typography>
//           <Slider
//             value={availability}
//             disabled={!preparedRecipe}
//             onChange={(_, newValue) => setAvailability(newValue)}
//             valueLabelDisplay="auto"
//             step={1} // Set the step to 1
//             marks={[
//               { value: 0, label: "" },
//               { value: 1, label: "" },
//               { value: 2, label: "" },
//               { value: 3, label: "" },
//               { value: 4, label: "" },
//               { value: 5, label: "" },
//               { value: 6, label: "" },
//               { value: 7, label: "" },
//               { value: 8, label: "" },
//               { value: 9, label: "" },
//               { value: 10, label: "" },
//             ]}
//             max={10} // Set the maximum value to 10
//           />
//         </Box>

//         <Box mb={0}>
//           <Typography>Difficulty:</Typography>
//           <Slider
//             value={difficulty}
//             disabled={!preparedRecipe}
//             onChange={(_, newValue) => setDifficulty(newValue)}
//             valueLabelDisplay="auto"
//             step={1} // Set the step to 1
//             marks={[
//               { value: 0, label: "" },
//               { value: 1, label: "" },
//               { value: 2, label: "" },
//               { value: 3, label: "" },
//               { value: 4, label: "" },
//               { value: 5, label: "" },
//               { value: 6, label: "" },
//               { value: 7, label: "" },
//               { value: 8, label: "" },
//               { value: 9, label: "" },
//               { value: 10, label: "" },
//             ]}
//             max={10} // Set the maximum value to 10
//           />
//         </Box>
//       </Grid>
//       <Grid
//         item
//         xs={12}
//         sm={12}
//         md={12}
//         lg={12}
//         // sx={{
//         //   margin: "20px 0",
//         // }}
//       >
//         <div>
//           <div>
//             <Typography variant="h6" textAlign="center">
//               Would You Make It Again?
//             </Typography>

//             <Box display="flex" justifyContent="center" mt={2}>
//               <Button variant={wouldMakeAgain === "Yes" ? "contained" : "outlined"} color="primary" onClick={() => handleButtonClick("Yes")}>
//                 Yes
//               </Button>
//               <Button variant={wouldMakeAgain === "No" ? "contained" : "outlined"} color="primary" onClick={() => handleButtonClick("No")} sx={{ marginLeft: 2 }}>
//                 No
//               </Button>
//             </Box>
//             {/* <Box display="flex" justifyContent="left" mt={2}>
//               <Button variant="contained" color="primary" onClick={handleSubmit} disabled={wouldMakeAgain === null}>
//                 Submit Rating
//               </Button>
//             </Box> */}
//           </div>

//           {/* <Button variant="contained" color="primary" onClick={handleSubmit} disabled={wouldMakeAgain === null}>
//           Submit Ratings
//         </Button> */}
//         </div>
//       </Grid>
//     </React.Fragment>
//   );
// };

// export default QuestionRating;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useAuth } from "../middleware/AuthContext";
import { useAuth } from "../../middleware/AuthContext";
import { BASE_URL } from "../../middleware/config";

import RecipePreparationButton from "./RecipePreparationButton";

// React MUI components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

// Installed Components
import Confetti from "react-confetti";

// icons

const QuestionRating = ({ recipeId }) => {
  const [taste, setTaste] = useState(9);
  const [visualAppeal, setVisualAppeal] = useState(9);
  const [originality, setOriginality] = useState(9);
  const [accuracy, setAccuracy] = useState(9);
  const [availability, setAvailability] = useState(9);
  const [preparation, setPreparation] = useState(9);

  const [showConfetti, setShowConfetti] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [preparedRecipe, setPreparedRecipe] = useState(false);

  const [wouldMakeAgain, setWouldMakeAgain] = useState(null);
  const { obtainAccessToken, user } = useAuth();

  const handleButtonClick = (value) => {
    setWouldMakeAgain(value);
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
        originality,
        accuracy,
        availability,
        preparation,
        wouldMakeAgain,
      };

      const accessToken = await obtainAccessToken();

      const response = await fetch(`${BASE_URL}/recipes/${recipeId}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ user: user.id, ...ratingsData }),
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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12} sx={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}>
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
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography gutterBottom variant="h6">
              Rate the Recipe
            </Typography>
          </Grid>
        </Grid>
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
        <Box
          mb={0}
          sx={{
            margin: "0 0 0 0",
          }}
        >
          <Typography>Taste:</Typography>
          <Slider
            value={taste}
            disabled={!preparedRecipe}
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
          <Typography>Ease of Preparation:</Typography>
          <Slider
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
    </React.Fragment>
  );
};

export default QuestionRating;
