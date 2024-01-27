import mongoose from "mongoose";
import express from "express";
import route from "./routes/userRoute.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express()
app.use(bodyParser.json());
app.use(cors());

const PORT = 8000;

mongoose.connect("mongodb://127.0.0.1:27017/curd-app").then(()=> console.log("Databse connected Sucesfull")).catch(err => console.log(err, "Mongo err"))

app.listen(PORT, ()=> console.log(`server is running on Port ${PORT}`))

app.use("/api", route)