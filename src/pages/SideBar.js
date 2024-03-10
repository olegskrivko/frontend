// // export default SideBar;
// import React, { useState } from "react";
// import { Drawer, Chip, Box, List, Input, OutlinedInput, Grid, FormControl, InputLabel, TextField, ListItem, ListItemText, Select, MenuItem, Button, Slider, Checkbox, FormControlLabel, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const SideBar = () => {
//   const [author, setAuthor] = useState("");
//   const [recipeTitle, setRecipeTitle] = useState("");
//   const [difficulty, setDifficulty] = useState(1);
//   const [minimumScore, setMinimumScore] = useState(0);
//   const [cookTime, setCookTime] = useState([0, 60]); // Initial cook time range

//   const cuisines = [
//     { _id: "1", name: "Italian" },
//     { _id: "2", name: "Mexican" },
//     { _id: "3", name: "Asian" },
//   ];

//   const diets = [
//     { _id: "4", name: "Vegetarian" },
//     { _id: "5", name: "Vegan" },
//     { _id: "6", name: "Gluten-Free" },
//   ];
//   const cuisineOptions = [
//     "African",
//     "American",
//     "Argentine",
//     "Asian",
//     "Australian",
//     "Austrian",
//     "Belgian",
//     "Brazilian",
//     "British",
//     "Cajun",
//     "Caribbean",
//     "Chinese",
//     "Creole",
//     "Czech",
//     "Danish",
//     "Dutch",
//     "Eastern European",
//     "Ethiopian",
//     "Finnish",
//     "French",
//     "German",
//     "Greek",
//     "Hawaiian",
//     "Hungarian",
//     "Indian",
//     "Indonesian",
//     "Irish",
//     "Italian",
//     "Jamaican",
//     "Japanese",
//     "Jewish",
//     "Korean",
//     "Latin American",
//     "Mediterranean",
//     "Mexican",
//     "Middle Eastern",
//     "Moroccan",
//     "Nordic",
//     "Peruvian",
//     "Polish",
//     "Portuguese",
//     "Russian",
//     "Scandinavian",
//     "Scottish",
//     "Singaporean",
//     "Slovakian",
//     "Slovenian",
//     "Soul Food",
//     "Spanish",
//     "Swedish",
//     "Swiss",
//     "Thai",
//     "Tibetan",
//     "Turkish",
//     "Ukrainian",
//     "Vietnamese",
//     "Welsh",
//     "West African",
//     "Yemeni",
//   ];
//   const cookingMethodOptions = ["Grilling", "Roasting", "Baking", "Frying", "Steaming", "Boiling", "Stir-Frying", "Braising", "Poaching", "Slow Cooking", "Smoking", "Blanching", "Simmering", "Pressure Cooking", "Microwaving", "Canning", "Pickling", "Caramelizing", "Freezing", "Glazing", "Curing"];
//   const occasionOptions = ["Thanksgiving", "Christmas", "New Years Eve", "Independence Day", "Birthday", "Easter", "Valentines Day", "Halloween", "Mothers Day", "Fathers Day", "Graduation", "Anniversary", "Labor Day", "Memorial Day", "Hanukkah", "Diwali", "Cinco de Mayo", "Thanksgiving Day - Canada", "Independence Day - Latvia", "Midsummer Day - Jani", "Ligo Day", "Restoration of Independence Day", "National Flag Day", "Latvian Song and Dance Festival", "Lacplesis Day"];

//   const tasteOptions = ["Spicy", "Sweet", "Sour", "Bitter", "Salty", "Umami"];
//   const dietOptions = ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Nut-Free", "Low Sugar", "Low Fat", "Low Carb", "Paleo", "Mediterranean", "Pescatarian", "Flexitarian", "Ketogenic"];
//   // const tasteOptions = ["Spicy", "Sweet", "Sour", "Bitter", "Salty", "Umami", "Astringent", "Savory", "Cooling", "Peppery", "Citrusy", "Herbaceous", "Earthy", "Smoky", "Buttery", "Caramelized", "Nutty", "Floral", "Spiced", "Tart", "Mild", "Fruity", "Grassy", "Briny", "Zesty", "Tangy"];
//   // const dietOptions = [
//   //   "Vegetarian",
//   //   "Vegan",
//   //   "Gluten-Free",
//   //   "Dairy-Free",
//   //   "Nut-Free",
//   //   "Low Sugar",
//   //   "Low Fat",
//   //   "Low Carb",
//   //   "Paleo",
//   //   "Mediterranean",
//   //   "Pescatarian",
//   //   "Flexitarian",
//   //   "Ketogenic (Keto)",
//   //   "Whole30",
//   //   "Raw Food",
//   //   "Macrobiotic",
//   //   "FODMAP",
//   //   "DASH (Dietary Approaches to Stop Hypertension)",
//   //   "Ornish Diet",
//   //   "Atkins",
//   //   "South Beach",
//   //   "Zone Diet",
//   //   "Specific Carbohydrate Diet (SCD)",
//   //   "Anti-Inflammatory Diet",
//   //   "Low FODMAP",
//   //   "Alkaline Diet",
//   //   "Blood Type Diet",
//   //   "Engine 2 Diet",
//   //   "GAPS (Gut and Psychology Syndrome)",
//   //   "Mindful Eating",
//   // ];

//   const getDifficultyLabel = (difficulty) => {
//     switch (difficulty) {
//       case 1:
//         return "Easy";
//       case 2:
//         return "Medium";
//       case 3:
//         return "Hard";
//       default:
//         return "";
//     }
//   };
//   const handleCookTimeChange = (event, newValue) => {
//     setCookTime(newValue);
//   };
//   const handleDifficultyChange = (event, newValue) => {
//     // Update the difficulty state when the slider value changes
//     setDifficulty(newValue);
//   };

//   const handleMinimumScoreChange = (event, newValue) => {
//     // Update the difficulty state when the slider value changes
//     setMinimumScore(newValue);
//   };

//   const applyFilters = (filters) => {
//     // Replace this with your logic to handle applied filters
//     console.log("Applied Filters:", filters);
//   };

//   const handleApplyFilters = () => {
//     const selectedDifficulty = 1;
//     const selectedCuisine = "1";
//     const selectedDiet = "4";
//     const servingsRange = [2, 6];
//     const isSustainable = true;
//     const isHealthy = true;
//     const hasReviews = false;

//     applyFilters({
//       difficulty: selectedDifficulty,
//       cuisine: selectedCuisine,
//       diet: selectedDiet,
//       servingsRange,
//       isSustainable,
//       isHealthy,
//       hasReviews,
//       author,
//       recipeTitle,
//     });
//   };

//   return (
//     <Box>
//       <List>
//         <ListItem sx={{ padding: "0 !important" }}>
//           {/* <ListItemText primary="Filter Recipes By:" /> */}
//           <Typography variant="h6">Filter Recipes By:</Typography>
//         </ListItem>
//         {/* Search by Recipe Title */}
//         <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
//           <TextField size="small" label="Recipe Title" variant="outlined" fullWidth />
//         </ListItem>

//         <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
//           <TextField size="small" label="Author" variant="outlined" fullWidth value={author} onChange={(e) => setAuthor(e.target.value)} />
//         </ListItem>

//         {/* Cook Time Options */}
//         <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
//           {/* <Typography gutterBottom>Filter by Cook Time</Typography> */}
//           <Box>
//             <InputLabel>Tootal Time</InputLabel>
//             <Chip sx={{ marginRight: "5px" }} size="small" label="All" onClick={() => setCookTime([0, 120])} color={cookTime[0] === 0 && cookTime[1] === 120 ? "primary" : "default"} />
//             <Chip sx={{ marginRight: "5px" }} size="small" label="15 min" onClick={() => setCookTime([0, 15])} color={cookTime[0] === 0 && cookTime[1] === 15 ? "primary" : "default"} />
//             <Chip sx={{ marginRight: "5px" }} size="small" label="30 min" onClick={() => setCookTime([16, 30])} color={cookTime[0] === 16 && cookTime[1] === 30 ? "primary" : "default"} />
//             <Chip sx={{ marginRight: "5px" }} size="small" label="45 min" onClick={() => setCookTime([31, 45])} color={cookTime[0] === 31 && cookTime[1] === 45 ? "primary" : "default"} />
//             <Chip sx={{ marginRight: "5px" }} size="small" label="1h+" onClick={() => setCookTime([46, 120])} color={cookTime[0] === 46 && cookTime[1] === 120 ? "primary" : "default"} />
//           </Box>
//         </ListItem>

//         {/* Filter by Minimal Score */}
//         <Box sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
//           <InputLabel>Minimum Score {minimumScore}</InputLabel>
//           <Slider
//             value={minimumScore}
//             onChange={handleMinimumScoreChange}
//             // valueLabelDisplay="auto"
//             step={1}
//             // marks={[{ value: 0, label: 0 }, { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5, label: 5 }]}
//             min={0}
//             max={5}
//           />
//         </Box>

//         {/* Filter by Difficulty */}
//         <Box sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
//           <InputLabel>Difficulty {getDifficultyLabel(difficulty)}</InputLabel>
//           <Slider
//             value={difficulty}
//             onChange={handleDifficultyChange}
//             // valueLabelDisplay="auto"
//             step={1}
//             // marks={[
//             //   { value: 1, label: "Easy" },
//             //   { value: 2, label: "Medium" },
//             //   { value: 3, label: "Hard" },
//             // ]}
//             min={1}
//             max={3}
//           />
//         </Box>

//         <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
//           <TextField size="small" label="Exclude up to 5 ingredients" variant="outlined" fullWidth />
//         </ListItem>

//         {/* Filter by Ingredients */}
//         <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
//           <TextField size="small" label="Include up to 5 ingredients" variant="outlined" fullWidth />
//         </ListItem>

//         <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
//           <Accordion sx={{ width: "100%" }}>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="taste-filter-content" id="taste-filter-header">
//               <Typography>Taste</Typography>
//             </AccordionSummary>
//             <AccordionDetails sx={{ maxHeight: "200px", overflowY: "auto" }}>
//               <List>
//                 {tasteOptions.map((taste) => (
//                   <ListItem key={taste} sx={{ paddingTop: "0", paddingBottom: "0", paddingLeft: "0" }}>
//                     <FormControlLabel control={<Checkbox size="small" />} label={taste} />
//                   </ListItem>
//                 ))}
//               </List>
//             </AccordionDetails>
//           </Accordion>
//         </ListItem>

//         {/* Diet Filter (Accordion) */}
//         <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
//           <Accordion sx={{ width: "100%" }}>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="diet-filter-content" id="diet-filter-header">
//               <Typography>Diet</Typography>
//             </AccordionSummary>
//             <AccordionDetails sx={{ maxHeight: "200px", overflowY: "auto" }}>
//               <List>
//                 {dietOptions.map((diet) => (
//                   <ListItem key={diet} sx={{ paddingTop: "0", paddingBottom: "0", paddingLeft: "0" }}>
//                     <FormControlLabel control={<Checkbox size="small" />} label={diet} />
//                   </ListItem>
//                 ))}
//               </List>
//             </AccordionDetails>
//           </Accordion>
//         </ListItem>

//         {/* Cuisine Filter (Accordion) */}
//         <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
//           <Accordion sx={{ width: "100%" }}>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="cuisine-filter-content" id="cuisine-filter-header">
//               <Typography>Cuisine</Typography>
//             </AccordionSummary>
//             <AccordionDetails sx={{ maxHeight: "200px", overflowY: "auto" }}>
//               <List>
//                 {cuisineOptions.map((cuisine) => (
//                   <ListItem key={cuisine} sx={{ paddingTop: "0", paddingBottom: "0", paddingLeft: "0" }}>
//                     <FormControlLabel control={<Checkbox size="small" />} label={cuisine} />
//                   </ListItem>
//                 ))}
//               </List>
//             </AccordionDetails>
//           </Accordion>
//         </ListItem>

//         {/* CookingMethods Filter (Accordion) */}
//         <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
//           <Accordion sx={{ width: "100%" }}>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="cookingMethod-filter-content" id="cookingMethod-filter-header">
//               <Typography>Cooking Method</Typography>
//             </AccordionSummary>
//             <AccordionDetails sx={{ maxHeight: "200px", overflowY: "auto" }}>
//               <List>
//                 {cookingMethodOptions.map((cookingMethod) => (
//                   <ListItem key={cookingMethod} sx={{ paddingTop: "0", paddingBottom: "0", paddingLeft: "0" }}>
//                     <FormControlLabel control={<Checkbox size="small" />} label={cookingMethod} />
//                   </ListItem>
//                 ))}
//               </List>
//             </AccordionDetails>
//           </Accordion>
//         </ListItem>

//         {/* Occasions Filter (Accordion) */}
//         <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
//           <Accordion sx={{ width: "100%" }}>
//             <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="occasion-filter-content" id="occasion-filter-header">
//               <Typography>Occasion</Typography>
//             </AccordionSummary>
//             <AccordionDetails sx={{ maxHeight: "200px", overflowY: "auto" }}>
//               <List>
//                 {occasionOptions.map((occasion) => (
//                   <ListItem key={occasion} sx={{ paddingTop: "0", paddingBottom: "0", paddingLeft: "0" }}>
//                     <FormControlLabel control={<Checkbox size="small" />} label={occasion} />
//                   </ListItem>
//                 ))}
//               </List>
//             </AccordionDetails>
//           </Accordion>
//         </ListItem>

//         {/* Has reviews Checkbox */}
//         <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
//           <FormControlLabel control={<Checkbox size="small" checked={true} disabled />} label="Has Reviews" />
//         </ListItem>

//         {/* Apply Filters Button */}
//         <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
//           <Button variant="contained" sx={{ width: "100%" }} color="primary" onClick={handleApplyFilters}>
//             Apply Filters
//           </Button>
//         </ListItem>
//         <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
//           <Button variant="outlined" sx={{ width: "100%" }} color="primary" onClick={handleApplyFilters}>
//             Reset Filters
//           </Button>
//         </ListItem>
//       </List>
//     </Box>
//   );
// };

// export default SideBar;
// export default SideBar;
import React, { useState, useEffect } from "react";
import { Drawer, Chip, Box, List, Input, Badge, OutlinedInput, Grid, FormControl, InputLabel, TextField, ListItem, ListItemText, Select, MenuItem, Button, Slider, Checkbox, FormControlLabel, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
// import queryString from "query-string";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../middleware/config";
//const cookingMethodOptions = ["Grilling", "Roasting", "Baking", "Frying", "Steaming", "Boiling", "Stir-Frying", "Braising", "Poaching", "Slow Cooking", "Smoking", "Blanching", "Simmering", "Pressure Cooking", "Microwaving", "Canning", "Pickling", "Caramelizing", "Freezing", "Glazing", "Curing"];

const SideBar = ({ applyFilters, resetFilters }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const initialRecipeAuthor = queryParams.get("recipeAuthor") || "";
  const initialRecipeTitle = queryParams.get("recipeTitle") || "";
  const initialCookingMethods = queryParams.getAll("cookingMethods") || [];

  const [recipeAuthor, setRecipeAuthor] = useState(initialRecipeAuthor);
  const [recipeTitle, setRecipeTitle] = useState(initialRecipeTitle);
  const [cookingMethods, setCookingMethods] = useState([]);
  const [selectedCookingMethods, setSelectedCookingMethods] = useState(initialCookingMethods);

  useEffect(() => {
    // Fetch cooking methods when the component mounts
    const fetchCookingMethods = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cooking-methods`);
        const data = await response.json();
        setCookingMethods(data); // Assuming the data structure is an array of cooking methods
        console.log("ddatadata", data);
      } catch (error) {
        console.error("Error fetching cooking methods:", error);
      }
    };

    fetchCookingMethods();
  }, [location.search]); // Empty dependency array ensures the effect runs only once when the component mounts

  useEffect(() => {
    // Update the state when the query parameters change
    setRecipeAuthor(queryParams.get("recipeAuthor") || "");
    setRecipeTitle(queryParams.get("recipeTitle") || "");
    setCookingMethods(queryParams.getAll("cookingMethods") || []);
  }, [location.search]);

  const handleApplyFilters = (e) => {
    e.preventDefault();

    // Create a new URLSearchParams instance
    const newQueryParams = new URLSearchParams();

    // Conditionally add query parameters based on the existence of values
    if (recipeAuthor) {
      newQueryParams.append("recipeAuthor", recipeAuthor);
    }

    if (recipeTitle) {
      newQueryParams.append("recipeTitle", recipeTitle);
    }

    // Check if cookingMethods is not empty before adding to query parameters
    if (selectedCookingMethods.length > 0) {
      selectedCookingMethods.forEach((method) => {
        newQueryParams.append("cookingMethods", method);
      });
    }

    // Check if selectedCookingMethods is not empty before adding to query parameters
    // const selectedCookingMethods = [];  // Replace this with your actual array of selected cooking methods

    // if (selectedCookingMethods.length > 0) {
    //   const cookingMethodsString = selectedCookingMethods.join(',');

    //   // Append to query parameters only if there are selected methods
    //   newQueryParams.append("cookingMethods", cookingMethodsString);
    // }

    // Update the URL with the new query parameters
    navigate(`${location.pathname}?${newQueryParams}`);

    // Call the applyFilters function with the current state
    applyFilters({
      recipeAuthor,
      recipeTitle,
      cookingMethods: selectedCookingMethods,
    });
  };

  const handleResetFilters = (e) => {
    e.preventDefault();
    resetFilters();
    // Reset the state for cooking methods
    setSelectedCookingMethods([]);

    // Reset the URL to remove query parameters
    // const newUrl = window.location.pathname;
    // window.history.pushState(null, "", newUrl);

    // Reset the URL to remove query parameters
    navigate(location.pathname);
  };

  const handleCookingMethodChange = (method) => {
    const updatedCookingMethods = selectedCookingMethods.includes(method) ? selectedCookingMethods.filter((m) => m !== method) : [...selectedCookingMethods, method];

    setSelectedCookingMethods(updatedCookingMethods);
  };
  // const [recipeAuthor, setRecipeAuthor] = useState("");
  // const [recipeTitle, setRecipeTitle] = useState("");

  // const handleApplyFilters = (e) => {
  //   e.preventDefault(); // Prevent the default form submission behavior
  //   applyFilters({
  //     recipeAuthor,
  //     recipeTitle,
  //   });

  //   // Constructing query parameters
  //   const queryParams = queryString.stringify({
  //     recipeAuthor: recipeAuthor || undefined,
  //     recipeTitle: recipeTitle || undefined,
  //   });

  //   // Update the URL with the new query parameters
  //   const newUrl = `${window.location.pathname}?${queryParams}`;
  //   window.history.pushState(null, "", newUrl);
  // };

  // const handleResetFilters = (e) => {
  //   e.preventDefault(); // Prevent the default form submission behavior
  //   resetFilters();

  //   // Reset the URL to remove query parameters
  //   const newUrl = window.location.pathname;
  //   window.history.pushState(null, "", newUrl);
  // };

  return (
    <Box>
      <form onSubmit={handleApplyFilters}>
        <List>
          <ListItem sx={{ padding: "0 !important" }}>
            <Typography variant="h6">Filter Recipes By:</Typography>
          </ListItem>
          {/* Search by Recipe Title */}
          <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <TextField size="small" label="Recipe Title" variant="outlined" fullWidth value={recipeTitle} onChange={(e) => setRecipeTitle(e.target.value)} />
          </ListItem>

          {/* Search by Recipe Author */}
          <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <TextField size="small" label="Recipe Author" variant="outlined" fullWidth value={recipeAuthor} onChange={(e) => setRecipeAuthor(e.target.value)} />
          </ListItem>

          {/* CookingMethods Filter (Accordion) */}
          {/* <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Accordion sx={{ width: "100%" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="cookingMethod-filter-content" id="cookingMethod-filter-header">
                <Typography>Cooking Method</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ maxHeight: "200px", overflowY: "auto", "&::-webkit-scrollbar": { width: "5px" } }}>
                <List>
                  {cookingMethods.map((cookingMethod) => (
                    <ListItem key={cookingMethod._id} sx={{ paddingTop: "0", paddingBottom: "0", paddingLeft: "0" }}>
                      <FormControlLabel control={<Checkbox size="small" checked={selectedCookingMethods.includes(cookingMethod.name)} onChange={() => handleCookingMethodChange(cookingMethod.name)} />} label={cookingMethod.name} />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </ListItem> */}
          <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Accordion sx={{ width: "100%" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="cookingMethod-filter-content" id="cookingMethod-filter-header">
                <Typography>Cooking Method</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ maxHeight: "200px", overflowY: "auto", "&::-webkit-scrollbar": { width: "5px" } }}>
                <List>
                  {cookingMethods.map((cookingMethod) => (
                    <ListItem key={cookingMethod._id} sx={{ paddingTop: "0", paddingBottom: "0", paddingLeft: "0" }}>
                      <FormControlLabel
                        control={<Checkbox size="small" checked={selectedCookingMethods.includes(cookingMethod.name)} onChange={() => handleCookingMethodChange(cookingMethod.name)} />}
                        label={
                          <Badge badgeContent={cookingMethod.count} color="primary">
                            {cookingMethod.name}
                          </Badge>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </ListItem>
          {/* {Array.isArray(cookingMethods) &&
            cookingMethods.map((cookingMethod) => (
              <ListItem key={cookingMethod._id} sx={{ paddingTop: "0", paddingBottom: "0", paddingLeft: "0" }}>
                <FormControlLabel control={<Checkbox size="small" checked={selectedCookingMethods.includes(cookingMethod.name)} onChange={() => handleCookingMethodChange(cookingMethod.name)} />} label={cookingMethod.name} />
              </ListItem>
            ))} */}

          {/* Apply Filters Button */}
          <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Button type="submit" variant="contained" sx={{ width: "100%" }} color="primary">
              Apply Filters
            </Button>
          </ListItem>
          <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Button onClick={handleResetFilters} variant="outlined" sx={{ width: "100%" }} color="primary">
              Reset Filters
            </Button>
          </ListItem>
        </List>
      </form>
    </Box>
  );
};

export default SideBar;
