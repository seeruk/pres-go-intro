package main

// Don't do this...
var _ Shape = (*Square)(nil)

type Square struct {
	Width  float64
	Height float64
}

func (s Square) Area() float64 {
	return s.Width * s.Height
}
