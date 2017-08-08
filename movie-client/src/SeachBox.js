import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class SearchBox extends Component {

    render() {
        return (
            <div className="searchBox">
                <div>
                    <input type="text" id="searchInput" />
                    <button id="searchButton" >Search</button>
                    <button id="clearButton" >Clear</button>
                </div>
            </div>
        );
    }
}

export default SearchBox;
