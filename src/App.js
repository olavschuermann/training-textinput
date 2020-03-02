import React, { useState } from 'react';
import './App.css';

// Goal of app:
// Texteingabe-Feld + Button für Absenden
// Hooks verwenden
// Text aus Input verarbeiten
// Text wird per Alert ausgegeben
// Mindestlänge des Textes wird überprüft (1)
// Maximallänge des Textes wird überprüft (2)
// Bei Verstößen gegen Minimal- oder Maximallänge wird Absenden-Button deaktiviert
// Ausgabe einer passenden Fehlermeldung wenn zu kurz oder zu lang


function App() {

// Eingabe aus Textfeld    
const [textInput, setTextInput] = useState("");

console.log(textInput);

let disableButton = false;
let errorMessage = "";

if (textInput.length === 0) {
    disableButton = true;
    errorMessage = "Der Text ist zu kurz, Mindestlänge 1";
} else if (textInput.length > 10) {
    disableButton = true;
    errorMessage = "Der Text ist zu lang, maximale Länge: 10";
}

const triggerAlert = (e) => {
    e.preventDefault();
    window.alert('Ihre Eingabe ist: ' + textInput);
}
   
return (
    <div className="App">
        <form>
            <label>Bitte geben Sie einen Text ein:</label>
            <br /><br />
            <input type="text" onChange={e => setTextInput(e.target.value)}></input>
            <br /><br />
            <button disabled={disableButton} onClick={triggerAlert}>Absenden</button>
            <br /><br />
            {errorMessage}
        </form>
    </div>
  );
}

export default App;