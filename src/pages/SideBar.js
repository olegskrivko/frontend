// export default SideBar;
import React, { useState, useEffect } from "react";
import { Drawer, Chip, Box, List, Input, Badge, OutlinedInput, Grid, FormControl, InputLabel, TextField, ListItem, ListItemText, Select, MenuItem, Button, Slider, Checkbox, FormControlLabel, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
// import queryString from "query-string";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../middleware/config";
import Autocomplete from "@mui/material/Autocomplete";

const SideBar = ({ applyFilters, resetFilters }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const [recipeTitleSuggestions, setRecipeTitleSuggestions] = useState([]);
  const [recipeTitle, setRecipeTitle] = useState("");

  // Function to limit the number of suggestions to 5
  const filterOptions = (options, { inputValue }) => {
    return options.filter((option) => option.toLowerCase().includes(inputValue.toLowerCase())).slice(0, 7); // Limit to 5 suggestions
  };

  const handleAutocompleteChange = (event, value) => {
    setRecipeTitle(value || ""); // Update the recipeTitle state with the selected value or an empty string if value is null
  };

  const [ingredients, setIngredients] = useState([]);
  const [includedIngredients, setIncludedIngredients] = useState([]);
  const [excludedIngredients, setExcludedIngredients] = useState([]);

  // const initialRecipeAuthor = queryParams.get("recipeAuthor") || "";
  // const initialRecipeTitle = queryParams.get("recipeTitle") || "";
  // const initialCuisines = queryParams.getAll("cuisines") || [];
  const initialCuisines = (queryParams.getAll("cuisines") || []).flatMap((cuisine) => cuisine.split(","));
  const initialTastes = (queryParams.getAll("tastes") || []).flatMap((taste) => taste.split(","));
  const initialMeals = (queryParams.getAll("meals") || []).flatMap((meal) => meal.split(","));
  const initialDiets = (queryParams.getAll("diets") || []).flatMap((diet) => diet.split(","));
  const initialCookingMethods = (queryParams.getAll("cookingMethods") || []).flatMap((cookingMethod) => cookingMethod.split(","));
  const initialOccasions = queryParams.getAll("occasions") || [];
  const initialHasReviews = queryParams.get("hasReviews") || "";
  // const initialDifficulties = (queryParams.getAll("difficulties") || []).flatMap((dif) => dif.split(","));
  const initialDifficulties = (queryParams.getAll("difficulties") || []).flatMap((dif) => dif.split(",").map((d) => d.trim())).filter((d) => d !== ""); // Remove empty strings after splitting

  const initialTotalTime = queryParams.get("totalTime") || "";
  console.log("sidebar initialDifficulties", initialDifficulties);
  // Use state to manage selected values
  // const [recipeAuthor, setRecipeAuthor] = useState(initialRecipeAuthor);
  // const [recipeTitle, setRecipeTitle] = useState(initialRecipeTitle);
  const [totalTime, setTotalTime] = useState(initialTotalTime); // Initial cook time range
  const [occasions, setOccasions] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [meals, setMeals] = useState([]);
  const [diets, setDiets] = useState([]);
  const [cookingMethods, setCookingMethods] = useState([]);
  const [tastes, setTastes] = useState([]);
  const [difficulties, setDifficulties] = useState(["1", "2", "3"]);
  console.log("sidebar difficulties", difficulties);
  // Use selected state to manage UI updates
  const [selectedTastes, setSelectedTastes] = useState(initialTastes);
  const [selectedCookingMethods, setSelectedCookingMethods] = useState(initialCookingMethods);
  const [selectedMeals, setSelectedMeals] = useState(initialMeals);
  const [selectedDiets, setSelectedDiets] = useState(initialDiets);
  const [selectedDifficulties, setSelectedDifficulties] = useState(initialDifficulties);
  console.log("sidebar selectedDifficulties", selectedDifficulties);
  const [selectedOccasions, setSelectedOccasions] = useState(initialOccasions);
  const [minimumScore, setMinimumScore] = useState(0);
  const [selectedCuisines, setSelectedCuisines] = useState(initialCuisines);
  const [hasReviews, setHasReviews] = useState(initialHasReviews);
  // const [difficulty, setDifficulty] = useState(initialDifficulty);

  const handleMinimumScoreChange = (event, newValue) => {
    // Update the difficulty state when the slider value changes
    setMinimumScore(newValue);
  };

  useEffect(() => {
    // Fetch recipe title suggestions as the user types
    const fetchRecipeTitleSuggestions = async () => {
      try {
        const response = await fetch(`${BASE_URL}/recipes/recipe-titles`);
        const data = await response.json();
        setRecipeTitleSuggestions(data); // Update suggestions
      } catch (error) {
        console.error("Error fetching recipe title suggestions:", error);
      }
    };

    fetchRecipeTitleSuggestions();
  }, [recipeTitle]); // Trigger on recipeTitle change

  useEffect(() => {
    // Fetch ingredients when the component mounts
    const fetchIngredients = async () => {
      try {
        const response = await fetch(`${BASE_URL}/ingredients`);
        const data = await response.json();
        setIngredients(data); // Assuming the data structure is an array of ingredients
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    };

    fetchIngredients();
  }, []);

  // const handleIngredientChange = (event, newValue) => {
  //   setSelectedIngredients(newValue);
  // };

  // // Function to handle change in excluded ingredients
  // const handleExcludedIngredientChange = (event, newValue) => {
  //   setExcludedIngredients(newValue);
  // };
  const handleIncludedIngredientChange = (event, newValue) => {
    setIncludedIngredients(newValue || []); // Ensure newValue is not null
  };

  const handleExcludedIngredientChange = (event, newValue) => {
    setExcludedIngredients(newValue || []); // Ensure newValue is not null
  };

  // const handleApplyFilters = (e) => {
  //   e.preventDefault();
  //   // Code to handle applying filters...
  // };

  // const handleResetFilters = (e) => {
  //   e.preventDefault();
  //   resetFilters();
  //   // Code to handle resetting filters...
  // };

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
    // Fetch cuisines when the component mounts
    const fetchCuisines = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cuisines`);
        const data = await response.json();
        setCuisines(data); // Assuming the data structure is an array of cuisines
        console.log("ddatadata", data);
      } catch (error) {
        console.error("Error fetching cuisines:", error);
      }
    };

    fetchCuisines();
  }, [location.search]); // Empty dependency array ensures the effect runs only once when the component mounts

  useEffect(() => {
    // Fetch meals when the component mounts
    const fetchMeals = async () => {
      try {
        const response = await fetch(`${BASE_URL}/meals`);
        const data = await response.json();
        setMeals(data); // Assuming the data structure is an array of meals

        console.log("ddatadata", data);
      } catch (error) {
        console.error("Error fetching cuisines:", error);
      }
    };

    fetchMeals();
  }, [location.search]); // Empty dependency array ensures the effect runs only once when the component mounts

  useEffect(() => {
    // Fetch diets when the component mounts
    const fetchDiets = async () => {
      try {
        const response = await fetch(`${BASE_URL}/diets`);
        const data = await response.json();
        setDiets(data); // Assuming the data structure is an array of diets
        console.log("ddatadata", data);
      } catch (error) {
        console.error("Error fetching diets:", error);
      }
    };

    fetchDiets();
  }, [location.search]); // Empty dependency array ensures the effect runs only once when the component mounts

  useEffect(() => {
    // Fetch cuisines when the component mounts
    const fetchOccasions = async () => {
      try {
        const response = await fetch(`${BASE_URL}/occasions`);
        const data = await response.json();
        setOccasions(data); // Assuming the data structure is an array of occasions
        console.log("ddatadata", data);
      } catch (error) {
        console.error("Error fetching occasions:", error);
      }
    };

    fetchOccasions();
  }, [location.search]); // Empty dependency array ensures the effect runs only once when the component mounts

  useEffect(() => {
    // Fetch tastes when the component mounts
    const fetchTastes = async () => {
      try {
        const response = await fetch(`${BASE_URL}/tastes`);
        const data = await response.json();
        setTastes(data); // Assuming the data structure is an array of tastes
        console.log("ddatadata", data);
      } catch (error) {
        console.error("Error fetching tastes:", error);
      }
    };

    fetchTastes();
  }, [location.search]); // Empty dependency array ensures the effect runs only once when the component mounts

  useEffect(() => {
    // Update the state when the query parameters change
    // setRecipeAuthor(queryParams.get("recipeAuthor") || "");
    setTotalTime(queryParams.get("totalTime") || "");
    setRecipeTitle(queryParams.get("recipeTitle") || "");
    setHasReviews(queryParams.get("hasReviews") || "");
    setDifficulties(queryParams.getAll("difficulties") || []);
    setCuisines(queryParams.getAll("cuisines") || []);
    setOccasions(queryParams.getAll("occasions") || []);
    setCookingMethods(queryParams.getAll("cookingMethods") || []);
    setMeals(queryParams.getAll("meals") || []);
    setDiets(queryParams.getAll("diets") || []);
    setTastes(queryParams.getAll("tastes") || []);
  }, [location.search]);

  const handleApplyFilters = (e) => {
    e.preventDefault();

    // Create a new URLSearchParams instance
    const newQueryParams = new URLSearchParams();

    // Conditionally add query parameters based on the existence of values
    // if (recipeAuthor) {
    //   newQueryParams.append("recipeAuthor", recipeAuthor);
    // }

    if (recipeTitle) {
      newQueryParams.append("recipeTitle", recipeTitle);
    }

    if (hasReviews) {
      newQueryParams.append("hasReviews", hasReviews);
    }

    if (selectedDifficulties.length > 0) {
      selectedDifficulties.forEach((difficulty) => {
        newQueryParams.append("difficulties", difficulty);
      });
    }

    if (selectedCuisines.length > 0) {
      selectedCuisines.forEach((cuisine) => {
        newQueryParams.append("cuisines", cuisine);
      });
    }

    selectedCookingMethods.forEach((cookingMethod) => {
      // Split each taste by comma
      const individualCookingMethods = cookingMethod.split(",");

      // Append each individual taste after trimming any leading or trailing whitespace
      individualCookingMethods.forEach((individualCookingMethod) => {
        newQueryParams.append("cookingMethods", individualCookingMethod.trim());
      });
    });

    selectedDiets.forEach((diet) => {
      // Split each diet by comma
      const individualDiets = diet.split(",");

      // Append each individual diet after trimming any leading or trailing whitespace
      individualDiets.forEach((individualDiet) => {
        newQueryParams.append("diets", individualDiet.trim());
      });
    });

    if (selectedOccasions.length > 0) {
      selectedOccasions.forEach((occasion) => {
        newQueryParams.append("occasions", occasion);
      });
    }

    selectedMeals.forEach((meal) => {
      // Split each taste by comma
      const individualMeals = meal.split(",");

      // Append each individual taste after trimming any leading or trailing whitespace
      individualMeals.forEach((individualMeal) => {
        newQueryParams.append("meals", individualMeal.trim());
      });
    });

    selectedCuisines.forEach((cuisine) => {
      // Split each taste by comma
      const individualCuisines = cuisine.split(",");

      // Append each individual taste after trimming any leading or trailing whitespace
      individualCuisines.forEach((individualCuisine) => {
        newQueryParams.append("cuisines", individualCuisine.trim());
      });
    });
    // Add included ingredients
    // selectedIngredients.forEach((ingredient) => {
    //   newQueryParams.append("includedIngredients", ingredient);
    // });

    // // Add excluded ingredients
    // excludedIngredients.forEach((ingredient) => {
    //   newQueryParams.append("excludedIngredients", ingredient);
    // });
    // Add included ingredients
    includedIngredients.forEach((ingredient) => {
      newQueryParams.append("includedIngredients", ingredient._id); // Assuming ingredient objects have an 'id' property
    });

    // Add excluded ingredients
    excludedIngredients.forEach((ingredient) => {
      newQueryParams.append("excludedIngredients", ingredient._id); // Assuming ingredient objects have an 'id' property
    });

    // Append selected taste to query parameters
    // if (selectedTaste) {
    //   newQueryParams.append("tastes", selectedTaste);
    // }

    // Append selected tastes to query parameters

    selectedTastes.forEach((taste) => {
      // Split each taste by comma
      const individualTastes = taste.split(",");

      // Append each individual taste after trimming any leading or trailing whitespace
      individualTastes.forEach((individualTaste) => {
        newQueryParams.append("tastes", individualTaste.trim());
      });
    });
    // if (selectedTastes.length > 0) {
    //   selectedTastes.forEach((taste) => {
    //     newQueryParams.append("tastes", taste);
    //   });
    // }

    // Update the URL with the new query parameters
    navigate(`${location.pathname}?${newQueryParams}`);

    // Call the applyFilters function with the current state
    applyFilters({
      // recipeAuthor,
      recipeTitle,
      hasReviews,
      // difficulty,
      difficulties: selectedDifficulties,
      totalTime,
      cookingMethods: selectedCookingMethods,
      cuisines: selectedCuisines,
      meals: selectedMeals,
      diets: selectedDiets,
      occasions: selectedOccasions,
      tastes: selectedTastes,
      includedIngredients: includedIngredients.map((ingredient) => ingredient._id),
      excludedIngredients: excludedIngredients.map((ingredient) => ingredient._id),
      // tastes: selectedTastes,
    });
  };

  const handleResetFilters = (e) => {
    e.preventDefault();
    resetFilters();
    setSelectedTastes([]);
    setSelectedDifficulties([]);
    setSelectedCookingMethods([]);
    setSelectedCuisines([]);
    setSelectedMeals([]);
    setSelectedDiets([]);
    setSelectedOccasions([]);

    // Reset the URL to remove query parameters
    navigate(location.pathname);
  };

  // const handleCuisineChange = (cuisine) => {
  //   const updatedCuisines = selectedCuisines.includes(cuisine) ? selectedCuisines.filter((c) => c !== cuisine) : [...selectedCuisines, cuisine];

  //   setSelectedCuisines(updatedCuisines);
  // };

  const handleDietChange = (diet) => {
    const isSelected = selectedDiets.includes(diet);

    if (isSelected) {
      // If the taste is already selected, remove it from the selection
      setSelectedDiets((prevDiets) => prevDiets.filter((selectedDiet) => selectedDiet !== diet));
    } else {
      // If the taste is not selected, split it by comma and add individual tastes to the selection
      const individualDiets = diet.split(",");
      setSelectedDiets((prevDiets) => [...prevDiets, ...individualDiets.map((d) => d.trim())]);
    }
  };

  const handleOccasionChange = (occasion) => {
    const updatedOccasions = selectedOccasions.includes(occasion) ? selectedOccasions.filter((o) => o !== occasion) : [...selectedOccasions, occasion];

    setSelectedOccasions(updatedOccasions);
  };

  const handleCookingMethodChange = (cookingMethod) => {
    const isSelected = selectedCookingMethods.includes(cookingMethod);

    if (isSelected) {
      // If the cooking method is already selected, remove it from the selection
      setSelectedCookingMethods((prevCookingMethods) => prevCookingMethods.filter((selectedCookingMethod) => selectedCookingMethod !== cookingMethod));
    } else {
      // If the cooking method is not selected, split it by comma and add individual tastes to the selection
      const individualCookingMethods = cookingMethod.split(",");
      setSelectedCookingMethods((prevCookingMethods) => [...prevCookingMethods, ...individualCookingMethods.map((c) => c.trim())]);
    }
  };

  const handleMealChange = (meal) => {
    const isSelected = selectedMeals.includes(meal);

    if (isSelected) {
      // If the meal is already selected, remove it from the selection
      setSelectedMeals((prevMeals) => prevMeals.filter((selectedMeal) => selectedMeal !== meal));
    } else {
      // If the meal is not selected, split it by comma and add individual tastes to the selection
      const individualMeals = meal.split(",");
      setSelectedMeals((prevMeals) => [...prevMeals, ...individualMeals.map((m) => m.trim())]);
    }
  };

  const handleCuisineChange = (cuisine) => {
    const isSelected = selectedMeals.includes(cuisine);

    if (isSelected) {
      // If the cuisine is already selected, remove it from the selection
      setSelectedCuisines((prevCuisines) => prevCuisines.filter((selectedCuisine) => selectedCuisine !== cuisine));
    } else {
      // If the cuisine is not selected, split it by comma and add individual tastes to the selection
      const individualCuisines = cuisine.split(",");
      setSelectedCuisines((prevCuisines) => [...prevCuisines, ...individualCuisines.map((c) => c.trim())]);
    }
  };

  const handleTasteChange = (taste) => {
    const isSelected = selectedTastes.includes(taste);

    if (isSelected) {
      // If the taste is already selected, remove it from the selection
      setSelectedTastes((prevTastes) => prevTastes.filter((selectedTaste) => selectedTaste !== taste));
    } else {
      // If the taste is not selected, split it by comma and add individual tastes to the selection
      const individualTastes = taste.split(",");
      setSelectedTastes((prevTastes) => [...prevTastes, ...individualTastes.map((t) => t.trim())]);
    }
  };

  // const handleTotalTimeChange = (time) => {
  //   setTotalTime(time);
  // };

  const handleTotalTimeChange = (time) => {
    // If the clicked time is already selected, deselect it
    if (totalTime === time) {
      setTotalTime("");
    } else {
      // Otherwise, set the clicked time as the new selected total time
      setTotalTime(time);
    }
  };

  // const handleReviewsChange = () => {
  //   // Update the difficulty state when the slider value changes
  //   setHasReviews(!hasReviews);
  // };
  // const handleReviewsChange = () => {
  //   // Update the hasReviews state based on the checkbox status
  //   setHasReviews(hasReviews === "" ? !hasReviews : "");
  // };
  const handleReviewsChange = () => {
    // Update the hasReviews state based on the checkbox status
    setHasReviews(hasReviews === "" ? "true" : "");
  };
  const handleDifficultyChange = (difficulty) => {
    // Check if the difficulty is already selected
    const isSelected = selectedDifficulties.includes(difficulty);

    if (!isSelected) {
      // If the difficulty is not selected, add it to the selection
      setSelectedDifficulties((prevDifficulties) => [...prevDifficulties, difficulty]);
    } else {
      // If the difficulty is already selected, remove it from the selection
      setSelectedDifficulties((prevDifficulties) => prevDifficulties.filter((d) => d !== difficulty));
    }
  };

  // const handleDifficultyChange = (difficulty) => {
  //   const isSelected = selectedDifficulties.includes(difficulty);
  //   if (isSelected) {
  //     // If the difficulty is already selected, remove it from the selection
  //     setSelectedDifficulties((prevDifficulties) => prevDifficulties.filter((selectedDifficulty) => selectedDifficulty !== difficulty));
  //   } else {
  //     // If the difficulty is not selected, add it to the selection
  //     setSelectedDifficulties((prevDifficulties) => [...prevDifficulties, difficulty]);
  //   }
  // };

  return (
    <Box>
      <form onSubmit={handleApplyFilters}>
        <List>
          <ListItem sx={{ padding: "0 !important" }}>
            <Typography variant="h6">Filters</Typography>
          </ListItem>
          {/* Include up to 5 ingredients */}
          <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Autocomplete limitTags={3} multiple id="include-ingredients" fullWidth options={ingredients} getOptionLabel={(option) => option.name} value={includedIngredients} onChange={handleIncludedIngredientChange} renderInput={(params) => <TextField {...params} size="small" label="Include up to 3 ingredients" variant="outlined" />} />
          </ListItem>
          {/* Exclude up to 5 ingredients */}
          <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Autocomplete limitTags={3} multiple id="exclude-ingredients" fullWidth options={ingredients} getOptionLabel={(option) => option.name} value={excludedIngredients} onChange={handleExcludedIngredientChange} renderInput={(params) => <TextField {...params} size="small" label="Exclude up to 3 ingredients" variant="outlined" />} />
          </ListItem>
          {/* Search by Recipe Title */}
          {/* <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <TextField size="small" label="Recipe Title" variant="outlined" fullWidth value={recipeTitle} onChange={(e) => setRecipeTitle(e.target.value)} />
          </ListItem> */}
          {/* <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <TextField label="Search by Recipe Title" variant="outlined" fullWidth value={recipeTitle} onChange={(e) => setRecipeTitle(e.target.value)} />
            <Autocomplete options={recipeTitleSuggestions} renderInput={(params) => <TextField {...params} label="Search Recipe Titles" variant="outlined" fullWidth />} />
          </ListItem> */}
          {/* <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                <TextField label="Search by Recipe Title" variant="outlined" fullWidth value={recipeTitle} onChange={(e) => setRecipeTitle(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Autocomplete options={recipeTitleSuggestions} renderInput={(params) => <TextField {...params} label="Search Recipe Titles" variant="outlined" fullWidth />} />
              </Grid>
            </Grid>
          </ListItem> */}
          {/* <Autocomplete multiple id="include-ingredients" fullWidth options={ingredients} getOptionLabel={(option) => option.name} value={selectedIngredients} onChange={handleIngredientChange} renderInput={(params) => <TextField {...params} size="small" label="Include up to 5 ingredients" variant="outlined" />} /> */}
          {/* <Box>
            <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
              <Autocomplete options={recipeTitleSuggestions} fullWidth renderInput={(params) => <TextField {...params} label="Search by Recipe Title" variant="outlined" fullWidth value={recipeTitle} onChange={(e) => setRecipeTitle(e.target.value)} />} />
            </ListItem>
          </Box> */}
          <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Autocomplete
              options={recipeTitleSuggestions}
              fullWidth
              value={recipeTitle}
              onChange={handleAutocompleteChange} // Handle change event of Autocomplete
              filterOptions={filterOptions} // Limit the number of suggestions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search by recipe title"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={recipeTitle}
                  onChange={(e) => setRecipeTitle(e.target.value)} // Handle change event of TextField
                />
              )}
            />
          </ListItem>
          {/* Search by Recipe Author */}
          {/* <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <TextField size="small" label="Recipe Author" variant="outlined" fullWidth value={recipeAuthor} onChange={(e) => setRecipeAuthor(e.target.value)} />
          </ListItem> */}
          {/* Cook Time Options */}
          <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Box>
              <InputLabel>Total Time</InputLabel>
              <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="< 15 min" onClick={() => handleTotalTimeChange("0,15")} color={totalTime === "0,15" ? "warning" : "default"} />
              <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="< 30 min" onClick={() => handleTotalTimeChange("0,30")} color={totalTime === "0,30" ? "warning" : "default"} />
              <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="< 45 min" onClick={() => handleTotalTimeChange("0,45")} color={totalTime === "0,45" ? "warning" : "default"} />
              <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="< 1h" onClick={() => handleTotalTimeChange("0,60")} color={totalTime === "0,60" ? "warning" : "default"} />
              <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="< 2h" onClick={() => handleTotalTimeChange("0,120")} color={totalTime === "0,120" ? "warning" : "default"} />
              <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="More than 2h" onClick={() => handleTotalTimeChange("121,Infinity")} color={totalTime === "121,Infinity" ? "warning" : "default"} />
            </Box>
          </ListItem>
          {/* Has reviews Checkbox */}
          {/* <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <FormControlLabel control={<Checkbox size="small" checked={hasReviews} onChange={handleReviewsChange} />} label="Has Reviews" />
          </ListItem> */}
          <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Box>
              <InputLabel>Has Reviews</InputLabel>
              {/* <Chip sx={{ marginRight: "5px" }} size="small" label="All" onClick={() => handleDifficultyChange("")} color={difficulty === "" ? "warning" : "default"} /> */}
              <Chip sx={{ marginRight: "5px" }} size="small" label="Yes" onClick={handleReviewsChange} color={hasReviews === "true" ? "warning" : "default"} />
            </Box>
          </ListItem>
          {/* Filter by Difficulty */}
          <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            {/* <Typography gutterBottom>Filter by Cook Time</Typography> */}
            <Box>
              <InputLabel>Difficulty</InputLabel>
              <Chip sx={{ marginRight: "5px" }} size="small" label="Easy" onClick={() => handleDifficultyChange("1")} color={selectedDifficulties.includes("1") ? "warning" : "default"} />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Medium" onClick={() => handleDifficultyChange("2")} color={selectedDifficulties.includes("2") ? "warning" : "default"} />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Hard" onClick={() => handleDifficultyChange("3")} color={selectedDifficulties.includes("3") ? "warning" : "default"} />
            </Box>
          </ListItem>

          {/* Filter by Minimal Score */}
          <Box sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <InputLabel>Minimum Score {minimumScore}</InputLabel>
            <Slider
              sx={{ height: "8px", color: "#ff6600" }}
              value={minimumScore}
              onChange={handleMinimumScoreChange}
              //valueLabelDisplay="auto"
              step={1}
              //             // marks={[{ value: 0, label: 0 }, { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5, label: 5 }]}
              min={0}
              max={5}
            />
          </Box>
          {/* Filter by Ingredients */}
          {/* <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <TextField size="small" label="Exclude up to 5 ingredients" variant="outlined" fullWidth />
          </ListItem> */}
          {/* Filter by Ingredients */}
          {/* <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <TextField size="small" label="Include up to 5 ingredients" variant="outlined" fullWidth />
          </ListItem> */}
          {/* 
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
          </ListItem> */}
          {/* <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Accordion sx={{ width: "100%" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="cuisine-filter-content" id="cuisine-filter-header">
                <Typography>Cuisines</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ maxHeight: "200px", overflowY: "auto", "&::-webkit-scrollbar": { width: "5px" } }}>
                <List>
                  {cuisines.map((cuisine) => (
                    <ListItem key={cuisine._id} sx={{ paddingTop: "0", paddingBottom: "0", paddingLeft: "0" }}>
                      <FormControlLabel
                        control={<Checkbox size="small" checked={selectedCuisines.includes(cuisine.name)} onChange={() => handleCuisineChange(cuisine.name)} />}
                        label={
                          <Badge badgeContent={cuisine.count} color="primary">
                            {cuisine.name}
                          </Badge>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </ListItem> */}
          {/* need to modify to meals */}
          {/* <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Accordion sx={{ width: "100%" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="meal-filter-content" id="meal-filter-header">
                <Typography>Meals</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ maxHeight: "200px", overflowY: "auto", "&::-webkit-scrollbar": { width: "5px" } }}>
                <List>
                  {meals.map((meal) => (
                    <ListItem key={meal._id} sx={{ paddingTop: "0", paddingBottom: "0", paddingLeft: "0" }}>
                      <FormControlLabel
                        control={<Checkbox size="small" checked={selectedMeals.includes(meal.name)} onChange={() => handleMealChange(meal.name)} />}
                        label={
                          <Badge badgeContent={meal.count} color="primary">
                            {meal.name}
                          </Badge>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </ListItem> */}
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
          {/* <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Accordion sx={{ width: "100%" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="diet-filter-content" id="diet-filter-header">
                <Typography>Diets</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ maxHeight: "200px", overflowY: "auto", "&::-webkit-scrollbar": { width: "5px" } }}>
                <List>
                  {diets.map((diet) => (
                    <ListItem key={diet._id} sx={{ paddingTop: "0", paddingBottom: "0", paddingLeft: "0" }}>
                      <FormControlLabel
                        control={<Checkbox size="small" checked={selectedDiets.includes(diet.name)} onChange={() => handleDietChange(diet.name)} />}
                        label={
                          <Badge badgeContent={diet.count} color="primary">
                            {diet.name}
                          </Badge>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </ListItem> */}
          {/* <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Accordion sx={{ width: "100%" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="occasion-filter-content" id="occasion-filter-header">
                <Typography>Occasions</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ maxHeight: "200px", overflowY: "auto", "&::-webkit-scrollbar": { width: "5px" } }}>
                <List>
                  {occasions.map((occasion) => (
                    <ListItem key={occasion._id} sx={{ paddingTop: "0", paddingBottom: "0", paddingLeft: "0" }}>
                      <FormControlLabel
                        control={<Checkbox size="small" checked={selectedOccasions.includes(occasion.name)} onChange={() => handleOccasionChange(occasion.name)} />}
                        label={
                          <Badge badgeContent={occasion.count} color="primary">
                            {occasion.name}
                          </Badge>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </ListItem> */}
          {/* <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Accordion sx={{ width: "100%" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="taste-filter-content" id="taste-filter-header">
                <Typography>Tastes</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ maxHeight: "200px", overflowY: "auto", "&::-webkit-scrollbar": { width: "5px" } }}>
                <List>
                  {tastes.map((taste) => (
                    <ListItem key={taste._id} sx={{ paddingTop: "0", paddingBottom: "0", paddingLeft: "0" }}>
                      <FormControlLabel
                        control={<Checkbox size="small" checked={selectedTastes.includes(taste.name)} onChange={() => handleTasteChange(taste.name)} />}
                        label={
                          <Badge badgeContent={taste.count} color="primary">
                            {taste.name}
                          </Badge>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </ListItem> */}
          {/* Filter by Cuisine */}
          <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Box>
              <InputLabel sx={{ fontWeight: "500", color: "#000" }}>Cuisine</InputLabel>
              {Array.isArray(diets) &&
                cuisines.map((cuisine) => (
                  <Chip
                    key={cuisine._id}
                    sx={{ marginRight: "5px", marginBottom: "5px" }}
                    size="small"
                    label={cuisine.name}
                    onClick={() => handleCuisineChange(cuisine.name)}
                    color={selectedCuisines.includes(cuisine.name) ? "warning" : "default"} // Adjusted condition here
                  />
                ))}
            </Box>
          </ListItem>
          {/* Filter by Diet */}
          <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Box>
              <InputLabel sx={{ fontWeight: "500", color: "#000" }}>Diet</InputLabel>
              {Array.isArray(diets) &&
                diets.map((diet) => (
                  <Chip
                    key={diet._id}
                    sx={{ marginRight: "5px", marginBottom: "5px" }}
                    size="small"
                    label={diet.name}
                    onClick={() => handleDietChange(diet.name)}
                    color={selectedDiets.includes(diet.name) ? "warning" : "default"} // Adjusted condition here
                  />
                ))}
            </Box>
          </ListItem>
          {/* Filter by CookingMethod */}
          <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Box>
              <InputLabel sx={{ fontWeight: "500", color: "#000" }}>Cooking Methods</InputLabel>
              {Array.isArray(cookingMethods) &&
                cookingMethods.map((cookingMethod) => (
                  <Chip
                    key={cookingMethod._id}
                    sx={{ marginRight: "5px", marginBottom: "5px" }}
                    size="small"
                    label={cookingMethod.name}
                    onClick={() => handleCookingMethodChange(cookingMethod.name)}
                    color={selectedCookingMethods.includes(cookingMethod.name) ? "warning" : "default"} // Adjusted condition here
                  />
                ))}
            </Box>
          </ListItem>
          {/* Filter by Meal */}
          <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Box>
              <InputLabel sx={{ fontWeight: "500", color: "#000" }}>Meal</InputLabel>
              {Array.isArray(meals) &&
                meals.map((meal) => (
                  <Chip
                    key={meal._id}
                    sx={{ marginRight: "5px", marginBottom: "5px" }}
                    size="small"
                    label={meal.name}
                    onClick={() => handleMealChange(meal.name)}
                    color={selectedMeals.includes(meal.name) ? "warning" : "default"} // Adjusted condition here
                  />
                ))}
            </Box>
          </ListItem>
          {/* Filter by Taste */}
          <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
            <Box>
              <InputLabel sx={{ fontWeight: "500", color: "#000" }}>Taste</InputLabel>
              {Array.isArray(tastes) &&
                tastes.map((taste) => (
                  <Chip
                    key={taste._id}
                    sx={{ marginRight: "5px", marginBottom: "5px" }}
                    size="small"
                    label={taste.name}
                    onClick={() => handleTasteChange(taste.name)}
                    color={selectedTastes.includes(taste.name) ? "warning" : "default"} // Adjusted condition here
                  />
                ))}
            </Box>
          </ListItem>
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

{
  /* <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
<Box>
  <InputLabel sx={{ fontWeight: "500", color: "#000" }}>Taste</InputLabel>

  {Array.isArray(tastes) && tastes.map((taste) => <Chip key={taste._id} sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label={taste.name} onClick={() => handleTasteChange(taste.name)} color={selectedTastes === taste.name ? "warning" : "default"} />)}

  
   <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="All" onClick={() => handleTasteChange("")} color={selectedTaste === "" ? "warning" : "default"} /> 
  <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="Spicy" onClick={() => handleTasteChange("Spicy")} color={selectedTaste === "Spicy" ? "warning" : "default"} />
  <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="Sweet" onClick={() => handleTasteChange("Sweet")} color={selectedTaste === "Sweet" ? "warning" : "default"} />
  <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="Sour" onClick={() => handleTasteChange("Sour")} color={selectedTaste === "Sour" ? "warning" : "default"} />
  <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="Bitter" onClick={() => handleTasteChange("Bitter")} color={selectedTaste === "Bitter" ? "warning" : "default"} />
  <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="Salty" onClick={() => handleTasteChange("Salty")} color={selectedTaste === "Salty" ? "warning" : "default"} />
  <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="Umami" onClick={() => handleTasteChange("Umami")} color={selectedTaste === "Umami" ? "warning" : "default"} />
  <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="Astrigent" onClick={() => handleTasteChange("Astrigent")} color={selectedTaste === "Astrigent" ? "warning" : "default"} />
  <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="Cooling" onClick={() => handleTasteChange("Cooling")} color={selectedTaste === "Cooling" ? "warning" : "default"} />
  <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="Smoky" onClick={() => handleTasteChange("Smoky")} color={selectedTaste === "Smoky" ? "warning" : "default"} /> 
</Box>
</ListItem> */
}

{
  /* <ListItem sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
<Box>
  <InputLabel sx={{ fontWeight: "500", color: "#000" }}>Taste</InputLabel>

  {Array.isArray(tastes) &&
    tastes.map((taste) => (
      <Chip
        key={taste._id}
        sx={{ marginRight: "5px", marginBottom: "5px" }}
        size="small"
        label={taste.name}
        onClick={() => handleTasteChange(taste.name)}
        color={selectedTastes.includes(taste.name) ? "warning" : "default"}
        variant={selectedTastes.includes(taste.name) ? "filled" : "outlined"} // Added variant prop
      />
    ))}
</Box>
</ListItem> */
}

{
  /* {Array.isArray(tastes) && tastes.map((taste) => <Chip key={taste._id} sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label={taste.name} onClick={() => handleTasteChange(taste.name)} color={selectedTastes === taste.name ? "warning" : "default"} />)} */
}

{
  /*
               <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="All" onClick={() => handleTasteChange("")} color={selectedTaste === "" ? "warning" : "default"} /> 
              <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="Spicy" onClick={() => handleTasteChange("Spicy")} color={selectedTaste === "Spicy" ? "warning" : "default"} />
              <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="Sweet" onClick={() => handleTasteChange("Sweet")} color={selectedTaste === "Sweet" ? "warning" : "default"} />
              <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="Sour" onClick={() => handleTasteChange("Sour")} color={selectedTaste === "Sour" ? "warning" : "default"} />
              <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="Bitter" onClick={() => handleTasteChange("Bitter")} color={selectedTaste === "Bitter" ? "warning" : "default"} />
              <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="Salty" onClick={() => handleTasteChange("Salty")} color={selectedTaste === "Salty" ? "warning" : "default"} />
              <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="Umami" onClick={() => handleTasteChange("Umami")} color={selectedTaste === "Umami" ? "warning" : "default"} />
              <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="Astrigent" onClick={() => handleTasteChange("Astrigent")} color={selectedTaste === "Astrigent" ? "warning" : "default"} />
              <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="Cooling" onClick={() => handleTasteChange("Cooling")} color={selectedTaste === "Cooling" ? "warning" : "default"} />
              <Chip sx={{ marginRight: "5px", marginBottom: "5px" }} size="small" label="Smoky" onClick={() => handleTasteChange("Smoky")} color={selectedTaste === "Smoky" ? "warning" : "default"} /> */
}
