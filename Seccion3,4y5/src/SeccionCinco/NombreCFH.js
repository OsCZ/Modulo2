import React from "react";
import PropTypes from "prop-types";


const NombreCFH = (props) => {

    const didMount  = () => {
            console.log('te damos la bienvenida ' + props.nombre)
             }

       React.useEffect(didMount,[])     

 const willUnMount  = () => {
                return () =>{
                console.log('Adios');
                };
                };

         React.useEffect(willUnMount,[])      

    return (

        <div>
 
        {props.nombre}
   
        <button onClick={this.props.borrarNombreDeLista}>x</button>
    
        

        </div>



    )}

    NombreCFH.propTypes = {
        nombre: PropTypes.string.isRequired,
        borrarNombreDeLista: PropTypes.func.isRequired,
      };

export default  NombreCFH;