import React from "react";

// React MUI components
import { Table, TableContainer, TableHead, TableBody, TableRow } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

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

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      // backgroundColor: theme.palette.common.black,
      backgroundColor: "#556574",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,

      // backgroundColor: "#c0b4a8",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table aria-label="ingredient nutrition table">
        <caption> The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2000 calories a day is used for general nutrition advice.</caption>
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Typography variant="body1" fontWeight="bold">
                Energy or Nutrient
              </Typography>
            </StyledTableCell>
            <StyledTableCell>
              <Typography variant="body1" fontWeight="bold">
                Total Amount
              </Typography>
            </StyledTableCell>
            <Divider />
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <TableCell>
              <Typography variant="body2" fontWeight="bold">
                Calories
              </Typography>
            </TableCell>
            <TableCell>{totalNutrition.calories.toFixed()} kcal</TableCell>
          </StyledTableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2" fontWeight="bold">
                Total Fat
              </Typography>
            </TableCell>
            <TableCell>{totalNutrition.fat.toFixed()} g</TableCell>
          </TableRow>
          <StyledTableRow>
            <TableCell style={{ paddingLeft: "40px" }}>
              <Typography variant="subtitle2">Of which saturates</Typography>
            </TableCell>
            <TableCell>{totalNutrition.fat.toFixed()} g</TableCell>
          </StyledTableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2" fontWeight="bold">
                Total Carbohydrate
              </Typography>
            </TableCell>
            <TableCell>{totalNutrition.carbohydrates.toFixed()} g</TableCell>
          </TableRow>
          <StyledTableRow>
            <TableCell style={{ paddingLeft: "40px" }}>
              <Typography variant="subtitle2">Of which sugars</Typography>
            </TableCell>
            <TableCell>{totalNutrition.sugar.toFixed()} g</TableCell>
          </StyledTableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2" fontWeight="700">
                Fiber
              </Typography>
            </TableCell>
            <TableCell>{totalNutrition.fiber.toFixed()} g</TableCell>
          </TableRow>
          <StyledTableRow>
            <TableCell>
              <Typography variant="body2" fontWeight="bold">
                Protein
              </Typography>
            </TableCell>
            <TableCell>{totalNutrition.protein.toFixed()} g</TableCell>
          </StyledTableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2" fontWeight="bold">
                Salt
              </Typography>
            </TableCell>
            <TableCell>{totalNutrition.protein.toFixed()} g</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IngredientTable;
// https://europa.eu/youreurope/business/product-requirements/food-labelling/nutrition-declaration/index_en.htm#inline-nav-3
