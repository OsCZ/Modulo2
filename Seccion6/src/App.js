import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import PlanReact from "./components/PlanReact";
import PlanRedux from "./components/PlanRedux";
import { RUTAS } from './helpers/constants';
import SubtemaHook from "./components/SubtemaHook";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path={RUTAS.planReact}  component={PlanReact}  />
        <Route exact path={`${RUTAS.PlanReact}/:Subtema`} component={SubtemaHook}  />


        <Route exact path={RUTAS.planRedux}  component={PlanRedux}  />
      </div>
    </BrowserRouter>
  );
}

export default App;