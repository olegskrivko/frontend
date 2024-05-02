import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { AuthProvider } from "./middleware/AuthContext";
import "./App.css";
import HomePage from "./pages/Home";
import Layout from "./pages/Layout";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetails from "./pages/RecipeDetails";
import Prices from "./pages/Prices";
import AuthPage from "./pages/AuthPage";
import MealsPage from "./pages/MealsPage";
import CollectionRecipes from "./pages/CollectionRecipes";
import CollectionsPage from "./pages/CollectionsPage";
import MorePage from "./pages/MorePage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import FavoritesPage from "./pages/FavoritesPage";
import MyRecipesPage from "./pages/MyRecipesPage";
import CreateRecipePage from "./pages/CreateRecipePage";
import EditRecipePage from "./pages/EditRecipePage";
import AdminDashboard from "./pages/AdminDashboard";
import ManageRecipesPage from "./pages/ManageRecipesPage";
import ManageUsersPage from "./pages/ManageUsersPage";
import ToolsPage from "./pages/ToolsPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import LogoutPage from "./pages/LogoutPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Create a context to hold information about the active page or route
const PageContext = createContext();

const theme = createTheme();

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const [activePage, setActivePage] = useState("home");

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <BrowserRouter>
            {/* <PageContext.Provider value={{ isDrawerOpen, activePage }}> */}
            <PageContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="recipes" element={<RecipesPage />} />
                  <Route path="recipes/:id" element={<RecipeDetails />} />
                  <Route path="meals/:id/recipes" element={<MealsPage />} />
                  <Route path="collections" element={<CollectionsPage />} />
                  <Route path="collections/:slug" element={<CollectionRecipes />} />
                  <Route path="products" element={<ProductsPage />} />
                  <Route path="products/:id" element={<ProductDetails />} />
                  {/* <Route path="prices" element={<Prices />} /> */}
                  <Route path="auth" element={<AuthPage />} />
                  <Route path="profile" element={<ProfilePage />} />
                  <Route path="settings" element={<SettingsPage />} />
                  <Route path="more" element={<MorePage />} />
                  <Route path="favorites" element={<FavoritesPage />} />
                  <Route path="my-recipes" element={<MyRecipesPage />} />
                  <Route path="create-recipe" element={<CreateRecipePage />} />
                  <Route path="edit-recipe/:id" element={<EditRecipePage />} />
                  <Route path="admin/dashboard" element={<AdminDashboard />} />
                  <Route path="admin/manage-recipes" element={<ManageRecipesPage />} />
                  <Route path="admin/manage-users" element={<ManageUsersPage />} />
                  <Route path="tools" element={<ToolsPage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="contact" element={<ContactPage />} />
                  <Route path="logout" element={<LogoutPage />} />

                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </PageContext.Provider>
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export { App as default, PageContext }; // Export both App and PageContext
