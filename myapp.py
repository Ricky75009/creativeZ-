from flask import Flask, jsonify, send_file, request
from database_connect import get_pots,get_design, get_main_color, get_secondary_color, get_main_color_hex, get_secondary_color_hex
import sys

# DECLARATION OF THE GLOBAL VARIABLES

pot_name='chico angular'
design='color sólido'
main_color='negro'
secondary_color=''



# WHAT ??

app = Flask(__name__)
@app.route('/')
def index():
    return send_file("static/index.html")



# GET METHOD FOR THE POTS IN THE DATABASE

@app.route('/api/pots',  methods=['GET'])
def api_pots():
    return jsonify(get_pots())



# POST METHOD TO SET THE POT THAT THE USER SELECTED 

@app.route('/api/change_pot', methods=['POST'])
def api_change_pot():
    global pot_name 
    pot_name = request.json['pot']
    return ''



# GET METHOD FOR THE DESIGNS (ACCORDING TO THE POT CHOSEN) IN THE DATABASE

@app.route('/api/design',  methods=['GET'])
def api_design():
    print('pot name isssss', pot_name)
    print(get_design(pot_name))
    return jsonify(get_design(pot_name))



# POST METHOD TO SET THE DESIGN THAT THE USER SELECTED 

@app.route('/api/change_design', methods=['POST'])
def api_change_design():
    global design 
    design = request.json['design']
    print('DESIGNNNNN IS ', request.json['design'])
    return ''



# GET METHOD FOR THE MAIN COLOR (ACCORDING TO THE POT AND THE DESIGN CHOSEN) IN THE DATABASE

@app.route('/api/main_color',  methods=['GET'])
def api_main_color():
    return jsonify(get_main_color(pot_name,design))



# GET METHOD FOR THE MAIN COLOR HEX (ACCORDING TO THE POT AND THE DESIGN CHOSEN) IN THE DATABASE

@app.route('/api/main_color_hex',  methods=['GET'])
def api_main_color_hex():
    return jsonify(get_main_color_hex(pot_name,design))



# POST METHOD TO SET THE MAIN COLOR THAT THE USER SELECTED

@app.route('/api/change_main_color', methods=['POST'])
def api_change_main_color():
    global main_color
    main_color = request.json['main_color']
    print(main_color)
    print('MAIIIN COLOR IS ', request.json['main_color'])
    return ''



# GET METHOD FOR THE MAIN COLOR (ACCORDING TO THE POT AND THE DESIGN CHOSEN) IN THE DATABASE

@app.route('/api/secondary_color',  methods=['GET'])
def api_second_color():
    return jsonify(get_secondary_color(pot_name,design,main_color))



# GET METHOD FOR THE MAIN COLOR HEX (ACCORDING TO THE POT AND THE DESIGN CHOSEN) IN THE DATABASE

@app.route('/api/secondary_color_hex',  methods=['GET'])
def api_second_color_hex():
    return jsonify(get_secondary_color_hex(pot_name,design,main_color))  



# POST METHOD TO SET THE SECONDARY COLOR THAT THE USER SELECTED

@app.route('/api/change_secondary_color', methods=['POST'])
def api_change_secondary_color():
    global secondary_color 
    secondary_color = request.json['secondary_color']
    print('SECONDARYYYYYY IS ', secondary_color)
    return ''



if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')


