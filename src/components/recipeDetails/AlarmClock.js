import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const AlarmClock = () => {
  const [time, setTime] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  const [audio, setAudio] = useState(null);

  const handleSetTime = () => {
    const milliseconds = parseInt(time) * 1000;
    const id = setTimeout(() => {
      playSound();
    }, milliseconds);

    setTimeoutId(id);
  };

  const handleStopAlarm = () => {
    clearTimeout(timeoutId);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  const playSound = () => {
    const audioElement = new Audio("");
    audioElement.play();
    setAudio(audioElement);
    setTimeout(() => {
      audioElement.pause();
      audioElement.currentTime = 0;
    }, 2000); // stop the sound after 2 seconds
  };

  return (
    <div>
      <TextField label="Set Time (seconds)" type="number" value={time} onChange={(e) => setTime(e.target.value)} />
      <Button variant="contained" onClick={handleSetTime}>
        Set Alarm
      </Button>
      <Button variant="contained" onClick={handleStopAlarm}>
        Stop Alarm
      </Button>
    </div>
  );
};

export default AlarmClock;
