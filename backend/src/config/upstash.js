//here we define instance of ratelimit
import {Redis} from '@upstash/redis'
import {Ratelimit} from '@upstash/ratelimit'
import dotevn from "dotenv"

dotevn.config();

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter:  Ratelimit.slidingWindow(100,"60 s")
});

export default ratelimit;