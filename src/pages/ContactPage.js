import React from "react";
import { Container, Typography, TextField, Button, Grid, Link, Paper } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactPage = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h2" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item xs={12} md={6}>
                <MailOutlineIcon fontSize="large" />
                <Typography variant="body1">Email: info@cookify.com</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <PhoneIcon fontSize="large" />
                <Typography variant="body1">Phone: +1234567890</Typography>
              </Grid>
              <Grid item xs={12}>
                <LocationOnIcon fontSize="large" />
                <Typography variant="body1">Address: 123 Luxury Avenue, City, Country</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Contact the Web Team
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MailOutlineIcon fontSize="large" />
                <Typography variant="body1">Email: goodfood@cookify.com</Typography>
              </Grid>
              <Grid item xs={12}>
                <PhoneIcon fontSize="large" />
                <Typography variant="body1">Call: 0207 150 5845</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Advertising Enquiries
      </Typography>
      <Typography variant="body1" gutterBottom>
        Email: catherine.crosby@cookify.com
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Social Media
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener">
            <FacebookIcon fontSize="large" />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.pinterest.com" target="_blank" rel="noopener">
            <PinterestIcon fontSize="large" />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.twitter.com" target="_blank" rel="noopener">
            <TwitterIcon fontSize="large" />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener">
            <InstagramIcon fontSize="large" />
          </Link>
        </Grid>
      </Grid>

      <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} md={8}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Your Name" variant="outlined" size="small" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Your Email" variant="outlined" size="small" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Your Message" variant="outlined" multiline rows={4} size="small" />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" size="large" color="primary" fullWidth>
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;
