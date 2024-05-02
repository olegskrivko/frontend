import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";

const BodyMassIndexCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      setResult("Please fill in all the fields.");
      return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    setResult(`Your BMI is: ${bmi.toFixed(2)}`);
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
        BMI Calculator
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField type="number" label="Weight (kg)" value={weight} onChange={handleWeightChange} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField type="number" label="Height (cm)" value={height} onChange={handleHeightChange} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={calculateBMI} fullWidth>
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

export default BodyMassIndexCalculator;
