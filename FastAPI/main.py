from fastapi import FastAPI
from Helpers.sql_helper import MySQLConnector
app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/custom")
def custom():
    with open("commands.txt", "r") as file:
        content = file.read()
    return content

@app.get("/sqldata")
def sqldata():
    connector = MySQLConnector(host="127.0.0.1", user="root", password="root", database="people")
    # Connect to the MySQL server
    connector.connect()

    # Execute a query
    query = "select * from sample"
    return connector.execute_query(query)
