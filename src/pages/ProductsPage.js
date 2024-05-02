// import React from "react";
// import { Typography, Grid, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";

// // Importing the placeholder image
// import MapPlaceholder from "../images/mapsplaceholder.jpg";

// const MarketplacePage = () => {
//   // Sample data for demonstration
//   const products = [
//     {
//       id: 1,
//       name: "Chocolate Cake",
//       image: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2024-01-chocolate-cake%2Fchocolate-cake-0632-edit-32",
//       description: "Decadent chocolate cake with rich frosting",
//       price: "$15",
//     },
//     {
//       id: 2,
//       name: "Fresh blueberries",
//       image: "https://www.realsimple.com/thmb/5CMu9Lw88js1QikiAuvtKap_xVU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-store-blueberries-2000-00cda4a2eda74037af3aaf6224cb1912.jpg",
//       description: "Fresh blueberries",
//       price: "$10",
//     },
//     {
//       id: 3,
//       name: "Homemade smoked beef",
//       image: "https://www.meatpoultry.com/ext/resources/MPImages/06-2020/062920/AdobeStock-1-smallest.jpg?height=667&t=1593792463&width=1080",
//       description: "Homemade smoked beef",
//       price: "$12",
//     },
//     {
//       id: 3,
//       name: "Homemade bread",
//       image: "https://www.kingarthurbaking.com/sites/default/files/2020-02/the-easiest-loaf-of-bread-youll-ever-bake.jpg",
//       description: "Homemade bread",
//       price: "$12",
//     },
//     // Add more products as needed
//   ];

//   return (
//     <Grid container spacing={3}>
//       <Grid item xs={12}>
//         <Typography variant="h4" gutterBottom>
//           Locals Farmers Market
//         </Typography>
//       </Grid>
//       {/* Displaying the map placeholder */}
//       {/* <Grid item xs={12}>
//         MapPlaceholder
//       </Grid> */}

//       <div>
//         <img
//           src={MapPlaceholder}
//           alt=""
//           style={{
//             width: "100%",
//             maxHeight: "500px",
//             objectFit: "cover",
//             // borderRadius: "3rem",
//           }}
//         />
//       </div>
//       {/* Displaying the products */}
//       {products.map((product) => (
//         <Grid item xs={12} sm={6} md={4} key={product.id}>
//           <Card>
//             <CardActionArea>
//               {/* Image for the product */}
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={product.image} // Use the image path from the product data
//                 alt={product.name} // Use the product name as alt text
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {product.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {product.description}
//                 </Typography>
//                 <Typography variant="h6" color="text.primary">
//                   {product.price}
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default MarketplacePage;
// import React from "react";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";

// const Sidebar = () => {
//   // Dummy array of categories
//   const categories = ["Produce", "Dairy & Protein", "Bakery & Sweets", "Artisanal Fare", "Beverages", "Essentials"];

//   return (
//     <Grid item xs={3}>
//       <Paper elevation={3} style={{ padding: "20px" }}>
//         <Typography variant="h6" gutterBottom>
//           Categories
//         </Typography>
//         {categories.map((category, index) => (
//           <Typography key={index} variant="body1" gutterBottom>
//             {category}
//           </Typography>
//         ))}
//       </Paper>
//     </Grid>
//   );
// };

// const Content = () => {
//   // Dummy array of content items
//   const contentItems = [
//     { title: "Product 1", description: "Description for Product 1" },
//     { title: "Product 2", description: "Description for Product 2" },
//     { title: "Product 3", description: "Description for Product 3" },
//     // Add more content items as needed
//   ];

//   return (
//     <Grid item xs={9}>
//       <Grid container spacing={2}>
//         {contentItems.map((item, index) => (
//           <Grid key={index} item xs={4}>
//             <Paper elevation={3} style={{ padding: "20px", height: "100%" }}>
//               <Typography variant="h6" gutterBottom>
//                 {item.title}
//               </Typography>
//               <Typography variant="body1" gutterBottom>
//                 {item.description}
//               </Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Grid>
//   );
// };

// const MarketplacePage = () => {
//   return (
//     <Grid container spacing={2}>
//       <Sidebar />
//       <Content />
//     </Grid>
//   );
// };

// export default MarketplacePage;
import React, { useState, useContext } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Slider from "@mui/material/Slider";

import SpaIcon from "@mui/icons-material/Spa";
import HiveIcon from "@mui/icons-material/Hive";
import SetMealIcon from "@mui/icons-material/SetMeal";
import KebabDiningIcon from "@mui/icons-material/KebabDining";
import CakeIcon from "@mui/icons-material/Cake";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import ForestIcon from "@mui/icons-material/Forest";
import EggIcon from "@mui/icons-material/Egg";
import FlagIcon from "@mui/icons-material/Flag";
import RemoveIcon from "@mui/icons-material/Remove";
import GrainIcon from "@mui/icons-material/Grain";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import GrassIcon from "@mui/icons-material/Grass";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import EggAltIcon from "@mui/icons-material/EggAlt";
import RedeemIcon from "@mui/icons-material/Redeem";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import EuroIcon from "@mui/icons-material/Euro";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import WorkOffIcon from "@mui/icons-material/WorkOff";
import GroupsIcon from "@mui/icons-material/Groups";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PersonIcon from "@mui/icons-material/Person";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { EmojiFoodBeverage, LocalMall, Cake, Fastfood, Storefront } from "@mui/icons-material";
import MarketplaceCard from "../components/profile/MarketplaceCard";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentsIcon from "@mui/icons-material/Payments";
import StoreIcon from "@mui/icons-material/Store";
import Drawer from "@mui/material/Drawer";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const sellers = [
  {
    businessName: "Fresh Farms",
    logo: "/path/to/logo1.jpg",
    mainProducts: ["Fresh Vegetables", "Organic Fruits", "Free-Range Eggs"],
    description: "Providing locally grown produce to the community.",
    location: "123 Main Street, City, Country",
    certified: true,
  },
  {
    businessName: "Organic Oasis",
    logo: "/path/to/logo2.jpg",
    mainProducts: ["Farm-Fresh Produce", "Grass-Fed Meat", "Organic Dairy"],
    description: "Bringing organic goodness straight from the farm to your table.",
    location: "789 Elm Street, Town, Country",
    certified: false,
  },
  {
    businessName: "Green Gardens",
    logo: "/path/to/logo3.jpg",
    mainProducts: ["Homegrown Herbs", "Fresh Flowers", "Sustainable Seeds"],
    description: "Cultivating nature's bounty for a greener world.",
    location: "456 Oak Avenue, Village, Country",
    certified: true,
  },
  {
    businessName: "Local Harvest",
    logo: "/path/to/logo4.jpg",
    mainProducts: ["Locally Sourced Produce", "Artisanal Crafts", "Handmade Goods"],
    description: "Supporting local artisans and farmers for a stronger community.",
    location: "101 Pine Street, Hamlet, Country",
    certified: false,
  },
  {
    businessName: "Farm Fresh",
    logo: "/path/to/logo5.jpg",
    mainProducts: ["Farm-to-Table Produce", "Organic Meats", "Fresh Dairy Products"],
    description: "Bringing the farm's bounty straight to your doorstep.",
    location: "789 Maple Road, County, Country",
    certified: true,
  },
  {
    businessName: "Nature's Bounty",
    logo: "/path/to/logo6.jpg",
    mainProducts: ["Fresh Harvest", "Natural Remedies", "Handcrafted Soaps"],
    description: "Harvesting the goodness of nature for a healthier lifestyle.",
    location: "222 Willow Lane, District, Country",
    certified: false,
  },
];

const Sidebar = () => {
  const [minimumScore, setMinimumScore] = useState(0);
  const [maximumDistance, setMaximumDistance] = useState(25);

  const handleMaximumDistanceChange = (event, newValue) => {
    // Update the difficulty state when the slider value changes
    setMaximumDistance(newValue);
  };

  const handleMinimumScoreChange = (event, newValue) => {
    // Update the difficulty state when the slider value changes
    setMinimumScore(newValue);
  };

  // Dummy array of categories
  const categories = [
    { label: "Herbs & Spices", icon: <LocalFloristIcon /> },
    { label: "Berries", icon: <GrainIcon /> },
    { label: "Vegetables", icon: <SpaIcon /> },
    { label: "Honey & Jams", icon: <HiveIcon /> },
    { label: "Meat & Poultry", icon: <EggAltIcon /> },
    { label: "Beverages", icon: <LocalBarIcon /> },
    { label: "Dairy & Eggs", icon: <EggIcon /> },
    { label: "Seafood", icon: <SetMealIcon /> },
    { label: "Bakery & Sweets", icon: <CakeIcon /> },
    { label: "Fruits", icon: <ScatterPlotIcon /> },

    { label: "Grains & Legumes", icon: <GrassIcon /> },

    { label: "Foraged Foods", icon: <ForestIcon /> },
  ];

  return (
    <Box>
      <Box style={{ padding: "20px", maxWidth: "300px" }}>
        <Box>
          <InputLabel sx={{ fontWeight: "500", color: "#000", paddingBottom: "0.5rem" }}>Categories</InputLabel>
          {categories.map((category, index) => (
            <Chip key={index} size="small" icon={category.icon} label={category.label} variant="outlined" style={{ marginBottom: "10px", marginRight: "10px", padding: "0.8rem 0.6rem" }} />
          ))}
        </Box>

        <Box sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
          <InputLabel sx={{ fontWeight: "500", color: "#000", paddingBottom: "0.5rem" }}>Distance {maximumDistance} km</InputLabel>
          <Slider
            sx={{ height: "8px", color: "#ff6600" }}
            value={maximumDistance}
            onChange={handleMaximumDistanceChange}
            //valueLabelDisplay="auto"
            step={5}
            //             // marks={[{ value: 0, label: 0 }, { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5, label: 5 }]}
            min={0}
            max={100}
          />
        </Box>

        <Box>
          <InputLabel sx={{ fontWeight: "500", color: "#000", paddingBottom: "0.5rem" }}>Type of Business</InputLabel>
          <Chip icon={<PersonIcon />} label="Individual seller" size="small" variant="outlined" style={{ marginBottom: "10px", marginRight: "10px", padding: "0.8rem 0.6rem" }} />
          <Chip icon={<StoreIcon />} label="Small brand" size="small" variant="outlined" style={{ marginBottom: "10px", marginRight: "10px", padding: "0.8rem 0.6rem" }} />
          <Chip icon={<GroupsIcon />} label="Family owned" size="small" variant="outlined" style={{ marginBottom: "10px", marginRight: "10px", padding: "0.8rem 0.6rem" }} />
        </Box>

        <Box>
          <InputLabel sx={{ fontWeight: "500", color: "#000", paddingBottom: "0.5rem" }}>Availability</InputLabel>
          <Chip icon={<WorkIcon />} label="Available" size="small" variant="outlined" style={{ marginBottom: "10px", marginRight: "10px", padding: "0.8rem 0.6rem" }} />
          <Chip icon={<WorkHistoryIcon />} label="Paused" size="small" variant="outlined" style={{ marginBottom: "10px", marginRight: "10px", padding: "0.8rem 0.6rem" }} />
          <Chip icon={<WorkOffIcon />} label="On Demand" size="small" variant="outlined" style={{ marginBottom: "10px", marginRight: "10px", padding: "0.8rem 0.6rem" }} />
          <Chip icon={<WorkOutlineIcon />} label="Out of Stock" size="small" variant="outlined" style={{ marginBottom: "10px", marginRight: "10px", padding: "0.8rem 0.6rem" }} />
        </Box>

        {/* <Typography variant="h6" gutterBottom>
          Certifications
        </Typography>
        <Box>
          <Chip icon={<SpaIcon />} label="Organic" size="small" variant="outlined" style={{ marginBottom: "10px", marginRight: "10px" }} />
          <Chip icon={<FlagIcon />} label="Local" size="small" variant="outlined" style={{ marginBottom: "10px", marginRight: "10px" }} />
        </Box> */}

        {/* <Typography variant="h6" gutterBottom>
          Delivery Options
        </Typography> */}

        <Box>
          <InputLabel sx={{ fontWeight: "500", color: "#000", paddingBottom: "0.5rem" }}>Delivery Options</InputLabel>
          <Chip icon={<LocalShippingIcon />} size="small" label="Local pickup" variant="outlined" style={{ marginBottom: "10px", marginRight: "10px", padding: "0.8rem 0.6rem" }} />
          <Chip icon={<RedeemIcon />} size="small" label="Shipping" variant="outlined" style={{ marginBottom: "10px", marginRight: "10px", padding: "0.8rem 0.6rem" }} />
          <Chip icon={<LocalShippingIcon />} size="small" label="Home delivery" variant="outlined" style={{ marginBottom: "10px", marginRight: "10px", padding: "0.8rem 0.6rem" }} />
          <Chip icon={<Storefront />} size="small" label="Farmers market" variant="outlined" style={{ marginBottom: "10px", marginRight: "10px", padding: "0.8rem 0.6rem" }} />
        </Box>

        {/* <Typography variant="h6" gutterBottom>
          Price Range
        </Typography>
        <Box>
          <Chip icon={<EuroIcon />} size="small" label="0.99 $" variant="outlined" style={{ marginBottom: "10px", marginRight: "10px" }} />
          <RemoveIcon />
          <Chip icon={<EuroIcon />} size="small" label="19.99" variant="outlined" style={{ marginBottom: "10px", marginRight: "10px" }} />
        </Box> */}

        <Box sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}>
          <InputLabel sx={{ fontWeight: "500", color: "#000", paddingBottom: "0.5rem" }}>Minimum Score {minimumScore}</InputLabel>
          <Slider
            sx={{ height: "8px", color: "#ff6600" }}
            value={minimumScore}
            onChange={handleMinimumScoreChange}
            //valueLabelDisplay="auto"
            step={1}
            //             // marks={[{ value: 0, label: 0 }, { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5, label: 5 }]}
            min={0}
            max={5}
          />
        </Box>

        {/* <Typography variant="h6" gutterBottom>
          Payment Methods
        </Typography>
        <Box>
          <Chip icon={<PaymentsIcon />} size="small" label="Cash" variant="outlined" style={{ marginBottom: "10px", marginRight: "10px" }} />
          <Chip icon={<CreditCardIcon />} size="small" label="Card" variant="outlined" style={{ marginBottom: "10px", marginRight: "10px" }} />
        </Box> */}
      </Box>
    </Box>
  );
};

const Content = () => {
  // Dummy array of content items
  // const contentItems = [
  //   { title: "🍏 Apple", description: "Fresh and crispy apples, perfect for snacking." },
  //   { title: "🥚 Eggs", description: "Farm-fresh eggs, rich in protein and nutrients." },
  //   { title: "🍞 Bread", description: "Homemade artisan bread, baked daily." },
  //   { title: "🧀 Cheese", description: "Artisanal cheese, aged to perfection." },
  //   { title: "🥩 Steak", description: "Premium cuts of grass-fed beef, tender and flavorful." },
  //   { title: "🍷 Wine", description: "Fine wines from local vineyards, perfect for any occasion." },
  // ];

  return (
    <Grid item xs={9}>
      <Grid container spacing={2}>
        {sellers.map((seller, index) => (
          <Grid key={index} item xs={4}>
            <MarketplaceCard seller={seller} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const ProductsPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <Grid container spacing={2}>
      <Button onClick={handleDrawerToggle} style={{ margin: "8px ", color: "white" }} sx={{ display: { xs: "flex", md: "none", position: "fixed", bottom: "100px", backgroundColor: "orange", justifyContent: "center", alignItems: "center" } }}>
        <KeyboardDoubleArrowRightIcon style={{ margin: "8px " }} />
      </Button>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        variant="temporary"
        sx={{
          display: { xs: "block", md: "none" }, // Show only on small screens
        }}
      >
        <Sidebar />
      </Drawer>
      {/* Button to toggle the drawer */}
      <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} md={9}>
        <Content />
      </Grid>
    </Grid>
  );
};

export default ProductsPage;
// Herbs & Spices: 🌿
// Honey & Jams (including Homemade Jams & Preserves): 🍯
// Meat & Poultry: 🥩
// Vegetables: 🥦
// Fruits: 🍎
// Berries: 🍓
// Bakery & Sweets (combining Bread & Baked Goods with Cakes & Pastries): 🍰
// Beverages: 🥤
// Grains & Legumes: 🌾
// Dairy & Eggs (including Milk & Dairy Products): 🥛
// Foraged Foods (Wild berries, mushrooms, etc.): 🍄
// Seafood: 🦞

// ================
// Herbs & Spices
// Honey & Jams (including Homemade Jams & Preserves)
// Meat & Poultry
// Vegetables
// Fruits
// Berries
// Bakery & Sweets (combining Bread & Baked Goods with Cakes & Pastries)
// Beverages
// Grains & Legumes
// Dairy & Eggs (including Milk & Dairy Products)
// Foraged Foods (Wild berries, mushrooms, etc.)
// Seafood

// Produce

// Fruits
// Vegetables
// Herbs
// Foraged Foods (Wild berries, mushrooms, etc.)
// Dairy & Protein

// Milk & Dairy Products
// Eggs
// Meat & Seafood
// Bakery & Sweets

// Bread & Baked Goods
// Cakes & Pastries
// Homemade Jams & Preserves
// Artisanal Fare

// Specialty Meats & Charcuterie
// Preserves & Condiments
// Honey & Syrups
// Beverages

// Coffee & Tea
// Juices & Drinks
// Alcoholic Beverages
// Essentials

// Grains & Legumes
// Kitchen Supplies
// Seasonings & Spices

// Fresh Produce

// Fruits
// Vegetables
// Herbs
// Foraged Foods (Wild berries, mushrooms, etc.)
// Dairy & Eggs

// Milk
// Cheese
// Yogurt
// Eggs
// Meat & Poultry

// Beef
// Pork
// Poultry (Chicken, turkey, duck, etc.)
// Lamb
// Game Meat (Venison, bison, etc.)
// Seafood

// Fish
// Shellfish (Shrimp, crab, lobster, etc.)
// Bakery & Homemade Goods

// Bread
// Cakes
// Pastries
// Cookies
// Homemade Jams & Preserves
// Artisanal Products

// Smoked Meats
// Preserves
// Pickles & Fermented Foods
// Honey & Bee Products
// Handcrafted Sauces & Condiments
// Beverages

// Coffee
// Tea
// Juices
// Craft Beverages (Craft beer, cider, kombucha, etc.)
// Wine & Spirits
// Grains & Legumes

// Rice
// Quinoa
// Lentils
// Beans
// Flour
// Specialty Foods

// Gluten-Free Products
// Organic Foods
// Vegan & Plant-Based Products
// Ethnic & International Foods
// Home & Kitchen

// Kitchen Tools & Utensils
// Cookware
// Food Storage Containers
// Recipe Books & Guides
// Seasonal & Holiday

// Seasonal Produce
// Holiday Specialties
// Festive Treats & Decorations
// Health & Wellness

// Organic Supplements
// Natural Remedies
// Superfoods
// Herbal Teas
// Farm Supplies

// Seeds & Plants
// Fertilizers
// Gardening Tools
// Livestock Feed
// Community & Events

// Local Farmer's Markets
// Community Events
// Workshops & Classes
// Farm Tours & Experiences

// Distance from Current Location: Users can filter sellers based on their proximity to their current location. This could be implemented using geolocation services or by allowing users to input their location manually.
// Type of Business: Users can filter sellers based on the type of business, such as family-owned, small brand, individual seller, or artisanal producer. This can help users support specific types of businesses they prefer.
// Availability: Users can filter sellers based on their availability, such as whether they collect products on demand or have predefined amounts of products available for sale.
// Product Type: Users can filter sellers based on the type of products they offer, such as fresh produce, dairy products, baked goods, artisanal products, etc. This can help users find sellers that offer the specific products they are interested in.
// Certifications: Users can filter sellers based on certifications they hold, such as organic, fair trade, or locally sourced certifications. This can help users make more informed purchasing decisions based on their preferences for certain certifications.
// Delivery Options: Users can filter sellers based on their delivery options, such as local pickup, home delivery, or shipping. This can help users choose sellers that offer convenient delivery methods for their needs.
// Price Range: Users can filter sellers based on the price range of their products. This can help users find sellers that offer products within their budget.
// Reviews and Ratings: Users can filter sellers based on their reviews and ratings. This can help users identify sellers with high-quality products and excellent customer service.
// Special Offers: Users can filter sellers based on any special offers or promotions they have, such as discounts, bundles, or seasonal sales.
// Payment Methods: Users can filter sellers based on the payment methods they accept, such as credit card, PayPal, or cash on delivery. This can help users choose sellers that offer payment methods they prefer.
