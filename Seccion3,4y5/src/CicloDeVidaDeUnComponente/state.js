import React, { Component } from "react";

class ClouckUsingClass extends Component{
//ciclo de vida componente
constructor(props){
super(props);
//estado inicial
this.state = {

date: new Date(),

};

}

componentDidMount(){
//modifico mi estado
this.state = setInterval(()=> {
     this.changeTime();
},1000)

}

changeTime(){
  //se encarga de cambiar la informacion
this.setState({ date: new Date() });
}


componentWillMount(){
//limpio la informacion o estado fallido
clearInterval(this.state)

}


render(){
return (
    <>
   <div> Hola Mundo desde componente clase </div>
   <div>
   <h1>la hora es: {this.state.date.toLocaleTimeString()}  </h1>
   </div>
    </>
      )

}

}

export default ClouckUsingClass;