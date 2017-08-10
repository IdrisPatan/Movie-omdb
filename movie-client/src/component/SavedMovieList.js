import React from 'react';
import '../App.css';
import Movie from './Movie';



const SavedMovieList = (props) => {
    return (
        <div className="savedMovieContainer">
            <h1>Saved Movies</h1>
            {props.savedMovies.map((film) => {
                return (
                    <div key={film.id}>
                        <Movie saveMovie={props.saveMovie} movie={film}/>
                    </div>
                )
            })}
        </div>
    )
};

export default SavedMovieList;
