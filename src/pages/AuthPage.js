// AuthPage.js
import React, { useState } from "react";
import { Container, Typography, TextField, Button, Link } from "@mui/material";
import { useAuth } from "../middleware/AuthContext"; // Update the import
import { useNavigate, useLocation } from "react-router-dom";
import { BASE_URL } from "../middleware/config";

const AuthPage = () => {
  const { login } = useAuth(); // Use the useAuth hook to access the login function
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "", username: "" });

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

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h4">{isLogin ? "Login" : "Register"}</Typography>
      <form onSubmit={handleSubmit}>
        {!isLogin && <TextField margin="normal" fullWidth label="Username" name="username" onChange={handleChange} value={formData.username} required={!isLogin} />}
        <TextField margin="normal" fullWidth label="Email" name="email" type="email" onChange={handleChange} value={formData.email} required />
        <TextField margin="normal" autoComplete="nope" fullWidth label="Password" name="password" type="password" onChange={handleChange} value={formData.password} required />
        <Button type="submit" fullWidth variant="contained" color="primary">
          {isLogin ? "Login" : "Register"}
        </Button>
        <Typography align="center" variant="body2" sx={{ marginTop: 1 }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <Link href="#" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register here" : "Login here"}
          </Link>
        </Typography>
      </form>
    </Container>
  );
};

export default AuthPage;
