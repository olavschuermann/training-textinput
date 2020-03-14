import React, { useState } from 'react';
import './App.css';

import Liste from './Liste';

// Goal of app:
// Texteingabe-Feld + Button für Absenden
// Hooks verwenden
// Text aus Input verarbeiten
// Text wird per Alert ausgegeben
// Mindestlänge des Textes wird überprüft (1)
// Maximallänge des Textes wird überprüft (2)
// Bei Verstößen gegen Minimal- oder Maximallänge wird Absenden-Button deaktiviert
// Ausgabe einer passenden Fehlermeldung wenn zu kurz oder zu lang
// Anzeige der noch zur Verfügung stehenden Zeichen (10 - x)
// Eingabe in Liste schreiben > Child component
// Text in Liste ausgeben
// Nach Absenden in Array schreiben, damit die Liste wächst...

function App() {

// Eingabe aus Textfeld    
const [textInput, setTextInput] = useState("");

// Adding hook for data array (Liste)
const [contentListe, setContentListe] = useState([]);

console.log(textInput);

let disableButton = false;
let errorMessage = "";
let maxChar = 10;

if (textInput.length === 0) {
    disableButton = true;
    errorMessage = "Der Text ist zu kurz, Mindestlänge 1";
} else if (textInput.length > 10) {
    disableButton = true;
    errorMessage = "Der Text ist zu lang, maximale Länge: 10";
}

maxChar = maxChar - textInput.length;
if (maxChar < 1) {
    maxChar = 0;
}

const triggerAlert = (e) => {
    e.preventDefault();
    // window.alert('Ihre Eingabe ist: ' + textInput);
    // Array wächst - erster Wert erscheint erst nach dem zweiten Absenden
    console.log('textInput: ' + textInput);

    // React form of pushing data into array - why is push not working?
    setContentListe(contentListe => [...contentListe, textInput]);
    console.log(contentListe);
    // setTextInput('');
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
            <br /><br />
            <label>Sie haben noch {maxChar} Zeichen zur Verfügung</label>
        </form>
        <br /><br />
        <Liste contentListe={contentListe}/>
    </div>
  );
}

export default App;