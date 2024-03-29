import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import procimg from "../images/image-processing.gif";
const NotFoundPage = () => {
  // Check if screen size is small
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
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
      <Typography variant={isSmallScreen ? "h4" : "h1"} sx={{ marginBottom: 2 }}>
        404 - Page Not Found
      </Typography>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <img
            src={procimg}
            alt="Image Description"
            style={{
              width: "auto",
              maxHeight: "280px",
              // objectFit: "cover",
            }}
          />
        </Box>
      </Grid>
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
