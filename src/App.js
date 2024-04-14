import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { AuthProvider } from "./middleware/AuthContext";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetails from "./pages/RecipeDetails";
import Prices from "./pages/Prices";
import AuthPage from "./pages/AuthPage";
import MealsPage from "./pages/MealsPage";
import CollectionRecipes from "./pages/CollectionRecipes";
import CollectionsPage from "./pages/CollectionsPage";
import TagsPage from "./pages/TagsPage";
import TagRecipes from "./pages/TagRecipes";
import SearchPage from "./pages/SearchPage";
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
import ConversionPage from "./pages/ConversionPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();
function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="recipes" element={<RecipesPage />} />
                <Route path="recipes/:id" element={<RecipeDetails />} />
                <Route path="meals/:id/recipes" element={<MealsPage />} />
                {/* <Route path="collections" element={<CollectionsPage />} />
                <Route path="collections/:id" element={<CollectionRecipes />} /> */}
                <Route path="collections" element={<CollectionsPage />} />
                <Route path="collections/:slug" element={<CollectionRecipes />} />
                <Route path="tags" element={<TagsPage />} />
                <Route path="tags/:tag" element={<TagRecipes />} />
                <Route path="search" element={<SearchPage />} />
                {/* <Route path="prices" element={<Prices />} /> */}
                <Route path="auth" element={<AuthPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="favorites" element={<FavoritesPage />} />
                <Route path="my-recipes" element={<MyRecipesPage />} />
                <Route path="create-recipe" element={<CreateRecipePage />} />
                <Route path="edit-recipe/:id" element={<EditRecipePage />} />
                <Route path="admin/dashboard" element={<AdminDashboard />} />
                <Route path="admin/manage-recipes" element={<ManageRecipesPage />} />
                <Route path="admin/manage-users" element={<ManageUsersPage />} />
                <Route path="tools" element={<ToolsPage />} />
                <Route path="conversion" element={<ConversionPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

// Public Routes:

// / - Home page
// /recipes - List of all recipes
// /recipes/:id - Details of a specific recipe
// /categories - List of recipe categories
// /categories/:category - List of recipes in a specific category
// /tags - List of recipe tags
// /tags/:tag - List of recipes with a specific tag
// /search - Search page for recipes
// User Authentication Routes:

// /login - Login page
// /register - Registration page
// /profile - User profile page
// /settings - User account settings
// User Interaction Routes:

// /favorites - List of user's favorite recipes
// /my-recipes - List of recipes created by the user
// /create-recipe - Page to create a new recipe
// /edit-recipe/:id - Page to edit an existing recipe
// Admin Routes:

// /admin/dashboard - Admin dashboard
// /admin/manage-recipes - Page to manage all recipes
// /admin/manage-users - Page to manage user accounts
// Utility Routes:

// /tools - Kitchen tools and equipment recommendations
// /conversion - Unit conversion tools (e.g., metric to imperial)
// /about - About us page
// /contact - Contact us page
// 404 Not Found Route:

// /* - 404 Not Found page for any other routes
