import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CalorieBurnEstimator = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [result, setResult] = useState("");

  const calculateCaloriesBurned = () => {
    if (!age || !weight || !height || !activity || !duration) {
      setResult("Please fill in all the fields.");
      return;
    }

    let MET = 1.0; // Default MET value
    switch (activity) {
      case "walking":
        MET = 3.5;
        break;
      case "running":
        MET = 8.0;
        break;
      case "bicycling":
        MET = 6.0;
        break;
      // Add more activities and their MET values as needed
      default:
        break;
    }

    const hours = parseFloat(duration);
    const bmr = calculateBMR(gender, age, weight, height);
    const totalCaloriesBurned = (MET * bmr * hours) / 24; // Assuming 24 hours in a day

    setResult(`You burned approximately ${totalCaloriesBurned.toFixed(2)} calories.`);
  };

  const calculateBMR = (gender, age, weight, height) => {
    let bmr = 0;
    if (gender === "male") {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }
    return bmr;
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

  const handleActivityChange = (e) => {
    setActivity(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Calorie Burn Estimator
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
            <InputLabel>Activity</InputLabel>
            <Select value={activity} onChange={handleActivityChange}>
              <MenuItem value="walking">Walking</MenuItem>
              <MenuItem value="running">Running</MenuItem>
              <MenuItem value="bicycling">Bicycling</MenuItem>
              {/* Add more activities as needed */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField type="number" label="Duration (hours)" value={duration} onChange={handleDurationChange} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={calculateCaloriesBurned} fullWidth>
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

export default CalorieBurnEstimator;
