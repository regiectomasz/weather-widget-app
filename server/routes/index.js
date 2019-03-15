import {Router} from 'express';
import proxy from 'http-proxy-middleware';

import config from '../config';

const router = Router();
const OWM_CONFIG = config.get('owm');

/**
 * @swagger
 *
 * /api/info:
 *    get:
 *      description: get API info
 */
router.get('/info', (req, res/*, next*/) => res.status(200).send({status: 'OK'}));

/**
 * @swagger
 *
 * /api/daily:
 *    get:
 *      description: get daily weather data
 *      produces:
 *       - "application/json"
 */
router.get('/daily', proxy({
	target: `https://openweathermap.org/data/2.5/forecast/daily/?appid=${OWM_CONFIG.appid}&id=7530858&units=${OWM_CONFIG.units}`,
	changeOrigin: true
}));

/**
 * @swagger
 *
 * /api/forecast:
 *    get:
 *      description: get forecast weather data
 *      produces:
 *       - "application/json"
 */
router.get('/forecast', proxy({
	target: `https://openweathermap.org/data/2.5/forecast/?appid=${OWM_CONFIG.appid}&id=7530858&units=${OWM_CONFIG.units}`,
	changeOrigin: true
}));

export default router;
