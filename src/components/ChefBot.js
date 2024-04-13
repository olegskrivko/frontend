import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import ChatIcon from "@mui/icons-material/Chat";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import ChefAvatar from "../images/avatar.jpg";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const BasicTextFields = () => {
  return (
    <Box
      component="form"
      sx={{
        width: "100%",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" placeholder="Ask something..." fullWidth variant="outlined" />
    </Box>
  );
};

const ChefBot = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Avatar sx={{ width: 100, height: 100, border: "2px solid #dadada" }} onClick={handleClick}>
        <img src={ChefAvatar} alt="Chef" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </Avatar>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ask ChefBot</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Welcome to ChefBot! How can I assist you with your cooking queries?</Typography>
          {/* Add your chat component here */}
          <BasicTextFields />
          {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChefBot;
