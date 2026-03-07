//const express = require("express"); => for type:commonjs
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import router from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/ratelimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.port || 5001
const __dirname = path.resolve();

//middleware
//only cors()=>allows request by any urls
if(process.env.NODE_ENV !== "production"){    
    app.use(cors(
        {origin: "http://localhost:5173"}
    ));
}

app.use(express.json()); //parses JSON bodies: req.body
app.use(ratelimiter);
    
//simple custom middleware
// app.use((req,res,next) => {
//     console.log(`Request recieved, Method: ${req.method}, URL: ${req.url}`);
//     next();
// })


app.use("/api/notes", router);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("*",(req,res) => {
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on port:",PORT);
    });
})

