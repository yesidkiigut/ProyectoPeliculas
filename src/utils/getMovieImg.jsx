import notfound from "../img/notfound.png"
export function getMovieImg(path,width) {
    return path? `https://image.tmdb.org/t/p/w${width}${path}` : notfound;
  }


//const imgaeurl = "https://image.tmdb.org/t/p/w300"+peliculasitem.poster_path;

