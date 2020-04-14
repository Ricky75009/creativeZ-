## simple demo script for showing how to connect to an sqlite DB 
# from Python, and run a simple SQL query 

# import the python library for SQLite 
import sqlite3

# CONNECT TO THE DATABASE AND EXECUTE A GIVEN QUERY
def query_db(query):
    # connect to the database file, and create a connection object
    db_connection = sqlite3.connect('creaZ.db')

    # create a database cursor object, which allows us to perform SQL on the database. 
    db_cursor = db_connection.cursor()

    db_cursor.execute(query)

    # this will be a list of tuples, where each tuple represents a row in the table
    query_response = db_cursor.fetchall()

    db_connection.close()

    return query_response

# CONNECT TO THE DATABASE AND RUN A SQL QUERY TO GET THE POTS

def get_pots():
    query = "SELECT name FROM pot"
    list_pots = query_db(query)
    pots=[]
    for i in range (len(list_pots)):
        temp = list_pots[i][0]
        pots.append(temp) 
    return(pots)


# CONNECT TO THE DATABASE AND RUN A SQL QUERY TO GET THE DESIGNS CORRESPONDING TO THE POT CHOSEN

def get_design(pot_name):
    query = f'''SELECT design.design from design 
LEFT JOIN pot ON pot.ID = design.pot
WHERE pot.name = "{pot_name}"'''
    list_design = query_db(query)
    designs=[]
    for i in range (len(list_design)):
        temp = list_design[i][0]
        designs.append(temp) 
    return(designs)



# CONNECT TO THE DATABASE AND RUN A SQL QUERY TO GET THE MAIN COLOR CORRESPONDING TO THE POT AND THE DESIGN CHOSEN 

def get_main_color(pot_name,design):
    query = f'''SELECT main.main_color from main 
LEFT JOIN DESIGN ON  design.id = main.design_ID
LEFT JOIN pot ON  pot.id =  design.POT 
WHERE DESIGN.DESIGN = "{design}" AND pot.NAME="{pot_name}"'''
    list_main_color = query_db(query)
    main_color = []
    for i in range (len(list_main_color)):
        temp = list_main_color[i][0]
        main_color.append(temp) 
    return(main_color)



# CONNECT TO THE DATABASE AND RUN A SQL QUERY TO GET THE MAIN COLOR HEX CORRESPONDING TO THE POT AND THE DESIGN CHOSEN 

def get_main_color_hex(pot_name,design):
    query = f'''SELECT main.HEX from main 
LEFT JOIN DESIGN ON  design.id = main.design_ID
LEFT JOIN pot ON  pot.id =  design.POT 
WHERE DESIGN.DESIGN = "{design}" AND pot.NAME="{pot_name}"'''
    list_main_color_hex = query_db(query)
    main_color_hex = []
    for i in range (len(list_main_color_hex)):
        temp = list_main_color_hex[i][0]
        main_color_hex.append(temp) 
    return(main_color_hex)



# CONNECT TO THE DATABASE AND RUN A SQL QUERY TO GET THE SECONDARY COLOR CORRESPONDING TO THE POT, THE DESIGN AND THE MAIN COLOR CHOSEN 

def get_secondary_color(pot_name,design,main_color):
    query = f'''SELECT secondary.secondary_color from secondary 
LEFT JOIN main ON secondary.main_id = main.id
LEFT JOIN design ON  design.id = main.design_ID
LEFT JOIN pot ON  pot.id =  design.POT 
WHERE main.main_color="{main_color}" AND design.design = "{design}" AND pot.NAME="{pot_name}"'''
    list_secondary_color = query_db(query)
    secondary_color = []
    for i in range (len(list_secondary_color)):
        temp = list_secondary_color[i][0]
        secondary_color.append(temp) 
    return(secondary_color)
    

# CONNECT TO THE DATABASE AND RUN A SQL QUERY TO GET THE SECONDARY COLOR HEX CORRESPONDING TO THE POT, THE DESIGN AND THE MAIN COLOR CHOSEN 

def get_secondary_color_hex(pot_name,design,main_color):
    query = f'''SELECT secondary.hex from secondary 
LEFT JOIN main ON secondary.main_id = main.id
LEFT JOIN design ON  design.id = main.design_ID
LEFT JOIN pot ON  pot.id =  design.POT 
WHERE main.main_color="{main_color}" AND design.design = "{design}" AND pot.NAME="{pot_name}"'''
    list_secondary_color_hex = query_db(query)
    secondary_color_hex = []
    for i in range (len(list_secondary_color_hex)):
        temp = list_secondary_color_hex[i][0]
        secondary_color_hex.append(temp) 
    return(secondary_color_hex)
