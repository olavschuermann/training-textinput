import React, { useState } from 'react';
import './App.css';

// Goal of app:
// Texteingabe-Feld + Button für Absenden
// Text wird per Alert ausgegeben
// Hooks verwenden
// Mindestlänge des Textes wird überprüft (1)
// Maximallänge des Textes wird überprüft (2)
// Bei Verstößen gegen Minimal- oder Maximallänge wird Absenden-Button deaktivier


function App() {

// Eingabe aus Textfeld    
const [textInput, setTextInput] = useState("");
   
return (
    <div className="App">
        <form>
            <label>Bitte geben Sie einen Text ein:</label>
            <br /><br />
            <input type="text"></input>
            <br /><br />
            <button>Absenden</button>
        </form>
    </div>
  );
}

export default App;