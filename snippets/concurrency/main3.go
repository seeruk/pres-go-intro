package main

import (
	"fmt"
)

func pipe(in <-chan int, fn func(int) int) <-chan int {
	out := make(chan int)
	go func() {
		for n := range in {
			out <- fn(n)
		}
		close(out)
	}()
	return out
}

func sq(n int) int {
	return n * n
}

func sub1(n int) int {
	return n - 1
}

func main() {
	input := make(chan int)
	squared := pipe(input, sq)
	output1 := pipe(squared, sub1)
	output := pipe(output1, sub1)

	go func() {
		for i := 0; i < 10; i++ {
			input <- i
		}

		close(input)
	}()

	for n := range output {
		fmt.Println(n)
	}
}
