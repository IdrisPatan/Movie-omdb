import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchMovieElementBox from "./SearchMovieElementBox";

class SearchMovieContainer extends Component {

    render() {
        return (
            <div className="searchMovieContainer">
                <h1>Movies</h1>
                <SearchMovieElementBox/>
            </div>
        );
    }
}

export default SearchMovieContainer;
