import {useEffect, useState} from "react";
import { get } from "../data/httpClient";
import { Moviecard } from "../components/MovieCard";
import "../components/ConstextMovieCard.css"

export function ContexMovieCard(){
    const [movies, SetMovies] = useState([])

    useEffect(() => {
        get("/discover/movie").then((data) =>{
           SetMovies(data.results); 
            console.log("data",data);
        });
    }, []);
    
    return(<ul className="container">
        {movies.map((peliculasitem)=>(
            <Moviecard peliculasitem={peliculasitem}/>
        ))}
    </ul>)
}