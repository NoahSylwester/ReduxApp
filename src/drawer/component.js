import React, { useState, useEffect } from 'react';

export const Component = ({ drawn, handleDrawChange }) => {

  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    let canvas = document.querySelector("canvas");
    let c = canvas.getContext("2d");
    c.clearRect(0,0,canvas.width, canvas.height)
    c.fillStyle = "black";
    for (let i = 0; i < drawn.length; i++) {
      c.fillRect(drawn[i].x, drawn[i].y, 3, 3);
    }

  }, [drawn]);

  const handleMouseMove = (event) => {
    if (isDrawing) {
      handleDrawChange([...drawn, { x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY }])
    }
  }

  const handleMouseDown = () => {
    setIsDrawing(true);
  }
  const handleMouseUp = () => {
    setIsDrawing(false);
  }

  return (
  <div>
    <h1>Draw something:</h1>
    <canvas onMouseMove={handleMouseMove} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} style={{border: "1px solid black"}}></canvas>
    <script>
    </script>
  </div>
  )
};

