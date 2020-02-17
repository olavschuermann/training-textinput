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

  let inputInvalid = false;

  console.log('Länge der Eingabe: ' + inputData.length);

  if (inputData.length > 5 || inputData.length === 0) {
    inputInvalid = true;
  }
  
  return (
    <div className="App">
      <label>Ihre Eingabe:</label> <br />
      <input type="text" onChange={e => setInputData(e.target.value)}></input>
      {console.log(inputData)}
      <br /> <br />
      Maximale Länge:
      <br /><br />
      <button disabled={inputInvalid} onClick={showData}>Absenden</button>
    </div>
  );
}

export default App;