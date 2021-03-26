import React, { Component } from 'react';
import clear from "./images/weather-icons/clear.svg";
import cloudy from "./images/weather-icons/cloudy.svg";
import drizzle from "./images/weather-icons/drizzle.svg";
import fog from "./images/weather-icons/fog.svg";
import mostlycloudy from "./images/weather-icons/mostlycloudy.svg";
import partlycloudy from "./images/weather-icons/partlycloudy.svg";
import rain from "./images/weather-icons/rain.svg";
import snow from "./images/weather-icons/snow.svg";
import storm from "./images/weather-icons/storm.svg";
import unknown from "./images/weather-icons/unknown.svg";

class NextDeg extends Component {
    render() {
        return (
            <div className="temp24" >
                <div id="dd1"><p id="Time1">t1</p> <img src={storm} alt="storm-img" id="img1" /><p id="Deg1">d1</p></div>

                <div id="dd2"><p id="Time2">t2</p> <img src={storm} alt="storm-img" id="img2" /><p id="Deg2">d2</p></div>
                <div id="dd3"><p id="Time3">t3</p> <img src={storm} alt="storm-img" id="img3" /><p id="Deg3">d3</p></div>

                <div id="dd4"><p id="Time4">t4</p> <img src={storm} alt="storm-img" id="img4" /><p id="Deg4">d4</p></div>

                <div id="dd5"><p id="Time5">t5</p> <img src={storm} alt="storm-img" id="img5" /><p id="Deg5">d5</p></div>

                <div id="dd6"><p id="Time6">t6</p> <img src={storm} alt="storm-img" id="img6" /><p id="Deg6">d6</p></div>

                <div id="dd7"> <p id="Time7">t7</p> <img src={storm} alt="storm-img" id="img7" /><p id="Deg7">d7</p></div>
            </div>
        );

    }
}
export default NextDeg;