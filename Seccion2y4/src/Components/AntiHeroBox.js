
import React, {Component} from 'react';

class AntiHeroes extends Component
{

render () {
return<div className = {this.props.className}> 

<h1>Mi nombre es: {this.props.name} y soy {this.props.antiheroes} </h1> 

   {this.props.children} 

     </div> 
}

}

export default AntiHeroes;