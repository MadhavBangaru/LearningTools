# Use an official Golang image
FROM golang:1.21-alpine as builder

WORKDIR /app
COPY . .

RUN go mod tidy && go build -o server main.go

# Use a minimal image for running
FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/server .
EXPOSE 8000
CMD ["./server"]
