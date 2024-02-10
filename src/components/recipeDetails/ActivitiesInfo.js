// import React from "react";
// import { Card, CardContent, Typography, Grid, Box, Avatar, Chip } from "@mui/material";
// import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
// import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
// import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
// import PoolIcon from "@mui/icons-material/Pool";
// import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
// import HikingIcon from "@mui/icons-material/Hiking";

// const ActivityCard = ({ activity, time }) => {
//   const iconMap = {
//     Running: <DirectionsRunIcon fontSize="large" />,
//     Bicycling: <DirectionsBikeIcon fontSize="large" />,
//     Walking: <DirectionsWalkIcon fontSize="large" />,
//     Swimming: <PoolIcon fontSize="large" />,
//     Yoga: <SelfImprovementIcon fontSize="large" />,
//     Hiking: <HikingIcon fontSize="large" />,
//   };

//   return (
//     <Card>
//       <CardContent>
//         <Grid container spacing={2} alignItems="center">
//           <Grid item>
//             <Avatar sx={{ backgroundColor: "#556574" }}>{iconMap[activity]}</Avatar>
//           </Grid>
//           <Grid item>
//             <Typography variant="h6">{activity}</Typography>
//             <Typography variant="body2" color="textSecondary">
//               {`Time needed: ${time} minutes`}
//             </Typography>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };

// const ActivitiesInfo = ({ totalCalories }) => {
//   console.log("totalCalories", totalCalories);
//   return (
//     <Box mt={3}>
//       <Grid container spacing={3}>
//         <Grid item xs={6} sm={6} md={4}>
//           <ActivityCard activity="Running" time={30} />
//         </Grid>
//         <Grid item xs={6} sm={6} md={4}>
//           <ActivityCard activity="Bicycling" time={45} />
//         </Grid>
//         <Grid item xs={6} sm={6} md={4}>
//           <ActivityCard activity="Walking" time={60} />
//         </Grid>
//         <Grid item xs={6} sm={6} md={4}>
//           <ActivityCard activity="Swimming" time={40} />
//         </Grid>
//         <Grid item xs={6} sm={6} md={4}>
//           <ActivityCard activity="Yoga" time={60} />
//         </Grid>
//         <Grid item xs={6} sm={6} md={4}>
//           <ActivityCard activity="Hiking" time={60} />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default ActivitiesInfo;

import React from "react";
import { Card, CardContent, Typography, Grid, Box, Avatar } from "@mui/material";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import PoolIcon from "@mui/icons-material/Pool";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import HikingIcon from "@mui/icons-material/Hiking";

// const ActivityCard = ({ activity, time }) => {
//   const iconMap = {
//     Running: <DirectionsRunIcon fontSize="large" />,
//     Bicycling: <DirectionsBikeIcon fontSize="large" />,
//     Walking: <DirectionsWalkIcon fontSize="large" />,
//     Swimming: <PoolIcon fontSize="large" />,
//     Yoga: <SelfImprovementIcon fontSize="large" />,
//     Hiking: <HikingIcon fontSize="large" />,
//   };

//   return (
//     <Card>
//       <CardContent>
//         <Grid container spacing={2} alignItems="center">
//           <Grid item>
//             <Avatar sx={{ backgroundColor: "#556574" }}>{iconMap[activity]}</Avatar>
//           </Grid>
//           <Grid item>
//             <Typography variant="h6">{activity}</Typography>
//             <Typography variant="body2" color="textSecondary">
//               {`Time needed: ${time} minutes`}
//             </Typography>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };

// const ActivitiesInfo = ({ totalCalories }) => {
//   const activityData = [
//     { activity: "Running", caloriesPerMinute: 10 },
//     { activity: "Bicycling", caloriesPerMinute: 8 },
//     { activity: "Walking", caloriesPerMinute: 5 },
//     { activity: "Swimming", caloriesPerMinute: 7 },
//     { activity: "Yoga", caloriesPerMinute: 3 },
//     { activity: "Hiking", caloriesPerMinute: 6 },
//   ];

//   return (
//     <Box mt={3}>
//       <Grid container spacing={3}>
//         {activityData.map(({ activity, caloriesPerMinute }) => (
//           <Grid item xs={6} sm={6} md={4} key={activity}>
//             <ActivityCard activity={activity} time={(totalCalories / caloriesPerMinute).toFixed(2)} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

const ActivityCard = ({ activity, time }) => {
  const iconMap = {
    Running: <DirectionsRunIcon fontSize="large" />,
    Bicycling: <DirectionsBikeIcon fontSize="large" />,
    Walking: <DirectionsWalkIcon fontSize="large" />,
    Swimming: <PoolIcon fontSize="large" />,
    Yoga: <SelfImprovementIcon fontSize="large" />,
    Hiking: <HikingIcon fontSize="large" />,
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar sx={{ backgroundColor: "#556574" }}>{iconMap[activity]}</Avatar>
          </Grid>
          <Grid item>
            <Typography variant="h6">{activity}</Typography>
            <Typography variant="body2" color="textSecondary">
              {/* {`Time needed: ${formatTime(time)}`} */}
              {`${formatTime(time)}`}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const formatTime = (time) => {
  const days = Math.floor(time / (24 * 60));
  const hours = Math.floor((time % (24 * 60)) / 60);
  const minutes = Math.floor(time % 60);

  const formattedTime = [];
  if (days > 0) {
    formattedTime.push(`${days} day${days > 1 ? "s" : ""}`);
  }
  if (hours > 0) {
    formattedTime.push(`${hours} hour${hours > 1 ? "s" : ""}`);
  }
  if (minutes > 0 || (days === 0 && hours === 0)) {
    formattedTime.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
  }

  return formattedTime.join(" ");
};

const ActivitiesInfo = ({ totalCalories }) => {
  const activityData = [
    { activity: "Running", caloriesPerMinute: 10 },
    { activity: "Bicycling", caloriesPerMinute: 8 },
    { activity: "Walking", caloriesPerMinute: 5 },
    { activity: "Swimming", caloriesPerMinute: 7 },
    { activity: "Yoga", caloriesPerMinute: 3 },
    { activity: "Hiking", caloriesPerMinute: 6 },
  ];

  return (
    <Box mt={3}>
      <Grid container spacing={3}>
        {activityData.map(({ activity, caloriesPerMinute }) => (
          <Grid item xs={6} sm={6} md={4} key={activity}>
            <ActivityCard activity={activity} time={(totalCalories / caloriesPerMinute).toFixed(2)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ActivitiesInfo;

// Swimming: As you've already added.
// Yoga: As you've already added.
// Running: As you've already added.
// Bicycling: As you've already added.
// Walking: As you've already added.
// Hiking: This could be added for outdoor enthusiasts.
// Aerobics: A high-energy workout routine.
// Dancing: Different dance styles like Zumba, Hip Hop, or Ballroom.
// Weightlifting: For strength training.
// Rowing: Whether on a rowing machine or in a boat.
// Boxing: A great cardio workout.
// Jump Rope: An excellent cardiovascular exercise.
// Pilates: Similar to yoga, focusing on flexibility and core strength.
// CrossFit: High-intensity functional training.
// Martial Arts: Such as karate, taekwondo, or judo.
// Cycling: Different from bicycling, this could include indoor cycling or spin classes.
// Paddleboarding: A water activity that engages various muscle groups.
// Skiing/Snowboarding: Depending on the season and location.
// Surfing: For those near the coast.
// Rock Climbing: Whether indoors or outdoors.
