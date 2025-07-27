from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "FastAPI service for WCF legacy calls"}

@app.get("/wcf/get_data")
async def get_data(param1: str):
    # Mock WCF call
    return {"result": f"Data for {param1} from mock WCF service"}

@app.post("/wcf/send_data")
async def send_data(param1: str, param2: int):
    # Mock WCF call
    return {"result": f"Data sent: {param1}, {param2} to mock WCF service"}
