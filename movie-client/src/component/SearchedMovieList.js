import React from 'react';
import '../App.css';
import Movie from "./Movie";


const SearchedMovieList = (props) => {
    return (
        <div className="searchMovieContainer">
        <h1>Movies</h1>
        {props.moviesData.map(film => {
            return (
                <div key = {film.imdbID}>
                    <Movie saveMovie={props.onSave} searchMovie={film}/>
                </div>
                    )
        })}
    </div>
    )
};

export default SearchedMovieList;
