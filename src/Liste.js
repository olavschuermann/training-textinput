import React from 'react'

// Array.map einfügen für Durchlauf aller Elemente
// Syntax Array.Map - var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Zurückgegebenes Element für new_array}

function Liste(props) {

let ausgabeListe = '';

    return (
        <div>
            LISTE:
            <br /><br />
            {ausgabeListe = props.arrayListe.map(item => {
                <div>{item}</div>
            })}
            {ausgabeListe}
        </div>
    )
}

export default Liste;