import React from "react";

const CircularProgress = ({ currentStep, totalSteps }) => {
  // Calculate the progress percentage
  const progress = (currentStep / totalSteps) * 100;

  // Calculate the position of each step number around the circle
  const stepPositions = Array.from({ length: totalSteps }, (_, index) => {
    const angle = (index / totalSteps) * 360;
    const x = Math.cos((angle * Math.PI) / 180) * 50 + 50;
    const y = Math.sin((angle * Math.PI) / 180) * 50 + 50;
    return { x, y };
  });

  return (
    <svg width="100" height="100">
      {/* Circular progress line */}
      <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" strokeWidth="10" strokeDasharray={`${progress} 100`} />

      {/* Steps numbers */}
      {stepPositions.map((position, index) => (
        <text key={index} x={position.x} y={position.y} textAnchor="middle" alignmentBaseline="middle" fill={index <= currentStep ? "#4caf50" : "#bdbdbd"}>
          {index + 1}
        </text>
      ))}

      {/* Center circle */}
      <circle cx="50" cy="50" r="30" fill="#ffffff" stroke="#e0e0e0" strokeWidth="2" />
    </svg>
  );
};

export default CircularProgress;
