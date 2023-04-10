import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { MovieDetails } from "../pages/MovieDetails";

export function MisRutas(){
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/pelicula/:peliculaId" element={<MovieDetails />} />
        </Routes>
      </Router> 
    )
}