import 'dotenv/config';
import cors from 'cors';
import express from 'express';
const app = express();

// * cors : on autorise 2 sites à faire des requêtes AJAX sur notre API
app.use(
    cors({
        origin: [
            'http://localhost',
            'http://127.0.0.1',
            'http://127.0.0.1:5173',
            'http://localhost:5173',
        ],
    })
);

import { router } from './routers/router.js';
import { notFound, errorHandler } from './middlewares/errorHandlers.js';
// * Quand on a besoin de req.body, on a deux solutions, si on attend un formulaire traditionnel, on branche le middleware express.urlencoded, si on fait une API REST json, on a besoin de express.json
app.use(express.json());
// ! extended: false veut dire qu'on se sert de body-parser, true veut dire qu'on se sert de qs
app.use(express.urlencoded({ extended: false }));
// * On peut préfixé les URL : dans ce cas c'est utile pour versionner les API
// app.use('/api/v1', router);

app.use(express.static('dist'));

app.use(router);

app.use(notFound);
app.use(errorHandler);

export { app };
