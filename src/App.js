import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { AuthProvider } from "./middleware/AuthContext";

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetails from "./pages/RecipeDetails";
import Tools from "./pages/Tools";
import Prices from "./pages/Prices";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/AuthPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <SnackbarProvider maxSnack={3}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="recipes" element={<RecipesPage />} />
              <Route path="recipes/:id" element={<RecipeDetails />} />
              <Route path="contact" element={<Contact />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="tools" element={<Tools />} />
              <Route path="prices" element={<Prices />} />
              <Route path="auth" element={<AuthPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </AuthProvider>
  );
}

export default App;
