import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";

const WaistToHipRatioCalculator = () => {
  const [waistCircumference, setWaistCircumference] = useState("");
  const [hipCircumference, setHipCircumference] = useState("");
  const [waistToHipRatio, setWaistToHipRatio] = useState("");
  const [interpretation, setInterpretation] = useState("");
  const [result, setResult] = useState("");

  const calculateWaistToHipRatio = () => {
    if (!waistCircumference || !hipCircumference) {
      setResult("Please fill in all the fields.");
      return;
    }

    const waist = parseFloat(waistCircumference);
    const hip = parseFloat(hipCircumference);

    // Calculate waist-to-hip ratio
    const ratio = waist / hip;

    setWaistToHipRatio(ratio.toFixed(2));
    setInterpretation(interpretRatio(ratio));
    setResult(`Your waist-to-hip ratio is ${ratio.toFixed(2)}. ${interpretation}`);
  };

  const interpretRatio = (ratio) => {
    if (ratio < 0.9) {
      return "Your ratio is normal, which indicates a lower risk of cardiovascular diseases.";
    } else if (ratio >= 0.9 && ratio <= 0.95) {
      return "Your ratio is high, which indicates an increased risk of cardiovascular diseases.";
    } else {
      return "Your ratio is very high, which indicates a significantly increased risk of cardiovascular diseases.";
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Waist-to-Hip Ratio Calculator
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField type="number" label="Waist Circumference (cm)" value={waistCircumference} onChange={(e) => setWaistCircumference(e.target.value)} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField type="number" label="Hip Circumference (cm)" value={hipCircumference} onChange={(e) => setHipCircumference(e.target.value)} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={calculateWaistToHipRatio} fullWidth>
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

export default WaistToHipRatioCalculator;
