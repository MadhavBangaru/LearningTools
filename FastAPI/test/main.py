from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI app!"}

@app.get("/hello")
def say_hello(name: str = "World"):
    return {"greeting": f"Warm greetings, {name}! Hope you have a wonderful day."}

@app.post("/sum")
def calculate_sum(a: int, b: int):
    return {"sum": a + b}

@app.get("/status")
def status():
    return {"status": "Server is running"}
