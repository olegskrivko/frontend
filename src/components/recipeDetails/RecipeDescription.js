// import React, { useState } from "react";

// // React MUI components
// import Typography from "@mui/material/Typography";

// const RecipeDescription = ({ recipe }) => {
//   const [expanded, setExpanded] = useState(false);
//   const { description } = recipe;

//   const truncatedDescription = expanded ? description : `${description.slice(0, 150)}...`;
//   const linkText = expanded ? "Read Less" : "Read More";

//   const handleToggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div variant="body2" style={{ textAlign: "justify" }}>
//       {truncatedDescription}
//       {description.length > 150 && (
//         <span>
//           <div style={{ cursor: "pointer", display: "inline-block" }} onClick={handleToggleExpand}>
//             {linkText}
//           </div>
//         </span>
//       )}
//     </div>

//   );
// };

// export default RecipeDescription;
import React, { useState } from "react";
import Typography from "@mui/material/Typography";

const RecipeDescription = ({ recipe }) => {
  const [expanded, setExpanded] = useState(false);
  const { description } = recipe;

  const shouldTruncate = description.length > 150;
  const truncatedDescription = expanded ? description : shouldTruncate ? `${description.slice(0, 150)}...` : description;
  const linkText = expanded ? "Read Less" : "Read More";

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Typography variant="body2" style={{ textAlign: "justify" }}>
      {truncatedDescription}
      {shouldTruncate && (
        <span style={{ cursor: "pointer", display: "inline-block", marginLeft: "4px", color: "#1976D2" }} onClick={handleToggleExpand}>
          {linkText}
        </span>
      )}
    </Typography>
  );
};

export default RecipeDescription;
