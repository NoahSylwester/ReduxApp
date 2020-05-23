import React from 'react';

export const Component = ({ color, handleRedSlide, handleGreenSlide, handleBlueSlide, handleOpacitySlide }) => (
  <div style={{marginBottom: 100}}>
    <h1>Color something:</h1>
    <h2>{color}</h2>
    <div 
        style={{
            width: 200,
            height: 200,
            margin: 'auto',
            border: "1px solid black",
            backgroundColor: color
             }}>
    </div>
    <br />
    <label htmlFor="red">Red value:</label>
    <br />
    <input onChange={(event) => handleRedSlide(event.nativeEvent.target.value)} type="range" id="red" name="red" min="0" max="256" />
    <br />
    <label htmlFor="green">Green value:</label>
    <br />
    <input onChange={(event) => handleGreenSlide(event.nativeEvent.target.value)} type="range" id="green" name="green" min="0" max="256" />
    <br />
    <label htmlFor="blue">Blue value:</label>
    <br />
    <input onChange={(event) => handleBlueSlide(event.nativeEvent.target.value)} type="range" id="blue" name="blue" min="0" max="256" />
    <br />
    <label htmlFor="opacity">Opacity value:</label>
    <br />
    <input onChange={(event) => handleOpacitySlide(event.nativeEvent.target.value)} type="range" id="opacity" name="opacity" min="0" max="100" />
  </div>
);