// import React from "react";

// // React MUI components
// import Box from "@mui/material/Box";
// import Chip from "@mui/material/Chip";

// const RecipeMeals = ({ meals }) => {
//   return (
//     <Box>
//       {meals.map((meal, index) => (
//         <Chip key={meal._id} size="small" label={meal.name} style={{ marginRight: 5, marginBottom: 5, backgroundColor: "#424242", color: "#ffffff", textTransform: "Capitalize" }} />
//       ))}
//     </Box>
//   );
// };

// export default RecipeMeals;
import React from "react";
import { Link } from "react-router-dom";

// React MUI components
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

const RecipeMeals = ({ meals }) => {
  return (
    <Box>
      {meals.map((meal, index) => (
        <Link to={`/meals/${meal._id}`} key={meal._id} style={{ textDecoration: "none" }}>
          <Chip size="small" label={meal.name} style={{ marginRight: 5, marginBottom: 5, backgroundColor: "#424242", color: "#ffffff", textTransform: "capitalize" }} />
        </Link>
      ))}
    </Box>
  );
};

export default RecipeMeals;
