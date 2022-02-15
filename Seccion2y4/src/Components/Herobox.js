
import React from 'react';


const Herobox = (props) => {
  return (
    <div className = {props.className}>
      <h1>Mi nombre es : {props.name} y soy {props.heroname}</h1>
     
      {props.children}  
       
      </div>       
  );
}

export default Herobox;

