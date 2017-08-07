import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



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
              <input type="text" id="searchBox" />
          </div>
      </div>
    );
  }
}

export default App;
