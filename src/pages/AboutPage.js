import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="body1">Welcome to our cooking recipe app! We are a team of enthusiastic developers who have come together to create an innovative, modern, and engaging platform for all food lovers.</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Our goal is to provide a seamless experience for users to discover, save, and create delicious recipes from around the world. Whether you're a seasoned chef or just starting out in the kitchen, our app has something for everyone.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              We built this app using the MERN (MongoDB, Express.js, React.js, Node.js) stack to leverage the power of modern web technologies and ensure a fast, responsive, and intuitive user experience.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Thank you for choosing our app to explore the wonderful world of cooking. We hope you enjoy your culinary journey with us!
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
