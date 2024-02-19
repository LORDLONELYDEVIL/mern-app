import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authroute from "./routes/authroute.js";
import connectDB from "./db/connectDB.js";
import messageRoute from "./routes/messageRoute.js";
import userRoutes from "./routes/userRoutes.js";


const app=express();


dotenv.config();

const PORT=process.env.PORT || 5000;


app.use(express.json()); //parse the incoming requests to json payloads(from req.body)
app.use(cookieParser());

app.use("/api/auth",authroute);
app.use("/api/messages",messageRoute);
app.use("/api/users",userRoutes);


app.listen(PORT,()=>{
    connectDB();
    console.log(`port is running on ${PORT} `)

});