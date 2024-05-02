import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const BasalMetabolicRateCalculator = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const calculateBMR = () => {
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

    setResult(`Your Basal Metabolic Rate (BMR) is: ${bmr.toFixed(2)} calories/day.`);
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

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        BMR (Basal Metabolic Rate) Calculator
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
          <Button variant="contained" color="primary" onClick={calculateBMR} fullWidth>
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

export default BasalMetabolicRateCalculator;
