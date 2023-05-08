import os
from dotenv import load_dotenv

def init_env_vars():
    MONGO_USER = os.getenv('MONGO_DB_USER')
    MONGO_PASSWORD = os.getenv('MONGO_DB_PASSWORD')
    MONGO_DB = os.getenv('MONGO_DB_DATABASE')
    MONGO_IP = os.getenv('MONGO_DB_IP')
    MONGO_URL = f'mongodb://{MONGO_USER}:{MONGO_PASSWORD}@{MONGO_IP}/'
    return MONGO_DB, MONGO_URL

load_dotenv()
MONGO_DB, MONGO_URL = init_env_vars()
