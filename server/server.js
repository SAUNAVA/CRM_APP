import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import dashboardRoutes from './routes/dashboardRoute.js'
import { authenticate } from './middleware/jwtMiddleware.js'
dotenv.config();



const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials : true
}))

const connectDb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`)

    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}
connectDb()

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

app.use('/api/v1/user' , userRoutes)
app.use('/api/v1/dashboard' , authenticate ,dashboardRoutes)


const PORT = process.env.PORT || 5050
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})


