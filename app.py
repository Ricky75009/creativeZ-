from flask import Flask, jsonify, send_file, request
from flask_cors import CORS
from database_connect import get_pots, change_pot
import sys



app = Flask(__name__)
@app.route('/')
def index():
    return send_file("static/index.html")


@app.route('/api/pots',  methods=['GET'])
def api_pots():
    return jsonify(get_pots())



@app.route("/function_route", methods=["GET", "POST"])
def my_function():
    if request.method == "POST":
        data = ""

       

        print(data, file=sys.stderr)


        return print(jsonify(data))

@app.route('/api/change_pot', methods=['POST'])
def api_change_pot():
    print(request.json)
    print('THIS IS A TEST')
    return change_pot(request.json)



# @app.route('/api/design',  methods=['GET'])
# def api_design():
#     return jsonify(get_design())

# @app.route('/api/main_color',  methods=['GET'])
# def api_main_color():
#     return jsonify(get_main_color())

# @app.route('/api/secondary_color',  methods=['GET'])
# def api_second_color():
#     return jsonify(get_secondary_color())





if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')


