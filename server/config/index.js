import convict from 'convict';

const config = convict({
	env: {
		doc: 'The application environment',
		format: ['development', 'production', 'test', 'debug'],
		default: 'development',
		env: 'NODE_ENV'
	},
	app: {
		host: {
			doc: 'The application host',
			format: 'ipaddress',
			default: '127.0.0.1',
			env: 'APP_HOST',
		},
		port: {
			doc: 'The application port',
			format: 'port',
			default: 8080,
			env: 'APP_PORT',
			arg: 'port'
		}
	},
	owm: {
		appid: {
			doc: 'OpenWeatherMap api id',
			format: String,
			default: 'b6907d289e10d714a6e88b30761fae22', // api id from https://openweathermap.org/
			env: 'OWM_APPID',
		},
		unit: {
			doc: 'Temperature unit',
			format: ['metric', 'imperial'],
			default: 'metric',
			env: 'OWM_UNIT'
		}
	}
});

config.validate({allowed: 'strict'}); // allowed: warn(default) or strict

export default config;
