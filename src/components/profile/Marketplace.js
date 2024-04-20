// import React, { useState } from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";

// const Marketplace = () => {
//   const [tabValue, setTabValue] = useState(0);

//   const handleChangeTab = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   const handleAddProduct = () => {
//     // Logic to add product
//     console.log("Product added");
//   };

//   const handleOrderClick = (orderId) => {
//     // Logic to handle order click
//     console.log(`Order clicked: ${orderId}`);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Tabs value={tabValue} onChange={handleChangeTab} centered>
//         <Tab label="Manage Products" />
//         <Tab label="View Orders" />
//       </Tabs>
//       <TabPanel value={tabValue} index={0}>
//         <Typography variant="h6" gutterBottom>
//           Add New Product
//         </Typography>
//         <TextField label="Product Name" fullWidth margin="normal" />
//         <TextField label="Category" fullWidth margin="normal" />
//         <TextField label="Amount" fullWidth margin="normal" />
//         <TextField label="Price" fullWidth margin="normal" />
//         <TextField label="Location" fullWidth margin="normal" />
//         <Button variant="contained" color="primary" onClick={handleAddProduct}>
//           Add Product
//         </Button>
//       </TabPanel>
//       <TabPanel value={tabValue} index={1}>
//         <Typography variant="h6" gutterBottom>
//           Orders
//         </Typography>
//         <OrderCard orderId="123" onClick={handleOrderClick} />
//         {/* Render more OrderCard components for each order */}
//       </TabPanel>
//     </Box>
//   );
// };

// const TabPanel = (props) => {
//   const { children, value, index, ...other } = props;

//   return (
//     <div role="tabpanel" hidden={value !== index} id={`marketplace-tabpanel-${index}`} aria-labelledby={`marketplace-tab-${index}`} {...other}>
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography component="div">{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// };

// const OrderCard = ({ orderId, onClick }) => {
//   const handleOrderClick = () => {
//     onClick(orderId);
//   };

//   return (
//     <Paper elevation={3} style={{ padding: "20px", marginBottom: "10px" }}>
//       <Typography variant="h6" gutterBottom>
//         Order ID: {orderId}
//       </Typography>
//       <Button variant="contained" color="primary" onClick={handleOrderClick}>
//         View Order
//       </Button>
//     </Paper>
//   );
// };

// export default Marketplace;
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const fakeProducts = [
  { id: 1, name: "Apples", category: "Produce", amount: 10, price: 2.5, location: "Farmers Market" },
  { id: 2, name: "Eggs", category: "Dairy & Protein", amount: 20, price: 3.0, location: "Local Farm" },
  { id: 3, name: "Bread", category: "Bakery & Sweets", amount: 5, price: 4.5, location: "Artisan Bakery" },
];

const fakeOrders = [
  { id: 1, productName: "Apples", quantity: 2, totalPrice: 5.0, status: "Pending" },
  { id: 2, productName: "Bread", quantity: 1, totalPrice: 4.5, status: "Shipped" },
];

const Marketplace = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddProduct = () => {
    // Logic to add product
    console.log("Product added");
    handleCloseDialog();
  };

  const handleOrderClick = (orderId) => {
    // Logic to handle order click
    console.log(`Order clicked: ${orderId}`);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={tabValue} onChange={handleChangeTab} centered>
        <Tab label="Manage Products" />
        <Tab label="View Orders" />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <Typography variant="h6" gutterBottom>
          Existing Products
        </Typography>
        {fakeProducts.map((product) => (
          <Paper key={product.id} elevation={3} style={{ padding: "20px", marginBottom: "10px" }}>
            <Typography variant="h6" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Category: {product.category}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Amount: {product.amount}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Price: ${product.price}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Location: {product.location}
            </Typography>
          </Paper>
        ))}
        <Button variant="contained" color="primary" onClick={handleOpenDialog}>
          Add Product
        </Button>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogContent>
            {/* Form fields for adding new product */}
            <TextField label="Product Name" fullWidth margin="normal" />
            <TextField label="Category" fullWidth margin="normal" />
            <TextField label="Amount" fullWidth margin="normal" />
            <TextField label="Price" fullWidth margin="normal" />
            <TextField label="Location" fullWidth margin="normal" />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleAddProduct} color="primary">
              Add Product
            </Button>
          </DialogActions>
        </Dialog>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Typography variant="h6" gutterBottom>
          Orders
        </Typography>
        {fakeOrders.map((order) => (
          <Paper key={order.id} elevation={3} style={{ padding: "20px", marginBottom: "10px" }}>
            <Typography variant="h6" gutterBottom>
              Product: {order.productName}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Quantity: {order.quantity}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Total Price: ${order.totalPrice}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Status: {order.status}
            </Typography>
          </Paper>
        ))}
      </TabPanel>
    </Box>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`marketplace-tabpanel-${index}`} aria-labelledby={`marketplace-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default Marketplace;
