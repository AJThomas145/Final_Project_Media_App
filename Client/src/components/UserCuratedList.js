import React from "react";
import Movie from "./Movie";
import "./css/MovieList.css";
import MovieDetail from "./MovieDetails";
import UserMovie from "./UserMovie";
const UserCuratedList = ({onMovieClick, onButtonClick, handleViewChange, viewUserLists, savedMovies}) => {
    const recentlyAdded = [];
    const familyFriendly = [];
    const recommended = []
    let curatedList1 = []
    let curatedList2 = []
    let curatedList3 = []
    if(savedMovies){
        savedMovies.map((savedMovieObject) => {
            if(savedMovieObject.movieList.listName == "Favourite movies"){
                familyFriendly.push({"movie": savedMovieObject, "watched": savedMovieObject.watched, "rating": savedMovieObject.rating});
            }
            if(savedMovieObject.movieList.listName == "Movies to watch later"){
                recommended.push({"movie": savedMovieObject, "watched": savedMovieObject.watched, "rating": savedMovieObject.rating});
            }
            if(savedMovieObject.movieList.listName == "Movies to watch with the kids"){
                recentlyAdded.push({"movie": savedMovieObject, "watched": savedMovieObject.watched, "rating": savedMovieObject.rating});
            }
        })
        curatedList1 = recentlyAdded.map((savedMovieObject, index) => {
            return (

                <li   key={index} className="list-item">
                <div className="list-item">
                <UserMovie movie={savedMovieObject.movie.movie} onMovieClick={onMovieClick} watched={savedMovieObject.watched} rating={savedMovieObject.rating} savedMovie={savedMovieObject} />
                </div>
                </li>
            )
        })
        curatedList2 = familyFriendly.map((savedMovieObject, index) => {
            return (
                
                <li   key={index} className="list-item">
                <div className="list-item">
                <UserMovie movie={savedMovieObject.movie.movie} onMovieClick={onMovieClick} watched={savedMovieObject.watched} rating={savedMovieObject.rating} savedMovie={savedMovieObject} />
                </div>
                </li>
            )
        })
        curatedList3 = recommended.map((savedMovieObject, index) => {
            return (
                
                <li   key={index} className="list-item">
                <div className="list-item">
                <UserMovie movie={savedMovieObject.movie.movie} onMovieClick={onMovieClick} watched={savedMovieObject.watched} rating={savedMovieObject.rating} savedMovie={savedMovieObject} />
                </div>
                </li>
            )
        })
    }
    const setUserView = () => {
        console.log("test");
        handleViewChange();
    }
        if(recentlyAdded.length >= 0){
            return(
                <>
                <br></br><br></br><br></br>
                <button class="user-button" onClick={setUserView}>Home</button>
                <h2>To Watch with Kids</h2>
                <ul>{curatedList1}</ul>
                <h2>Favourite Movies</h2>
                <ul>{curatedList2}</ul>
                <h2>Watch later</h2>
                <ul>{curatedList3}</ul>
                </> 
            )
        } else {
            return(
                <>
                <p>Loading....</p>
                </> 
            )
        }
    }
export default UserCuratedList;