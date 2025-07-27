package main

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "Welcome to the FastAPI app!"})
	})

	r.GET("/hello", func(c *gin.Context) {
		name := c.DefaultQuery("name", "World")
		c.JSON(http.StatusOK, gin.H{"greeting": "Hello, " + name + "!"})
	})

	r.POST("/sum", func(c *gin.Context) {
		aStr := c.PostForm("a")
		bStr := c.PostForm("b")
		a, errA := strconv.Atoi(aStr)
		b, errB := strconv.Atoi(bStr)
		if errA != nil || errB != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input. 'a' and 'b' must be integers."})
			return
		}
		c.JSON(http.StatusOK, gin.H{"sum": a + b})
	})

	r.GET("/status", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "Server is running"})
	})

	r.Run(":8000")
}
