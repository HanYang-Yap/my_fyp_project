# redis_client.py
import redis

r = redis.StrictRedis(
    host='localhost',
    port=6379,
    db=0,
    decode_responses=True  # 直接用 string 而不是 byte
)