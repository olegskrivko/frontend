import React, { useState } from "react";

// React MUI components
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// Installed Components
import Confetti from "react-confetti";

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

        <div style={{ position: "relative" }}>{showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} recycle={false} style={{ position: "fixed", top: 0, left: 0 }} />}</div>
      </div>
    </>
  );
};

export default RecipePreparationButton;

// {/* <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
//       <Typography variant="h6" sx={{ textAlign: "center" }} gutterBottom>
//         Have you successfully prepared this delicious recipe?
//       </Typography>

//       <div style={{ marginTop: "10px" }}>
//         <Button variant="contained" color="primary" onClick={handleButtonClick} disabled={buttonDisabled}>
//           Yes
//         </Button>
//       </div> */}
