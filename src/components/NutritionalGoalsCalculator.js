import React, { useState } from "react";
import { Container, MenuItem, Typography, TextField, Button, Grid } from "@mui/material";

const NutritionalGoalsCalculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [goal, setGoal] = useState("");
  const [calories, setCalories] = useState("");
  const [proteinPercentage, setProteinPercentage] = useState(30);
  const [carbohydratePercentage, setCarbohydratePercentage] = useState(40);
  const [fatPercentage, setFatPercentage] = useState(30);

  const calculateNutritionalGoals = () => {
    // Calculate BMR using Mifflin-St Jeor equation
    let bmr = 0;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Adjust BMR based on activity level
    let tdee = 0;
    switch (activityLevel) {
      case "sedentary":
        tdee = bmr * 1.2;
        break;
      case "lightly_active":
        tdee = bmr * 1.375;
        break;
      case "moderately_active":
        tdee = bmr * 1.55;
        break;
      case "very_active":
        tdee = bmr * 1.725;
        break;
      case "extra_active":
        tdee = bmr * 1.9;
        break;
      default:
        break;
    }

    // Adjust TDEE based on goal (e.g., weight loss, maintenance, muscle gain)
    switch (goal) {
      case "lose_weight":
        tdee -= 500; // Aim for 500 calorie deficit for weight loss
        break;
      case "maintain_weight":
        break; // No adjustment needed for weight maintenance
      case "gain_weight":
        tdee += 500; // Aim for 500 calorie surplus for weight gain
        break;
      default:
        break;
    }

    setCalories(tdee.toFixed(0));

    // Calculate macronutrient percentages
    const protein = ((proteinPercentage / 100) * tdee) / 4; // 1g of protein = 4 calories
    const carbohydrates = ((carbohydratePercentage / 100) * tdee) / 4; // 1g of carbohydrates = 4 calories
    const fat = ((fatPercentage / 100) * tdee) / 9; // 1g of fat = 9 calories

    // Set the state with the calculated macronutrient percentages
    setProteinPercentage(protein.toFixed(0));
    setCarbohydratePercentage(carbohydrates.toFixed(0));
    setFatPercentage(fat.toFixed(0));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Macronutrient Calculator
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField type="number" label="Age" value={age} onChange={(e) => setAge(e.target.value)} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField type="number" label="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField type="number" label="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField select label="Gender" value={gender} onChange={(e) => setGender(e.target.value)} fullWidth>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField select label="Activity Level" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} fullWidth>
            <MenuItem value="sedentary">Sedentary (little to no exercise)</MenuItem>
            <MenuItem value="lightly_active">Lightly Active (light exercise/sports 1-3 days/week)</MenuItem>
            <MenuItem value="moderately_active">Moderately Active (moderate exercise/sports 3-5 days/week)</MenuItem>
            <MenuItem value="very_active">Very Active (hard exercise/sports 6-7 days a week)</MenuItem>
            <MenuItem value="extra_active">Extra Active (very hard exercise/sports & physical job or 2x training)</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField select label="Goal" value={goal} onChange={(e) => setGoal(e.target.value)} fullWidth>
            <MenuItem value="lose_weight">Lose Weight</MenuItem>
            <MenuItem value="maintain_weight">Maintain Weight</MenuItem>
            <MenuItem value="gain_weight">Gain Weight</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={calculateNutritionalGoals} fullWidth>
            Calculate
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Nutritional Goals:
          </Typography>
          <Typography variant="body1">Calories: {calories} kcal</Typography>
          <Typography variant="body1">Protein: {proteinPercentage}g</Typography>
          <Typography variant="body1">Carbohydrates: {carbohydratePercentage}g</Typography>
          <Typography variant="body1">Fat: {fatPercentage}g</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NutritionalGoalsCalculator;
