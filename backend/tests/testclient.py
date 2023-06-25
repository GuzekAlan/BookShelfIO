import sys
import os.path as path
sys.path.insert(1, path.join(path.dirname(__file__), '..'))
from main import app
from fastapi.testclient import TestClient

client = TestClient(app)