from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/custom")
def custom():
    with open("commands.txt", "r") as file:
        content = file.read()
    return content