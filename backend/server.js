import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json()); //allow us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

app.listen(port, () => {
    connectDB();
    console.log(`Server started at http://localhost:${port}`);
});