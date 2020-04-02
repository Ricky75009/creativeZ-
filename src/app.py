from flask import Flask, jsonify, send_file
from flask_cors import CORS


app = Flask(__name__)
@app.route('/')
def index():
    return send_file("../static/index.html")

@app.route('/test')
def easy():
    return "easyyyyyyy"


if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')


