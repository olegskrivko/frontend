import React, { useState } from "react";

// React MUI components
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

// Icons
import StepIcon from "@mui/material/StepIcon";

// Installed Components
import Confetti from "react-confetti";

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

function ParentComponent({ recipeInstructions }) {
  return (
    <div>
      {recipeInstructions.map((section, index) => (
        <MultipleSteppers key={index} section={section} />
      ))}
    </div>
  );
}

export default ParentComponent;
