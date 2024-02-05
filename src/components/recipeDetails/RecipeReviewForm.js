// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// // import { useAuth } from "../middleware/AuthContext";

// import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";

// const RecipeReviewForm = () => {
//   // const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");

//   // const handleRatingChange = (event, newValue) => {
//   //   setRating(newValue);
//   // };

//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };

//   const handleSubmit = () => {
//     // Implement your logic to submit the review
//     // console.log("Rating:", rating);
//     console.log("Comment:", comment);

//     // Clear the form after submission if needed
//     // setRating(0);
//     setComment("");
//   };

//   return (
//     <div>
//       <Typography variant="h6">Leave a Review</Typography>
//       {/* <Rating name="recipe-rating" value={rating} onChange={handleRatingChange} precision={0.5} size="large" /> */}
//       <TextField label="Your Comment" multiline rows={4} fullWidth value={comment} onChange={handleCommentChange} margin="normal" variant="outlined" />
//       <Button variant="contained" color="primary" onClick={handleSubmit}>
//         Submit Review
//       </Button>
//     </div>
//   );
// };

// export default RecipeReviewForm;
// import React, { useState } from "react";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// // import { BASE_URL } from "../../middleware/config";
// import { useAuth } from "../../middleware/AuthContext";

// const RecipeReviewForm = ({ recipeId }) => {
//   const { isAuthenticated } = useAuth();

//   // const API_URL = `${BASE_URL}/recipes/${id}/reviews`;
//   const API_URL = `http://localhost:3000/recipes/${recipeId}/reviews`;
//   const [reviewText, setReviewText] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isAuthenticated()) {
//       // Handle authentication requirement (redirect to login, show a message, etc.)
//       return;
//     }

//     try {
//       setLoading(true);

//       const token = localStorage.getItem("token");
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ text: reviewText }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit review");
//       }

//       // Handle successful review submission (maybe show a success message, refresh the reviews, etc.)
//       console.log("Review submitted successfully");
//       setReviewText(""); // Clear the review text after submission
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Typography variant="h6" gutterBottom>
//         Submit Your Review
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField multiline rows={4} fullWidth label="Your Review" variant="outlined" value={reviewText} onChange={(e) => setReviewText(e.target.value)} required />
//         <Button type="submit" variant="contained" color="primary" disabled={loading} style={{ marginTop: "1rem" }}>
//           {loading ? "Submitting..." : "Submit Review"}
//         </Button>
//         {error && <Typography variant="body2" color="error">{`Error: ${error}`}</Typography>}
//       </form>
//     </>
//   );
// };

// const RecipeReviewForm = ({ recipeId }) => {
//   const [formData, setFormData] = useState({});
//   const [reviewText, setReviewText] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async () => {
//     try {
//       const token = localStorage.getItem("authToken"); // Retrieve the token from where you stored it
//       const response = await fetch(`https://cookbook.cyclic.app/api/recipes/${recipeId}/reviews`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Include your authorization header
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit review");
//       }

//       // Handle success
//       console.log("Review submitted successfully!");
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Typography variant="h6" gutterBottom>
//         Submit Your Review
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField multiline rows={4} fullWidth label="Your Review" variant="outlined" value={reviewText} onChange={(e) => setReviewText(e.target.value)} required />
//         <Button type="submit" variant="contained" color="primary" disabled={loading} style={{ marginTop: "1rem" }}>
//           {loading ? "Submitting..." : "Submit Review"}
//         </Button>
//         {error && <Typography variant="body2" color="error">{`Error: ${error}`}</Typography>}
//       </form>
//     </>
//   );
// };

// export default RecipeReviewForm;
// import React, { useState } from "react";
// import { Typography, TextField, Button } from "@mui/material";

// const RecipeReviewForm = ({ recipeId }) => {
//   const [reviewText, setReviewText] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       // Assuming formData includes the necessary fields for your review
//       const formData = {
//         reviewText,
//         // Include other fields if needed
//       };
//       console.log(formData);

//       const token = localStorage.getItem("token"); // Retrieve the token from where you stored it

//       const response = await fetch(`http://localhost:3000/api/recipes/${recipeId}/reviews`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });
//       console.log(response);

//       if (!response.ok) {
//         throw new Error("Failed to submit review");
//       }

//       // Reset form and handle success
//       setReviewText("");
//       console.log("Review submitted successfully!");
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Typography variant="h6" gutterBottom>
//         Submit Your Review
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField multiline rows={4} fullWidth label="Your Review" variant="outlined" value={reviewText} onChange={(e) => setReviewText(e.target.value)} required />
//         <Button type="submit" variant="contained" color="primary" disabled={loading} style={{ marginTop: "1rem" }}>
//           {loading ? "Submitting..." : "Submit Review"}
//         </Button>
//         {error && <Typography variant="body2" color="error">{`Error: ${error}`}</Typography>}
//       </form>
//     </>
//   );
// };

// export default RecipeReviewForm;
import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { useAuth } from "../../middleware/AuthContext";

const RecipeReviewForm = ({ recipeId }) => {
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { obtainAccessToken } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Assuming formData includes the necessary fields for your review
      const formData = {
        reviewText,
        // Include other fields if needed
      };

      // Call your function to obtain an access token (login)
      const accessToken = await obtainAccessToken();
      console.log("accessToken", accessToken);
      // Submit the review with the obtained access token
      const response = await fetch(`http://localhost:3000/api/recipes/${recipeId}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review. Please try again later.");
      }

      // Reset form and handle success
      setReviewText("");
      console.log("Review submitted successfully!");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Submit Your Review
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField multiline rows={4} fullWidth label="Your Review" variant="outlined" value={reviewText} onChange={(e) => setReviewText(e.target.value)} required />
        <Button type="submit" variant="contained" color="primary" disabled={loading} style={{ marginTop: "1rem" }}>
          {loading ? "Submitting..." : "Submit Review"}
        </Button>
        {error && <Typography variant="body2" color="error">{`Error: ${error}`}</Typography>}
      </form>
    </>
  );
};

export default RecipeReviewForm;
