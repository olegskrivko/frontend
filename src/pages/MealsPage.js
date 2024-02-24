// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { BASE_URL } from "../middleware/config";
// import { Typography, List, ListItem, CircularProgress } from "@mui/material";

// const MealsPage = () => {
//   const { id } = useParams();
//   const [meals, setMeals] = useState([]);
//   const [currentMeal, setCurrentMeal] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMeals = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/meals/${id}/recipes`);
//         const data = await response.json();

//         // Check if data is an array before setting the state
//         if (Array.isArray(data)) {
//           setMeals(data);
//         } else {
//           console.error("Error: Expected an array of meals, but received:", data);
//         }
//       } catch (error) {
//         console.error("Error fetching meals:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMeals();
//   }, [id]); // Include id in the dependency array

//   useEffect(() => {
//     const fetchCurrentMeal = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/meals/${id}`);
//         const data = await response.json();

//         setCurrentMeal(data);
//       } catch (error) {
//         console.error("Error fetching meals:", error);
//       }
//     };

//     fetchCurrentMeal();
//   }, [id]); // Include id in the dependency array

//   return (
//     <div>
//       {/* Display recipes */}
//       <Typography variant="h4">Recipes for {currentMeal && currentMeal.name}</Typography>
//       {loading ? (
//         <CircularProgress />
//       ) : meals.length > 0 ? (
//         <List>
//           {meals.map((meal) => (
//             <ListItem key={meal._id}>
//               <Link to={`/recipes/${meal._id}`}>
//                 {meal.title} - {meal.description}
//                 {/* Uncomment this section if meals have cover images */}
//                 {/* <img alt="aaa" src={meal.coverImage} /> */}
//               </Link>
//             </ListItem>
//           ))}
//         </List>
//       ) : (
//         <Typography variant="body1">No recipes available for this meal.</Typography>
//       )}
//     </div>
//   );
// };

// export default MealsPage;
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BASE_URL } from "../middleware/config";
import { Typography, Grid, Card, CardContent, CardActionArea, CardMedia, CircularProgress } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Import AccessTime icon
import RecipeCard from "../components/RecipeCard";

const MealsPage = () => {
  const { id } = useParams();
  const [meals, setMeals] = useState([]);
  const [currentMeal, setCurrentMeal] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(`${BASE_URL}/meals/${id}/recipes`);
        const data = await response.json();

        // Check if data is an array before setting the state
        if (Array.isArray(data)) {
          setMeals(data);
        } else {
          console.error("Error: Expected an array of meals, but received:", data);
        }
      } catch (error) {
        console.error("Error fetching meals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [id]); // Include id in the dependency array

  useEffect(() => {
    const fetchCurrentMeal = async () => {
      try {
        const response = await fetch(`${BASE_URL}/meals/${id}`);
        const data = await response.json();

        setCurrentMeal(data);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchCurrentMeal();
  }, [id]); // Include id in the dependency array

  return (
    <div>
      {/* Display recipes */}
      <Typography variant="h4">Recipes for {currentMeal && currentMeal.name}</Typography>
      {loading ? (
        <CircularProgress />
      ) : meals.length > 0 ? (
        <Grid container spacing={2}>
          {meals.map((meal) => (
            // <Grid item key={recipe._id} xs={6} sm={6} md={4} lg={3}>
            <RecipeCard key={meal._id} recipe={meal} />
            // </Grid>

            // <Grid item xs={6} sm={6} md={4} lg={3} key={meal._id}>
            //   <Card>
            //     <CardActionArea component={Link} to={`/recipes/${meal._id}`}>
            //       {/* You can customize the card media based on your meal data */}
            //       <CardMedia
            //         component="img"
            //         alt={meal.title}
            //         height="140"
            //         image={meal.coverImage || "https://via.placeholder.com/150"} // Use a placeholder image if meal.image is not available
            //       />
            //       <CardContent sx={{ justifyContent: "space-between", alignItems: "center", display: "flex" }}>
            //         <Typography gutterBottom variant="h6" component="div">
            //           {meal.title}
            //         </Typography>
            //         {/* <Typography variant="body2" color="textSecondary" sx={{ display: "flex", alignItems: "center" }}>
            //           <AccessTimeIcon sx={{ marginRight: 1 }} />
            //           {meal.totalTime} mins
            //         </Typography> */}
            //       </CardContent>
            //     </CardActionArea>
            //   </Card>
            // </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1">No recipes available for this meal.</Typography>
      )}
    </div>
  );
};

export default MealsPage;
