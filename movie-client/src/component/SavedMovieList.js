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
                    <div key={film.id}>
                        <Movie movie={film} movieClickAction = {()=> console.log("need to implement delete functionality")} />
                    </div>
                )
            })}
        </div>
    )
};

export default SavedMovieList;
