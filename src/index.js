// NDWebCV/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// JavaScript for creating hexagons
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.createElement('div');
  grid.className = 'hex-grid';
  document.body.appendChild(grid);

  // Create cursor glow element
  const cursorGlow = document.createElement('div');
  cursorGlow.className = 'cursor-glow';
  document.body.appendChild(cursorGlow);

  // Calculate the number of rows and hexagons per row based on viewport size
  const hexWidth = 100; // Width of each hexagon
  const hexHeight = 100; // Height of each hexagon
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  const hexPerRow = Math.ceil(viewportWidth / (hexWidth *1)) + 0; // Add extra hexagons to ensure full coverage
  const rows = Math.ceil(viewportHeight / (hexHeight *1)) + 1; // Add extra rows to ensure full coverage

  // Add controls to adjust gap size
  const controls = document.createElement('div');
  controls.style.position = 'fixed';
  controls.style.top = '20px';
  controls.style.right = '20px';
  controls.style.zIndex = '1000';
  controls.style.background = 'rgba(0,0,0,0.7)';
  controls.style.padding = '10px';
  controls.style.borderRadius = '5px';
  
  const slider = document.createElement('input');
  slider.type = 'range';
  slider.min = '1';
  slider.max = '20';
  slider.value = '5';
  slider.style.width = '100%';
  
  const label = document.createElement('div');
  label.textContent = 'Gap Size: 5%';
  label.style.color = 'white';
  label.style.marginBottom = '5px';
  
  slider.addEventListener('input', (e) => {
    const gapSize = parseInt(e.target.value);
    document.documentElement.style.setProperty('--gap-size', `${gapSize}%`);
    
    // Update all hexagons
    const hexInners = document.querySelectorAll('.hex-inner::after');
    hexInners.forEach(hex => {
      const size = 100 - (gapSize * 2);
      hex.style.width = `${size}%`;
      hex.style.height = `${size}%`;
      hex.style.top = `${gapSize}%`;
      hex.style.left = `${gapSize}%`;
    });
    
    label.textContent = `Gap Size: ${gapSize}%`;
  });
  
  controls.appendChild(label);
  controls.appendChild(slider);
  document.body.appendChild(controls);

  // Create hexagon grid
  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.className = 'hex-row';
    grid.appendChild(row);

    for (let j = 0; j < hexPerRow; j++) {
      const hex = document.createElement('div');
      hex.className = 'hex';
      
      const hexInner = document.createElement('div');
      hexInner.className = 'hex-inner';
      
      hex.appendChild(hexInner);
      row.appendChild(hex);
    }
  }

  // Track mouse movement
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Move the glow effect to follow the cursor
    cursorGlow.style.left = `${mouseX}px`;
    cursorGlow.style.top = `${mouseY}px`;
  });
});