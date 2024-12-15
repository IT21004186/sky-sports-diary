import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.get("/products", (req, res) => {});

app.listen(port, () => {
    connectDB();
    console.log(`Server started at http://localhost:${port}`);
});