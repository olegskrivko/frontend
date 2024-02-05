import React from "react";
import ReactPlayer from "@mui/material/ReactPlayer";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <Paper elevation={3} style={{ padding: "16px", textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        Video
      </Typography>
      <ReactPlayer url={videoUrl} controls width="100%" height="auto" />
    </Paper>
  );
};

export default VideoPlayer;
