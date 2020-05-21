import React from 'react';

export const Component = ({ written, handleWriteChange }) => (
  <div>
    <h1>Write something:</h1>
    <p>{written}</p>
    <input type="text" onChange={handleWriteChange} />
  </div>
);