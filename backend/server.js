import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import path from "path";

import authroute from "./routes/authroute.js";
import connectDB from "./db/connectDB.js";
import messageRoute from "./routes/messageRoute.js";
import userRoutes from "./routes/userRoutes.js";
import { app,server } from "./socket/socket.js";





dotenv.config();

const PORT=process.env.PORT || 5000;

const __dirname=path.resolve();


app.use(express.json()); //parse the incoming requests to json payloads(from req.body)
app.use(cookieParser());

app.use("/api/auth",authroute);
app.use("/api/messages",messageRoute);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
});


server.listen(PORT,()=>{
    connectDB();
    console.log(`port is running on ${PORT} `)

});
