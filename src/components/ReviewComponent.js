import React from "react";
import { Avatar, Card, CardContent, Typography, Chip, Rating } from "@mui/material";
import { green } from "@mui/material/colors";

const ChatCard = ({ avatarUrl, senderName, user, createdAt, text, timestamp, rating, ratings }) => {
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
  };
  const chipStyle = {
    marginLeft: "8px",
    //backgroundColor: "#424242", // Dark color
    color: "#ffffff", // White text
    backgroundColor: green[500],
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
    alignItems: "center",
    justifyContent: "flex-start",
    // marginLeft: "auto",
    width: "100%", // Take the full width
    //paddingRight: "1rem",
    //backgroundColor: "#212121", // Dark background color
    //padding: "1rem",
    paddingTop: "1rem",
    borderRadius: "8px",
    color: "#ffffff", // White text
    marginTop: "8px", // Adjust the spacing from the message
  };

  const fakeRatings = {
    overall: 4.5,
    taste: 4,
    accuracy: 4.5,
    originality: 3.8,
    visualAppeal: 4,
    ingredients: 4.2,
  };

  return (
    <Card style={cardStyle}>
      <CardContent style={contentStyle}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <Avatar alt={user.username} src={user.username} style={avatarStyle} />
          <Typography variant="subtitle1" style={{ display: "flex" }}>
            {user.username}
          </Typography>
          {/* <Chip secondary label="Recipe Wizard" style={chipStyle} color="primary" /> */}
          <Chip secondary="true" label="Recipe Wizard" style={chipStyle} color="primary" />
        </div>

        <Typography variant="body1" color="textSecondary" style={{ marginBottom: "8px" }}>
          {text}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {createdAt}
        </Typography>
        {fakeRatings && (
          <div style={ratingsContainerStyle}>
            <Chip size="small" label={`Taste: ${fakeRatings.taste}`} style={chipStyleRating} />
            <Chip size="small" label={`Accuracy: ${fakeRatings.accuracy}`} style={chipStyleRating} />
            <Chip size="small" label={`Originality: ${fakeRatings.originality}`} style={chipStyleRating} />
            <Chip size="small" label={`Visual Appeal: ${fakeRatings.visualAppeal}`} style={chipStyleRating} />
            <Chip size="small" label={`Ingredients: ${fakeRatings.ingredients}`} style={chipStyleRating} />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const ReviewComponent = ({ reviewData }) => {
  // console.log("reviewDatareviewDatareviewData", reviewData);

  // Example review data with ratings
  // const reviewData = [
  //   {
  //     avatarUrl: "url_to_avatar_1",
  //     senderName: "John Doe",
  //     message: "This recipe was absolutely delicious! The combination of flavors was perfect, and the presentation was top-notch. I loved how easy it was to follow the instructions, and the end result exceeded my expectations. It quickly became a family favorite, and I'll be sharing it with friends. I highly recommend trying this recipe. Can't wait to explore more recipes from this chef!",
  //     timestamp: "3 days ago",
  //     rating: 5, // Rating value for the review
  //   },
  //   {
  //     avatarUrl: "url_to_avatar_2",
  //     senderName: "Jane Smith",
  //     message: "I thoroughly enjoyed preparing and savoring this dish. The taste and texture were superb, and the visual appeal was impressive. The step-by-step instructions made the cooking process a breeze, even for someone like me who is not an expert chef. I appreciate the creativity and effort put into creating this recipe. Looking forward to trying more recipes from this talented chef!",
  //     timestamp: "1 week ago",
  //     rating: 4, // Rating value for the review
  //   },
  //   // Add more review messages with ratings here
  // ];

  return (
    <div>
      {reviewData.map((review, index) => (
        <ChatCard key={index} {...review} />
      ))}
    </div>
  );
};

export default ReviewComponent;
