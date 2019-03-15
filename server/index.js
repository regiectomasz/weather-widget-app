import app from './app';
import config from './config';

const APP_CONFIG = config.get('app');

app.listen(APP_CONFIG.port, () => {
	console.log(`App listening on http://${APP_CONFIG.host}:${APP_CONFIG.port}`);
});
