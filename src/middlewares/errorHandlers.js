import { NotFound } from '../utils/CustomErrors.js';

const notFound = (req, res, next) => {
    next(new NotFound());
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({ error: err.message });
};

export { notFound, errorHandler };
