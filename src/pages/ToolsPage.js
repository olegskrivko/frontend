import React, { useState } from "react";
import { Container, TextField, Typography, MenuItem } from "@mui/material";

const ToolsPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("cup");
  const [toUnit, setToUnit] = useState("milliliter");
  const [result, setResult] = useState("");

  const handleConversion = () => {
    // Perform unit conversion here based on the inputValue, fromUnit, and toUnit
    // For example, convert from cups to milliliters
    // Replace the conversion logic below with your actual conversion formula
    const conversionFactor = 236.588; // 1 cup = 236.588 milliliters
    const convertedValue = (parseFloat(inputValue) * conversionFactor).toFixed(2);
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

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h2" gutterBottom>
        Unit Converter
      </Typography>
      <div>
        <TextField type="number" label="Value to Convert" value={inputValue} onChange={handleInputChange} variant="outlined" size="small" sx={{ mr: 2 }} />
        <TextField select label="From" value={fromUnit} onChange={handleFromUnitChange} variant="outlined" size="small" sx={{ mr: 2 }}>
          <MenuItem value="cup">Cup</MenuItem>
          <MenuItem value="teaspoon">Teaspoon</MenuItem>
          {/* Add other units for conversion */}
        </TextField>
        <TextField select label="To" value={toUnit} onChange={handleToUnitChange} variant="outlined" size="small" sx={{ mr: 2 }}>
          <MenuItem value="milliliter">Milliliter</MenuItem>
          <MenuItem value="liter">Liter</MenuItem>
          {/* Add other units for conversion */}
        </TextField>
        <button onClick={handleConversion}>Convert</button>
      </div>
      {result && (
        <Typography variant="h5" sx={{ mt: 4 }}>
          {result}
        </Typography>
      )}

      <Typography variant="h5">Food Calculators</Typography>
      <p>https://www.omnicalculator.com/food</p>
      <Typography>
        Food - naturally, the most essential (as well as controversial) part of our life. In this section, you can find calculators for food lovers, party organizers or calorie counting addicts, what perfectly reflects the complexity of feelings we have for the subject. Does the last bite of your favorite pizza make you think you’ve ordered it a tad too small? Check our pizza party or pizza comparison calculator never to make this mistake again. Are you dreaming about eating a real French crepe? Take a look at the
        pancake recipe calculator. And if you’re a coffee freak, stop by the coffee kick calculator to be sure you’ve made the most of your morning cup. If you’re celebrating Saint Patrick’s Day, identify the moment you should better stop. And if you plan the Thanksgiving Dinner, estimate the amount of food you need for a start and the level of activity you require at the end to burn all those calories.
      </Typography>
    </Container>
  );
};

export default ToolsPage;
