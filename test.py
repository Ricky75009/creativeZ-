import sqlite3


db_connection = sqlite3.connect('creaZ.db')

# create a database cursor object, which allows us to perform SQL on the database. 
db_cursor = db_connection.cursor()

input_pot=input('What pot ?')
db_cursor.execute(f'''SELECT design.design from design 
LEFT JOIN pot ON pot.ID = design.pot
WHERE pot.name = "{input_pot}"''')
list_design = db_cursor.fetchall()

print(list_design)