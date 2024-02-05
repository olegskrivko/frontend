import React from "react";

// React MUI components
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import Paper from "@mui/material/Paper";

const IngredientTable = ({ ingredients }) => {
  const calculateTotalNutrition = (data) => {
    return data.reduce(
      (total, category) => {
        category.items.forEach((item) => {
          const allowedUnit = item.ingredient.allowedUnits.find((unit) => unit.unit.name === item.unit);

          if (allowedUnit) {
            const adjustedQuantity = item.quantity * allowedUnit.conversionFactor;
            total.calories += (item.ingredient.calories / 100) * adjustedQuantity;
            total.fat += (item.ingredient.fat / 100) * adjustedQuantity;
            total.carbohydrates += (item.ingredient.carbohydrates / 100) * adjustedQuantity;
            total.fiber += (item.ingredient.fiber / 100) * adjustedQuantity;
            total.sugar += (item.ingredient.sugar / 100) * adjustedQuantity;
            total.protein += (item.ingredient.protein / 100) * adjustedQuantity;
          } else {
            console.error(`Conversion factor not found for unit ${item.unit} in ingredient ${item.ingredient.name}`);
          }
        });

        return total;
      },
      { calories: 0, fat: 0, carbohydrates: 0, fiber: 0, sugar: 0, protein: 0 }
    );
  };
  // Calculate the total nutrition for all ingredients
  const totalNutrition = calculateTotalNutrition(ingredients);
  //const totalNutrition = calculateTotalNutrition(ingredients.reduce((allItems, category) => allItems.concat(category.items), []));

  return (
    <TableContainer component={Paper}>
      <Table aria-label="ingredient nutrition table">
        <TableHead>
          <TableRow>
            <TableCell>Nutrition Property</TableCell>
            <TableCell>Total Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Total Calories</TableCell>
            <TableCell>{totalNutrition.calories.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Fat</TableCell>
            <TableCell>{totalNutrition.fat.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Carbohydrates</TableCell>
            <TableCell>{totalNutrition.carbohydrates.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Fiber</TableCell>
            <TableCell>{totalNutrition.fiber.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Sugar</TableCell>
            <TableCell>{totalNutrition.sugar.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Protein</TableCell>
            <TableCell>{totalNutrition.protein.toFixed(2)}</TableCell>
          </TableRow>
          {/* Add other nutrition properties as needed */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IngredientTable;
