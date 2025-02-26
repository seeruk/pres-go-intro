package main

import (
	"fmt"
	"strings"
)

// likesBoxes checks if a cat's favorite toy is a box
func likesBoxes(toy string) bool {
	return toy == "Box"
}

func main() {
	catsToys := map[string]string{
		"Lucifer": "Ball",
		"Lilith":  "Box",
		"Cosmo":   "String",
		"Rosa":    "Box",
	}

	fmt.Println("Do the cats like boxes?")
	for cat, toy := range catsToys {
		if likesBoxes(toy) {
			fmt.Printf("%s loves boxes! 📦\n", cat)
		} else {
			fmt.Printf("%s prefers a %s. 🧸\n", cat, strings.ToLower(toy))
		}
	}
}
