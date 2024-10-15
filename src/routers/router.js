import { Router } from 'express';
import { join } from 'node:path';
import { listRouter } from './listRouter.js';
import { cardRouter } from './cardRouter.js';
import { tagRouter } from './tagRouter.js';
const router = Router();

router.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: join(import.meta.dirname, '../../'),
    });
});

router.use(listRouter);
router.use(cardRouter);
router.use(tagRouter);

export { router };
