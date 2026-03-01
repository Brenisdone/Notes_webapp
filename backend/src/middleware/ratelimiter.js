//we use ratelimit instance to create out ratelimiter
import ratelimit from "../config/upstash.js";

const ratelimiter = async (_,res,next) => {
    try{
        //my-limit-key blocks app for everyone. To be replaced with ip/user-id to prevent individuals.
        const {success} = await ratelimit.limit("my-limit-key");
        if(!success){
            return res.status(429).json({message: "Too many requests. Try again later"});
        }
        next();
    }
    catch(error){
        console.log("Rate limit error:",error);
        next(error);
    }
}

export default ratelimiter;