import React from "react";
import Rating from 'react-simple-star-rating';
import "./css/MovieList.css";


const UserMovie = ({movie, onMovieClick, watched, rating}) => {



    const handleClick = () =>{
        onMovieClick(movie);
       
     }



    if(!movie){
        return <p>Can't find movie...</p>
    }

    
    return(
        <>
            
            <img onClick={handleClick} id = "poster" src={movie.poster}  alt="movie poster" />
            <p>Watched: {watched.toString()}</p>
            <p>Rating: {rating}</p>

        </>
    )
}

export default UserMovie;