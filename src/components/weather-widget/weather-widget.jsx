import React, {Component} from 'react';

import './weather-widget.scss';

export default class WeatherWidget extends Component {
	render() {
		const daysContent = [1, 2, 3, 4, 5].map(day => (
				<li className="days-content">
					<div className="font-weight-bold">Mon</div>
					<span className="icon rainy"/>
					<div>
						<span className="font-weight-bold">{day}&deg;</span>
						<span>{day * 2}&deg;</span>
					</div>
				</li>
			)
		);

		const hoursContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(hour => (
			<li className="hours-content">
				<div className="hour">{hour}:00</div>
				<div>{hour * 2}&deg;</div>
			</li>
			)
		);

		return (
			<div className="widget-panel weather-widget">
				<ul className="content">
					{daysContent}
				</ul>
				<ul className="content">
					{hoursContent}
				</ul>
			</div>
		);
	}
}
