import React from "react";
import  PropTypes  from "react";

const Boton = (props) => {
    return (

        <div>

         <button onClick={props.aumentador}>
           {props.texto}
         </button>

        </div>
    )
 }
Boton.prototype = {
texto: PropTypes.string,
aumentador: PropTypes.func
}

 export default Boton;