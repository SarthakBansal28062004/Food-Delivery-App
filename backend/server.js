import express from 'express'
import cors from 'cors'
import { connectDb } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


// app config (initialize app using express)

const app = express()
const port = process.env.PORT || 4000

// Middleware (initialize middleware)

app.use(express.json())
app.use(cors())

// Db connection

connectDb();

// api end points

app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Http method to request from server

app.get("/",(req,res) => {
    res.send("API Working")
});

// Run express server

app.listen(port,() => {
    console.log(`Server Started on http://localhost:${port}`)
});

