import React from "react";

const Reto = (props) =>{


const [state, setState] = React.useState({
     Nombre: '',
     Materno: '',
     Paterno: ''
    }

 );
      const editarState  =(atributo) => (event) =>setState({  
                ...state,

                [atributo]:event.target.value

            })
            
        return(


        <div className="margen"> 
         {/*Nombre Profesor/alumno */}
        <input onChange={editarNombre}/>
        {nombre}


         {/*numero de  Profesor */}
        <input type="number" onChange={editarState('profesores')}/>
         {state.profesores}


        {/*numero de  Alumnos */}
        <input type="number" onChange={editarState('alumnos')}/>
        {state.alumnos}

        </div> 

  )}

export default Reto;
