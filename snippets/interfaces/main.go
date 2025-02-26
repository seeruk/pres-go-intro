package main

import (
	"fmt"
	"math"
)

type Shape interface {
	Area() float64
}

type Circle struct {
	Radius float64
}

func (c Circle) Area() float64 {
	return 3.14 * math.Pow(c.Radius, 2)
}

func printArea(s Shape) {
	fmt.Println(s.Area())
}

func main() {
	circle := Circle{
		Radius: 3,
	}

	printArea(circle)
}
