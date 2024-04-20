import React, { useState } from "react";
import { Container, TextField, Typography, MenuItem, Button, Grid, IconButton } from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

const TimeTool = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("seconds");
  const [toUnit, setToUnit] = useState("minutes");
  const [result, setResult] = useState("");

  const handleConversion = () => {
    // Parse the inputValue into a number
    const numericInputValue = parseFloat(inputValue);

    // Check if the numericInputValue is a valid number
    if (isNaN(numericInputValue)) {
      setResult("Please enter a valid number.");
      return;
    }

    // Define conversion factors
    const conversionFactors = {
      seconds: {
        minutes: (seconds) => seconds / 60,
        hours: (seconds) => seconds / 3600,
        seconds: (seconds) => seconds,

        // Add other units with their conversion formulas
      },
      minutes: {
        seconds: (minutes) => minutes * 60,
        hours: (minutes) => minutes / 60,
        minutes: (minutes) => minutes,
      },
      hours: {
        seconds: (hours) => hours * 3600,
        minutes: (hours) => hours * 60,
        hours: (hours) => hours,
      },
    };

    // Perform unit conversion by calling the appropriate function
    const convertedValue = conversionFactors[fromUnit][toUnit](numericInputValue);

    setResult(`${inputValue} ${fromUnit} = ${convertedValue.toFixed(2)} ${toUnit}`);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFromUnitChange = (e) => {
    setFromUnit(e.target.value);
  };

  const handleToUnitChange = (e) => {
    setToUnit(e.target.value);
  };

  // Function to switch units
  const switchUnits = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: "center" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <ScheduleIcon sx={{ width: "1.5rem", height: "1.5rem", marginRight: "0.8rem" }} /> Time Converter
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField type="number" label="Value to Convert" value={inputValue} onChange={handleInputChange} variant="outlined" size="small" fullWidth />
        </Grid>
        <Grid item xs={5}>
          <TextField select label="From" value={fromUnit} onChange={handleFromUnitChange} variant="outlined" size="small" fullWidth>
            <MenuItem value="seconds">Seconds</MenuItem>
            <MenuItem value="minutes">Minutes</MenuItem>
            <MenuItem value="hours">Hours</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <IconButton onClick={switchUnits}>
            <SwapHorizIcon />
          </IconButton>
        </Grid>
        <Grid item xs={5}>
          <TextField select label="To" value={toUnit} onChange={handleToUnitChange} variant="outlined" size="small" fullWidth>
            <MenuItem value="seconds">Seconds</MenuItem>
            <MenuItem value="minutes">Minutes</MenuItem>
            <MenuItem value="hours">Hours</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleConversion} fullWidth>
            Convert
          </Button>
        </Grid>
        <Grid item xs={12}>
          {result && (
            <Typography variant="h5" sx={{ mt: 4 }}>
              {result}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default TimeTool;
