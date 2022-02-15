import React, {Fragment, useState} from "react";

//directa
//ternaria
//por funcion

const RenderizadoCondicional  = () =>{
   const [MostrarUsuarios, setMostrarUsuarios] = useState(false);

   const componente = <span>Hola Mundo!!</span>
   const componenteDos = <span>Hola Universo!!</span>
    

   
    return(
        //directo
        <Fragment> 

        {MostrarUsuarios && componente}

        {MostrarUsuarios? componente : componenteDos}

        </Fragment> 


       

     ) 

};


export default RenderizadoCondicional;