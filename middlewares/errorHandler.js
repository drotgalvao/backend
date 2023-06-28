// not Found

const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    // Pass the error to the next middleware
    next(error);
    }

    // Error Handler

    const errorHandler = (err, req, res, next) => {
    // Set the status code to 500 if the status code is not set
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
    message: err.message?.message,
    stack: err?.stack,
    });
    }

    module.exports = { notFound, errorHandler };