// export default RecipeMeals;
// import React from "react";
// import { Link } from "react-router-dom";

// // React MUI components
// import Box from "@mui/material/Box";
// import Chip from "@mui/material/Chip";

// const RecipeMeals = ({ meals }) => {
//   return (
//     <Box>
//       {meals.map((meal, index) => (
//         <Link to={`/meals/${meal._id}`} key={meal._id} style={{ textDecoration: "none" }}>
//           <Chip size="small" label={meal.name} style={{ marginRight: 5, marginBottom: 5, backgroundColor: "#424242", color: "#ffffff", textTransform: "capitalize" }} />
//         </Link>
//       ))}
//     </Box>
//   );
// };

// export default RecipeMeals;
import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

const RecipeMeals = ({ meals }) => {
  const navigate = useNavigate();

  const handleMealClick = (mealName) => {
    navigate(`/recipes?meals=${mealName}`);
  };

  return (
    <>
      {meals.map((meal) => (
        <Chip key={meal.name} size="small" label={meal.name} onClick={() => handleMealClick(meal.name)} style={{ marginRight: 5, marginBottom: 5, backgroundColor: "#424242", color: "#ffffff", textTransform: "capitalize", cursor: "pointer" }} />
      ))}
    </>
  );
};

export default RecipeMeals;
