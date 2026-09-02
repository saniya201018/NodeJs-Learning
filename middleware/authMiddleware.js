export const authMiddleware = (req, res, next) => {
    const isLoggedIn = true;
    if(!isLoggedIn) {
        res.status(401).json({
            message: "Unauthorized"
        });
    }

    next();
}