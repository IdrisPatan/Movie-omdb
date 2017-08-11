import React, { Component } from 'react';
import '../App.css';
import SearchedMovieList from "./SearchedMovieList";
import SavedMovieList from "./SavedMovieList";
import SearchBox from "./SearchBox"
import Axios from "axios";


const API_KEY = "c5a8df09&s";
const OMDB_BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}=`;
const SPRING_API_ENDPOINT = "http://localhost:8080/";

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            searchField: "",
            searchedMoviesList: [],
            savedMoviesList: []
        };

        this.getMoviesOmdb = this.getMoviesOmdb.bind(this);
        this.clearSearchedMovieList = this.clearSearchedMovieList.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onList = this.onList.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onList();
    }

    onInputChange(event){
        this.setState({
            searchField: event.target.value
        })
    }

    getMoviesOmdb(){
        const searchURL = OMDB_BASE_URL + this.state.searchField

        fetch(searchURL)
            .then(response => response.json())
            .then(response => {
                this.setState({searchedMoviesList: response.Search, searchField: ''})
            })
    }

    clearSearchedMovieList(){
        this.setState({
            searchedMoviesList : [],
            searchField : ''
        })
    }


    onSave(movie) {
        Axios.post(SPRING_API_ENDPOINT, {
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster})
            .then(() => this.onList())
            .catch(error => console.log(error.message));
    }


    onList() {
        Axios.get(SPRING_API_ENDPOINT)
            .then(result => {

                const convertObjectNames = result.data.map(movie => {
                    return {
                        Id: movie.id,
                        Title: movie.title,
                        Year: movie.year,
                        Poster: movie.poster
                    }
                });

                this.setState({savedMoviesList: convertObjectNames})
            })
            .catch(error => console.log(error));
    }

    onDelete(movie) {
        Axios.delete(`${SPRING_API_ENDPOINT}${movie.Id}`)
            .then(()=> this.onList())
            .catch(error => console.log(error));
    }


    render() {
        return (
          <div className="App">
              <h1>Movie Database Explorer</h1>
              <SearchBox getMovies = {this.getMoviesOmdb} clearMovies={this.clearSearchedMovieList} onChange={this.onInputChange}/>
              <SearchedMovieList moviesData={this.state.searchedMoviesList} onSave = {this.onSave}/>
              <SavedMovieList deleteMovie={this.onDelete} saveMovie={this.onSave} savedMovies={this.state.savedMoviesList}/>
          </div>
        );
    }
}


export default App;
