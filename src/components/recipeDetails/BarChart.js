import React from "react";
import { Chart } from "react-google-charts";

const BarChart = ({ aggregateRatings }) => {
  const data = [
    ["Category", "Average Rating"],
    ["Taste", aggregateRatings.averageTaste || 0],
    ["Instructions", aggregateRatings.averageAccuracyOfInstructions || 0],
    // ["Originality", aggregateRatings.averageOriginality || 0],
    ["Visual", aggregateRatings.averageVisualAppeal || 0],
    ["Ingredients", aggregateRatings.averageAvailabilityOfIngredients || 0],
    ["Preparation", aggregateRatings.averageDifficulty || 0],
  ];

  return (
    <Chart
      width={"100%"}
      height={"400px"}
      // chartType="BarChart"
      chartType="ColumnChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        // title: "Aggregate Ratings",
        chartArea: { width: "90%" },
        hAxis: {
          // title: "Average Rating",
          minValue: 0,
          maxValue: 5,
          ticks: [], // Remove horizontal axis ticks
        },
        vAxis: {
          // title: "Category",
          ticks: [],
          gridlines: {
            count: 5, // Show major ticks only
          },
        },
        colors: ["#ff6600"],
        legend: "none",
      }}
    />
  );
};

export default BarChart;
