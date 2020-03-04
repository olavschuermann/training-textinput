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

console.log(textInput);

let disableButton = false;
let errorMessage = "";
let maxChar = 10;

let arrayListe = [];

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
    arrayListe = arrayListe.push(textInput);
    console.log(arrayListe);
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
        <Liste arrayListe={arrayListe}/>
    </div>
  );
}

export default App;