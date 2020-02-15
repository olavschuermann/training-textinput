import React, { useState } from 'react';
import './App.css';

function App() {

  // Eingabe in Input-Feld auslesen + in Funktion schreiben
  const [inputData, setInputData] = useState("");

  const showData = () => {
    alert(inputData);
  }

  // Maximale Länge prüfen
  const maxLength = 25;
  


  return (
    <div className="App">
      <label>Ihre Eingabe:</label> <br />
      <input type="text" onChange={e => setInputData(e.target.value)}></input>
      {console.log(inputData)}
      <br /> <br />
      Maximale Länge:
      <br /><br />
      <button onClick={showData}>Absenden</button>
    </div>
  );
}

export default App;
