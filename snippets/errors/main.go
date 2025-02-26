package main

import (
	"errors"
	"fmt"
)

var (
	ErrNotAvailable = errors.New("cat is not available")
	ErrOutOfStock   = errors.New("cat is out of stock")
)

// getCat tries to get a cat and returns specific errors for different cases
func getCat(name string) (string, error) {
	availableCats := map[string]bool{
		"Lucifer": true,
		"Lilith":  true,
		"Cosmo":   false, // Out of stock
	}

	inStock, exists := availableCats[name]
	if !exists {
		return "", ErrNotAvailable
	}
	if !inStock {
		return "", ErrOutOfStock
	}
	return name, nil
}

func main() {
	catName, err := getCat("Rosa") // Try to get a cat
	switch {
	case errors.Is(err, ErrNotAvailable):
		fmt.Println("Error:", err, "Try a different cat! 🐱")
		return
	case errors.Is(err, ErrOutOfStock):
		fmt.Println("Error:", err, "Come back later! 😿")
		return
	case err != nil:
		fmt.Println("Error:", err)
		return
	}

	fmt.Println("You adopted", catName, "! 🐾")
}
