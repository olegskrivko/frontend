import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import { useParams, Link } from "react-router-dom";
import { BASE_URL } from "../middleware/config";

import { Typography, Divider, List, ListItemButton, ListItemText, Collapse, ListItem } from "@mui/material";
const SideBar = () => {
  const { id } = useParams();
  const [meals, setMeals] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [mealsOpen, setMealsOpen] = useState(false);
  const [cuisinesOpen, setCuisinesOpen] = useState(false);

  const sliderRef = useRef(null);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(`${BASE_URL}/meals`);
        const data = await response.json();
        setMeals(data);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchMeals();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  useEffect(() => {
    const fetchCuisines = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cuisines`);
        const data = await response.json();
        setCuisines(data);
      } catch (error) {
        console.error("Error fetching cuisines:", error);
      }
    };

    fetchCuisines();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // const handleMealsToggle = () => {
  //   setMealsOpen(!mealsOpen);
  // };

  // const handleCuisinesToggle = () => {
  //   setCuisinesOpen(!cuisinesOpen);
  // };
  const handleMealsToggle = () => {
    setMealsOpen(!mealsOpen);
    setCuisinesOpen(false); // Close cuisines when meals are opened
  };

  const handleCuisinesToggle = () => {
    setCuisinesOpen(!cuisinesOpen);
    setMealsOpen(false); // Close meals when cuisines are opened
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <List>
      <ListItemButton onClick={handleMealsToggle} sx={{ cursor: "pointer", fontWeight: "500", fontSize: "1rem", color: "black" }}>
        <ListItemText
          primary={
            <Typography variant="body1" fontWeight="bold">
              Meals
            </Typography>
          }
        />
      </ListItemButton>
      <Collapse in={mealsOpen} timeout="auto" unmountOnExit>
        <List>
          {meals.map((meal) => (
            <ListItem key={meal._id} disablePadding>
              <ListItemButton sx={{ textAlign: "left", color: "black" }}>
                <Link to={`meals/${meal._id}`} style={{ textDecoration: "none", width: "100%" }}>
                  <ListItemText primary={meal.name} sx={{ color: "black" }} />
                </Link>
                {/* {`${meal.recipes.length}`} */}
                {meal.recipes.length > 0 && (
                  <Typography variant="body2" sx={{ marginLeft: 1, color: "gray" }}>
                    {`${meal.recipes.length}`}
                  </Typography>
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
      <ListItemButton onClick={handleCuisinesToggle} sx={{ cursor: "pointer", fontWeight: "500", fontSize: "1rem", color: "black" }}>
        <ListItemText
          primary={
            <Typography variant="body1" fontWeight="bold">
              Cuisines
            </Typography>
          }
        />
      </ListItemButton>
      <Collapse in={cuisinesOpen} timeout="auto" unmountOnExit>
        <List>
          {cuisines.map((cuisine) => (
            <ListItem key={cuisine._id} disablePadding>
              <ListItemButton sx={{ textAlign: "left", color: "black" }}>
                <Link to={`cuisines/${cuisine._id}`} style={{ textDecoration: "none", width: "100%" }}>
                  <ListItemText primary={cuisine.name} sx={{ color: "black" }} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

export default SideBar;
