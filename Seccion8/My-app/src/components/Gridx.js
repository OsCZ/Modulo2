import "../App.css";
import React, { Fragment } from "react";
//import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

//ejemplo make styles
/* const useStyles = makeStyles((theme) => ({
  //nuestras propiedades dentreo de nuestro usestyles  representan nuestros selectores
  //como si fuese un css
  root: {
    width: "50%",
  },
})); */

function GridComp() {
  /* const classes = useStyles(); */

  return (
    <Fragment>
      <Container className="container">
        <Grid container spacing={3} direction="column-reverse">
          <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>
            Grid 1
          </Grid>
          <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>
            Grid 2
          </Grid>
          <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>
            Grid 3
          </Grid>
          <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>
            Grid 4
          </Grid>

          <Grid className="gridItem" sm={6} xs={12}>
            Grid container
            <Grid container>
              <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>
                <div className="anidado">Sub Grid 1</div>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Container> 
    </Fragment>
  );
}

export default GridComp;