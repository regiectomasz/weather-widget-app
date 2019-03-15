import React, {Component} from 'react';
import * as d3 from 'd3';

import styles from './weather-widget.style.scss';

export const daysAbbreviation = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const weatherIconHashMap = {
	'Snow': 'snowy',
	'Rain': 'rainy',
	'Clear': 'sunny',
	'Clouds': 'cloudy',
};

export default class WeatherWidget extends Component {
	state = {
		daily: {
			list: []
		},
		forecast: {
			list: []
		},
		currentDay: 0
	};

	componentDidMount() {
		fetch('/api/daily')
			.then(res => res.json())
			.then(res => {
				this.setState({daily: res});
			});

		fetch('/api/forecast')
			.then(res => res.json())
			.then(res => {
				this.setState({forecast: res});
			});
	}

	changeDay(currentDay) {
		this.setState(() => {
			return {currentDay};
		});
	}

	render() {
		const daysContent = this.state.daily.list.slice(1, 6).map((dayData, index) => {
			let date = new Date(dayData.dt * 1000); // convert Unix epoch time
			let dayName = daysAbbreviation[date.getDay()];

			let mainClassName = 'days-content';
			if (this.state.currentDay === index)
				mainClassName += ' active';

			return (
				<li className={mainClassName} key={dayData.dt} onClick={() => this.changeDay(index)}>
					<div className="font-weight-bold">{dayName}</div>
					<span className={`icon ${weatherIconHashMap[dayData.weather[0].main]}`}/>
					<div>
						<span className="font-weight-bold">{Math.round(dayData.temp.min)}&deg;</span>
						&nbsp;
						<span>{Math.round(dayData.temp.max)}&deg;</span>
					</div>
				</li>
			);
		});

		return (
			<div className="widget-panel weather-widget">
				<ul className="content">
					{daysContent}
				</ul>
				<BarChart width={styles.weatherWidgetWidth} height={160}
						  data={this.state.forecast.list.slice(this.state.currentDay * 8, this.state.currentDay * 8 + 8)}/>
			</div>
		);
	}
}

class BarChart extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.updateChart();
	}

	componentDidUpdate() {
		this.updateChart();
	}

	updateChart() {
		// TODO: performance update
		let data = this.props.data;
		let svgWidth = this.props.width;
		let svgHeight = this.props.height;

		if (data && data.length) {

			let minTemp = Math.round(Math.min(...data.map(d => d.main.temp_min)));
			let maxTemp = Math.round(Math.max(...data.map(d => d.main.temp_max)));

			let width = svgWidth / 8;

			// 5 - min bar height
			// 50 - free space for texts (label and value)
			let yScale = d3.scaleLinear().domain([minTemp, maxTemp]).range([5, svgHeight - 50]); // or d3.scaleLinear(domain, range)

			const svg = d3.select(this.svgEl);

			/**
			 * bars
			 */
			let bars = svg.select('g.bars')
				.selectAll('rect')
				.data(data);

			// add
			bars.enter().append('rect')
				.attr('class', 'bar')
				// .attr('fill', styles.widgetGrayNormal) // moved to style
				.attr('x', (datum, index) => index * width)
				.attr('y', datum => svgHeight - yScale(Math.round(datum.main.temp)))
				.attr('width', width)
				.attr('height', datum => yScale(Math.round(datum.main.temp)));

			// update
			bars.transition()
				.duration(500)
				.attr('y', datum => svgHeight - yScale(Math.round(datum.main.temp)))
				.attr('height', datum => yScale(Math.round(datum.main.temp)));

			/**
			 * values
			 */
			let values = svg.select('g.values')
				.selectAll('text.value')
				.data(data);

			// add
			values.enter().append('text')
				.attr('class', 'value')
				.text(datum => Math.round(datum.main.temp) + '\u00B0')
				.attr('x', (datum, index) => index * width + width / 2)
				.attr('y', datum => svgHeight - yScale(Math.round(datum.main.temp)) - 10);

			// update
			values
				.text(datum => Math.round(datum.main.temp) + '\u00B0')
				.transition()
				.duration(500)
				.attr('y', datum => svgHeight - yScale(Math.round(datum.main.temp)) - 10);

			// labels
			let labels = svg.select('g.labels')
				.selectAll('text.label')
				.data(data);

			labels.enter().append('text') // add
				.attr('class', 'label')
				.text(datum => new Date(datum.dt * 1000).getHours() + ':00') // or split dt_txt
				.attr('x', (datum, index) => index * width + width / 2)
				.attr('y', 20);

			labels.text(datum => new Date(datum.dt * 1000).getHours() + ':00'); // update

			// grid (only vertical)
			svg.select('g.grid')
				.selectAll('line.vertical')
				.data(new Array(data.length - 1))
				.enter().append('line')
				.attr('class', 'vertical')
				.attr('x1', (datum, index) => ((index + 1) * width))
				.attr('y1', 0)
				.attr('x2', (datum, index) => ((index + 1) * width))
				.attr('y2', svgHeight);

			svg.exit().remove();
		}
	}

	render() {
		return (
			<div className="bar-chart">
				<svg width={this.props.width} height={this.props.height} ref={el => this.svgEl = el}>
					<g className="grid"/>
					<g className="bars"/>
					<g className="values"/>
					<g className="labels"/>
				</svg>
			</div>
		);
	}
}
