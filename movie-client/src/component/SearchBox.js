import React from 'react';
import '../App.css';


const SearchBox = (props) => {

    return (
        <div>
            <h1>Movie Search</h1>
            <input type="text" name="searchField" onChange={props.onChange}/>
            <button id="searchButton" onClick={props.getMovies}>Search</button>
            <button id="clearButton" onClick={props.clearMovies}>Clear</button>
        </div>
    )
};

export default SearchBox;





































