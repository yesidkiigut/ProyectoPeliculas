import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient"
import { getMovieImg } from "../utils/getMovieImg"; 

export function MovieDetails() {
    const { peliculaId } = useParams();
    const [peliculas, setPelicula] = useState([]);

    useEffect(() => {
      get("/pelicula/" + peliculaId).then((data) =>{
        setPelicula(data)
      })
    }, [peliculaId]);

    const imgUrl = getMovieImg(peliculas.poster_path,500);   
    console.log('id pelicula',peliculaId);
    console.log('respuesta consulta',peliculas);

    return ( 
    <div>
        <img src={imgUrl}  />
    </div>
        
    );
}