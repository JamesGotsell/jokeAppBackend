import express, { Router } from 'express';

import jokeController from '../controllers/jokeController';

const router = Router();

router.get('/', (req, res, next) => {
    res.send('chuck norris joke app api' );
});

router.get('/joke', jokeController.jokeCall);

export default router;
