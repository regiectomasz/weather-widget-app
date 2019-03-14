import { Router } from 'express';

const router = Router();

/**
 * GET /api/info
 */
router.get('/info', (req, res/*, next*/) => res.status(200).send({status: 'OK'}));

export default router;
