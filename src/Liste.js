import React from 'react'

function Liste(props) {

const arrayListe = props.textInput;

    return (
        <div>
            LISTE:
            <br /><br />
            {arrayListe}
        </div>
    )
}

export default Liste;