// DrawerAppBar.js
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
import { BASE_URL } from "../middleware/config";
// Custom Components
import { useAuth } from "../middleware/AuthContext";

const drawerWidth = 240;

const navItems = {
  "/": "Home",
  "/recipes": "Recipes",
  "/tools": "Tools",
  "/prices": "Prices",
  "/contact": "Contact",
  "/dashboard": "Dashboard",
  "/auth": "Users",
};

function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [filtersOpen, setFiltersOpen] = React.useState(false);
  const [meals, setMeals] = React.useState([]);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
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
      <Typography variant="h6" sx={{ my: 2 }}>
        Cookify
      </Typography>
      <Divider />
      <List>
        {Object.entries(navItems).map(([path, itemName]) => (
          <ListItem key={path} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={path} style={{ textDecoration: "none", width: "100%" }}>
                <ListItemText primary={itemName} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        {isAuthenticated() && (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to="/auth" style={{ textDecoration: "none", width: "100%" }}>
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
        Cookify
      </Typography>
      <Divider />
      <List>
        {/* ... (existing code for other items) */}
        <ListSubheader onClick={handleMealsToggle} sx={{ cursor: "pointer", textAlign: "left" }}>
          Meals
        </ListSubheader>
        <Collapse in={mealsOpen} timeout="auto" unmountOnExit>
          <List>
            {meals.map((meal) => (
              <ListItem key={meal.id} disablePadding>
                <ListItemButton sx={{ textAlign: "left" }}>
                  <Link to={`${BASE_URL}/meals/${meal._id}`} style={{ textDecoration: "none", width: "100%" }}>
                    <ListItemText primary={meal.name} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
        {/* ... (existing code for other items) */}
      </List>
    </Box>
  );

  // Assuming 'meals' is an array of meal objects fetched from the server
  // const filtersDrawer = (
  //   <Box onClick={handleFiltersToggle} sx={{ textAlign: "center" }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       Filters
  //     </Typography>
  //     <Divider />
  //     <List>
  //       <ListSubheader onClick={handleFiltersToggle} sx={{ cursor: "pointer", textAlign: "center" }}>
  //         Categories
  //       </ListSubheader>
  //       {meals.map((meal) => (
  //         <ListItem key={meal.id} disablePadding>
  //           <ListItemButton sx={{ textAlign: "center" }}>
  //             <Link to={`${BASE_URL}/meals/${meal._id}`} style={{ textDecoration: "none", width: "100%" }}>
  //               <ListItemText primary={meal.name} />
  //             </Link>
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );
  // const filtersDrawer = (
  //   <Box onClick={handleFiltersToggle} sx={{ textAlign: "center" }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       Meals
  //     </Typography>
  //     <Divider />
  //     <List>
  //       {meals.map((meal) => (
  //         <ListItem key={meal.id} disablePadding>
  //           <ListItemButton sx={{ textAlign: "center" }}>
  //             <Link to={`${BASE_URL}/meals/${meal._id}`} style={{ textDecoration: "none", width: "100%" }}>
  //               <ListItemText primary={meal.name} />
  //             </Link>
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  // const filtersDrawer = (
  //   <Box onClick={handleFiltersToggle} sx={{ textAlign: "center" }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       Filters
  //     </Typography>
  //     <Divider />
  //     {/* Placeholder for filters - Replace with actual filter options */}
  //     <List>
  //       <ListItem disablePadding>
  //         <ListItemButton sx={{ textAlign: "center" }}>
  //           <ListItemText primary="Category 1" />
  //         </ListItemButton>
  //       </ListItem>
  //       <ListItem disablePadding>
  //         <ListItemButton sx={{ textAlign: "center" }}>
  //           <ListItemText primary="Category 2" />
  //         </ListItemButton>
  //       </ListItem>
  //       <ListItem disablePadding>
  //         <ListItemButton sx={{ textAlign: "center" }}>
  //           <ListItemText primary="Category 3" />
  //         </ListItemButton>
  //       </ListItem>
  //     </List>
  //   </Box>
  // );

  return (
    <Box sx={{ display: "flex", p: 3 }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: "#1D1D1D",
        }}
      >
        <Container disableGutters>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              Cookify
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
            </Box>
            {/* Add the following button for opening the filters drawer */}
            <IconButton color="inherit" aria-label="open filters" onClick={handleFiltersToggle} sx={{ display: { xs: "block", sm: "none" } }}>
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
              width: drawerWidth,
            },
          }}
        >
          {filtersDrawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;
