import React from 'react'

// Array.map einfügen für Durchlauf aller Elemente
// var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Zurückgegebenes Element für new_array}

function Liste(props) {

let ausgabeListe = '';

    return (
        <div>
            LISTE:
            <br /><br />
            {ausgabeListe = props.arrayListe(() => {
                <div>Test</div>
            })}
            {props.arrayListe}
        </div>
    )
}

export default Liste;