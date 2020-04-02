from flask import Flask, jsonify, send_file
from flask_cors import CORS


app = Flask(__name__)
@app.route('/')
@app.route('/home')
@app.route('/index.html')
def index():
    return send_file("../static/index.html")
if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')


