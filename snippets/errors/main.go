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
	catName, err := getCat("Lucifer") // Try to get a cat
	switch {
	case errors.Is(err, ErrNotAvailable):
		fmt.Printf("Error: %v. Try a different cat! 🐱\n", err)
		return
	case errors.Is(err, ErrOutOfStock):
		fmt.Printf("Error: %v. Come back later! 😿\n", err)
		return
	case err != nil:
		fmt.Println("Error:", err)
		return
	}

	fmt.Println("You adopted", catName, "! 🐾")
}
