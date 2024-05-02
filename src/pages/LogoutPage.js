// LogoutPage.js
import React from "react";
import { Link } from "react-router-dom";

// Import React MUI Components
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link as MuiLink } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// Import SVG Images
import LogoutImage from "../images/svg/appreciation-rafiki.svg";

const LogoutPage = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  //   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const creditLink = "https://storyset.com/social-media";
  const credit = "Social media illustrations by Storyset";
  const altImg = "Man and woman exchanging heart-shaped items";

  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center" alignItems="center" height="100%" style={{ flexDirection: "column", overflow: "hidden" }}>
        <CardMedia
          component="img"
          src={LogoutImage}
          alt={altImg}
          style={{
            width: "auto",
            maxHeight: "280px",
            marginTop: isLargeScreen ? "5rem" : "1rem",
          }}
        />
        <Box style={{ marginTop: "0.5rem", display: "flex", alignItems: "center" }}>
          <MuiLink href={creditLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.6rem", fontStyle: "italic", color: "#999", fontWeight: "300" }}>
            {credit}
          </MuiLink>
        </Box>
      </Box>
      <Box style={{ textAlign: "center", marginTop: "1rem" }}>
        <Typography variant="h4" gutterBottom style={{ fontSize: isLargeScreen ? "2.2rem" : "1.6rem" }}>
          Thank you for using our application!
        </Typography>
        <Typography variant="body1" gutterBottom>
          We hope to see you again soon.
        </Typography>
        <Button variant="contained" component={Link} to="/auth" style={{ marginTop: "1rem", backgroundColor: "#ff6600" }}>
          Sign In
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default LogoutPage;
