// import React from "react";

// const RecipeForm = () => {
//   return <h1>Prices</h1>;
// };

// export default RecipeForm;

// import React, { useReducer } from "react";
// import { Button, Container, Typography, TextField, Stepper, Step, StepLabel } from "@mui/material";

// const initialState = {
//   title: "",
//   description: "",
//   cookingTime: "",
//   // Add other fields as needed
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_TITLE":
//       return { ...state, title: action.payload };
//     case "SET_DESCRIPTION":
//       return { ...state, description: action.payload };
//     case "SET_COOKING_TIME":
//       return { ...state, cookingTime: action.payload };
//     // Add similar cases for other fields
//     default:
//       return state;
//   }
// };

// const steps = ["Step 1", "Step 2", "Step 3"]; // Add steps as needed

// const RecipeForm = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   const handleInputChange = (field, value) => {
//     dispatch({ type: field, payload: value });
//   };

//   const getStepContent = () => {
//     switch (activeStep) {
//       case 0:
//         return (
//           <div>
//             <TextField label="Recipe Title" value={state.title} onChange={(e) => handleInputChange("SET_TITLE", e.target.value)} />
//             {/* Add other fields as needed */}
//           </div>
//         );
//       case 1:
//         return <TextField label="Cooking Time" value={state.cookingTime} onChange={(e) => handleInputChange("SET_COOKING_TIME", e.target.value)} />;
//       // Add cases for other steps similarly
//       default:
//         return "Unknown step";
//     }
//   };

//   return (
//     <Container>
//       <Stepper activeStep={activeStep} alternativeLabel>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>

//       <div>
//         {activeStep === steps.length ? (
//           <div>
//             <Typography>All steps completed</Typography>
//           </div>
//         ) : (
//           <div>
//             {getStepContent()} {/* Corrected this line */}
//             <div>
//               <Button disabled={activeStep === 0} onClick={handleBack}>
//                 Back
//               </Button>
//               <Button variant="contained" color="primary" onClick={handleNext}>
//                 {activeStep === steps.length - 1 ? "Finish" : "Next"}
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </Container>
//   );
// };

// export default RecipeForm;

// import React, { useReducer } from "react";
// import { Button, Container, Typography, TextField, Stepper, Step, StepLabel, Box } from "@mui/material";

// const initialState = {
//   title: "",
//   description: "",
//   cookingTime: "",
//   // Add other fields as needed
//   ingredient: "",
//   quantity: "",
//   instruction: "",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_TITLE":
//       return { ...state, title: action.payload };
//     case "SET_DESCRIPTION":
//       return { ...state, description: action.payload };
//     case "SET_COOKING_TIME":
//       return { ...state, cookingTime: action.payload };
//     // Add similar cases for other fields
//     case "SET_INGREDIENT":
//       return { ...state, ingredient: action.payload };
//     case "SET_QUANTITY":
//       return { ...state, quantity: action.payload };
//     case "SET_INSTRUCTION":
//       return { ...state, instruction: action.payload };
//     default:
//       return state;
//   }
// };

// const steps = ["Recipe Title", "Cooking Time", "Ingredients", "Instructions"];

// const RecipeForm = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   const handleInputChange = (field, value) => {
//     dispatch({ type: field, payload: value });
//   };

//   const getStepContent = () => {
//     switch (activeStep) {
//       case 0:
//         return (
//           <div>
//             <TextField label="Recipe Title" value={state.title} onChange={(e) => handleInputChange("SET_TITLE", e.target.value)} />
//             <TextField label="Description" value={state.description} onChange={(e) => handleInputChange("SET_DESCRIPTION", e.target.value)} />
//           </div>
//         );
//       case 1:
//         return <TextField label="Cooking Time" value={state.cookingTime} onChange={(e) => handleInputChange("SET_COOKING_TIME", e.target.value)} />;
//       case 2:
//         return (
//           <div>
//             <TextField label="Ingredient" value={state.ingredient} onChange={(e) => handleInputChange("SET_INGREDIENT", e.target.value)} />
//             <TextField label="Quantity" value={state.quantity} onChange={(e) => handleInputChange("SET_QUANTITY", e.target.value)} />
//           </div>
//         );
//       case 3:
//         return <TextField label="Instruction" multiline rows={4} value={state.instruction} onChange={(e) => handleInputChange("SET_INSTRUCTION", e.target.value)} />;
//       default:
//         return "Unknown step";
//     }
//   };

//   return (
//     <Container>
//       <Stepper activeStep={activeStep} alternativeLabel>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>

//       <Box display="flex" flexDirection="column" alignItems="center">
//         <Typography variant="h5" align="center">
//           {getStepContent()}
//         </Typography>

//         <div>
//           <Button disabled={activeStep === 0} onClick={handleBack}>
//             Back
//           </Button>
//           <Button variant="contained" color="primary" onClick={handleNext}>
//             {activeStep === steps.length - 1 ? "Finish" : "Next"}
//           </Button>
//         </div>
//       </Box>
//     </Container>
//   );
// };

// export default RecipeForm;
// import React, { useReducer } from "react";
// import { Button, Container, Typography, TextField, Box } from "@mui/material";

// const initialState = {
//   title: "",
//   description: "",
//   cookingTime: "",
//   // Add other fields as needed
//   ingredient: "",
//   quantity: "",
//   instruction: "",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_TITLE":
//       return { ...state, title: action.payload };
//     case "SET_DESCRIPTION":
//       return { ...state, description: action.payload };
//     case "SET_COOKING_TIME":
//       return { ...state, cookingTime: action.payload };
//     // Add similar cases for other fields
//     case "SET_INGREDIENT":
//       return { ...state, ingredient: action.payload };
//     case "SET_QUANTITY":
//       return { ...state, quantity: action.payload };
//     case "SET_INSTRUCTION":
//       return { ...state, instruction: action.payload };
//     default:
//       return state;
//   }
// };

// const steps = ["Recipe Title", "Cooking Time", "Ingredients", "Instructions"];

// const RecipeForm = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   const handleInputChange = (field, value) => {
//     dispatch({ type: field, payload: value });
//   };

//   const getCurrentStepInfo = () => {
//     const currentStep = activeStep + 1;
//     const totalSteps = steps.length;
//     const currentStepName = steps[activeStep];
//     const nextStepName = activeStep < totalSteps - 1 ? steps[activeStep + 1] : "";

//     return { currentStep, totalSteps, currentStepName, nextStepName };
//   };

//   const getStepContent = () => {
//     switch (activeStep) {
//       case 0:
//         return (
//           <div>
//             <TextField label="Recipe Title" value={state.title} onChange={(e) => handleInputChange("SET_TITLE", e.target.value)} />
//             <TextField label="Description" value={state.description} onChange={(e) => handleInputChange("SET_DESCRIPTION", e.target.value)} />
//           </div>
//         );
//       case 1:
//         return <TextField label="Cooking Time" value={state.cookingTime} onChange={(e) => handleInputChange("SET_COOKING_TIME", e.target.value)} />;
//       case 2:
//         return (
//           <div>
//             <TextField label="Ingredient" value={state.ingredient} onChange={(e) => handleInputChange("SET_INGREDIENT", e.target.value)} />
//             <TextField label="Quantity" value={state.quantity} onChange={(e) => handleInputChange("SET_QUANTITY", e.target.value)} />
//           </div>
//         );
//       case 3:
//         return <TextField label="Instruction" multiline rows={4} value={state.instruction} onChange={(e) => handleInputChange("SET_INSTRUCTION", e.target.value)} />;
//       default:
//         return "Unknown step";
//     }
//   };

//   const { currentStep, totalSteps, currentStepName, nextStepName } = getCurrentStepInfo();

//   return (
//     <Container>
//       <Box display="flex" flexDirection="column" alignItems="center">
//         <Typography variant="body1" fontWeight="bold">
//           {`${currentStep} out of ${totalSteps}`}
//         </Typography>
//         <Typography variant="h5" align="center">
//           {currentStepName}
//         </Typography>
//         <Typography variant="body2" fontSize="0.8rem">
//           {nextStepName && `Next Step: ${nextStepName}`}
//         </Typography>

//         <div>
//           {getStepContent()}

//           <Button disabled={activeStep === 0} onClick={handleBack}>
//             Back
//           </Button>
//           <Button variant="contained" color="primary" onClick={handleNext}>
//             {activeStep === totalSteps - 1 ? "Finish" : "Next"}
//           </Button>
//         </div>
//       </Box>
//     </Container>
//   );
// };

// export default RecipeForm;
// import React, { useReducer } from "react";
// import { Button, Container, Typography, TextField, Box } from "@mui/material";

// const initialState = {
//   title: "",
//   description: "",
//   cookingTime: "",
//   // Add other fields as needed
//   ingredient: "",
//   quantity: "",
//   instruction: "",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_TITLE":
//       return { ...state, title: action.payload };
//     case "SET_DESCRIPTION":
//       return { ...state, description: action.payload };
//     case "SET_COOKING_TIME":
//       return { ...state, cookingTime: action.payload };
//     // Add similar cases for other fields
//     case "SET_INGREDIENT":
//       return { ...state, ingredient: action.payload };
//     case "SET_QUANTITY":
//       return { ...state, quantity: action.payload };
//     case "SET_INSTRUCTION":
//       return { ...state, instruction: action.payload };
//     default:
//       return state;
//   }
// };

// const steps = ["Recipe Title", "Cooking Time", "Ingredients", "Instructions"];

// const RecipeForm = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     if (activeStep < steps.length - 1) {
//       setActiveStep((prevStep) => prevStep + 1);
//     }
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   const handleInputChange = (field, value) => {
//     dispatch({ type: field, payload: value });
//   };

//   const getCurrentStepInfo = () => {
//     const currentStep = activeStep + 1;
//     const totalSteps = steps.length;
//     const currentStepName = steps[activeStep];
//     const nextStepName = activeStep < totalSteps - 1 ? steps[activeStep + 1] : "";

//     return { currentStep, totalSteps, currentStepName, nextStepName };
//   };

//   const getStepContent = () => {
//     switch (activeStep) {
//       case 0:
//         return (
//           <div>
//             <TextField label="Recipe Title" value={state.title} onChange={(e) => handleInputChange("SET_TITLE", e.target.value)} />
//             <TextField label="Description" value={state.description} onChange={(e) => handleInputChange("SET_DESCRIPTION", e.target.value)} />
//           </div>
//         );
//       case 1:
//         return <TextField label="Cooking Time" value={state.cookingTime} onChange={(e) => handleInputChange("SET_COOKING_TIME", e.target.value)} />;
//       case 2:
//         return (
//           <div>
//             <TextField label="Ingredient" value={state.ingredient} onChange={(e) => handleInputChange("SET_INGREDIENT", e.target.value)} />
//             <TextField label="Quantity" value={state.quantity} onChange={(e) => handleInputChange("SET_QUANTITY", e.target.value)} />
//           </div>
//         );
//       case 3:
//         return <TextField label="Instruction" multiline rows={4} value={state.instruction} onChange={(e) => handleInputChange("SET_INSTRUCTION", e.target.value)} />;
//       default:
//         return "Unknown step";
//     }
//   };

//   const { currentStep, totalSteps, currentStepName, nextStepName } = getCurrentStepInfo();

//   return (
//     <Container>
//       <Box display="flex" flexDirection="column" alignItems="center">
//         <Typography variant="body1" fontWeight="bold">
//           {`${currentStep} out of ${totalSteps}`}
//         </Typography>
//         <Typography variant="h5" align="center">
//           {currentStepName}
//         </Typography>
//         <Typography variant="body2" fontSize="0.8rem">
//           {nextStepName && `Next Step: ${nextStepName}`}
//         </Typography>

//         <div>
//           {getStepContent()}

//           <Button disabled={activeStep === 0} onClick={handleBack}>
//             Back
//           </Button>
//           <Button variant="contained" color="primary" onClick={handleNext} disabled={activeStep === totalSteps - 1}>
//             {activeStep === totalSteps - 1 ? "Finish" : "Next"}
//           </Button>
//         </div>
//       </Box>
//     </Container>
//   );
// };

// export default RecipeForm;

// import React, { useReducer } from "react";
// import { Container, TextField } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import Typography from "@mui/material/Typography";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import CircularProgress from "@mui/material/CircularProgress";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import StepContent from "@mui/material/StepContent";
// import IconButton from "@mui/material/IconButton";
// // import Container from "@mui/material/Container";
// import Chip from "@mui/material/Chip";
// // import CircularProgress from "../components/CircularProgress";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// const initialState = {
//   title: "",
//   description: "",
//   cookingTime: "",
//   // Add other fields as needed
//   ingredient: "",
//   quantity: "",
//   instruction: "",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_TITLE":
//       return { ...state, title: action.payload };
//     case "SET_DESCRIPTION":
//       return { ...state, description: action.payload };
//     case "SET_COOKING_TIME":
//       return { ...state, cookingTime: action.payload };
//     // Add similar cases for other fields
//     case "SET_INGREDIENT":
//       return { ...state, ingredient: action.payload };
//     case "SET_QUANTITY":
//       return { ...state, quantity: action.payload };
//     case "SET_INSTRUCTION":
//       return { ...state, instruction: action.payload };
//     default:
//       return state;
//   }
// };

// const steps = ["Recipe Title", "Cooking Time", "Ingredients", "Instructions"];

// const RecipeForm = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     if (activeStep < steps.length - 1) {
//       setActiveStep((prevStep) => prevStep + 1);
//     }
//   };
//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   const handleInputChange = (field, value) => {
//     dispatch({ type: field, payload: value });
//   };

//   const getCurrentStepInfo = () => {
//     const currentStep = activeStep + 1;
//     const totalSteps = steps.length;
//     const currentStepName = steps[activeStep];
//     const nextStepName = activeStep < totalSteps - 1 ? steps[activeStep + 1] : "";

//     return { currentStep, totalSteps, currentStepName, nextStepName };
//   };

//   const getStepContent = () => {
//     switch (activeStep) {
//       case 0:
//         return (
//           <div>
//             <TextField label="Recipe Title" value={state.title} onChange={(e) => handleInputChange("SET_TITLE", e.target.value)} />
//             <TextField label="Description" value={state.description} onChange={(e) => handleInputChange("SET_DESCRIPTION", e.target.value)} />
//           </div>
//         );
//       case 1:
//         return <TextField label="Cooking Time" value={state.cookingTime} onChange={(e) => handleInputChange("SET_COOKING_TIME", e.target.value)} />;
//       case 2:
//         return (
//           <div>
//             <TextField label="Ingredient" value={state.ingredient} onChange={(e) => handleInputChange("SET_INGREDIENT", e.target.value)} />
//             <TextField label="Quantity" value={state.quantity} onChange={(e) => handleInputChange("SET_QUANTITY", e.target.value)} />
//           </div>
//         );
//       case 3:
//         return <TextField label="Instruction" multiline rows={4} value={state.instruction} onChange={(e) => handleInputChange("SET_INSTRUCTION", e.target.value)} />;
//       default:
//         return "Unknown step";
//     }
//   };

//   const { currentStep, totalSteps, currentStepName, nextStepName } = getCurrentStepInfo();

//   return (
//     <React.Fragment>
//       <Grid container spacing={3}>
//         {/* <Container> */}
//         <Container>
//           <Grid item xs={12} sm={12} md={12} lg={12}>
//             {/* <Box display="flex" flexDirection="column" alignItems="center"> */}
//             <Box display="flex" flexDirection="row" alignItems="space-between">
//               {/* React Circular Progressbar */}
//               <div style={{ width: 80, height: 80 }}>
//                 <CircularProgressbar
//                   value={(currentStep / totalSteps) * 100}
//                   text={`${currentStep}/${totalSteps}`}
//                   styles={buildStyles({
//                     textSize: "1.4rem", // Adjust the text size
//                     fontWeight: "700",
//                     pathTransitionDuration: 0.5,
//                     textColor: "#4caf50",
//                     trailWidth: 5, // Adjust the width of the trail (background circle)
//                     strokeWidth: 8, // Adjust the width of the circular progress bar
//                     pathColor: `rgba(76, 175, 80, ${1})`,
//                   })}
//                 />
//               </div>
//               <Typography variant="body1" fontWeight="bold">
//                 {`${currentStep} out of ${totalSteps}`}
//               </Typography>
//               <Typography variant="h5" align="center">
//                 {currentStepName}
//               </Typography>
//               <Typography variant="body2" fontSize="0.8rem">
//                 {nextStepName && `Next Step: ${nextStepName}`}
//               </Typography>
//             </Box>
//           </Grid>
//         </Container>
//       </Grid>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={12} md={12} lg={12}>
//           <div>
//             {getStepContent()}

//             <Button disabled={activeStep === 0} onClick={handleBack}>
//               Back
//             </Button>
//             {/* <Button variant="contained" color="primary" onClick={handleNext} disabled={activeStep === totalSteps}>
//             {activeStep === totalSteps - 1 ? "Finish" : "Next"}
//           </Button> */}
//             <Button variant="contained" color="primary" onClick={handleNext} disabled={activeStep === totalSteps}>
//               {activeStep === totalSteps - 1 ? "Finish" : "Next"}
//             </Button>

//             {/* <Button variant="contained" color="primary" onClick={handleNext} disabled={activeStep === totalSteps - 1 && !nextStepName}>
//             {activeStep === totalSteps - 1 ? "Finish" : "Next"}
//           </Button> */}
//           </div>
//           {/* </Box> */}
//         </Grid>
//         {/* </Container> */}
//       </Grid>
//     </React.Fragment>
//   );
// };

// export default RecipeForm;
import React, { useReducer, useState, useEffect } from "react";
import { Container, TextField, Slider, InputLabel, FormControl, Select, MenuItem, FormHelperText } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
// import { useTheme } from "@mui/material/styles";
// import CircularProgress from "@mui/material/CircularProgress";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import axios from "axios";
import { BASE_URL } from "../middleware/config";

const initialState = {
  title: "",
  description: "",
  difficulty: 1,
  servings: 1,
  ingredient: "",
  quantity: "",
  selectedMeals: [],
  preparationTime: { days: 0, hours: 0, minutes: 0 },
  cookingTime: { days: 0, hours: 0, minutes: 0 },
  restingTime: { days: 0, hours: 0, minutes: 0 },
  totalTime: {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  },
  instructions: [{ name: "", steps: [{ step: 1, description: "", image: "" }] }],
};

const minutesInAnHour = 60;
const minutesInADay = 24 * minutesInAnHour;

// const calculateTotalTime = ({ preparationTime, cookingTime, restingTime }) => {
//   const totalMinutes = preparationTime.days * minutesInADay + preparationTime.hours * minutesInAnHour + preparationTime.minutes + cookingTime.days * minutesInADay + cookingTime.hours * minutesInAnHour + cookingTime.minutes + restingTime.days * minutesInADay + restingTime.hours * minutesInAnHour + restingTime.minutes;

//   const years = Math.floor(totalMinutes / (minutesInADay * 365));
//   const remainingMinutes = totalMinutes % (minutesInADay * 365);
//   const days = Math.floor(remainingMinutes / minutesInADay);
//   const remainingHours = remainingMinutes % minutesInADay;
//   const hours = Math.floor(remainingHours / minutesInAnHour);
//   const minutes = remainingHours % minutesInAnHour;

//   return {
//     years,
//     days,
//     hours,
//     minutes,
//   };
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_DIFFICULTY":
      return { ...state, difficulty: action.payload };
    case "SET_SERVINGS":
      return { ...state, servings: action.payload };
    case "SET_INGREDIENT":
      return { ...state, ingredient: action.payload };
    case "SET_QUANTITY":
      return { ...state, quantity: action.payload };
    // case "SET_INSTRUCTION":
    //   return { ...state, instruction: action.payload };
    case "SET_SELECTED_MEALS":
      return { ...state, selectedMeals: action.payload };
    // case "SET_SELECTED_COOKING_METHODS":
    //   return { ...state, selectedCookingMethods: action.payload };
    case "SET_PREPARATION_TIME":
      return {
        ...state,
        preparationTime: {
          ...state.preparationTime,
          ...action.payload,
        },
      };
    case "SET_COOKING_TIME":
      return {
        ...state,
        cookingTime: {
          ...state.cookingTime,
          ...action.payload,
        },
      };
    case "SET_RESTING_TIME":
      return {
        ...state,
        restingTime: {
          ...state.restingTime,
          ...action.payload,
        },
      };
    case "SET_TOTAL_TIME":
      const totalMinutes = state.preparationTime.days * minutesInADay + state.preparationTime.hours * minutesInAnHour + state.preparationTime.minutes + state.cookingTime.days * minutesInADay + state.cookingTime.hours * minutesInAnHour + state.cookingTime.minutes + state.restingTime.days * minutesInADay + state.restingTime.hours * minutesInAnHour + state.restingTime.minutes;

      const years = Math.floor(totalMinutes / (minutesInADay * 365));
      const remainingMinutes = totalMinutes % (minutesInADay * 365);
      const days = Math.floor(remainingMinutes / minutesInADay);
      const remainingHours = (remainingMinutes % minutesInADay) / minutesInAnHour;
      const hours = Math.floor(remainingHours);
      const minutesWithoutExcess = Math.round((remainingHours % 1) * minutesInAnHour);

      return {
        ...state,
        totalTime: {
          years,
          days,
          hours,
          minutes: minutesWithoutExcess,
        },
      };
    case "SET_INSTRUCTION_NAME":
      const { index, value } = action.payload;
      const newInstructions = [...state.instructions];
      newInstructions[index].name = value;
      return { ...state, instructions: newInstructions };
    case "SET_STEP_DESCRIPTION":
      const { instructionIndex, stepIndex, stepValue } = action.payload;
      const updatedInstructions = [...state.instructions];
      updatedInstructions[instructionIndex].steps[stepIndex].description = stepValue;
      return { ...state, instructions: updatedInstructions };
    case "SET_STEP_IMAGE":
      const { instructionIdx, stepIdx, imageURL } = action.payload;
      const updatedImageInstructions = [...state.instructions];
      updatedImageInstructions[instructionIdx].steps[stepIdx].image = imageURL;
      return { ...state, instructions: updatedImageInstructions };
    case "ADD_STEP":
      const { addInstructionIndex } = action.payload;
      const addedStepInstructions = state.instructions.map((instruction, index) => {
        if (index === addInstructionIndex) {
          const stepIndexToAdd = instruction.steps.length + 1;
          return {
            ...instruction,
            steps: [...instruction.steps, { step: stepIndexToAdd, description: "", image: "" }],
          };
        }
        return instruction;
      });

      return { ...state, instructions: addedStepInstructions };
    case "REMOVE_STEP":
      const { removeInstructionIndex, stepIndexToRemove } = action.payload;

      // Check if it's not the first instruction and there is more than one step
      if (removeInstructionIndex !== 0 || state.instructions[removeInstructionIndex].steps.length > 1) {
        const updatedInstructionsAfterRemove = state.instructions
          .map((instruction, index) => {
            if (index === removeInstructionIndex) {
              // Check if it's not the first step
              if (stepIndexToRemove !== 0) {
                const updatedSteps = instruction.steps.filter((_, stepIndex) => stepIndex !== stepIndexToRemove).map((step, stepIndex) => ({ ...step, step: stepIndex + 1 }));

                return {
                  ...instruction,
                  steps: updatedSteps,
                };
              }
            }
            return instruction;
          })
          .filter((instruction) => !!instruction); // Remove empty instructions

        return { ...state, instructions: updatedInstructionsAfterRemove };
      }

      // If it's the first instruction or the only step, return the state unchanged
      return state;
    case "ADD_INSTRUCTION":
      return { ...state, instructions: [...state.instructions, { name: "", steps: [{ step: 1, description: "", image: "" }] }] };
    case "REMOVE_INSTRUCTION":
      const removeIndexToRemove = action.payload.removeInstructionIndex;
      const updatedInstructionsAfterRemoveInstruction = state.instructions
        .filter((_, index) => index !== removeIndexToRemove)
        .map((instruction, index) => {
          return {
            ...instruction,
            steps: instruction.steps.map((step) => ({ ...step, step: step.step })),
          };
        });

      return { ...state, instructions: updatedInstructionsAfterRemoveInstruction };

    default:
      return state;
  }
};

const steps = ["Recipe Title", "Cooking Time", "Ingredients", "Instructions"];

const RecipeForm = () => {
  // const theme = useTheme();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [activeStep, setActiveStep] = React.useState(0);
  const [meals, setMeals] = React.useState([]); // State to store meals data
  const [mealError, setMealError] = React.useState(""); // State to track meal selection error

  // Handle Instructions
  const handleInstructionNameChange = (index, value) => {
    dispatch({ type: "SET_INSTRUCTION_NAME", payload: { index, value } });
  };

  const handleStepChange = (instructionIndex, stepIndex, stepValue) => {
    dispatch({ type: "SET_STEP_DESCRIPTION", payload: { instructionIndex, stepIndex, stepValue } });
  };

  const handleImageChange = (instructionIdx, stepIdx, imageURL) => {
    dispatch({ type: "SET_STEP_IMAGE", payload: { instructionIdx, stepIdx, imageURL } });
  };

  const handleAddStep = (index) => {
    dispatch({ type: "ADD_STEP", payload: { addInstructionIndex: index } });
  };
  const handleRemoveStep = (instructionIndex, stepIndex) => {
    dispatch({ type: "REMOVE_STEP", payload: { removeInstructionIndex: instructionIndex, stepIndexToRemove: stepIndex } });
  };

  const handleRemoveInstruction = (index) => {
    dispatch({ type: "REMOVE_INSTRUCTION", payload: { removeInstructionIndex: index } });
  };

  const handleAddInstruction = () => {
    dispatch({ type: "ADD_INSTRUCTION" });
  };
  useEffect(() => {
    // Fetch meals data when the component mounts
    const fetchMeals = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/meals`);
        setMeals(response.data);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchMeals();
  }, []); // Empty dependency array ensures the effect runs only once

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    } else {
      handleFinish();
      console.log(alert("Reciped added"));
    }
  };
  const handleTimeInputChange = (field, subField, value) => {
    dispatch({
      type: field,
      payload: {
        ...state[field],
        [subField]: parseInt(value, 10) || 0,
      },
    });

    // Trigger the update for totalTime whenever any time input changes
    dispatch({ type: "SET_TOTAL_TIME" });
  };

  // const handleTimeInputChange = (field, subField, value) => {
  //   dispatch({
  //     type: field,
  //     payload: {
  //       ...state[field],
  //       [subField]: parseInt(value, 10) || 0,
  //     },
  //   });
  //   // Trigger the update for totalTime whenever any time input changes
  //   dispatch({ type: "SET_TOTAL_TIME" });
  // };
  // const handleNext = () => {
  //   // Check for errors before proceeding to the next step
  //   if (activeStep === 0 && !state.title) {
  //     // Check for the title field
  //     console.error("Title is required");
  //   } else if (activeStep === 0 && !state.description) {
  //     // Check for the description field
  //     console.error("Description is required");
  //   } else if (activeStep === 0 && !state.servings) {
  //     // Check for the servings field
  //     console.error("Number of Servings is required");
  //   } else if (activeStep === 0 && state.selectedMeals.length === 0) {
  //     // Check for the selected meals
  //     console.error("Please select at least one meal");
  //   } else if (activeStep === 1 && !state.cookingTime) {
  //     // Check for the cooking time field
  //     console.error("Cooking Time is required");
  //   } else if (activeStep === 2 && (!state.ingredient || !state.quantity)) {
  //     // Check for the ingredient and quantity fields
  //     console.error("Ingredient and Quantity are required");
  //   } else if (activeStep === 3 && !state.instruction) {
  //     // Check for the instruction field
  //     console.error("Instruction is required");
  //   } else {
  //     // If no errors, proceed to the next step
  //     if (activeStep < steps.length - 1) {
  //       setActiveStep((prevStep) => prevStep + 1);
  //     } else {
  //       console.log(alert("Recipe added"));
  //     }
  //   }
  // };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (field, value) => {
    dispatch({ type: field, payload: value });
    // Add the following code to handle the selected meals
    // if (field === "SET_SELECTED_MEALS") {
    //   dispatch({ type: "SET_SELECTED_MEALS", payload: value });
    // }
    if (field === "SET_SELECTED_MEALS") {
      // Limit the number of selected meals to 3
      if (value.length > 3) {
        setMealError("You can only select up to 3 meals");
      } else {
        setMealError("");
      }
    }
  };
  const handleFinish = async () => {
    // Check for errors before submitting the recipe
    if (!state.title) {
      console.error("Title is required");
    } else if (!state.description) {
      console.error("Description is required");
    } else if (!state.servings) {
      console.error("Number of Servings is required");
    } else if (state.selectedMeals.length === 0) {
      console.error("Please select at least one meal");
    } else if (!state.cookingTime) {
      console.error("Cooking Time is required");
    } else if (!state.ingredient || !state.quantity) {
      console.error("Ingredient and Quantity are required");
    } else if (!state.instruction) {
      console.error("Instruction is required");
    } else {
      // If no errors, submit the recipe
      try {
        // Create a payload object with the recipe data
        const recipeData = {
          title: state.title,
          description: state.description,
          difficulty: state.difficulty,
          servings: state.servings,
          cookingTime: state.cookingTime,
          ingredients: [
            {
              name: state.ingredient,
              quantity: state.quantity,
            },
            // Add more ingredients if needed
          ],
          instructions: [state.instructions], // You can modify this based on your data structure
          meals: state.selectedMeals,
        };

        // Send a POST request to the recipes endpoint
        const response = await axios.post(`${BASE_URL}/recipes`, recipeData);

        // Handle the response (you can log or display a success message)
        console.log("Recipe added successfully:", response.data);

        // Show an alert or navigate to another page upon successful submission
        alert("Recipe added successfully");

        // Optionally, you can reset the form or navigate to another page
        // Reset the form or navigate to another page
      } catch (error) {
        // Handle errors from the POST request
        console.error("Error submitting recipe:", error);
      }
    }
  };
  const getCurrentStepInfo = () => {
    const currentStep = activeStep + 1;
    const totalSteps = steps.length;
    const currentStepName = steps[activeStep];
    const nextStepName = activeStep < totalSteps - 1 ? steps[activeStep + 1] : "";

    return { currentStep, totalSteps, currentStepName, nextStepName };
  };

  const getStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Recipe Title" value={state.title} onChange={(e) => handleInputChange("SET_TITLE", e.target.value)} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Description" multiline rows={3} value={state.description} onChange={(e) => handleInputChange("SET_DESCRIPTION", e.target.value)} fullWidth />
            </Grid>

            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <Button variant="contained" color="primary" size="small" onClick={() => handleInputChange("SET_SERVINGS", Math.max(1, state.servings - 1))} style={{ padding: "1rem", borderRadius: "5px 5px 5px 5px" }}>
                  <RemoveIcon />
                </Button>

                <TextField label="Number of Servings" type="number" value={state.servings} onChange={(e) => handleInputChange("SET_SERVINGS", Math.min(10, Math.max(1, e.target.value)))} inputProps={{ min: 1, max: 10, step: 1 }} fullWidth style={{ marginLeft: "1rem", marginRight: "1rem" }} />

                <Button variant="contained" color="primary" size="small" onClick={() => handleInputChange("SET_SERVINGS", Math.min(10, parseInt(state.servings, 10) + 1))} style={{ padding: "1rem", borderRadius: "5px 5px 5px 5px" }}>
                  <AddIcon />
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <InputLabel>Difficulty</InputLabel>
              <Slider
                value={state.difficulty}
                onChange={(_, value) => handleInputChange("SET_DIFFICULTY", value)}
                valueLabelDisplay="auto"
                step={1}
                marks={[
                  { value: 1, label: "Easy" },
                  { value: 2, label: "Medium" },
                  { value: 3, label: "Hard" },
                ]}
                min={1}
                max={3}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" margin="normal" error={Boolean(mealError)}>
                {/* <FormControl fullWidth variant="outlined" margin="normal" error={Boolean(false)}> */}
                <InputLabel htmlFor="meal-select">Meals</InputLabel>
                <Select
                  multiple
                  value={state.selectedMeals} // This should always be an array
                  onChange={(e) => handleInputChange("SET_SELECTED_MEALS", e.target.value)}
                  label="Meals"
                  inputProps={{
                    id: "meal-select",
                  }}
                  MenuComponent="div"
                >
                  {meals.map((type) => (
                    <MenuItem key={type._id} value={type._id}>
                      {type.name}
                    </MenuItem>
                  ))}
                </Select>
                {mealError && <FormHelperText>{mealError}</FormHelperText>}
              </FormControl>
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={2}>
            {/* Preparation Time */}
            <Grid item xs={12}>
              <InputLabel sx={{ marginBottom: "0.5rem", color: "#333" }}>Preparation Time</InputLabel>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField label="Days" type="number" value={state.preparationTime.days} onChange={(e) => handleTimeInputChange("SET_PREPARATION_TIME", "days", Math.max(0, Math.min(365, e.target.value)))} fullWidth />
                </Grid>

                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="preparation-time-minutes">Hours</InputLabel>
                    <Select
                      value={state.preparationTime.hours}
                      onChange={(e) => handleTimeInputChange("SET_PREPARATION_TIME", "hours", e.target.value)}
                      label="Hours"
                      inputProps={{
                        name: "preparation-time-minutes",
                        id: "preparation-time-minutes",
                      }}
                      fullWidth
                    >
                      {[...Array(25).keys()].map((hour) => (
                        <MenuItem key={hour} value={hour}>
                          {hour}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="preparation-time-minutes">Minutes</InputLabel>
                    <Select
                      value={state.preparationTime.minutes}
                      onChange={(e) => handleTimeInputChange("SET_PREPARATION_TIME", "minutes", e.target.value)}
                      label="Minutes"
                      inputProps={{
                        name: "preparation-time-minutes",
                        id: "preparation-time-minutes",
                      }}
                      fullWidth
                    >
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={15}>15</MenuItem>
                      <MenuItem value={30}>30</MenuItem>
                      <MenuItem value={45}>45</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>

            {/* Cooking Time */}
            <Grid item xs={12}>
              <InputLabel sx={{ marginBottom: "0.5rem", color: "#333" }}>Cooking Time</InputLabel>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField label="Days" type="number" value={state.cookingTime.days} onChange={(e) => handleTimeInputChange("SET_COOKING_TIME", "days", Math.max(0, Math.min(365, e.target.value)))} fullWidth />
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="cooking-time-hours">Hours</InputLabel>
                    <Select
                      value={state.cookingTime.hours}
                      onChange={(e) => handleTimeInputChange("SET_COOKING_TIME", "hours", e.target.value)}
                      label="Hours"
                      inputProps={{
                        name: "cooking-time-hours",
                        id: "cooking-time-hours",
                      }}
                      fullWidth
                    >
                      {[...Array(25).keys()].map((hour) => (
                        <MenuItem key={hour} value={hour}>
                          {hour}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="cooking-time-minutes">Minutes</InputLabel>
                    <Select
                      value={state.cookingTime.minutes}
                      onChange={(e) => handleTimeInputChange("SET_COOKING_TIME", "minutes", e.target.value)}
                      label="Minutes"
                      inputProps={{
                        name: "cooking-time-minutes",
                        id: "cooking-time-minutes",
                      }}
                      fullWidth
                    >
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={15}>15</MenuItem>
                      <MenuItem value={30}>30</MenuItem>
                      <MenuItem value={45}>45</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>

            {/* Resting Time */}
            <Grid item xs={12}>
              <InputLabel sx={{ marginBottom: "0.5rem", color: "#333" }}>Resting Time</InputLabel>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField label="Days" type="number" value={state.restingTime.days} onChange={(e) => handleTimeInputChange("SET_RESTING_TIME", "days", Math.max(0, Math.min(365, e.target.value)))} fullWidth />
                </Grid>
                {/* <Grid item xs={4}>
                  <TextField label="Hours" type="number" value={state.restingTime.hours} onChange={(e) => handleTimeInputChange("SET_RESTING_TIME", "hours", e.target.value)} fullWidth />
                </Grid> */}
                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="resting-time-minutes">Hours</InputLabel>
                    <Select
                      value={state.restingTime.hours}
                      onChange={(e) => handleTimeInputChange("SET_RESTING_TIME", "hours", e.target.value)}
                      label="Hours"
                      inputProps={{
                        name: "resting-time-minutes",
                        id: "resting-time-minutes",
                      }}
                      fullWidth
                    >
                      {[...Array(25).keys()].map((hour) => (
                        <MenuItem key={hour} value={hour}>
                          {hour}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="resting-time-minutes">Minutes</InputLabel>
                    <Select
                      value={state.restingTime.minutes}
                      onChange={(e) => handleTimeInputChange("SET_RESTING_TIME", "minutes", e.target.value)}
                      label="Minutes"
                      inputProps={{
                        name: "resting-time-minutes",
                        id: "resting-time-minutes",
                      }}
                      fullWidth
                    >
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={15}>15</MenuItem>
                      <MenuItem value={30}>30</MenuItem>
                      <MenuItem value={45}>45</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                {/* <Grid item xs={4}>
                  <TextField label="Minutes" type="number" value={state.restingTime.minutes} onChange={(e) => handleTimeInputChange("SET_RESTING_TIME", "minutes", e.target.value)} fullWidth />
                </Grid> */}
              </Grid>
            </Grid>

            {/* Total Time */}
            {/* <Grid item xs={12}>
              <InputLabel sx={{ marginBottom: "0.5rem" }}>Total Time</InputLabel> */}
            <Grid item xs={12}>
              <InputLabel sx={{ marginBottom: "0.5rem" }}>Total Time</InputLabel>
              <Grid container spacing={2}>
                {/* <Grid item xs={12}>
                  <Typography variant="h6">Total Time</Typography>
                </Grid> */}
                <Grid item xs={3}>
                  <TextField label="Years" type="number" value={state.totalTime.years} disabled fullWidth />
                </Grid>
                <Grid item xs={3}>
                  <TextField label="Days" type="number" value={state.totalTime.days} disabled fullWidth />
                </Grid>
                <Grid item xs={3}>
                  <TextField label="Hours" type="number" value={state.totalTime.hours} disabled fullWidth />
                </Grid>
                <Grid item xs={3}>
                  <TextField label="Minutes" type="number" value={state.totalTime.minutes} disabled fullWidth />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Ingredient" value={state.ingredient} onChange={(e) => handleInputChange("SET_INGREDIENT", e.target.value)} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Quantity" value={state.quantity} onChange={(e) => handleInputChange("SET_QUANTITY", e.target.value)} fullWidth />
            </Grid>
          </Grid>
        );
      case 3:
        return (
          // <Grid container spacing={2}>
          //   <Grid item xs={12}>
          //     <TextField label="Instruction" multiline rows={4} value={state.instruction} onChange={(e) => handleInputChange("SET_INSTRUCTION", e.target.value)} fullWidth />
          //   </Grid>
          // </Grid>
          // <div>
          //   {state.instructions.map((instruction, index) => (
          //     <div key={index}>
          //       <TextField label={`Instruction Name ${index + 1}`} value={instruction.name} onChange={(e) => handleInstructionNameChange(index, e.target.value)} fullWidth />
          //       {instruction.steps.map((step, stepIndex) => (
          //         <div key={stepIndex}>
          //           <TextField label={`Step ${step.step} Description`} value={step.description} onChange={(e) => handleStepChange(index, stepIndex, e.target.value)} fullWidth />
          //           <TextField label={`Step ${step.step} Image URL`} value={step.image} onChange={(e) => handleImageChange(index, stepIndex, e.target.value)} fullWidth />
          //         </div>
          //       ))}
          //       <Button variant="outlined" onClick={() => handleAddStep(index)}>
          //         Add Step
          //       </Button>
          //     </div>
          //   ))}
          //   <Button variant="outlined" onClick={handleAddInstruction}>
          //     Add Instruction
          //   </Button>
          // </div>
          // <div>
          //   {state.instructions.map((instruction, index) => (
          //     <div key={index}>
          //       <TextField sx={{ marginBottom: "10px" }} label={`Instruction Name ${index + 1}`} value={instruction.name} onChange={(e) => handleInstructionNameChange(index, e.target.value)} fullWidth />
          //       {instruction.steps.map((step, stepIndex) => (
          //         <div key={stepIndex} style={{ marginBottom: "10px" }}>
          //           <TextField sx={{ marginBottom: "10px" }} label={`Step ${step.step} Description`} multiline rows={3} value={step.description} onChange={(e) => handleStepChange(index, stepIndex, e.target.value)} fullWidth />
          //           <TextField sx={{ marginBottom: "10px" }} label={`Step ${step.step} Image URL`} value={step.image} onChange={(e) => handleImageChange(index, stepIndex, e.target.value)} fullWidth />

          //           <Button sx={{ marginBottom: "10px" }} variant="outlined" color="secondary" onClick={() => handleRemoveStep(index, stepIndex)}>
          //             Remove Step
          //           </Button>
          //         </div>
          //       ))}
          //       <Button sx={{ marginBottom: "10px" }} variant="outlined" onClick={() => handleAddStep(index)}>
          //         Add Step
          //       </Button>
          //     </div>
          //   ))}
          //   <Button variant="outlined" onClick={handleAddInstruction}>
          //     Add Instruction
          //   </Button>
          // </div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {state.instructions.map((instruction, index) => (
                <div key={index}>
                  <TextField sx={{ margin: "10px 0" }} label={`Instruction Name ${index + 1}`} value={instruction.name} onChange={(e) => handleInstructionNameChange(index, e.target.value)} fullWidth />
                  {instruction.steps.map((step, stepIndex) => (
                    <div key={stepIndex} sx={{ marginBottom: "10px" }}>
                      <TextField sx={{ marginBottom: "10px" }} label={`Step ${step.step} Description`} multiline rows={3} value={step.description} onChange={(e) => handleStepChange(index, stepIndex, e.target.value)} fullWidth />
                      <TextField sx={{ marginBottom: "10px" }} label={`Step ${step.step} Image URL`} value={step.image} onChange={(e) => handleImageChange(index, stepIndex, e.target.value)} fullWidth />
                      <Button sx={{ marginBottom: "10px" }} variant="outlined" color="secondary" onClick={() => handleRemoveStep(index, stepIndex)}>
                        Remove Step
                      </Button>
                    </div>
                  ))}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Button variant="outlined" onClick={() => handleAddStep(index)}>
                      Add Step
                    </Button>
                    <Button variant="outlined" onClick={() => handleRemoveInstruction(index)} disabled={index === 0}>
                      Remove Instruction
                    </Button>
                  </div>
                </div>
              ))}
              <Button sx={{ margin: "10px 0" }} variant="outlined" onClick={handleAddInstruction}>
                Add Instruction
              </Button>
            </Grid>
          </Grid>
        );
      default:
        return "Unknown step";
    }
  };

  const { currentStep, totalSteps, currentStepName, nextStepName } = getCurrentStepInfo();

  return (
    <Container>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={12} md={8} lg={6}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box mt={3} mb={3} sx={{ width: 80, height: 80 }}>
              {/* <div style={{ width: 80, height: 80 }}> */}
              <CircularProgressbar
                value={(currentStep / totalSteps) * 100}
                text={`${currentStep}/${totalSteps}`}
                styles={buildStyles({
                  textSize: "1.4rem",
                  fontWeight: "700",
                  pathTransitionDuration: 0.5,
                  textColor: "#4caf50",
                  trailWidth: 5,
                  strokeWidth: 8,
                  pathColor: `rgba(76, 175, 80, ${1})`,
                })}
              />
              {/* </div> */}
            </Box>
            <Box>
              {/* <Typography variant="body1" fontWeight="bold" align="center">
                {`${currentStep} out of ${totalSteps}`}
              </Typography> */}
              <Typography variant="h5" align="center">
                {currentStepName}
              </Typography>
              {nextStepName && (
                <Typography variant="body2" fontSize="0.8rem" align="center">
                  Next Step: {nextStepName}
                </Typography>
              )}
            </Box>
          </Box>
          <Box mt={3}>{getStepContent()}</Box>

          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary" onClick={handleBack} disabled={activeStep === 0}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext} disabled={activeStep === totalSteps}>
              {activeStep === totalSteps - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecipeForm;
