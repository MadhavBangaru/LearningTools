from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import sqlite3

app = FastAPI()

# Database setup
DATABASE = "mydatabase.db"

def create_table():
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            description TEXT,
            price REAL,
            on_offer BOOLEAN
        )
    """)
    conn.commit()
    conn.close()

create_table()

# Item model
class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    on_offer: bool = False


# Endpoints
@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items")
def read_items():
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM items")
    items = cursor.fetchall()
    conn.close()
    return items


@app.get("/items/{item_id}")
def read_item(item_id: int):
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM items WHERE id=?", (item_id,))
    item = cursor.fetchone()
    conn.close()
    if item:
        return item
    raise HTTPException(status_code=404, detail="Item not found")


@app.post("/items")
def create_item(item: Item):
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO items (name, description, price, on_offer)
        VALUES (?, ?, ?, ?)
    """, (item.name, item.description, item.price, item.on_offer))
    conn.commit()
    item_id = cursor.lastrowid
    conn.close()
    return {"id": item_id, **item.dict()}

@app.get("/custom")
def custom():
    with open("commands.txt", "r") as file:
        content = file.read()
    return content

@app.get("/greet")
def greet(name: str):
    return {"message": f"Hi {name}"} #http://127.0.0.1:8000/greet?name=Madhav
