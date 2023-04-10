import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient"
import { getMovieImg } from "../utils/getMovieImg"; 
import "../pages/MovieDetails.css"

export function MovieDetails() {
    const { peliculaId } = useParams();
    const [peliculas, setPelicula] = useState([]);
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
      get("/movie/"+peliculaId).then((data) =>{
        setPelicula(data)
        setGeneros(data.genres[0])
      })
    }, [peliculaId]);

    const imgUrl = getMovieImg(peliculas.poster_path,500);   
    console.log('id pelicula',peliculaId);
    console.log('respuesta consulta',peliculas);

    return ( 
    <div className="detailsContainer">
        <img src={imgUrl}
        alt={peliculas.title} className="movieImage"/>
        <div className="col movieDetails">
          <p className="titlePelicula"><strong>Titulo: </strong>{peliculas.title}</p>
          <p><strong>Genero: </strong>{generos.name}</p>
          <p><strong>Descripcion: </strong>{peliculas.overview}</p>
          <p><strong>Puntuacion: ⭐ </strong>{peliculas.vote_average}</p>
          <p><strong>Votos: 🚀 </strong>{peliculas.vote_count}</p>
        </div>
    </div>
        
    );
}