package main

import (
	"math/rand"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	type RandResponse struct {
		Randfloat float64 `json:"randfloat"`
		Randint   int     `json:"randint"`
	}

	app.Get("/api/generate", func(c *fiber.Ctx) error {
		u := &RandResponse{
			Randfloat: rand.Float64(),
			Randint:   rand.Int(),
		}
		return c.JSON(u)
	})

	app.Listen(":3001")
}
