import {Router} from 'express';

import {mockForecast, mockDaily} from '../mocks/weather.mock';

const router = Router();

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
router.get('/daily', (req, res, next) => res.status(200).send(mockDaily));

/**
 * @swagger
 *
 * /api/forecast:
 *    get:
 *      description: get forecast weather data
 *      produces:
 *       - "application/json"
 */
router.get('/forecast', (req, res, next) => res.status(200).send(mockForecast));

export default router;
