import React from "react";

// React MUI components
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Carousel from "react-material-ui-carousel";

const TipsCarousel = ({ tips }) => {
  return (
    <Carousel navButtonsAlwaysInvisible={true} stopAutoPlayOnHover={true} indicators={true}>
      {tips.map((tip, index) => (
        <Card key={index} style={{ backgroundColor: "#f2f2f2" }}>
          <CardContent>
            <Typography style={{ fontWeight: "bold" }}>{tip.title}</Typography>
            <Typography>{tip.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
};

export default TipsCarousel;
