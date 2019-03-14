import React, { Component } from 'react';

import './App.scss';
import WeatherWidget from './components/weather-widget/weather-widget'

export default class App extends Component {
    render() {
        return (
            <div id="app">
                <WeatherWidget />
            </div>
        );
    }
}
