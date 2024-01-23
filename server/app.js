import express from 'express'
import cors from 'cors';

const app = express();

app.use(cors({
     origin: process.env.CORS_ORGIN,
     credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true, limit:"18kb"}))
app.use(express.static("public"))



//routes







export {app} 