import React, { useState } from 'react';
import './App.css';

function App() {

  // Eingabe in Input-Feld auslesen + in Funktion schreiben
  const [inputData, setInputData] = useState("");


  return (
    <div className="App">
      <label>Ihre Eingabe:</label> <br />
      <input type="text" onChange={}></input>
      <br /> <br />
      Maximale Länge:
      <br /><br />
      <button>Absenden</button>
    </div>
  );
}

export default App;
