import React from "react";
import Movie from "./Movie";

const MovieList = ({movies}) => {


    function displayMovies(movies){
        try {
            const genres = []
            for (let movie of movies){
                if(!genres.find(genre => genre == movie.genre)){
                    genres.push(movie.genre)
                }
            }
            
         

            return genres.map(genre => {
                
                // if(genres.indexOf(genre) == 0 ){
                //     return(
                        // this is to return random movies 
                        // forloop on rendom moies  and dyspaly it  and not duplice
                //     ) 
                        
                // }

                const genreMovies = movies.filter(movie => movie.genre == genre)
                    return (
                        <div key = {genres.indexOf(genre)}>
                        <h3>{genre}</h3>
                    
                        <ul key = {genres.indexOf(genre)}>
                     {genreMovies.map(movie => { 
                        
                        return(
                            <li key = {movies.indexOf(movie)}>
                                <div><Movie movie ={movie}/></div>
                            </li>
                        )
                    })
                
                    }
                
                    
                    </ul>
                    </div>
            )



            }) 




        } catch (error) {
            console.log(error)
        }
    }











    // const actionMovies = movies.map((movie,index)=>{
    //     if (movie.genre === "Action"){

    // return(
    //     <li key = {index}>
    //         <div><Movie movie ={movie}/></div>
    //     </li>
    // )}

    // })


    // const comedyMovies = movies.map((movie,index)=>{
    //     if (movie.genre === "Comedy"){

    // return(
    //     <li key = {index}>
    //         <div><Movie movie ={movie}/></div>
    //     </li>
    // )}

    // })


    return(
        <div>
        
           {displayMovies(movies)}
    
        </div>
    )
        
        
    
}

export default MovieList;