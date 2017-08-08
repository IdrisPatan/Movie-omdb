import React, {Component} from 'react';
import '../App.css';
import Movie from "./Movie";
class SearchedMovieList extends Component {

    render() {
        return (
            <div className="searchMovieContainer">
                <h1>Movies</h1>
                {this.props.moviesData.map((movie) => {
                    return (
                    <div key={movie.imdbID}>
                        <Movie movie={movie}/>
                    </div>
                    )
                })}
            </div>
        );
    }
}

export default SearchedMovieList;
