import React, { Component } from 'react';
import '../App.css';
import SearchedMovieList from "./SearchedMovieList";
import SavedMovieList from "./SavedMovieList";



class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            searchField: "",
            searchedMoviesList: []
        }
    }

    getMoviesOmdb (name){
        // get movies
        fetch (`http://www.omdbapi.com/?apikey=c5a8df09&s=${name}`)
            .then(response => response.json())
            .then(response => {
                this.setState({searchedMoviesList: response.Search, searchField: ''})

            })
    }
    
    render() {
    return (
      <div className="App">
          <h1>Movie Search</h1>
          <div>
              <input
                  type="text"
                  name="searchField"
                  value={this.state.searchField}
                  onChange={(event) => this.setState({searchField: event.target.value})}
              />
              <button id="searchButton" onClick={ () => this.getMoviesOmdb(this.state.searchField)} >Search</button>
              <button id="clearButton" onClick={ () => this.setState({searchedMoviesList: []})}>Clear</button>
          </div>
          <div>
              <SearchedMovieList moviesData={this.state.searchedMoviesList}/>
              <SavedMovieList/>
          </div>
      </div>
    );
  }
}
export default App;
