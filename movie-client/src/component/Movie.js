import React from 'react';
import '../App.css';




const Movie = (props) => {
    return (
        <div className="searchMovieElement">
            <p>{props.movie.Title}</p>
            <p>{props.movie.Year}</p>
            <img alt="movie poster" src={props.movie.Poster} height="50px"/>
            <button onClick = {(event) => props.movieClickAction(props.movie)}>{props.buttonText}</button>
        </div>
        );
};
export default Movie;

