import React from "react";
import PropTypes  from "prop-types";
import { Link, withRouter } from "react-router-dom";

const PlanReact = (props) => {
  const{
     match: {url}
  } = props
    return (
      <div>
          <h1>React</h1>

          <link to={`${url}/jsx`}>jsx</link>  
          <br></br>
          <link to={`${url}/hooks`}>
          Hooks
          </link>  

      </div>
    );
  };

  PlanReact.prototype={
    match: prototype.shape({
    url: PropTypes.string
    })


  }
  
  export default withRouter(PlanReact) ;
  