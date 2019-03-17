import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

import './App.scss';
import WeatherWidget from './components/weather-widget/weather-widget';

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<Router>
					<div>
						<Switch>
							<Route exact path="/" render={() => (
								<Redirect to="/forecast5days"/>
							)}/>
							<Route path="/forecast5days/:dayName" component={WeatherWidget}/>
							<Route render={() => (
								<div>
									<h3>404 page not found</h3>
								</div>
							)}/>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}
