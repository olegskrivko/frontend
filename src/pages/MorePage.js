// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Box, Drawer, Grid, Button, Tabs, Tab, List, ListItem, ListItemText, Typography } from "@mui/material";
// import AboutPage from "./AboutPage";
// import MealsPage from "./Meals";

// function MorePage() {
//   const [tabIndex, setTabIndex] = useState(0);

//   const handleTabChange = (event, newValue) => {
//     setTabIndex(newValue);
//   };
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   const drawerContent = (
//     <Box sx={{ width: 250 }}>
//       <List>
//         <ListItem button component={Link} to="/about">
//           <ListItemText primary="About" />
//         </ListItem>
//         <ListItem button component={Link} to="/faq">
//           <ListItemText primary="FAQs" />
//         </ListItem>
//         <ListItem button component={Link} to="/tips-and-tricks">
//           <ListItemText primary="Tips and Tricks" />
//         </ListItem>
//         <ListItem button component={Link} to="/kitchen-equipment">
//           <ListItemText primary="Kitchen Equipment" />
//         </ListItem>
//         {/* Add more list items for other pages */}
//       </List>
//     </Box>
//   );

//   return (
//     <Grid container spacing={3}>
//       <Drawer
//         anchor="left"
//         open={isDrawerOpen}
//         onClose={handleDrawerToggle}
//         variant="temporary"
//         sx={{
//           display: { xs: "block", md: "none" }, // Show only on small screens
//         }}
//       >
//         <Box style={{ padding: "0 1rem" }}>
//           <Tabs value={tabIndex} onChange={handleTabChange} orientation="vertical" variant="scrollable" textColor="primary" indicatorColor="primary" sx={{ marginTop: "1rem" }}>
//             <Tab
//               sx={{ display: "flex", alignItems: "start" }}
//               label={
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <Typography variant="body1">Weight</Typography>
//                 </Box>
//               }
//             />
//             <Tab
//               sx={{ display: "flex", alignItems: "start" }}
//               label={
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <Typography variant="body1">Temperature</Typography>
//                 </Box>
//               }
//             />
//           </Tabs>
//         </Box>
//       </Drawer>
//       <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
//         <Box style={{ padding: "1rem" }}>
//           <Tabs value={tabIndex} onChange={handleTabChange} orientation="vertical" variant="scrollable" textColor="primary" indicatorColor="primary">
//             <Tab
//               sx={{ display: "flex", alignItems: "start" }}
//               label={
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <Typography variant="body1">About Page</Typography>
//                 </Box>
//               }
//             />
//             <Tab
//               sx={{ display: "flex", alignItems: "start" }}
//               label={
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <Typography variant="body1">Prices Page</Typography>
//                 </Box>
//               }
//             />
//           </Tabs>
//         </Box>
//       </Grid>
//       <Grid item xs={12} md={9}>
//         <Button onClick={handleDrawerToggle}>Toggle Sidebar</Button>
//         {tabIndex === 0 && (
//           <Box style={{ padding: "1rem" }}>
//             <Typography variant="body1">
//               <AboutPage />
//             </Typography>
//           </Box>
//         )}
//         {tabIndex === 1 && (
//           <Box style={{ padding: "1rem" }}>
//             <Typography variant="body1">
//               <MealsPage />
//             </Typography>
//           </Box>
//         )}
//       </Grid>
//     </Grid>
//   );
// }

// export default MorePage;
import React, { useState } from "react";
import { Box, Tab, Tabs, Typography, Grid } from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";

function MorePage() {
  const [currentTab, setCurrentTab] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
    navigate(`/more/${newValue}`);
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={3}>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs orientation="vertical" value={currentTab} onChange={handleTabChange} aria-label="Vertical tabs example">
            <Tab label="About" component={Link} to="/more/0" />
            <Tab label="FAQs" component={Link} to="/more/1" />
            <Tab label="Tips and Tricks" component={Link} to="/more/2" />
            <Tab label="Kitchen Equipment" component={Link} to="/more/3" />
            {/* Add more tabs for additional pages */}
          </Tabs>
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default MorePage;
