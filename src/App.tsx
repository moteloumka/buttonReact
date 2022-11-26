import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(true); 
  const changeColor = () => {
    setState(!state);
  }
  return (
    <div className="App">
      <button onClick={changeColor} className={'button ' + (state ? 'creation--green' :'creation--red')}>
        click to change change color
      </button>
    </div>
  );
}

export default App;
