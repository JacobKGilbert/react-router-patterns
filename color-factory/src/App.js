import React, { useState } from 'react'
import Routes from './Routes';
import './App.css';

function App() {
  const [colors, setColors] = useState([])
  const addColor = (color) => {
    setColors(() => [...colors, color])
  }

  return (
    <div className="App">
      <Routes addColor={addColor} colors={colors} />
    </div>
  );
}

export default App;
