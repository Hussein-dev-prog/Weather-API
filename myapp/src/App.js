//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="WeatherAPI">
      <header className="SearchContainer">
        <input type="text" placeholder="Type in a city name"></input>
        <button type="submit">FIND WEATHER</button>
      </header>
      <main className="MainApp">
        <div className="pic1">
          <img src="https://placekitten.com/150/150" alt="kitten"></img>
          <div id="below-pic">
            <p id="p1">Hello </p>
            <p id="p1">Hello 1</p>
            <p id="p1">Hello 2</p>
          </div>
        </div>

        <div className="temp24" >
          <div><p id="Time">1</p><img src="https://placekitten.com/50/50" alt="kitten"></img><p id="Deg">11</p></div>

          <div><p id="Time">2</p><img src="https://placekitten.com/50/50" alt="kitten"></img><p id="Deg">22</p></div>

          <div><p id="Time"> 3</p><img src="https://placekitten.com/50/50" alt="kitten"></img><p id="Deg">33</p></div>

          <div><p id="Time"> 4</p><img src="https://placekitten.com/50/50" alt="kitten"></img><p id="Deg">44</p></div>

          <div><p id="Time">5</p><img src="https://placekitten.com/50/50" alt="kitten"></img><p id="Deg">55</p></div>

          <div><p id="Time">6</p><img src="https://placekitten.com/50/50" alt="kitten"></img><p id="Deg">66</p></div>

          <div><p id="Time">7</p><img src="https://placekitten.com/50/50" alt="kitten"></img><p id="Deg">77</p></div>
        </div>
      </main>
    </div>
  );
}

export default App;
