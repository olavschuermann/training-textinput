import React from 'react'

// Array.map einfügen für Durchlauf aller Elemente

function Liste(props) {

    return (
        <div>
            LISTE:
            <br /><br />
            {props.arrayListe}
        </div>
    )
}

export default Liste;