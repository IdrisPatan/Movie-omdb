import React, { Component } from 'react';
import './App.css';
import SearchBox from "./SeachBox";
import SearchMovieContainer from "./SearchMovieContainer";
import SavedMovieContianer from "./SavedMovieContianer";



class App extends Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }



    render() {
    return (
      <div className="App">
          <h1>Movie Search</h1>
          <div>
              <SearchBox/>
          </div>
          <div>
              <SearchMovieContainer />
              <SavedMovieContianer/>
          </div>
      </div>
    );
  }
}

export default App;
