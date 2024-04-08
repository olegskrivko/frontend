// import React from "react";

// // React MUI components
// import { Link } from "react-router-dom";
// import Box from "@mui/material/Box";
// import Chip from "@mui/material/Chip";

// const RecipeCuisines = ({ cuisines }) => {
//   return (
//     <Box>
//       {cuisines.map((cuisine, index) => (
//         <Link to={`/recipes/${cuisine._id}`} key={cuisine._id} style={{ textDecoration: "none" }}>
//           <Chip key={cuisine._id} size="small" label={cuisine.name} style={{ marginRight: 5, marginBottom: 5, backgroundColor: "#424242", color: "#ffffff", textTransform: "Capitalize" }} />
//         </Link>
//       ))}
//     </Box>
//   );
// };

// export default RecipeCuisines;

// RecipeCuisines.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

const RecipeCuisines = ({ cuisines }) => {
  const navigate = useNavigate();

  const handleCuisineClick = (cuisineId) => {
    navigate(`/recipes?cuisines=${cuisineId}`);
  };

  return (
    <>
      {cuisines.map((cuisine) => (
        <Chip key={cuisine.name} size="small" label={cuisine.name} onClick={() => handleCuisineClick(cuisine.name)} style={{ marginRight: 5, marginBottom: 5, backgroundColor: "#424242", color: "#ffffff", textTransform: "capitalize", cursor: "pointer" }} />
      ))}
    </>
  );
};

export default RecipeCuisines;
