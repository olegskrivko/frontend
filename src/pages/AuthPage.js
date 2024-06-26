// AuthPage.js
import React, { useState } from "react";
import { Container, InputAdornment, IconButton, Grid, Typography, TextField, Button, Link } from "@mui/material";
import { useAuth } from "../middleware/AuthContext"; // Update the import
import { useNavigate, useLocation } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { BASE_URL } from "../middleware/config";

const AuthPage = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { login } = useAuth(); // Use the useAuth hook to access the login function
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "", username: "" });
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin ? `${BASE_URL}/users/login` : `${BASE_URL}/users/register`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Handle error, e.g., show error message to the user
        console.error("Error:", response.statusText);
        return;
      }

      // Handle success, e.g., redirect to the previous page or a default page
      const data = await response.json();
      console.log("Success:", data);

      // Call the login function from the AuthContext to update the user state
      login(data);

      // Redirect back to the previous page or a default page if there's no previous page
      navigate(location.state?.from || "/");

      // Optionally, you can perform other actions after successful login
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <Container component="main" maxWidth="xs" style={{ marginTop: isLargeScreen ? "5rem" : "1rem" }}>
          <Typography variant="h5" textAlign="center">
            {isLogin ? "Sign In" : "Register"}
          </Typography>
          <form onSubmit={handleSubmit}>
            {!isLogin && <TextField margin="normal" fullWidth label="Username" name="username" onChange={handleChange} value={formData.username} required={!isLogin} />}
            <TextField margin="normal" fullWidth label="Email" name="email" type="email" onChange={handleChange} value={formData.email} required />
            {/* <TextField margin="normal" autoComplete="off" fullWidth label="Password" name="password" type="password" onChange={handleChange} value={formData.password} required /> */}
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"} // Toggle type based on showPassword state
              onChange={handleChange}
              value={formData.password}
              required
              InputProps={{
                // Add eye icon button to toggle password visibility
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {!isLogin && (
              <Typography variant="body2" color="textSecondary" gutterBottom>
                By creating an account, you agree to comply with our <Link href="/terms-of-service">terms of service</Link> and adhere to our <Link href="/community-guidelines">community guidelines</Link>.
              </Typography>
            )}

            <Button type="submit" fullWidth variant="contained" color="warning">
              {isLogin ? "Sign In" : "Register"}
            </Button>
            <Typography align="center" variant="body2" sx={{ marginTop: 1 }}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <Link href="#" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Register" : "Sign In"}
              </Link>
            </Typography>
          </form>
        </Container>
      </Grid>
    </Grid>
  );
};

export default AuthPage;
