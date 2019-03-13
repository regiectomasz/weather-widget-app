// https://openweathermap.org/data/2.5/forecast/daily/?appid=b6907d289e10d714a6e88b30761fae22&id=7530858&units=metric
export let mockDaily = {
	'city': {
		'id': 7530858,
		'name': 'Poznań',
		'coord': {'lon': 16.9015, 'lat': 52.4006},
		'country': 'PL',
		'population': 0
	},
	'cod': '200',
	'message': 0.034267,
	'cnt': 14,
	'list': [{
		'dt': 1552388400,
		'temp': {'day': 3.9, 'min': 2.58, 'max': 3.9, 'night': 2.61, 'eve': 3.9, 'morn': 3.9},
		'pressure': 1014.76,
		'humidity': 82,
		'weather': [{'id': 801, 'main': 'Clouds', 'description': 'few clouds', 'icon': '02n'}],
		'speed': 4.57,
		'deg': 211,
		'clouds': 24
	}, {
		'dt': 1552474800,
		'temp': {'day': 8.13, 'min': 3.11, 'max': 8.9, 'night': 5.18, 'eve': 7.4, 'morn': 3.11},
		'pressure': 1004.72,
		'humidity': 78,
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'speed': 8.82,
		'deg': 247,
		'clouds': 88,
		'rain': 1.27
	}, {
		'dt': 1552561200,
		'temp': {'day': 6.71, 'min': 4.82, 'max': 6.71, 'night': 4.82, 'eve': 6.29, 'morn': 5.08},
		'pressure': 1000,
		'humidity': 92,
		'weather': [{'id': 501, 'main': 'Rain', 'description': 'moderate rain', 'icon': '10d'}],
		'speed': 8.61,
		'deg': 261,
		'clouds': 36,
		'rain': 4.38
	}, {
		'dt': 1552647600,
		'temp': {'day': 5.76, 'min': 5.08, 'max': 6.84, 'night': 6.17, 'eve': 6.11, 'morn': 5.08},
		'pressure': 1005.69,
		'humidity': 97,
		'weather': [{'id': 501, 'main': 'Rain', 'description': 'moderate rain', 'icon': '10d'}],
		'speed': 8.72,
		'deg': 294,
		'clouds': 88,
		'rain': 3.43
	}, {
		'dt': 1552734000,
		'temp': {'day': 8.36, 'min': 5.38, 'max': 9.15, 'night': 9.15, 'eve': 6.73, 'morn': 5.38},
		'pressure': 1008.97,
		'humidity': 0,
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'speed': 7.04,
		'deg': 301,
		'clouds': 53,
		'rain': 1.12
	}, {
		'dt': 1552820400,
		'temp': {'day': 10.73, 'min': 8.78, 'max': 10.73, 'night': 8.78, 'eve': 10.73, 'morn': 10.22},
		'pressure': 1011.83,
		'humidity': 0,
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'speed': 8.29,
		'deg': 242,
		'clouds': 100,
		'rain': 1.53
	}, {
		'dt': 1552906800,
		'temp': {'day': 11.74, 'min': 2.99, 'max': 11.74, 'night': 2.99, 'eve': 8.03, 'morn': 8.37},
		'pressure': 1008.46,
		'humidity': 0,
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'speed': 5.51,
		'deg': 266,
		'clouds': 93,
		'rain': 0.97
	}, {
		'dt': 1552993200,
		'temp': {'day': 8.24, 'min': 0.98, 'max': 8.24, 'night': 6.28, 'eve': 6.92, 'morn': 0.98},
		'pressure': 1022.38,
		'humidity': 0,
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'speed': 6.4,
		'deg': 53,
		'clouds': 52,
		'rain': 0.23
	}, {
		'dt': 1553076000,
		'temp': {'day': 10.58, 'min': 5.7, 'max': 10.58, 'night': 6.23, 'eve': 9.69, 'morn': 5.7},
		'pressure': 1017.05,
		'humidity': 0,
		'weather': [{'id': 502, 'main': 'Rain', 'description': 'heavy intensity rain', 'icon': '10d'}],
		'speed': 5.83,
		'deg': 101,
		'clouds': 97,
		'rain': 13.7
	}, {
		'dt': 1553162400,
		'temp': {'day': 13.46, 'min': 4.51, 'max': 13.46, 'night': 4.51, 'eve': 8.56, 'morn': 7.46},
		'pressure': 1014.49,
		'humidity': 0,
		'weather': [{'id': 501, 'main': 'Rain', 'description': 'moderate rain', 'icon': '10d'}],
		'speed': 6.72,
		'deg': 114,
		'clouds': 17,
		'rain': 11.63
	}, {
		'dt': 1553248800,
		'temp': {'day': 14.69, 'min': 4.97, 'max': 14.69, 'night': 8.02, 'eve': 12.07, 'morn': 4.97},
		'pressure': 1022.2,
		'humidity': 0,
		'weather': [{'id': 800, 'main': 'Clear', 'description': 'sky is clear', 'icon': '01d'}],
		'speed': 4.26,
		'deg': 122,
		'clouds': 0
	}, {
		'dt': 1553335200,
		'temp': {'day': 16.07, 'min': 8.97, 'max': 16.07, 'night': 8.97, 'eve': 12.44, 'morn': 10.22},
		'pressure': 1024.01,
		'humidity': 0,
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'speed': 4.54,
		'deg': 173,
		'clouds': 85,
		'rain': 0.55
	}, {
		'dt': 1553421600,
		'temp': {'day': 9.7, 'min': 2.3, 'max': 9.7, 'night': 2.3, 'eve': 7.85, 'morn': 9.25},
		'pressure': 1025.24,
		'humidity': 0,
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'speed': 4.99,
		'deg': 322,
		'clouds': 98,
		'rain': 2.63
	}, {
		'dt': 1553508000,
		'temp': {'day': 12.14, 'min': 2.68, 'max': 12.14, 'night': 7.22, 'eve': 9.55, 'morn': 2.68},
		'pressure': 1023.97,
		'humidity': 0,
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'speed': 2.81,
		'deg': 228,
		'clouds': 46
	}]
};

// https://openweathermap.org/data/2.5/forecast/?appid=b6907d289e10d714a6e88b30761fae22&id=7530858&units=metric
export let mockForecast = {
	'cod': '200',
	'message': 0.0044,
	'cnt': 40,
	'list': [{
		'dt': 1552424400,
		'main': {
			'temp': 2.58,
			'temp_min': 2.29,
			'temp_max': 2.58,
			'pressure': 1011.5,
			'sea_level': 1011.5,
			'grnd_level': 1002.26,
			'humidity': 82,
			'temp_kf': 0.3
		},
		'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04n'}],
		'clouds': {'all': 56},
		'wind': {'speed': 5.48, 'deg': 184.502},
		'rain': {},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-12 21:00:00'
	}, {
		'dt': 1552435200,
		'main': {
			'temp': 2.61,
			'temp_min': 2.39,
			'temp_max': 2.61,
			'pressure': 1007.7,
			'sea_level': 1007.7,
			'grnd_level': 998.42,
			'humidity': 81,
			'temp_kf': 0.22
		},
		'weather': [{'id': 804, 'main': 'Clouds', 'description': 'overcast clouds', 'icon': '04n'}],
		'clouds': {'all': 88},
		'wind': {'speed': 6.61, 'deg': 179.5},
		'rain': {},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-13 00:00:00'
	}, {
		'dt': 1552446000,
		'main': {
			'temp': 2.65,
			'temp_min': 2.5,
			'temp_max': 2.65,
			'pressure': 1004.28,
			'sea_level': 1004.28,
			'grnd_level': 995.07,
			'humidity': 76,
			'temp_kf': 0.15
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
		'clouds': {'all': 64},
		'wind': {'speed': 6.68, 'deg': 193.501},
		'rain': {'3h': 0.065},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-13 03:00:00'
	}, {
		'dt': 1552456800,
		'main': {
			'temp': 3.11,
			'temp_min': 3.03,
			'temp_max': 3.11,
			'pressure': 1003.43,
			'sea_level': 1003.43,
			'grnd_level': 994.27,
			'humidity': 90,
			'temp_kf': 0.07
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'clouds': {'all': 92},
		'wind': {'speed': 7.33, 'deg': 221.501},
		'rain': {'3h': 1.175},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-13 06:00:00'
	}, {
		'dt': 1552467600,
		'main': {
			'temp': 6.63,
			'temp_min': 6.63,
			'temp_max': 6.63,
			'pressure': 1005.15,
			'sea_level': 1005.15,
			'grnd_level': 996.15,
			'humidity': 96,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'clouds': {'all': 8},
		'wind': {'speed': 7.82, 'deg': 255.006},
		'rain': {'3h': 0.015},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-13 09:00:00'
	}, {
		'dt': 1552478400,
		'main': {
			'temp': 8.13,
			'temp_min': 8.13,
			'temp_max': 8.13,
			'pressure': 1004.72,
			'sea_level': 1004.72,
			'grnd_level': 995.71,
			'humidity': 78,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'clouds': {'all': 88},
		'wind': {'speed': 8.82, 'deg': 246.5},
		'rain': {'3h': 0.015},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-13 12:00:00'
	}, {
		'dt': 1552489200,
		'main': {
			'temp': 8.9,
			'temp_min': 8.9,
			'temp_max': 8.9,
			'pressure': 1003.6,
			'sea_level': 1003.6,
			'grnd_level': 994.6,
			'humidity': 68,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'clouds': {'all': 88},
		'wind': {'speed': 7.26, 'deg': 229.003},
		'rain': {'3h': 0.0050000000000001},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-13 15:00:00'
	}, {
		'dt': 1552500000,
		'main': {
			'temp': 7.4,
			'temp_min': 7.4,
			'temp_max': 7.4,
			'pressure': 1002.79,
			'sea_level': 1002.79,
			'grnd_level': 993.76,
			'humidity': 66,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
		'clouds': {'all': 68},
		'wind': {'speed': 7.02, 'deg': 212.505},
		'rain': {'3h': 0.015},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-13 18:00:00'
	}, {
		'dt': 1552510800,
		'main': {
			'temp': 5.81,
			'temp_min': 5.81,
			'temp_max': 5.81,
			'pressure': 1001.3,
			'sea_level': 1001.3,
			'grnd_level': 992.27,
			'humidity': 65,
			'temp_kf': 0
		},
		'weather': [{'id': 801, 'main': 'Clouds', 'description': 'few clouds', 'icon': '02n'}],
		'clouds': {'all': 12},
		'wind': {'speed': 7.51, 'deg': 212},
		'rain': {},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-13 21:00:00'
	}, {
		'dt': 1552521600,
		'main': {
			'temp': 5.18,
			'temp_min': 5.18,
			'temp_max': 5.18,
			'pressure': 999.61,
			'sea_level': 999.61,
			'grnd_level': 990.45,
			'humidity': 72,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
		'clouds': {'all': 56},
		'wind': {'speed': 7.37, 'deg': 219.501},
		'rain': {'3h': 0.04},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-14 00:00:00'
	}, {
		'dt': 1552532400,
		'main': {
			'temp': 5.61,
			'temp_min': 5.61,
			'temp_max': 5.61,
			'pressure': 997.56,
			'sea_level': 997.56,
			'grnd_level': 988.46,
			'humidity': 75,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
		'clouds': {'all': 92},
		'wind': {'speed': 7.91, 'deg': 222},
		'rain': {'3h': 0.25},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-14 03:00:00'
	}, {
		'dt': 1552543200,
		'main': {
			'temp': 5.08,
			'temp_min': 5.08,
			'temp_max': 5.08,
			'pressure': 997.39,
			'sea_level': 997.39,
			'grnd_level': 988.3,
			'humidity': 90,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'clouds': {'all': 88},
		'wind': {'speed': 8.41, 'deg': 258.5},
		'rain': {'3h': 1.275},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-14 06:00:00'
	}, {
		'dt': 1552554000,
		'main': {
			'temp': 5.22,
			'temp_min': 5.22,
			'temp_max': 5.22,
			'pressure': 999.42,
			'sea_level': 999.42,
			'grnd_level': 990.36,
			'humidity': 96,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'clouds': {'all': 92},
		'wind': {'speed': 10.07, 'deg': 270.003},
		'rain': {'3h': 0.895},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-14 09:00:00'
	}, {
		'dt': 1552564800,
		'main': {
			'temp': 6.71,
			'temp_min': 6.71,
			'temp_max': 6.71,
			'pressure': 1000,
			'sea_level': 1000,
			'grnd_level': 991.02,
			'humidity': 92,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'clouds': {'all': 36},
		'wind': {'speed': 8.61, 'deg': 261.005},
		'rain': {'3h': 0.025},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-14 12:00:00'
	}, {
		'dt': 1552575600,
		'main': {
			'temp': 6.64,
			'temp_min': 6.64,
			'temp_max': 6.64,
			'pressure': 998.32,
			'sea_level': 998.32,
			'grnd_level': 989.41,
			'humidity': 82,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'clouds': {'all': 80},
		'wind': {'speed': 7.28, 'deg': 236.001},
		'rain': {'3h': 0.2},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-14 15:00:00'
	}, {
		'dt': 1552586400,
		'main': {
			'temp': 6.29,
			'temp_min': 6.29,
			'temp_max': 6.29,
			'pressure': 996.32,
			'sea_level': 996.32,
			'grnd_level': 987.3,
			'humidity': 79,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
		'clouds': {'all': 88},
		'wind': {'speed': 6.02, 'deg': 211.006},
		'rain': {'3h': 0.17},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-14 18:00:00'
	}, {
		'dt': 1552597200,
		'main': {
			'temp': 5.19,
			'temp_min': 5.19,
			'temp_max': 5.19,
			'pressure': 994.91,
			'sea_level': 994.91,
			'grnd_level': 985.94,
			'humidity': 87,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
		'clouds': {'all': 92},
		'wind': {'speed': 6.15, 'deg': 208.003},
		'rain': {'3h': 0.61},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-14 21:00:00'
	}, {
		'dt': 1552608000,
		'main': {
			'temp': 4.82,
			'temp_min': 4.82,
			'temp_max': 4.82,
			'pressure': 995,
			'sea_level': 995,
			'grnd_level': 985.85,
			'humidity': 95,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
		'clouds': {'all': 92},
		'wind': {'speed': 5.21, 'deg': 233.522},
		'rain': {'3h': 1.2},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-15 00:00:00'
	}, {
		'dt': 1552618800,
		'main': {
			'temp': 5.34,
			'temp_min': 5.34,
			'temp_max': 5.34,
			'pressure': 996.11,
			'sea_level': 996.11,
			'grnd_level': 987.02,
			'humidity': 95,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
		'clouds': {'all': 92},
		'wind': {'speed': 5.85, 'deg': 256.001},
		'rain': {'3h': 0.28},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-15 03:00:00'
	}, {
		'dt': 1552629600,
		'main': {
			'temp': 5.08,
			'temp_min': 5.08,
			'temp_max': 5.08,
			'pressure': 997.46,
			'sea_level': 997.46,
			'grnd_level': 988.39,
			'humidity': 95,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'clouds': {'all': 92},
		'wind': {'speed': 6.16, 'deg': 267.004},
		'rain': {'3h': 0.94},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-15 06:00:00'
	}, {
		'dt': 1552640400,
		'main': {
			'temp': 5.79,
			'temp_min': 5.79,
			'temp_max': 5.79,
			'pressure': 1001.52,
			'sea_level': 1001.52,
			'grnd_level': 992.52,
			'humidity': 98,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'clouds': {'all': 92},
		'wind': {'speed': 8.81, 'deg': 296.002},
		'rain': {'3h': 0.92},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-15 09:00:00'
	}, {
		'dt': 1552651200,
		'main': {
			'temp': 5.76,
			'temp_min': 5.76,
			'temp_max': 5.76,
			'pressure': 1005.69,
			'sea_level': 1005.69,
			'grnd_level': 996.56,
			'humidity': 97,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'clouds': {'all': 88},
		'wind': {'speed': 8.72, 'deg': 294.001},
		'rain': {'3h': 0.09},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-15 12:00:00'
	}, {
		'dt': 1552662000,
		'main': {
			'temp': 6.84,
			'temp_min': 6.84,
			'temp_max': 6.84,
			'pressure': 1007.78,
			'sea_level': 1007.78,
			'grnd_level': 998.77,
			'humidity': 92,
			'temp_kf': 0
		},
		'weather': [{'id': 802, 'main': 'Clouds', 'description': 'scattered clouds', 'icon': '03d'}],
		'clouds': {'all': 48},
		'wind': {'speed': 6.71, 'deg': 285.001},
		'rain': {},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-15 15:00:00'
	}, {
		'dt': 1552672800,
		'main': {
			'temp': 6.11,
			'temp_min': 6.11,
			'temp_max': 6.11,
			'pressure': 1009.42,
			'sea_level': 1009.42,
			'grnd_level': 1000.23,
			'humidity': 90,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
		'clouds': {'all': 68},
		'wind': {'speed': 5, 'deg': 262.501},
		'rain': {'3h': 0.020000000000001},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-15 18:00:00'
	}, {
		'dt': 1552683600,
		'main': {
			'temp': 5.51,
			'temp_min': 5.51,
			'temp_max': 5.51,
			'pressure': 1009.64,
			'sea_level': 1009.64,
			'grnd_level': 1000.46,
			'humidity': 90,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
		'clouds': {'all': 80},
		'wind': {'speed': 5.11, 'deg': 232.002},
		'rain': {'3h': 0.18},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-15 21:00:00'
	}, {
		'dt': 1552694400,
		'main': {
			'temp': 6.17,
			'temp_min': 6.17,
			'temp_max': 6.17,
			'pressure': 1008.7,
			'sea_level': 1008.7,
			'grnd_level': 999.63,
			'humidity': 96,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
		'clouds': {'all': 92},
		'wind': {'speed': 6.56, 'deg': 225.003},
		'rain': {'3h': 1.28},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-16 00:00:00'
	}, {
		'dt': 1552705200,
		'main': {
			'temp': 8.27,
			'temp_min': 8.27,
			'temp_max': 8.27,
			'pressure': 1008.46,
			'sea_level': 1008.46,
			'grnd_level': 999.43,
			'humidity': 95,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
		'clouds': {'all': 92},
		'wind': {'speed': 7.21, 'deg': 258.002},
		'rain': {'3h': 0.89},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-16 03:00:00'
	}, {
		'dt': 1552716000,
		'main': {
			'temp': 8.95,
			'temp_min': 8.95,
			'temp_max': 8.95,
			'pressure': 1009.25,
			'sea_level': 1009.25,
			'grnd_level': 1000.26,
			'humidity': 95,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'clouds': {'all': 92},
		'wind': {'speed': 8.16, 'deg': 254},
		'rain': {'3h': 0.72},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-16 06:00:00'
	}, {
		'dt': 1552726800,
		'main': {
			'temp': 9.79,
			'temp_min': 9.79,
			'temp_max': 9.79,
			'pressure': 1010.67,
			'sea_level': 1010.67,
			'grnd_level': 1001.7,
			'humidity': 96,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'clouds': {'all': 92},
		'wind': {'speed': 8.7, 'deg': 257.503},
		'rain': {'3h': 0.45},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-16 09:00:00'
	}, {
		'dt': 1552737600,
		'main': {
			'temp': 10.63,
			'temp_min': 10.63,
			'temp_max': 10.63,
			'pressure': 1011.5,
			'sea_level': 1011.5,
			'grnd_level': 1002.42,
			'humidity': 96,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
		'clouds': {'all': 76},
		'wind': {'speed': 8.21, 'deg': 256.502},
		'rain': {'3h': 0.029999999999999},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-16 12:00:00'
	}, {
		'dt': 1552748400,
		'main': {
			'temp': 11.32,
			'temp_min': 11.32,
			'temp_max': 11.32,
			'pressure': 1011.45,
			'sea_level': 1011.45,
			'grnd_level': 1002.55,
			'humidity': 91,
			'temp_kf': 0
		},
		'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04d'}],
		'clouds': {'all': 68},
		'wind': {'speed': 7.4, 'deg': 251.5},
		'rain': {},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-16 15:00:00'
	}, {
		'dt': 1552759200,
		'main': {
			'temp': 9.92,
			'temp_min': 9.92,
			'temp_max': 9.92,
			'pressure': 1011.79,
			'sea_level': 1011.79,
			'grnd_level': 1002.79,
			'humidity': 85,
			'temp_kf': 0
		},
		'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04n'}],
		'clouds': {'all': 64},
		'wind': {'speed': 5.01, 'deg': 242.003},
		'rain': {},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-16 18:00:00'
	}, {
		'dt': 1552770000,
		'main': {
			'temp': 8.4,
			'temp_min': 8.4,
			'temp_max': 8.4,
			'pressure': 1011.53,
			'sea_level': 1011.53,
			'grnd_level': 1002.43,
			'humidity': 83,
			'temp_kf': 0
		},
		'weather': [{'id': 801, 'main': 'Clouds', 'description': 'few clouds', 'icon': '02n'}],
		'clouds': {'all': 24},
		'wind': {'speed': 4.56, 'deg': 227},
		'rain': {},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-16 21:00:00'
	}, {
		'dt': 1552780800,
		'main': {
			'temp': 6.73,
			'temp_min': 6.73,
			'temp_max': 6.73,
			'pressure': 1011.23,
			'sea_level': 1011.23,
			'grnd_level': 1002.11,
			'humidity': 83,
			'temp_kf': 0
		},
		'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
		'clouds': {'all': 0},
		'wind': {'speed': 4.76, 'deg': 223.501},
		'rain': {},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-17 00:00:00'
	}, {
		'dt': 1552791600,
		'main': {
			'temp': 5.62,
			'temp_min': 5.62,
			'temp_max': 5.62,
			'pressure': 1010.66,
			'sea_level': 1010.66,
			'grnd_level': 1001.54,
			'humidity': 82,
			'temp_kf': 0
		},
		'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '02n'}],
		'clouds': {'all': 8},
		'wind': {'speed': 4.67, 'deg': 217.502},
		'rain': {},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-17 03:00:00'
	}, {
		'dt': 1552802400,
		'main': {
			'temp': 5.55,
			'temp_min': 5.55,
			'temp_max': 5.55,
			'pressure': 1010.07,
			'sea_level': 1010.07,
			'grnd_level': 1000.85,
			'humidity': 85,
			'temp_kf': 0
		},
		'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
		'clouds': {'all': 0},
		'wind': {'speed': 4.77, 'deg': 202.005},
		'rain': {},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-17 06:00:00'
	}, {
		'dt': 1552813200,
		'main': {
			'temp': 12.33,
			'temp_min': 12.33,
			'temp_max': 12.33,
			'pressure': 1009.28,
			'sea_level': 1009.28,
			'grnd_level': 1000.36,
			'humidity': 84,
			'temp_kf': 0
		},
		'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
		'clouds': {'all': 0},
		'wind': {'speed': 5.55, 'deg': 209.506},
		'rain': {},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-17 09:00:00'
	}, {
		'dt': 1552824000,
		'main': {
			'temp': 17.31,
			'temp_min': 17.31,
			'temp_max': 17.31,
			'pressure': 1008.07,
			'sea_level': 1008.07,
			'grnd_level': 999.29,
			'humidity': 67,
			'temp_kf': 0
		},
		'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
		'clouds': {'all': 0},
		'wind': {'speed': 6.47, 'deg': 233.002},
		'rain': {},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-17 12:00:00'
	}, {
		'dt': 1552834800,
		'main': {
			'temp': 17.81,
			'temp_min': 17.81,
			'temp_max': 17.81,
			'pressure': 1006.46,
			'sea_level': 1006.46,
			'grnd_level': 997.7,
			'humidity': 61,
			'temp_kf': 0
		},
		'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
		'clouds': {'all': 0},
		'wind': {'speed': 5.36, 'deg': 224.501},
		'rain': {},
		'sys': {'pod': 'd'},
		'dt_txt': '2019-03-17 15:00:00'
	}, {
		'dt': 1552845600,
		'main': {
			'temp': 13.11,
			'temp_min': 13.11,
			'temp_max': 13.11,
			'pressure': 1005.96,
			'sea_level': 1005.96,
			'grnd_level': 997.18,
			'humidity': 59,
			'temp_kf': 0
		},
		'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
		'clouds': {'all': 0},
		'wind': {'speed': 4.46, 'deg': 203.006},
		'rain': {'3h': 0.0024999999999995},
		'sys': {'pod': 'n'},
		'dt_txt': '2019-03-17 18:00:00'
	}],
	'city': {'id': 7530858, 'name': 'Poznań', 'coord': {'lat': 52.4006, 'lon': 16.9015}, 'country': 'PL'}
};
