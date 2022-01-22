import flask
from flask import Flask
from flask import request
from flask_cors import CORS
import sys
from model import *
from utils import *

app = Flask(__name__)
CORS(app)

@app.route('/api/analyze', methods = ['POST'])
def model_route():
    data = flask.request.json
    if data["type"] == 'url':
        text = fetch(data["url"])
    else:
        text = data["text"]
    texts = text.split('.\n')
    texts = [t.replace("\n", " ") for t in texts]
    prob = get_probs([text])[0]
    probs = get_probs(texts)
    res = [{"text": t, "score": score} for t, score in zip(texts, probs)]
    return {"overall": prob, "probs": res}

if __name__ == '__main__':
    app.run()