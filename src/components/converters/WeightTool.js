import React, { useState } from "react";
import { Container, TextField, Typography, MenuItem, Button, Grid, Paper, IconButton } from "@mui/material";
import ScaleIcon from "@mui/icons-material/Scale";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

const WeightTool = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("gram");
  const [toUnit, setToUnit] = useState("kilogram");
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
      gram: {
        kilogram: 0.001,
        pound: 0.00220462,
        ounce: 0.035274,
        gram: 1,
      },
      kilogram: {
        gram: 1000,
        pound: 2.20462,
        ounce: 35.274,
        kilogram: 1,
      },
      pound: {
        gram: 453.592,
        kilogram: 0.453592,
        ounce: 16,
        pound: 1,
      },
      ounce: {
        gram: 28.3495,
        kilogram: 0.0283495,
        pound: 0.0625,
        ounce: 1,
      },
      // Add other units with their conversion factors
    };

    // Perform unit conversion
    const convertedValue = (parseFloat(inputValue) * conversionFactors[fromUnit][toUnit]).toFixed(2);
    setResult(`${inputValue} ${fromUnit} = ${convertedValue} ${toUnit}`);
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
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h5" gutterBottom sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <ScaleIcon sx={{ width: "1.5rem", height: "1.5rem", marginRight: "0.8rem" }} /> Weight Converter
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TextField type="number" label="Value to Convert" value={inputValue} onChange={handleInputChange} variant="outlined" size="small" sx={{ mr: 2, width: "100%" }} />
        </Grid>
        <Grid item xs={5} sm={5} md={5} lg={5}>
          <TextField select label="From" value={fromUnit} onChange={handleFromUnitChange} variant="outlined" size="small" sx={{ width: "100%" }}>
            <MenuItem value="gram">Gram</MenuItem>
            <MenuItem value="kilogram">Kilogram</MenuItem>
            <MenuItem value="pound">Pound</MenuItem>
            <MenuItem value="ounce">Ounce</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <IconButton sx={{ mr: 2, ml: 2 }} onClick={switchUnits}>
            <SwapHorizIcon />
          </IconButton>
        </Grid>
        <Grid item xs={5} sm={5} md={5} lg={5}>
          <TextField select label="To" value={toUnit} onChange={handleToUnitChange} variant="outlined" size="small" sx={{ width: "100%" }}>
            <MenuItem value="gram">Gram</MenuItem>
            <MenuItem value="kilogram">Kilogram</MenuItem>
            <MenuItem value="pound">Pound</MenuItem>
            <MenuItem value="ounce">Ounce</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Button variant="contained" sx={{ width: "100%" }} onClick={handleConversion}>
            Convert
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
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

export default WeightTool;
