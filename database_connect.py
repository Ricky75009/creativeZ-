## simple demo script for showing how to connect to an sqlite DB 
# from Python, and run a simple SQL query 

# import the python library for SQLite 
import sqlite3

# connect to the database file, and create a connection object
db_connection = sqlite3.connect('creaZ.db')

# create a database cursor object, which allows us to perform SQL on the database. 
db_cursor = db_connection.cursor()

# run a first query 
db_cursor.execute("SELECT name FROM pot")



# store the result in a local variable. 
# this will be a list of tuples, where each tuple represents a row in the table
list_pots = db_cursor.fetchall()
pots=[]
for i in range (len(list_pots)):
    temp = list_pots[i][0]
    pots.append(temp) 
print('Here are pots possibilities',pots)

input_pot=input('What pot ?')
db_cursor.execute(f'''SELECT design.design from design 
LEFT JOIN pot ON pot.ID = design.pot
WHERE pot.name = "{input_pot}"''')

list_design = db_cursor.fetchall()
designs=[]
for i in range (len(list_design)):
    temp = list_design[i][0]
    designs.append(temp) 
print('Here are designs possibilities',designs)
input_design=input('What design ?')
db_cursor.execute(f'''SELECT main_color.main_color from main_color 
LEFT JOIN design ON  design.id = main_color.design_ID
LEFT JOIN pot ON pot.name = "{input_pot}"
WHERE design.design = "{input_design}" ''')

list_main_color = db_cursor.fetchall()
main_color=[]
for i in range (len(list_main_color)):
    temp = list_main_color[i][0]
    main_color.append(temp) 
print('Here are the main color possibilities',main_color)

db_connection.close()


