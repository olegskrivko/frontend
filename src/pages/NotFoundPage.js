import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" sx={{ marginBottom: 2 }}>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        The page you're looking for does not exist.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
