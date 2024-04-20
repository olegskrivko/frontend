import React, { useState } from "react";
import { Container, TextField, Typography, MenuItem, Button, Grid, IconButton } from "@mui/material";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

const VolumeTool = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("milliliter");
  const [toUnit, setToUnit] = useState("liter");
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
      milliliter: {
        liter: (milliliter) => milliliter / 1000,
        milliliter: (milliliter) => milliliter,

        // Add other units with their conversion formulas
      },
      liter: {
        milliliter: (liter) => liter * 1000,
        liter: (liter) => liter,
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
            <LocalDrinkIcon sx={{ width: "1.5rem", height: "1.5rem", marginRight: "0.8rem" }} /> Volume Converter
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField type="number" label="Value to Convert" value={inputValue} onChange={handleInputChange} variant="outlined" size="small" fullWidth />
        </Grid>
        <Grid item xs={5}>
          <TextField select label="From" value={fromUnit} onChange={handleFromUnitChange} variant="outlined" size="small" fullWidth>
            <MenuItem value="milliliter">Milliliter</MenuItem>
            <MenuItem value="liter">Liter</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <IconButton onClick={switchUnits}>
            <SwapHorizIcon />
          </IconButton>
        </Grid>
        <Grid item xs={5}>
          <TextField select label="To" value={toUnit} onChange={handleToUnitChange} variant="outlined" size="small" fullWidth>
            <MenuItem value="milliliter">Milliliter</MenuItem>
            <MenuItem value="liter">Liter</MenuItem>
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

export default VolumeTool;
