import React, { useState } from "react";
import { Avatar, Card, CardContent, Paper, Typography, Chip, Rating, Popover } from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import { green } from "@mui/material/colors";
import { purple } from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormatQuoteSharpIcon from "@mui/icons-material/FormatQuoteSharp";

const fakeRatings = {
  // overall: 4.5,
  taste: 4,
  accuracy: 4.5,
  // originality: 3.8,
  visualAppeal: 4,
  ingredients: 2.2,
  preparation: 4.8,
};

// const getColor = (value) => {
//   // Define color ranges based on the rating value
//   if (value <= 2) {
//     return "#ff8c5a"; // Red for low ratings
//   } else if (value <= 3) {
//     return "#ffb234"; // Orange for mid-low ratings
//   } else if (value <= 4) {
//     return "#ffd934"; // Yellow for mid-range ratings
//   } else if (value <= 4.5) {
//     return "#add633"; // Green for mid-high ratings
//   } else {
//     return "#a0c15a"; // Light green for high ratings
//   }
// };

// const getColor = (value) => {
//   if (value <= 2) {
//     return "#0041c7"; // Red for low ratings
//   } else if (value <= 3) {
//     return "#0160c9"; // Orange for mid-low ratings
//   } else if (value <= 4) {
//     return "#0D85D8"; // Yellow for mid-range ratings
//   } else if (value <= 4.5) {
//     return "#1CA3DE"; // Green for mid-high ratings
//   } else {
//     return "#3ACBEB"; // Light green for high ratings
//   }
// };

// const getColor = (value) => {
//   if (value <= 2) {
//     return "#205072"; // Red for low ratings
//   } else if (value <= 3) {
//     return "#329D9C"; // Orange for mid-low ratings
//   } else if (value <= 4) {
//     return "#56C596"; // Yellow for mid-range ratings
//   } else if (value <= 4.5) {
//     return "#7BE495"; // Green for mid-high ratings
//   } else {
//     return "#CFF4D2"; // Light green for high ratings
//   }
// };

const getColor = (value) => {
  if (value <= 2) {
    return "#08B3E5"; // Red for low ratings
  } else if (value <= 3) {
    return "#0FBED8"; // Orange for mid-low ratings
  } else if (value <= 4) {
    return "#1BD7BB"; // Yellow for mid-range ratings
  } else if (value <= 4.5) {
    return "#22E4AC"; // Green for mid-high ratings
  } else {
    return "#2AF598"; // Light green for high ratings
  }
};

// const getColor = (value) => {
//   if (value <= 2) {
//     return "#6644af"; // Red for low ratings
//   } else if (value <= 3) {
//     return "#4d6fbe"; // Orange for mid-low ratings
//   } else if (value <= 4) {
//     return "#369acd"; // Yellow for mid-range ratings
//   } else if (value <= 4.5) {
//     return "#1ec4dc"; // Green for mid-high ratings
//   } else {
//     return "#07efeb"; // Light green for high ratings
//   }
// };

const BarRating = ({ value, max }) => {
  const containerStyle = {
    marginBottom: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const barContainerStyle = {
    width: "100%",
    height: "5px", // Make the bars thinner
    backgroundColor: "#f0f0f0", // Light background color
    borderRadius: "8px",
    overflow: "hidden",
  };

  const barStyle = {
    width: `${(value / max) * 100}%`,
    height: "100%",
    backgroundColor: getColor(value), // Use getColor function to get the color
    // borderRadius: "8px",
    transition: "width 0.5s ease-in-out", // Add a smooth transition effect
  };

  return (
    <Box style={containerStyle}>
      <div style={barContainerStyle}>
        <div style={barStyle}></div>
      </div>
      {/* <Typography variant="caption" color="textSecondary" align="right">
        {value.toFixed(1)}
      </Typography> */}
    </Box>
  );
};

const MyRatings = ({ ratings }) => {
  return (
    <Paper elevation={3} style={{ padding: "1rem", borderRadius: "12px", boxShadow: "none" }}>
      {/* <Typography variant="body1" gutterBottom>
        Ratings
      </Typography> */}
      {Object.entries(ratings).map(([category, value]) => (
        <Box key={category}>
          <Typography variant="body2">{category.charAt(0).toUpperCase() + category.slice(1)}</Typography>
          <BarRating value={value} max={5} />
        </Box>
      ))}
    </Paper>
  );
};

// const MyRatings = ({ ratings }) => {
//   // Assuming that 'ratings' is an object containing various ratings
//   // For example: { overall: 4.5, taste: 4.5, accuracy: 4.5, ... }
//   // You can adjust the structure based on your actual data

//   return (
//     <Paper elevation={3} style={{ padding: "20px", borderRadius: "12px" }}>
//       <Typography variant="h6" gutterBottom>
//         Ratings
//       </Typography>
//       {Object.entries(ratings).map(([category, value]) => (
//         <Box key={category}>
//           <Typography variant="body1">{category.charAt(0).toUpperCase() + category.slice(1)}:</Typography>
//           <Rating value={value} precision={0.5} readOnly />
//         </Box>
//       ))}
//     </Paper>
//   );
// };

const ChatCard = ({ avatarUrl, senderName, user, createdAt, text, timestamp, rating, ratings }) => {
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  // console.log("useruseruser", user);
  const cardStyle = {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "16px", // You can adjust the spacing as needed
    textAlign: "justify",
  };
  const chipStyleRating = {
    marginRight: "8px",
    marginBottom: "8px",
    backgroundColor: "#424242", // Dark color
    color: "#ffffff", // White text
    fontSize: "0.7rem",
    display: "flex",
    justifyContent: "flex-start",

    // width: "100%",
  };
  const chipStyle = {
    // marginLeft: "8px",
    //backgroundColor: "#424242", // Dark color
    color: "#ffffff", // White text
    // backgroundColor: green[500],
    backgroundColor: purple[800],
    letterSpacing: "2px",
    fontSize: "11px",
  };

  const avatarStyle = {
    marginRight: "12px", // You can adjust the spacing as needed
    textTransform: "Uppercase",
    // marginLeft: "8px",
    //marginTop: "8px", // Push avatar slightly down for better alignment
  };

  const contentStyle = {
    width: "100%", // Fill the remaining space
    marginBottom: "-8px",
  };
  const ratingsContainerStyle = {
    display: "flex",
    flexDirection: "row", // Display chips in a row
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    // marginLeft: "auto",
    width: "100%", // Take the full width
    //paddingRight: "1rem",
    //backgroundColor: "#212121", // Dark background color
    //padding: "1rem",
    paddingTop: "1rem",
    borderRadius: "8px",
    color: "#ffffff", // White text
    // marginTop: "8px", // Adjust the spacing from the message
  };

  const fakeRatings = {
    // overall: 4.5,
    taste: 4,
    accuracy: 1,
    // originality: 3,
    visualAppeal: 4,
    ingredients: 2,
    preparation: 5,
  };

  const handlePopoverOpen = (event) => {
    setPopoverAnchor(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverAnchor(null);
  };

  return (
    <Card style={cardStyle}>
      <CardContent style={contentStyle}>
        <div
          style={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
            }}
          >
            <Avatar alt={user.username} src={user.username} style={avatarStyle} />
            <div
              style={{
                display: "flex",
                alignItems: "start",
                justifyContent: "start",

                // marginBottom: "8px",
                flexDirection: "column", // Changed to column
              }}
            >
              <Chip size="small" secondary="true" label="Recipe Wizard" style={chipStyle} color="primary" />
              <Typography variant="subtitle1" style={{ display: "flex" }}>
                {user.username}
              </Typography>
            </div>
          </div>
          {/* <Tooltip title="Add" placement="top-start"> */}
          <div onClick={handlePopoverOpen}>
            <div style={{ padding: "0.6rem", backgroundColor: "#424242", color: "#fff", borderRadius: "8px" }}>4.3</div>
          </div>
          {/* </Tooltip> */}
          <Popover
            open={Boolean(popoverAnchor)}
            anchorEl={popoverAnchor}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left", // Adjust the horizontal positioning
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right", // Adjust the horizontal positioning
            }}
          >
            <MyRatings ratings={fakeRatings} />
          </Popover>
        </div>

        <Typography variant="body1" color="textSecondary" style={{ marginBottom: "8px" }}>
          <i>{text}</i>
        </Typography>

        {/* Quote Icon */}

        <Typography variant="caption" color="textSecondary">
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </Typography>
        {/* {fakeRatings && (
          <div style={ratingsContainerStyle}>
        
            <Chip size="small" label={`Taste: ${fakeRatings.taste}`} style={chipStyleRating} />
            <Chip size="small" label={`Originality: ${fakeRatings.originality}`} style={chipStyleRating} />
            <Chip size="small" label={`Visual Appeal: ${fakeRatings.visualAppeal}`} style={chipStyleRating} />
     
            <Chip size="small" label={`Accuracy of Instructions: ${fakeRatings.accuracy}`} style={chipStyleRating} />
            <Chip size="small" label={`Ingredients: ${fakeRatings.ingredients}`} style={chipStyleRating} />
            <Chip size="small" label={`Ease of Preparation: ${fakeRatings.preparation}`} style={chipStyleRating} />
      
          </div>
        )} */}
      </CardContent>
    </Card>
  );
};

const ReviewComponent = ({ reviewData }) => {
  return (
    <div>
      {reviewData.map((review, index) => (
        <ChatCard key={index} {...review} />
      ))}
    </div>
  );
};

export default ReviewComponent;
