from flask import Flask, jsonify, send_file, request
from flask_cors import CORS
from database_connect import get_pots, change_pot,get_design, get_main_color, get_secondary_color
import sys



app = Flask(__name__)
@app.route('/')
def index():
    return send_file("static/index.html")


@app.route('/api/pots',  methods=['GET'])
def api_pots():
    return jsonify(get_pots())



@app.route('/api/change_pot', methods=['POST'])
def api_change_pot():
    global pot_name 
    pot_name = request.json['pot']
    return change_pot(request.json)



@app.route('/api/design',  methods=['GET'])
def api_design():
    print('pot name isssss', pot_name)
    print(get_design(pot_name))
    return jsonify(get_design(pot_name))

@app.route('/api/change_design', methods=['POST'])
def api_change_design():
    global design 
    design = request.json['design']
    print('DESIGNNNNN IS ', request.json['design'])
    return ''


@app.route('/api/main_color',  methods=['GET'])
def api_main_color():
    return jsonify(get_main_color(pot_name,design))

@app.route('/api/change_main_color', methods=['POST'])
def api_change_main_color():
    global main_color
    main_color = request.json['main_color']
    print(main_color)
    print('MAIIIN COLOR IS ', request.json['main_color'])
    return ''

@app.route('/api/secondary_color',  methods=['GET'])
def api_second_color():
    return jsonify(get_secondary_color(pot_name,design,main_color))


@app.route('/api/change_secondary_color', methods=['POST'])
def api_change_secondary_color():
    global secondary_color 
    secondary_color = request.json['secondary_color']
    print('SECONDARYYYYYY IS ', secondary_color)
    return ''


if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')


