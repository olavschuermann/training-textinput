import React from 'react'

// Array.map einfügen für Durchlauf aller Elemente
// Syntax Array.Map - var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Zurückgegebenes Element für new_array}

function Liste(props) {

    return (
        <div>
            LISTE:
            <br /><br />
            {props.contentListe.map((item) => {
                return <div>{item}</div>
            })
            }
        </div>
    )
}

export default Liste;