import express from 'express';

const router = express.Router();

router.post('/', (req, res) => res.send('Express server working'));

export default router;
