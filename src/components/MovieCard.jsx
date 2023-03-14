import "../components/MovieCar.css"
export function Moviecard({peliculasitem}){

    const imgaeurl = "https://image.tmdb.org/t/p/w300"+peliculasitem.poster_path;
    return(<li className="movieCard">
        <img width={230}
             height={345}
             src={imgaeurl}
             alt={peliculasitem.title}
             className="moviimage"
             />
             <div>{peliculasitem.title}</div> 
        
    </li>)
}