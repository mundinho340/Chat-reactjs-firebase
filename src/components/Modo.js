import React from "react"
import { useState } from "react"

function Modo() {
    function oModo(e){
        e.preventDefault()
        console.log('activo')
    }

    const [botao, setBotao] = useState()
    if(botao ==true){
        document.body.style.background="#3b5998"
    }

    return(
        <>
            <button onClick={oModo} value="modo" id="botao" name="botao"
            onChange={(e) => setBotao(e.target.value)}
            >
                clique aqui
            </button>

            
        </>
    )
}

export default Modo