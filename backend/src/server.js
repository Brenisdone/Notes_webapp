//const express = require("express"); => for type:commonjs
import express from "express";
import router from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import ratelimiter from "./middleware/ratelimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.port || 5001

//middleware
app.use(express.json()); //parses JSON bodies: req.body
app.use(ratelimiter);
//simple custom middleware
// app.use((req,res,next) => {
//     console.log(`Request recieved, Method: ${req.method}, URL: ${req.url}`);
//     next();
// })


app.use("/api/notes", router);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on port:",PORT);
    });
})

