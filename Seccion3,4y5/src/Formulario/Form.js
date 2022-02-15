import React from "react";
// formulario para una escuela
// formulario para dar de alta a profesores  y Alumnos nombre (cantidad de cada caso)

const Form = (props) =>{
         const [nombre,setNombre] = React.useState("");
         const [state, setState] = React.useState(

            {
             profesores: 0,
             alumnos: 0
            }


         );

            const editarNombre = (event) => setNombre(event.target.value)
            const editarProfesores = (event) => setState({
                ...state,
                          profesores: event.target.value

            })


            const editarAlumnos = (event) => setState({
                ...state,
                alumnos: event.target.value,
          

            })

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

export default Form;
