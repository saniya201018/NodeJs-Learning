import express from'express';
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'
import { handleErrorMiddleware } from './middleware/handleErrorMiddleware.js'
import 'dotenv/config';
import { connectDB } from './config/database.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
await connectDB();

app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.use(handleErrorMiddleware);
app.listen(PORT,()=> {
    console.log(`Server Running on port ${PORT}...`);
    
});