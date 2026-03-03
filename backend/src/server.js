//const express = require("express"); => for type:commonjs
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import router from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/ratelimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.port || 5001

//middleware
//only cors()=>allows request by any urls
app.use(cors(
    {origin: "http://localhost:5173"}
));
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

