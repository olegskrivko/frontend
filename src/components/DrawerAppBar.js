// DrawerAppBar.js
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// React MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TuneIcon from "@mui/icons-material/Tune";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import SearchIcon from "@mui/icons-material/Search";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SideBar from "../pages/SideBar";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { BASE_URL } from "../middleware/config";
// Custom Components
import { useAuth } from "../middleware/AuthContext";

const drawerWidth = 240;
const drawerWidthFilters = "80%";

const navItems = {
  // "/": "Home",
  "/recipes": "Recipes",
  "/collections": "Collections",
  // "/marketplace": "Marketplace",
  "/products": "Marketplace",
  "/tools": "Tools",
  // "/create-recipe": "create",
  "/contact": "Contact",
  "/profile": "Profile",
  "/admin/dashboard": "Dashboard",
  // "/auth": "Users",
};

function DrawerAppBar(props) {
  // const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [recipes, setRecipes] = useState([]);
  const [pagination, setPagination] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [appliedFilters, setAppliedFilters] = useState({
    recipeTitle: queryParams.get("recipeTitle") || "",
    // hasReviews: queryParams.get("hasReviews") || "",
    difficulties: queryParams.getAll("difficulties") || [],
    totalTime: queryParams.get("totalTime") || "",
    cuisines: queryParams.getAll("cuisines") || [],
    tastes: queryParams.getAll("tastes") || [],
    meals: queryParams.getAll("meals") || [],
    diets: queryParams.getAll("diets") || [],
    cookingMethods: queryParams.getAll("cookingMethods") || [],
    // Add other filter keys and their default values here
  });

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);

        const response = await fetch(`${BASE_URL}/recipes?${queryParams.toString()}`);

        const data = await response.json();
        // Check if the expected properties exist in the response
        if (data && data.recipes && data.pagination) {
          setRecipes(data.recipes);
          setPagination(data.pagination);
        } else {
          console.error("Invalid response structure:", data);
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, [location.search, navigate]);

  const applyFilters = async (filters) => {
    try {
      setIsLoading(true);

      const newFilters = { ...appliedFilters, ...filters };
      setAppliedFilters(newFilters);

      // Use the `navigate` function to update the URL with the new query parameters
      navigate(`/recipes?${new URLSearchParams(newFilters).toString()}`);

      const response = await fetch(`${BASE_URL}/recipes?${new URLSearchParams(newFilters).toString()}`);

      const data = await response.json();

      if (Array.isArray(data)) {
        setRecipes(data);
      } else {
        console.error("Error: Expected an array of recipes, but received:", data);
      }
    } catch (error) {
      console.error("Error fetching filtered recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetFilters = async () => {
    try {
      setIsLoading(true);

      // Clear any applied filters
      const emptyFilters = {
        recipeTitle: "",
        // hasReviews: "",
        difficulties: [],
        totalTime: "",
        cookingMethods: [],
        tastes: [],
        diets: [],
        meals: [],
        cuisines: [],
        // Add other filter keys and their default values here
      };

      setAppliedFilters(emptyFilters);

      // Use the `navigate` function to update the URL with the cleared query parameters
      navigate(`/recipes`);

      const response = await fetch(`${BASE_URL}/recipes`);
      const data = await response.json();

      if (Array.isArray(data)) {
        setRecipes(data);
      } else {
        console.error("Error: Expected an array of meals, but received:", data);
      }

      console.log("Filters Reset");
    } catch (error) {
      console.error("Error resetting filters:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaginationChange = async (event, page) => {
    try {
      setIsLoading(true);

      const response = await fetch(`${BASE_URL}/recipes?page=${page}&${new URLSearchParams(appliedFilters).toString()}`);
      const data = await response.json();

      if (data && data.recipes && data.pagination) {
        setRecipes(data.recipes);
        setPagination(data.pagination);
      } else {
        console.error("Invalid response structure:", data);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // new code up i added for filtering, also i added props to sidebar
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [filtersOpen, setFiltersOpen] = React.useState(false);
  const [meals, setMeals] = React.useState([]);
  const { isAuthenticated, logout } = useAuth();
  // const navigate = useNavigate();
  const [mealsOpen, setMealsOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleFiltersToggle = () => {
    setFiltersOpen((prevState) => !prevState);
  };

  const handleMealsToggle = () => {
    setMealsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(`${BASE_URL}/meals`);
        if (response.ok) {
          const data = await response.json();
          setMeals(data);
        } else {
          throw new Error("Failed to fetch meals");
        }
      } catch (error) {
        console.error("Error fetching meals:", error.message);
      }
    };

    fetchMeals();
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
    logout();
    console.log("Logout successful");
    navigate("/"); // Redirect to the homepage after logout
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/">Cookifyx</Link>
      </Typography> */}
      <Box style={{ width: "100%", height: "3.5rem", backgroundColor: "orange", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h6" component="div">
          <Link to="/" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center" }}>
            <LocalFireDepartmentIcon sx={{ marginRight: 0.4 }} /> Cookify
          </Link>
        </Typography>
      </Box>
      <Divider />
      <List>
        {Object.entries(navItems).map(([path, itemName]) => (
          <ListItem key={path} disablePadding>
            <ListItemButton sx={{ textAlign: "start" }}>
              <Link to={path} style={{ textDecoration: "none", width: "100%", paddingLeft: "1rem" }}>
                <ListItemText primary={itemName} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        {isAuthenticated() && (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "start" }}>
              <Link to="/auth" style={{ textDecoration: "none", width: "100%", paddingLeft: "1rem" }}>
                <ListItemText onClick={handleLogout} primary={"Logout"} />
              </Link>
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );
  // const FiltersList = () => (
  //   <>
  //     <ListSubheader onClick={handleFiltersToggle} sx={{ cursor: "pointer", textAlign: "center" }}>
  //       Filters
  //     </ListSubheader>
  //     <Collapse in={filtersOpen} timeout="auto" unmountOnExit>
  //       <List>
  //         {meals.map((meal) => (
  //           <ListItem key={meal.id} disablePadding>
  //             <ListItemButton sx={{ textAlign: "center" }}>
  //               <Link to={`${BASE_URL}/meals/${meal._id}`} style={{ textDecoration: "none", width: "100%" }}>
  //                 <ListItemText primary={meal.name} />
  //               </Link>
  //             </ListItemButton>
  //           </ListItem>
  //         ))}
  //       </List>
  //     </Collapse>
  //   </>
  // );

  // const filtersDrawer = (
  //   <Box sx={{ textAlign: "center" }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       Filters
  //     </Typography>
  //     <Divider />
  //     <FiltersList />
  //   </Box>
  // );

  const filtersDrawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/">Cookify</Link>
      </Typography>
      {/* <Divider /> */}
      <List>
        {/* ... (existing code for other items) */}
        {/* <ListSubheader onClick={handleMealsToggle} sx={{ cursor: "pointer", fontWeight: "500", textAlign: "left", fontSize: "1rem" }}> */}
        <ListItemButton onClick={handleMealsToggle} sx={{ cursor: "pointer", color: "black", textAlign: "left", fontSize: "1rem" }}>
          <ListItemText
            primary={
              <Typography variant="body1" fontWeight="bold">
                Meals
              </Typography>
            }
          />
        </ListItemButton>
        {/* </ListSubheader> */}
        <Collapse in={mealsOpen} timeout="auto" unmountOnExit>
          <List>
            {meals.map((meal) => (
              <ListItem key={meal._id} disablePadding>
                <ListItemButton sx={{ textAlign: "left", color: "black" }}>
                  <Link to={`meals/${meal._id}`} style={{ textDecoration: "none", width: "100%" }}>
                    <ListItemText primary={meal.name} sx={{ color: "black", paddingLeft: "1rem", marginTop: "0", marginBottom: "0" }} />
                    {/* <ListItemText primary={meal.name} sx={{ color: "black", paddingLeft: "1rem", margin: "0" }} /> */}
                  </Link>
                </ListItemButton>
                {/* <ListItemButton component={Link} to={`${BASE_URL}/meals`} sx={{ textAlign: "left" }}>
                  <ListItemText primary="Meals" />
                </ListItemButton> */}
              </ListItem>
            ))}
          </List>
        </Collapse>
        {/* ... (existing code for other items) */}
      </List>
    </Box>
  );
  // const filtersDrawer = ({ meals, handleDrawerToggle, handleMealsToggle, mealsOpen }) => (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       Cookify
  //     </Typography>
  //     <Divider />
  //     <List>
  //       <ListSubheader
  //         onClick={handleMealsToggle}
  //         sx={{
  //           cursor: "pointer",
  //           textAlign: "left",
  //           backgroundColor: (theme) => theme.palette.grey[200], // Use theme for background color
  //           padding: "8px 16px",
  //           fontWeight: "bold",
  //         }}
  //       >
  //         Meals
  //       </ListSubheader>
  //       <Collapse in={mealsOpen} timeout="auto" unmountOnExit>
  //         <List>
  //           {meals.map((meal) => (
  //             <ListItem key={meal._id} disablePadding>
  //               <ListItemButton sx={{ textAlign: "left" }}>
  //                 <Link to={`meals/${meal._id}`} style={{ textDecoration: "none", width: "100%" }}>
  //                   <ListItemText primary={meal.name} />
  //                 </Link>
  //               </ListItemButton>
  //             </ListItem>
  //           ))}
  //         </List>
  //       </Collapse>
  //       {/* ... (existing code for other items) */}
  //     </List>
  //   </Box>
  // );

  return (
    <Box sx={{ display: "flex", p: 3 }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          // background: "#1D1D1D",
          // background: "#252C35",
          // background: "#FC6722"

          background: "#ff6600",
        }}
      >
        <Container disableGutters>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div">
              <Link to="/" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center" }}>
                <LocalFireDepartmentIcon sx={{ marginRight: 0.4 }} /> Cookify
              </Link>
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {Object.entries(navItems).map(([path, itemName]) => (
                <Link key={path} to={path}>
                  <Button sx={{ color: "#fff", fontWeight: "400" }}>{itemName}</Button>
                </Link>
              ))}
              {isAuthenticated() && (
                <Link to="/auth">
                  <Button onClick={handleLogout} sx={{ color: "#fff", fontWeight: "400" }}>
                    Logout
                  </Button>
                </Link>
              )}
              {!isAuthenticated() && (
                <Link to="/auth">
                  <Button sx={{ color: "#fff", fontWeight: "400" }}>Login</Button>
                </Link>
              )}
            </Box>
            {/* Add the following button for opening the filters drawer */}
            <IconButton color="inherit" aria-label="open filters" onClick={handleFiltersToggle} sx={{ display: { sm: "none" } }}>
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
          {/* {filtersDrawer} */}
        </Drawer>
        {/* Add the second Drawer for filters */}
        <Drawer
          variant="temporary"
          open={filtersOpen}
          onClose={handleFiltersToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidthFilters,
              padding: "1rem",
            },
          }}
        >
          <SideBar applyFilters={applyFilters} resetFilters={resetFilters} />
          {/* {filtersDrawer} */}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;
