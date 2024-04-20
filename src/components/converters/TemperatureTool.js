import React, { useState } from "react";
import { Container, TextField, Typography, MenuItem, Button, Grid, Paper, IconButton } from "@mui/material";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

const TemperatureTool = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("celsius");
  const [toUnit, setToUnit] = useState("fahrenheit");
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
    // Define conversion factors
    const conversionFactors = {
      celsius: {
        fahrenheit: (celsius) => (celsius * 9) / 5 + 32,
        kelvin: (celsius) => celsius + 273.15,
        celsius: (celsius) => celsius,
      },
      fahrenheit: {
        celsius: (fahrenheit) => ((fahrenheit - 32) * 5) / 9,
        kelvin: (fahrenheit) => ((fahrenheit + 459.67) * 5) / 9,
        fahrenheit: (fahrenheit) => fahrenheit,
      },
      kelvin: {
        celsius: (kelvin) => kelvin - 273.15,
        fahrenheit: (kelvin) => (kelvin * 9) / 5 - 459.67,
        kelvin: (kelvin) => kelvin,
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
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h5" gutterBottom sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <DeviceThermostatIcon sx={{ width: "1.5rem", height: "1.5rem", marginRight: "0.8rem" }} /> Temperature Converter
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TextField type="number" label="Value to Convert" value={inputValue} onChange={handleInputChange} variant="outlined" size="small" sx={{ mr: 2, width: "100%" }} />
        </Grid>
        <Grid item xs={5} sm={5} md={5} lg={5}>
          <TextField select label="From" value={fromUnit} onChange={handleFromUnitChange} variant="outlined" size="small" sx={{ width: "100%" }}>
            <MenuItem value="celsius">Celsius</MenuItem>
            <MenuItem value="fahrenheit">Fahrenheit</MenuItem>
            <MenuItem value="kelvin">Kelvin</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <IconButton sx={{ mr: 2, ml: 2 }} onClick={switchUnits}>
            <SwapHorizIcon />
          </IconButton>
        </Grid>
        <Grid item xs={5} sm={5} md={5} lg={5}>
          <TextField select label="To" value={toUnit} onChange={handleToUnitChange} variant="outlined" size="small" sx={{ width: "100%" }}>
            <MenuItem value="celsius">Celsius</MenuItem>
            <MenuItem value="fahrenheit">Fahrenheit</MenuItem>
            <MenuItem value="kelvin">Kelvin</MenuItem>
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

export default TemperatureTool;
