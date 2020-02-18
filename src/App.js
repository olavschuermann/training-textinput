import React, { useState } from 'react';
import './App.css';

function App() {

  // Eingabe in Input-Feld auslesen + in Funktion schreiben
  const [inputData, setInputData] = useState("");

  const showData = () => {
    alert(inputData);
  }

  let inputInvalid = false;
  let errorMessage = "";
  let charsToGo = 10;

  console.log('Länge der Eingabe: ' + inputData.length);

  if (inputData.length < 11) {
    charsToGo = 10 - inputData.length;
  } else {
    inputInvalid = true;
    charsToGo = 0;
    errorMessage = "Eingabe ist zu lang!"
  }

  if (inputData.length === 0) {
    inputInvalid = true;
    errorMessage = 'Eingabe zu kurz!';
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
      <br /> <br />
      <label>{errorMessage}</label>
      <br /><br />
      <label>Noch verfügbare Zeichen: {charsToGo}</label>
    </div>
  );
}

export default App;