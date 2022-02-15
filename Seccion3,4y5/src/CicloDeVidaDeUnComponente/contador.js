import React  from "react";
import Boton from './boton'

class Contador extends React.Component{
constructor(props){
  super(props);
  this.state = {
       contador: 0
   }
}
aumentador = () =>{
      this.setState({
        contador: this.state.contador + 1
      })

 }

render(){
return (
  <>
    <div>
      <Boton
      texto = {this.state.contador}
      aumentador={this.aumentador}      
      />
     </div> 
    </>
)

}


}

export default Contador;