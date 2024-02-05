import * as React from "react";
// import PropTypes from "prop-types";
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
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { useAuth } from "../middleware/AuthContext";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
// const navItems = ["Home", "Tools", "Prices", "Recipes", "Contact"];
// const BASE_URL = process.env.REACT_APP_API_URL || "https://tiny-blue-moose-veil.cyclic.app/api";
const navItems = {
  "/": "Home",
  "/recipes": "Recipes",
  "/tools": "Tools",
  "/prices": "Prices",
  "/contact": "Contact",
  "/recipeinfo": "Recipe Info",
  "/dashboard": "Dashboard",
  "/auth": "Users",
};

// Update navItems based on the BASE_URL
// Object.keys(navItems).forEach((path) => {
//   navItems[path] = `${BASE_URL}${path}`;
// });

function DrawerAppBar(props) {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    logout();
    navigate("/auth"); // Redirect to the login page after logout
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
      </List>
      {isAuthenticated() && (
        <Link style={{ textDecoration: "none", width: "100%" }}>
          <ListItemText onClick={handleLogout} primary={"Logout"} />
        </Link>
        // <Button onClick={handleLogout} sx={{ color: "#dadada" }}>
        //   Logout
        // </Button>
      )}

      {/* <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                to={`/${item}`}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

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
                <Button onClick={handleLogout} sx={{ color: "#fff", fontWeight: "400" }}>
                  Logout
                </Button>
              )}

              {/* {navItems.map((item) => (
                <Link key={item} to={`/${item}`}>
                  <Button sx={{ color: "#fff" }}>{item}</Button>
                </Link>
              ))} */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          // container={container}
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
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;
