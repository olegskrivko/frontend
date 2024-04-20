import React, { useState } from "react";
import { Dialog, Box, DialogTitle, DialogContent, DialogActions, Button, Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import alarmSound from "./bell-ringing-04.mp3";

const CustomModal = ({ open, onClose, title, content }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

// Import the custom modal component

const KitchenAlarmTool = () => {
  const [duration, setDuration] = useState(0);
  // const [selectedSound, setSelectedSound] = useState("");
  const [countdown, setCountdown] = useState(null);
  const [openModal, setOpenModal] = useState(false); // State to control the modal

  // Default sound
  const defaultSound = alarmSound; // Example sound URL

  // const handleStartTimer = () => {
  //   if (duration > 0 && selectedSound) {
  //     const timer = setTimeout(() => {
  //       // const audio = new Audio(selectedSound !== "default" ? selectedSound : defaultSound);
  //       const audio = new Audio(defaultSound);
  //       audio.play();
  //       setOpenModal(true); // Open the modal when the timer expires
  //     }, duration * 1000);
  //     setCountdown(timer);
  //   }
  // };
  const handleStartTimer = () => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        const audio = new Audio(defaultSound);
        audio.play();
        setOpenModal(true); // Open the modal when the timer expires
      }, duration * 1000);
      setCountdown(timer);
    }
  };

  const handleStopTimer = () => {
    clearTimeout(countdown);
    setCountdown(null);
    setOpenModal(false); // Close the modal when stopping the timer
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  // const handleSoundChange = (e) => {
  //   setSelectedSound(e.target.value);
  // };

  return (
    // <Container maxWidth="sm">
    //   <Typography variant="h4" align="center" gutterBottom>
    //     Kitchen Alarm Tool
    //   </Typography>
    //   <TextField type="number" label="Duration (seconds)" value={duration} onChange={handleDurationChange} variant="outlined" fullWidth margin="normal" />
    //   <FormControl fullWidth variant="outlined" margin="normal">
    //     <InputLabel>Select Sound</InputLabel>
    //     <Select value={selectedSound} onChange={handleSoundChange} label="Select Sound">
    //       <MenuItem value="default">Default Sound</MenuItem>
    //       {/* Add more options for custom sounds */}
    //       {/* For example: */}
    //       <MenuItem value={defaultSound}>Custom Sound 1</MenuItem>
    //       {/* Add more custom sound options */}
    //     </Select>
    //   </FormControl>
    //   <Button variant="contained" color="primary" onClick={handleStartTimer} fullWidth>
    //     Start Timer
    //   </Button>
    //   <Button variant="contained" color="secondary" onClick={handleStopTimer} fullWidth>
    //     Stop Timer
    //   </Button>
    //   <CustomModal open={openModal} onClose={() => setOpenModal(false)} title="Timer Expired!" content="Time to check on your dish." />
    // </Container>
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Kitchen Alarm Tool
      </Typography>
      <TextField type="number" label="Duration (seconds)" value={duration} onChange={handleDurationChange} variant="outlined" fullWidth margin="normal" />
      <Button variant="contained" color="primary" onClick={handleStartTimer} fullWidth>
        Start Timer
      </Button>
      <Button variant="contained" color="secondary" onClick={handleStopTimer} fullWidth>
        Stop Timer
      </Button>

      <CustomModal open={openModal} onClose={() => setOpenModal(false)} title="Timer Expired!" content="Time to check on your dish." />
      <Box>
        <Typography variant="body2" fontSize="small" align="justify" sx={{ mt: 2 }}>
          Potential network issues may disrupt the functionality of this device. Exercise caution when using it, especially when unattended. Avoid leaving the kitchen unattended while the oven is in use.
        </Typography>
      </Box>
    </Container>
  );
};

export default KitchenAlarmTool;

// const KitchenAlarmTool = () => {
//   const [duration, setDuration] = useState(0);
//   const [selectedSound, setSelectedSound] = useState("");
//   const [countdown, setCountdown] = useState(null);

//   // Default sound
//   const defaultSound = alarmSound;

//   const handleStartTimer = () => {
//     if (duration > 0 && selectedSound) {
//       const timer = setTimeout(() => {
//         const audio = new Audio(selectedSound !== "default" ? selectedSound : defaultSound);
//         audio.play();
//         alert("Timer expired! Time to check on your dish.");
//       }, duration * 1000);
//       setCountdown(timer);
//     }
//   };

//   const handleStopTimer = () => {
//     if (countdown) {
//       clearTimeout(countdown);
//       setCountdown(null);
//     }
//   };

//   const handleDurationChange = (e) => {
//     setDuration(e.target.value);
//   };

//   const handleSoundChange = (e) => {
//     setSelectedSound(e.target.value);
//   };

//   // Function to play custom sound
//   const playCustomSound = (url) => {
//     const audio = new Audio(url);
//     audio.play();
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h4" align="center" gutterBottom>
//         Kitchen Alarm Tool
//       </Typography>
//       <TextField type="number" label="Duration (seconds)" value={duration} onChange={handleDurationChange} variant="outlined" fullWidth margin="normal" />
//       <FormControl fullWidth variant="outlined" margin="normal">
//         <InputLabel>Select Sound</InputLabel>
//         <Select value={selectedSound} onChange={handleSoundChange} label="Select Sound">
//           <MenuItem value="default">Default Sound</MenuItem>
//           {/* Add more options for custom sounds */}
//           <MenuItem value={defaultSound}>Custom Sound 1</MenuItem>
//           {/* Add more custom sound options */}
//         </Select>
//       </FormControl>
//       <Button variant="contained" color="primary" onClick={handleStartTimer} fullWidth>
//         Start Timer
//       </Button>
//       <Button variant="contained" color="secondary" onClick={handleStopTimer} fullWidth>
//         Stop Timer
//       </Button>
//     </Container>
//   );
// };

// export default KitchenAlarmTool;
