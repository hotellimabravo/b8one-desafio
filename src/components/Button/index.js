import React from 'react';
import './Button.css';



function UIButton({ idProduto }) {

    function myEvent() {
        console.log(`ID Produto: ${idProduto}`)
    }

    return (

        <button className="UIButton" onClick={myEvent}><span className="buttontitle">Adicionar</span></button>
    )

}


export default UIButton;