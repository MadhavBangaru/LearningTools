# FastAPI-Go Example Project

This project demonstrates a simple Go web application (using Gin) with endpoints equivalent to the original FastAPI Python project:

- `GET /` - Returns a welcome message.
- `GET /hello?name=YourName` - Greets the user by name (defaults to "World").
- `POST /sum` - Accepts two integers `a` and `b` as form data and returns their sum.
- `GET /status` - Returns the server status.

## Running the Server

1. Make sure you have Go installed (version 1.21+ recommended).
2. Install dependencies:

```zsh
go mod tidy
```

3. Start the server:

```zsh
go run main.go
```

4. Open your browser and visit `http://127.0.0.1:8000` to access the API.

## Endpoints

- `/` (GET): Welcome message
- `/hello` (GET): Greeting, optional `name` query param
- `/sum` (POST): Form data `a` and `b` (integers)
- `/status` (GET): Server status
