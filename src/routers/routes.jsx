import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";

export function MisRutas(){
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}>

          </Route>
        </Routes>
      </Router> 
    )
}