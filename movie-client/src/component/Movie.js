import React from 'react';
import '../App.css';




const Movie = (props) => {
        return (
        <div  className="searchMovieElement">
            <p>{props.searchMovie.Title}</p>
            <p>{props.searchMovie.Year}</p>
            <img alt="movie poster" src={props.searchMovie.Poster} height="50px"/>
            <button onClick = {() => props.saveMovie(props.searchMovie)}>Save</button>
        </div>
        );
};
export default Movie;

