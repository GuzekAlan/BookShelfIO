from pymongo import MongoClient
import core.settings as settings

client = MongoClient(settings.MONGO_URL)
db = client[settings.MONGO_DB]