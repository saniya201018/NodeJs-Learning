export const handleErrorMiddleware = async (err, req, res, next) => {
    console.error(err);

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });

    next();
}