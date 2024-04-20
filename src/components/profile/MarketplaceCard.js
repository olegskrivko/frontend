import React from "react";
import { Card, CardContent, Typography, Button, IconButton, Avatar, Box, Divider } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { SportsCricketSharp } from "@mui/icons-material";

const MarketplaceCard = ({ seller }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem" }}>
        <Avatar alt={seller.businessName} src={seller.logo} />
        <IconButton aria-label="favorite">
          <FavoriteIcon />
        </IconButton>

        {/* <Box sx={{ width: "16px", backgroundColor: "darkblue", height: "50px", margin: "8px", borderBottomRightRadius: "6px", borderBottomLeftRadius: "6px" }}></Box>
        <Box
          sx={{
            width: "16px",
            backgroundColor: "darkblue",
            height: "50px",
            margin: "8px",
            transform: "rotate(0deg)", // Adjust the angle as needed
            borderBottomRightRadius: "6px",
            borderBottomLeftRadius: "6px",
          }}
        ></Box>
        <Box
          sx={{
            width: "16px",
            backgroundColor: "darkblue",
            height: "50px",
            margin: "8px",
            transform: "rotate(-1deg)", // Adjust the angle as needed
            borderBottomRightRadius: "6px",
            borderBottomLeftRadius: "6px",
          }}
        ></Box>
        <Box
          sx={{
            width: "16px",
            backgroundColor: "darkblue",
            height: "50px",
            margin: "8px",
            transform: "rotate(-2deg)", // Adjust the angle as needed
            borderBottomRightRadius: "6px",
            borderBottomLeftRadius: "6px",
          }}
        ></Box>
        <Box
          sx={{
            width: "16px",
            backgroundColor: "darkblue",
            height: "50px",
            margin: "8px",
            transform: "rotate(-3deg)", // Adjust the angle as needed
            borderBottomRightRadius: "6px",
            borderBottomLeftRadius: "6px",
          }}
        ></Box>
        <Box
          sx={{
            width: "16px",
            backgroundColor: "darkblue",
            height: "50px",
            margin: "8px",
            transform: "rotate(-4deg)", // Adjust the angle as needed
            borderBottomRightRadius: "6px",
            borderBottomLeftRadius: "6px",
          }}
        ></Box>
        <Box
          sx={{
            width: "16px",
            backgroundColor: "darkblue",
            height: "50px",
            margin: "8px",
            transform: "rotate(-5deg)", // Adjust the angle as needed
            borderBottomRightRadius: "6px",
            borderBottomLeftRadius: "6px",
          }}
        ></Box>
        <Box
          sx={{
            width: "16px",
            backgroundColor: "darkblue",
            height: "50px",
            margin: "8px",
            transform: "rotate(-10deg)", // Adjust the angle as needed
            borderBottomRightRadius: "6px",
            borderBottomLeftRadius: "6px",
          }}
        ></Box> */}
      </Box>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {seller.businessName}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {seller.mainProducts.join(", ")}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {seller.description}
        </Typography>
        <Divider sx={{ my: "0.5rem" }} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LocationOnIcon sx={{ marginRight: "0.5rem" }} />
          <Typography variant="body2" color="text.secondary">
            {seller.location}
          </Typography>
        </Box>
        {seller.certified && (
          <Box sx={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}>
            <VerifiedUserIcon sx={{ marginRight: "0.5rem" }} />
            <Typography variant="body2" color="text.secondary">
              Certified Seller
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default MarketplaceCard;
