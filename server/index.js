import mongoose from "mongoose";
import express from "express";


const app = express()

const PORT = 8000;

mongoose.connect("mongodb://127.0.0.1:27017/curd-app").then(()=> console.log("Databse connected Sucesfull")).catch(err => console.log(err))

app.listen(PORT, ()=> console.log(`server is running on Port ${PORT}`))