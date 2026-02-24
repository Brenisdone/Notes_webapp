import dns from "node:dns/promises";
import mongoose from "mongoose";

//Newer Node uses broken DNS resolver, so dns has to be set manually to use mongoose.
dns.setServers(["1.1.1.1", "8.8.8.8"]);

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected to MongoDB");
    }
    catch(error){
        console.log("Error connecting to MongoDB", error);
        process.exit(1) //1=>error
    }
}