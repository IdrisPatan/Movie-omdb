import React, { Component } from 'react';
import '../App.css';

class Movie extends Component {

    render() {
        return (
            <div className="searchMovieElement">
                <p>{this.props.movie.Title}</p>
                <p>{this.props.movie.Year}</p>
                <img alt="movie poster" src={this.props.movie.Poster} height="50px"/>
                <button>Add</button>
            </div>
        );
    }
}

export default Movie;