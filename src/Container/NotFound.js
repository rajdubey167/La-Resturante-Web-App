import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for tick mark animation
const tickAnimation = keyframes`
  0% {
    stroke-dashoffset: 100;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

// Keyframes for circle animation
const circleAnimation = keyframes`
  0% {
    stroke-dashoffset: 150;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const H2 = styled.h2`
  color: white;
  background: #1E3E62;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe Script', cursive;
  font-size: 5rem;
  flex-direction: column;
`;

// Container for tick mark inside the circle
const TickMarkContainer = styled.svg`
  margin-top: 20px;
  width: 120px;
  height: 120px;
  stroke-width: 6;
  fill: none;
  stroke-linecap: round;

  .circle {
    stroke: #0f0;
    stroke-dasharray: 150;
    stroke-dashoffset: 150;
    animation: ${circleAnimation} 1.2s ease forwards; // Circle animation
  }

  .tick {
    stroke: #0f0;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: ${tickAnimation} 0.9s 1.2s ease forwards; // Tick animation, delayed by 1.2s
  }
`;

const NotFound = () => (
  <H2>
    Your Reservation has Done!
    {/* Animated Tick Mark Inside a Circle */}
    <TickMarkContainer viewBox="0 0 52 52">
      {/* Circle around the tick */}
      <circle className="circle" cx="26" cy="26" r="24" />
      {/* Tick mark */}
      <polyline className="tick" points="14 27 22 35 38 16" />
    </TickMarkContainer>
  </H2>
);

export default NotFound;
