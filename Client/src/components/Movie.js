import React from "react"
import MovieList from "./MovieList"

const Movie = ({movie}) => {

    if(!movie){
        return <p>Can't find movie...</p>
    }

    const url = "/movies/" + movie.id;

    return(
        <>
            <p>Movie: {movie.title}</p>
            <img src={movie.poster} width="200" alt="movie poster" />
        </>
    )
}

export default Movie;