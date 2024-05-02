import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";

const BodyFatIndexCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [waistCircumference, setWaistCircumference] = useState("");
  const [neckCircumference, setNeckCircumference] = useState("");
  const [hipCircumference, setHipCircumference] = useState("");
  const [bodyFatPercentage, setBodyFatPercentage] = useState("");
  const [result, setResult] = useState("");

  const calculateBodyFatPercentage = () => {
    if (!weight || !height || !waistCircumference || !neckCircumference || !hipCircumference) {
      setResult("Please fill in all the fields.");
      return;
    }

    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);
    const waistInCm = parseFloat(waistCircumference);
    const neckInCm = parseFloat(neckCircumference);
    const hipInCm = parseFloat(hipCircumference);

    // Calculate body fat percentage using Navy method
    const leanBodyMass = 0.29569 * waistInCm + 0.41813 * neckInCm - 0.00118 * Math.pow(waistInCm, 2) + 0.00118 * waistInCm * neckInCm;
    const bodyFatWeight = weightInKg - leanBodyMass;
    const bodyFatPercentage = (bodyFatWeight * 100) / weightInKg;

    setBodyFatPercentage(bodyFatPercentage.toFixed(2) + "%");
    setResult(`Your estimated body fat percentage is ${bodyFatPercentage.toFixed(2)}%.`);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Body Fat Index Calculator
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField type="number" label="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField type="number" label="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField type="number" label="Waist Circumference (cm)" value={waistCircumference} onChange={(e) => setWaistCircumference(e.target.value)} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField type="number" label="Neck Circumference (cm)" value={neckCircumference} onChange={(e) => setNeckCircumference(e.target.value)} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField type="number" label="Hip Circumference (cm)" value={hipCircumference} onChange={(e) => setHipCircumference(e.target.value)} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={calculateBodyFatPercentage} fullWidth>
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

export default BodyFatIndexCalculator;
