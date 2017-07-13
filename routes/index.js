import express, { Router } from 'express';

import jokeController from '../controllers/jokeController';

const router = Router();

router.get('/', (req, res, next) => {
    res.render('index', { title: 'chuck norris joke app' });
});

router.get('/joke', jokeController.jokeCall);

export default router;
