import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const TDEECalculator = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [result, setResult] = useState("");

  const calculateTDEE = () => {
    if (!age || !weight || !height) {
      setResult("Please fill in all the fields.");
      return;
    }

    let bmr = 0;
    if (gender === "male") {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    let tdee = 0;
    switch (activityLevel) {
      case "sedentary":
        tdee = bmr * 1.2;
        break;
      case "lightlyActive":
        tdee = bmr * 1.375;
        break;
      case "moderatelyActive":
        tdee = bmr * 1.55;
        break;
      case "veryActive":
        tdee = bmr * 1.725;
        break;
      case "extraActive":
        tdee = bmr * 1.9;
        break;
      default:
        break;
    }

    setResult(`Your Total Daily Energy Expenditure (TDEE) is: ${tdee.toFixed(2)} calories/day.`);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleActivityLevelChange = (e) => {
    setActivityLevel(e.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        TDEE (Total Daily Energy Expenditure) Calculator
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select value={gender} onChange={handleGenderChange}>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField type="number" label="Age" value={age} onChange={handleAgeChange} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField type="number" label="Weight (kg)" value={weight} onChange={handleWeightChange} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField type="number" label="Height (cm)" value={height} onChange={handleHeightChange} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Activity Level</InputLabel>
            <Select value={activityLevel} onChange={handleActivityLevelChange}>
              <MenuItem value="sedentary">Sedentary (little to no exercise)</MenuItem>
              <MenuItem value="lightlyActive">Lightly Active (light exercise/sports 1-3 days/week)</MenuItem>
              <MenuItem value="moderatelyActive">Moderately Active (moderate exercise/sports 3-5 days/week)</MenuItem>
              <MenuItem value="veryActive">Very Active (hard exercise/sports 6-7 days a week)</MenuItem>
              <MenuItem value="extraActive">Extra Active (very hard exercise/sports & physical job or 2x training)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={calculateTDEE} fullWidth>
            Calculate
          </Button>
        </Grid>
        <Grid item xs={12}>
          {result && <Typography variant="h6">{result}</Typography>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default TDEECalculator;
