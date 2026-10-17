import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  // const isLoggedIn = true;
  // if(!isLoggedIn) {
  //     res.status(401).json({
  //         message: "Unauthorized"
  //     });
  // }

try {
      const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Token Required" });
  }
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    
    next();
} catch (error) {
    console.log(error.message);
    
}
};
