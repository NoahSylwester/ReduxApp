import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container as Counter } from './counter/container';
import { Container as Writer } from './writer/container';
import { Container as Drawer } from './drawer/container';

function App() {
  return (
      <div className="App">
        <h1>Redux!</h1>
        <Counter />
        <Writer />
        <Drawer />
      </div>
  );
}

export default App;
