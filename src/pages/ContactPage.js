import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Box, List, ListItem, ListItemIcon, TextField, Button, Grid, Paper } from "@mui/material";

import { Link as MuiLink } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

// Import React MUI Icons
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

// Import SVG Images
import influencerImg from "../images/influencer.jpg";
import contactImg from "../images/get-in-touch.png";
import chefImg from "../images/chef.jpg";

const ContactPage = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Typography variant="h5" sx={{ mb: 3 }} gutterBottom style={{ textAlign: "left" }}>
            Partner With Us
          </Typography>

          <Typography variant="body1" paragraph style={{ textAlign: "left" }}>
            Are you a passionate cooking influencer or a brand seeking collaboration opportunities? We'd love to partner with you!
          </Typography>
          {/* <Typography variant="body1" paragraph style={{ textAlign: "left" }}>
            At <strong>Cookify</strong>, we're committed to promoting culinary excellence and fostering meaningful connections within the food community. Whether you're looking to showcase your expertise, share your unique perspective, or promote your brand, we offer various partnership opportunities tailored to meet your needs.
          </Typography> */}
          <Typography variant="body1" paragraph style={{ textAlign: "left" }}>
            Whether you're looking to showcase your expertise, share your unique perspective, or promote your brand, we offer various partnership opportunities tailored to meet your needs.
          </Typography>
          {/* <Typography variant="body1" paragraph style={{ textAlign: "left" }}>
            Join us in celebrating the art of cooking, exploring new flavors, and inspiring food lovers worldwide. Let's create something amazing together!
          </Typography> */}
          {/* <Typography variant="body1" paragraph style={{ textAlign: "left" }}>
            For partnership inquiries, please reach out to us at{" "}
            <strong>
              <a href="mailto:cookify@gmail.com" style={{ textDecoration: "none", color: "#000" }}>
                cookify@gmail.com
              </a>
            </strong>
          </Typography> */}
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CardMedia
              component="img"
              src={influencerImg}
              alt="Image Description"
              style={{
                width: "auto",
                maxHeight: "280px",
                // objectFit: "cover",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5} order={{ xs: 2, md: 1 }}>
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CardMedia
              component="img"
              src={chefImg}
              alt="Image Description"
              style={{
                width: "auto",
                maxHeight: "280px",
                // objectFit: "cover",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={7} lg={7} order={{ xs: 1, md: 2 }}>
          <Typography variant="h5" sx={{ mb: 3 }} gutterBottom style={{ textAlign: "right" }}>
            Further Collaboration Opportunities
          </Typography>

          <Typography variant="body1" style={{ textAlign: "right" }}>
            Additionally, we're open to exploring other collaboration opportunities including visionary branding, development partnerships, and more.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Typography variant="h5" sx={{ mb: 3 }} gutterBottom style={{ textAlign: "left" }}>
            Get In Touch
          </Typography>

          <Typography variant="body1" style={{ textAlign: "left" }}>
            We value your feedback, inquiries, and suggestions. Whether you have a question about our services, want to provide feedback, or simply want to say hello, we’d love to hear from you.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }} style={{ textAlign: "left" }}>
            Additionally, if you come across any mistakes or errors on our platform or have any concerns regarding the source of a recipe or intellectual property rights, please don't hesitate to contact us.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CardMedia
              component="img"
              src={contactImg}
              alt="Image Description"
              style={{
                width: "auto",
                maxHeight: "280px",
                // objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid item xs={12} md={12} sx={{ paddingBottom: "1rem !important" }}>
        <Typography variant="h5" sx={{ m: 3, textAlign: "center" }} gutterBottom>
          Policies & Community Guidelines
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ textAlign: "center" }}>
          Explore our policies and community guidelines to learn about how we collect and protect your data, community rules, and more. For detailed information, please refer to our links down below.
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ paddingTop: "0 !important" }}>
          <List sx={{ paddingBottom: "0 !important" }}>
            <ListItem>
              <ListItemIcon sx={{ marginRight: "-20px" }}>
                <LocalFireDepartmentIcon sx={{ color: "#ff6600" }} />
              </ListItemIcon>
              <Link href="/privacy-policy" rel="noopener">
                <Typography variant="body1">Privacy Policy</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ marginRight: "-20px" }}>
                <LocalFireDepartmentIcon sx={{ color: "#ff6600" }} />
              </ListItemIcon>
              <Link href="/terms-of-service" rel="noopener">
                <Typography variant="body1">Terms of Service</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ marginRight: "-20px" }}>
                <LocalFireDepartmentIcon sx={{ color: "#ff6600" }} />
              </ListItemIcon>
              <Link href="/cookie-policy" rel="noopener">
                <Typography variant="body1">Cookie Policy</Typography>
              </Link>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ marginRight: "-20px" }}>
                <LocalFireDepartmentIcon sx={{ color: "#ff6600" }} />
              </ListItemIcon>
              <Link href="/data-protection-policy" rel="noopener">
                <Typography variant="body1">Data Protection Policy</Typography>
              </Link>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ marginRight: "-20px" }}>
                <LocalFireDepartmentIcon sx={{ color: "#ff6600" }} />
              </ListItemIcon>
              <Link href="/disclaimer" rel="noopener">
                <Typography variant="body1">Disclaimer</Typography>
              </Link>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ marginRight: "-20px" }}>
                <LocalFireDepartmentIcon sx={{ color: "#ff6600" }} />
              </ListItemIcon>
              <Link href="/community-guidelines" rel="noopener">
                <Typography variant="body1">Community Guidelines</Typography>
              </Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Social Media
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <MuiLink href="https://www.facebook.com" target="_blank" rel="noopener">
              <FacebookIcon fontSize="large" style={{ color: "#ff6600" }} />
            </MuiLink>
          </Grid>
          <Grid item>
            <MuiLink href="https://www.instagram.com" target="_blank" rel="noopener">
              <InstagramIcon fontSize="large" style={{ color: "#ff6600" }} />
            </MuiLink>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={12} sx={{ textAlign: "center" }}>
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }} gutterBottom>
          Contact Information
        </Typography>

        <Grid container spacing={2} sx={{ mb: 5 }} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: "2rem 0", backgroundColor: "#F0F4F9" }}>
              <MailIcon fontSize="large" sx={{ color: "#ff6600" }} />

              <Typography variant="body1">
                Email:{" "}
                <strong>
                  <a href="mailto:cookify@gmail.com" style={{ textDecoration: "none", color: "#000" }}>
                    cookify@gmail.com
                  </a>
                </strong>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: "2rem 0", backgroundColor: "#F0F4F9" }}>
              <PhoneIcon fontSize="large" sx={{ color: "#ff6600" }} />
              <Typography variant="body1">
                Phone: <strong>+371 7778899</strong>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: "2rem 0", backgroundColor: "#F0F4F9" }}>
              <LocationOnIcon fontSize="large" sx={{ color: "#ff6600" }} />
              <Typography variant="body1">
                Location: <strong>Latvia, Riga</strong>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;
