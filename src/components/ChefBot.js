import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import ChatIcon from "@mui/icons-material/Chat";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import ChefAvatar from "../images/avatar2.jpg";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SendIcon from "@mui/icons-material/Send";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { List, Button, ListItem, ListItemText, CircularProgress, Grow } from "@mui/material";
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
      <TextField
        InputProps={{
          disableUnderline: true, // Remove the line
          endAdornment: <SendIcon sx={{ color: "gray", cursor: "pointer", marginLeft: "0.5rem" }} />, // Add icon on the right
        }}
        sx={{ padding: "0.6rem 1.8rem" }}
        id="outlined-basic"
        placeholder="Type your message here"
        fullWidth
        multiline
        variant="standard"
      />
    </Box>
  );
};

const ChefBot = () => {
  const [showFirstMessage, setShowFirstMessage] = useState(true);
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [showThirdMessage, setShowThirdMessage] = useState(false);

  useEffect(() => {
    // Hide the first message after 2 seconds
    const timeout1 = setTimeout(() => {
      setShowFirstMessage(false);
    }, 3000);

    // Show the second message after 2 seconds
    const timeout2 = setTimeout(() => {
      setShowSecondMessage(true);
    }, 4000);

    // Hide the second message after 5 seconds
    const timeout3 = setTimeout(() => {
      setShowSecondMessage(false);
    }, 7000);

    // Show the third message after 5 seconds
    const timeout4 = setTimeout(() => {
      setShowThirdMessage(true);
    }, 8000);

    // Hide the third message after 8 seconds
    const timeout5 = setTimeout(() => {
      setShowThirdMessage(false);
    }, 16000);

    // Clear the timeouts on component unmount
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
    };
  }, []);

  // useEffect(() => {
  //   // Hide the third message after 10 seconds
  //   const timeout = setTimeout(() => {
  //     setShowThirdMessage(false);
  //   }, 20000);

  //   return () => clearTimeout(timeout);
  // }, [showThirdMessage]);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "end", marginRight: "1rem" }}>
          {showFirstMessage && (
            <Grow direction="left" in={showFirstMessage} timeout={1000}>
              {/* < sx={{ marginBottom: "0.5rem", borderBottomRightRadius: "30px", borderTopRightRadius: "0" }}> */}
              <Card sx={{ marginBottom: "0.5rem", borderBottomRightRadius: "30px", borderTopRightRadius: "0" }}>
                <CardContent sx={{ paddingBottom: "1rem !important", paddingTop: "1rem !important" }}>
                  <Typography fontSize="small" variant="body1">
                    Hello there!
                    <span role="img" aria-label="wave">
                      👋
                    </span>
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          )}
          {showSecondMessage && (
            <Grow direction="left" in={showSecondMessage} timeout={1000}>
              <Card sx={{ marginBottom: "0.5rem", borderBottomRightRadius: "30px", borderTopRightRadius: "0" }}>
                <CardContent sx={{ paddingBottom: "1rem !important", paddingTop: "1rem !important" }}>
                  <Typography sx={{ maxInlineSize: "200px", minInlineSize: "100px" }} fontSize="small" variant="body1">
                    How can I assist you with your cooking?
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          )}

          {showThirdMessage && (
            <Grow direction="left" in={showThirdMessage} timeout={1000}>
              <Card sx={{ marginBottom: "0.5rem", borderBottomRightRadius: "30px", borderTopRightRadius: "0" }}>
                <CardContent sx={{ paddingBottom: "1rem !important", paddingTop: "1rem !important" }}>
                  <Typography sx={{ maxInlineSize: "200px", minInlineSize: "100px" }} fontSize="small" variant="body1">
                    Feel free to ask anything about this dish!
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          )}
        </Box>
        <Avatar sx={{ width: 100, height: 100, border: "2px solid #dadada" }} onClick={handleClick}>
          <img src={ChefAvatar} alt="Chef" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Avatar>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
              <Avatar sx={{ width: "62px", height: "62px", position: "relative" }} onClick={handleClick}>
                <img src={ChefAvatar} alt="Chef" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Avatar>
              <Box sx={{ width: "12px", height: "12px", background: "lightgreen", border: "2px solid white", borderRadius: "50%", position: "absolute", left: "72px", top: "64px" }}></Box>
              <Box sx={{ paddingLeft: "1rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start" }}>
                <DialogTitle sx={{ padding: "0" }}>ChefBot</DialogTitle>
                <Typography variant="body2" color="textSecondary" sx={{ padding: "0" }}>
                  Online
                </Typography>
              </Box>
              <IconButton
                aria-label="Close"
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "#FFFFFF", // Customize as needed
                }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </DialogContent>
          <DialogContent sx={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}>
            <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
              <Avatar sx={{ width: "2rem", height: "2rem", position: "relative" }} onClick={handleClick}>
                <img src={ChefAvatar} alt="Chef" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Avatar>
              <Typography variant="body2" sx={{ fontSize: "0.8rem", fontWeight: "500", paddingLeft: "0.5rem" }}>
                ChefBot
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ marginTop: "1rem", backgroundColor: "white", padding: "0.8rem", borderBottomLeftRadius: "20px", borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}>
              Hello there!
              <span role="img" aria-label="wave">
                👋
              </span>
              It's nice to meet you!
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "1rem", backgroundColor: "white", padding: "0.8rem", borderBottomLeftRadius: "20px", borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}>
              How can I assist you with your cooking? Please use the navigation below or ask me anything about this recipe.
            </Typography>
            <Box sx={{ marginTop: "1rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <Box>
                <Chip sx={{ background: "white", border: "1px solid orange", cursor: "pointer" }} label="📃 Similar recipes" />
              </Box>
              <Box>
                <Chip sx={{ marginTop: "0.6rem", background: "white", border: "1px solid orange", cursor: "pointer" }} label="📖 History of the recipe" />
              </Box>
              <Box>
                <Chip sx={{ marginTop: "0.6rem", background: "white", border: "1px solid orange", cursor: "pointer" }} label="🪄 Tips and Tricks" />
              </Box>
            </Box>
            {/* Add your chat component here */}
            {/* <BasicTextFields /> */}
            {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
          </DialogContent>
          <DialogContent sx={{ backgroundColor: "white", padding: "0" }}>
            <BasicTextFields />
          </DialogContent>
          <DialogContent sx={{ backgroundColor: "rgba(0, 0, 0, 0.04)", padding: "0.6rem" }}>
            <Typography variant="body2" sx={{ fontWeight: "600", textAlign: "center", fontSize: "0.6rem" }}>
              Powered by ChatGPT
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "center", fontSize: "0.6rem" }}>
              ChatGPT can make mistakes. Consider checking important information.
            </Typography>
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
};

export default ChefBot;
// import React, { useState, useEffect } from "react";
// import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
// import ChefAvatar from "../images/avatar2.jpg";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Card from "@mui/material/Card";

// // const BasicTextFields = () => {
// //   return (
// //     <Box
// //       component="form"
// //       sx={{
// //         width: "100%",
// //       }}
// //       noValidate
// //       autoComplete="off"
// //     >
// //       <TextField id="outlined-basic" placeholder="Ask something..." fullWidth variant="outlined" />
// //     </Box>
// //   );
// // };

// const ChefBot = () => {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const initialMessages = ["Hello! I am a chatbot.", "How can I assist you with your cooking queries?"];

//   const handleClick = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setMessages(initialMessages);
//     }, 5000); // Show initial messages after 5 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row-reverse" }}>
//         <Avatar sx={{ width: 100, height: 100, border: "2px solid #dadada", marginBottom: "10px" }} onClick={handleClick}>
//           <img src={ChefAvatar} alt="Chef" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//         </Avatar>
//         <Card sx={{ padding: "6px" }}>
//           {messages.map((message, index) => (
//             <Paper sx={{ padding: "8px 0", marginBottom: "8px" }}>
//               <Typography key={index} variant="body1" sx={{ textAlign: "center", marginBottom: "10px" }}>
//                 {message}
//               </Typography>
//             </Paper>
//           ))}
//           <TextField id="outlined-basic" size="small" placeholder="Ask something..." fullWidth variant="outlined" />
//         </Card>
//       </Box>
//     </>
//   );
// };

// export default ChefBot;
