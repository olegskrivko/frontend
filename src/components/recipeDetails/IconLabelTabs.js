import React from "react";

// React MUI components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chart from "react-google-charts";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

// Icons
import RestaurantIcon from "@mui/icons-material/Restaurant";
import BlenderIcon from "@mui/icons-material/Blender";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";

import IngredientTable from "./IngredientTable";

const TotalNutritionDonutChart = ({ ingredients, servings, perServing = true }) => {
  const calculateTotalNutrition = (data, servings) => {
    const factor = perServing ? 1 : 100 / servings;

    return data.reduce(
      (total, category) => {
        category.items.forEach((item) => {
          const allowedUnit = item.ingredient.allowedUnits.find((unit) => unit.unit.name === item.unit);

          if (allowedUnit) {
            const adjustedQuantity = item.quantity * allowedUnit.conversionFactor * factor;
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
      { fat: 0, carbohydrates: 0, fiber: 0, sugar: 0, protein: 0 }
    );
  };

  const totalNutrition = calculateTotalNutrition(ingredients, servings);

  const chartData = Object.entries(totalNutrition).map(([nutrient, amount]) => [nutrient, amount]);

  // Capitalize the legend labels (can use chartData if capitalization is not needed)
  const capitalizedChartData = chartData.map(([nutrient, amount]) => [nutrient.charAt(0).toUpperCase() + nutrient.slice(1), amount]);

  const viewLabel = perServing ? "Per Serving" : "Per 100g";

  return (
    <div style={{ textAlign: "center" }}>
      <h5>{viewLabel}</h5>
      <Chart
        width={280} // Adjust the width as needed
        height={280} // Adjust the height as needed
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[["Nutrient", "Amount"], ...capitalizedChartData]}
        options={{
          chartArea: { left: 10, top: 10, bottom: 10, right: 10, width: "100%", height: "100%" }, // Adjust the values as needed
          pieHole: 0.3,
          legend: { position: "none" },
          pieSliceText: "Nutrient",
          slices: [
            { color: "#FFB6C1" }, // Light Pink - Fat
            { color: "#FF69B4" }, // Deep Pink - Saturated Fat
            { color: "#FFD700" }, // Gold - Carbohydrates
            { color: "#00CED1" }, // Dark Turquoise - Fiber
            { color: "#8A2BE2" }, // Blue Violet - Sugar
            { color: "#3CB371" }, // Medium Sea Green - Protein
            { color: "#FF8C00" }, // Dark Orange - Vitamins
            { color: "#9370DB" }, // Medium Purple - Minerals
            { color: "#20B2AA" }, // Light Sea Green - Antioxidants
            { color: "#FF4500" }, // Orange Red - Other
          ],
          tooltip: {
            text: "value",
            textStyle: {
              fontName: "Arial",
              fontSize: 12,
            },
          },
          pieStartAngle: 100,
          pieSliceTextStyle: {
            color: "black",
            fontName: "Arial",
            fontSize: 14,
          },
        }}
      />
    </div>
    // <div style={{ textAlign: "center" }}>
    //   <h3>{viewLabel}</h3>
    //   <Chart
    //     width={"100%"}
    //     height={"300px"}
    //     chartType="PieChart"
    //     loader={<div>Loading Chart</div>}
    //     data={[["Nutrient", "Amount"], ...chartData]}
    //     options={{
    //       pieHole: 0.3,
    //       legend: { position: "right" },
    //       pieSliceText: "none",
    //       slices: [
    //         { color: "#FFB6C1" }, // Light Pink - Fat
    //         { color: "#FF69B4" }, // Deep Pink - Saturated Fat
    //         { color: "#FFD700" }, // Gold - Carbohydrates
    //         // Add more colors as needed
    //       ],
    //       tooltip: {
    //         text: "value",
    //         textStyle: {
    //           fontName: "Arial",
    //           fontSize: 12,
    //         },
    //       },
    //       pieStartAngle: 100,
    //       pieSliceTextStyle: {
    //         color: "black",
    //         fontName: "Arial",
    //         fontSize: 14,
    //       },
    //     }}
    //   />
    // </div>
  );
};

function IconLabelTabs({ recipe }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Section = ({ ingredients }) => (
    <div>
      {ingredients.map((ingredientGroup) => (
        <div key={ingredientGroup.name}>
          <Typography variant="h6">{ingredientGroup.name}</Typography>
          {ingredientGroup.items.map((ingredient) => (
            <div key={ingredient._id}>
              {/* {console.log(ingredient)}  */}
              <FormControlLabel control={<Checkbox checked color="default" icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} />} label={`${ingredient.ingredient.name} (${ingredient.quantity} ${ingredient.unit})`} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  const TabPanel = ({ value, index, children }) => {
    return (
      <div role="tabpanel" hidden={value !== index}>
        {value === index && <Box sx={{ padding: "1rem 0" }}>{children}</Box>}
      </div>
    );
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div style={{ margin: "2rem 0" }}>
      <Tabs value={value} variant="fullWidth" indicatorColor="primary" centered onChange={handleChange} aria-label="icon label tabs example">
        <Tab icon={<RestaurantIcon sx={{ fontSize: "1.5rem", mb: 0 }} />} label="INGREDIENTS" sx={{ fontSize: "0.7rem", minWidth: "70px" }} />
        <Tab icon={<BlenderIcon sx={{ fontSize: "1.5rem", mb: 0 }} />} label="TOOLS" sx={{ fontSize: "0.7rem", minWidth: "70px" }} />
        <Tab icon={<ShoppingCartIcon sx={{ fontSize: "1.5rem", mb: 0 }} />} label="PRICE" sx={{ fontSize: "0.7rem", minWidth: "70px" }} />
        <Tab icon={<DonutSmallIcon sx={{ fontSize: "1.5rem", mb: 0 }} />} label="NUTRITION" sx={{ fontSize: "0.7rem", minWidth: "70px" }} />
        {/* <Tab icon={<RestaurantIcon />} label="INGREDIENTS" sx={{ fontSize: "0.7rem" }} />
          <Tab icon={<BlenderIcon />} label="TOOLS" sx={{ fontSize: "0.7rem" }} />
          <Tab icon={<ShoppingCartIcon />} label="PRICE" sx={{ fontSize: "0.7rem" }} />
          <Tab icon={<DonutSmallIcon />} label="NUTRITION" sx={{ fontSize: "0.7rem" }} /> */}
      </Tabs>

      <TabPanel value={value} index={0}>
        {/* {ingredients.map((section) => (
            <Section key={section.section} section={section} />
          ))} */}
        {recipe.ingredients && <Section ingredients={recipe.ingredients} />}
      </TabPanel>

      <TabPanel value={value} index={1}>
        {recipe && recipe.tools && (
          <div>
            {recipe.tools.map((instrument) => (
              <div
                key={instrument._id} // Ensure each key is unique
                style={{
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FormControlLabel control={<Checkbox defaultChecked color="default" icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} />} label={instrument.name} />
              </div>
            ))}
          </div>
        )}
      </TabPanel>

      <TabPanel value={value} index={2}>
        {/* {ingredients.map((section) => (
            <Section key={section.section} section={section} />
          ))} */}
      </TabPanel>

      <TabPanel value={value} index={3}>
        {/* <IngredientTable ingredients={recipe.ingredients} /> */}
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              margin: "20px 0",
            }}
          >
            <IngredientTable ingredients={recipe.ingredients} />

            {/* <NutritionFactsTable /> */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              margin: "20px 0",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <TotalNutritionDonutChart ingredients={recipe.ingredients} servings={recipe.servings} />
            </div>
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}

export default IconLabelTabs;
