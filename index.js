import express from'express';
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'
import { handleErrorMiddleware } from './middleware/handleErrorMiddleware.js'
import 'dotenv/config';
import { connectDB } from './config/database.js'
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
await connectDB();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const token = jwt.sign(
    {
        id: 1,
        role: "student"
    },
    JWT_SECRET_KEY,
    {
        expiresIn: "1h"
    }
);

console.log(token);

const decodeKey = jwt.decode(token);

console.log(decodeKey);

const verifyToken = jwt.verify(token, JWT_SECRET_KEY);

console.log("verified: ", verifyToken);


app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.use(handleErrorMiddleware);
app.listen(PORT,()=> {
    console.log(`Server Running on port ${PORT}...`);
    
});