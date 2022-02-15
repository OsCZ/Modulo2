import './App.css';
import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Accordion = withStyles({

  background: "transparent",
  margin: "20px 0px",
  border: "16px",
  borderRadius: "16px",
  borderTop: "none"
  }) (MuiAccordion)


  const AccordionSummary = withStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "8px 28px",
      width: "712px",
      height: "30px",
      margin: "0px 0px",
      background: "#FFFFFF",
     
      boxSizing: "border-box",
      // boxShadow: "0px 1px 4px rgba(30, 7, 15, 0.12)",
      borderRadius: "16px",
      borderBottom: " 0px solid transparent",
      "&$expanded": {
        minHeight: 56,
      },
    },
    content: {
      "&$expanded": {
        margin: "1px 0",
      },
    },
    expanded: {},
  })(MuiAccordionSummary);

  //AccordionDetails = MuiAccordionDetails
const AccordionDetails = withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flexStart",
    padding: "10px",
    width: "712px",
    height: "auto",
    margin: "0px 0px",
    background: "transparent",
    border: "none",
  },
}))(MuiAccordionDetails);

//ejemplo make styles
/* const useStyles = makeStyles((theme) => ({
  //nuestras propiedades dentreo de nuestro usestyles  representan nuestros selectores
  //como si fuese un css
  root: {
    width: '50%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
})) */

function App() {
  /*  const classes = useStyles(); */
   return (
     <div className="App">
 
       <Accordion>
         <AccordionSummary
           expandIcon={<ExpandMoreIcon />}
           aria-controls="panel1a-content"
           id="panel1a-header"
         >
          {/* <Typography className={classes.heading}>Accordion 1</Typography> */}
          <Typography >Accordion 1</Typography>
         </AccordionSummary>
         <AccordionDetails>
           <Typography>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
             sit amet blandit leo lobortis eget.
           </Typography>
         </AccordionDetails>
       </Accordion>
 
       <Accordion>
         <AccordionSummary
           expandIcon={<ExpandMoreIcon />}
           aria-controls="panel2a-content"
           id="panel2a-header"
         >
           {/* <Typography className={classes.heading}>Accordion 2</Typography> */}
 
           <Typography >Accordion 2</Typography>
         </AccordionSummary>
         <AccordionDetails>
           <Typography>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
             sit amet blandit leo lobortis eget.
           </Typography>
         </AccordionDetails>
       </Accordion>
       <Accordion disabled>
         <AccordionSummary
           expandIcon={<ExpandMoreIcon />}
           aria-controls="panel3a-content"
           id="panel3a-header"
         >
           {/* <Typography className={classes.heading}>Disabled Accordion</Typography> */}
           <Typography >Disabled Accordion</Typography>
         </AccordionSummary>
       </Accordion>
 
     </div>
   );
 }
 
 export default App;
