# Rubik's Cube Simulator

## Overview
This project is an interactive 3D Rubik's Cube simulator created using **HTML**, **CSS**, and **JavaScript**, leveraging the **Three.js** library for rendering. Users can customize cube properties and track their solving statistics, making it an engaging experience for puzzle enthusiasts.

## Features
- **Interactive Cube Rotation**: Double-tap to start manipulating the cube in a 3D space.
- **Customization Options**:
  - Cube size (2x2, 3x3, 4x4, 5x5)
  - Flip animation types (Swift, Smooth, Bounce)
  - Scramble length
  - Camera perspective (Orthographic, Perspective)
  - Color themes
- **Real-Time Stats**:
  - Total solves
  - Best, worst, and average solving times (5, 12, 25 attempts)
- **Dynamic Lighting**: Enhanced visuals using Three.js lighting.

## Technologies Used
- **HTML5** for structure.
- **CSS3** for styling, with custom fonts and animations.
- **JavaScript** for logic and interactivity.
- **Three.js** for 3D rendering and animations.

## Gamepad Controls
- **A**: F
- **B**: R
- **X**: L
- **Y**: U
- **RB**: D
- **RT**: B
- Hold **LB** for counter-clockwise face turns.
- Hold **LT** while pressing:
  - **X**: E slice
  - **B**: E' slice
  - **Y**: M slice
  - **A**: M' slice
  - **RB**: S slice
  - **RT**: S' slice
- **LB** is ignored while making slice turns.
- **LS + RS**: Reset the cube by undoing all moves.
- **Back**: Undo the last move.
- **D-pad**: Rotate the whole cube in quarter turns.
- **Left stick**: Rotate the cube smoothly like dragging the mouse.



