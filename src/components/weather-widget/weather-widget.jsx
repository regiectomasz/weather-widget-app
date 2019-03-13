import React, {Component} from 'react';

import './weather-widget.scss';
import * as mock from './weather-widget.mock';

export const daysAbbreviation = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default class WeatherWidget extends Component {

	render() {
		const daysContent = mock.mockDaily.list.slice(0, 5).map(dayData => {
			let date = new Date(dayData.dt * 1000); // convert Unix epoch time
			let dayName = daysAbbreviation[date.getDay()];

			return (
				<li className="days-content">
					<div className="font-weight-bold">{dayName}</div>
					<span className="icon rainy"/>
					<div>
						<span className="font-weight-bold">{Math.round(dayData.temp.night)}&deg;</span>
						&nbsp;
						<span>{Math.round(dayData.temp.day)}&deg;</span>
					</div>
				</li>
			);
		});

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
