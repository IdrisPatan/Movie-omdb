import React from 'react';
import '../App.css';
import Movie from './Movie';



const SavedMovieList = (props) => {

    if (!props.savedMovies){
        return (
            <div>Loading...</div>
        );
    }

    return (
        <div className="savedMovieContainer">
            <h1>Saved Movies</h1>
            {props.savedMovies.map(film => {
                return (
                    <div key={film.Id}>
                        <Movie movie={film} movieClickAction={props.deleteMovie} buttonText="Delete" />
                    </div>
                )
            })}
        </div>
    )
};

export default SavedMovieList;
