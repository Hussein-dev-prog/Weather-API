import React, { Component } from 'react';
class Search extends Component {
    render() {
        return (
            <header className="SearchContainer">
                <input type="text" placeholder="Type in a city name" id="inputsr"></input>
                <button type="submit" id="btn">FIND WEATHER</button>
            </header>
        );

    }
}
export default Search;