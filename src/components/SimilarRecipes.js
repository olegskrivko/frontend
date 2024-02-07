import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// React MUI components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import { useAuth } from "../middleware/AuthContext";
// Icons

// Installed Components

// Custom Components

// BASE_URL
import { BASE_URL } from "../middleware/config";

const SimilarRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { obtainAccessToken, user } = useAuth();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const accessToken = await obtainAccessToken();
        const response = await fetch(`${BASE_URL}/recipes`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setRecipes(data);
        } else {
          throw new Error("Failed to fetch recipes");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <Container maxWidth="lg" style={{ textAlign: "center", padding: "0" }}>
      {/* Static image or any other layout you desire */}

      <Grid container spacing={3} justifyContent="center" style={{ marginTop: "4px" }}>
        {recipes.slice(0, 6).map((recipe, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Card sx={{ maxWidth: 345, backgroundColor: "rgba(0, 0, 0, 0)", border: "none", position: "relative" }}>
              <CardMedia
                component="img"
                image={recipe.coverImage}
                alt={recipe.title}
                sx={{
                  width: "100%", // Take up full width
                  height: "auto", // Automatically adjust height to maintain aspect ratio
                  display: "block", // Center the image within the container
                  objectFit: "cover", // Maintain aspect ratio and cover entire area
                }}
              />
              <CardContent sx={{ margin: "0", padding: "4px 0 !important" }}>
                <Typography
                  variant="body1"
                  sx={{
                    // fontSize: "0.9rem",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    fontWeight: "500",
                    fontSize: "0.9rem",
                  }}
                >
                  <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    {recipe.title}
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SimilarRecipes;
