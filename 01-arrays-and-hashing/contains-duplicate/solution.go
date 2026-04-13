package main

import "fmt"

// O(n) time complexity
// O(n) space complexity
func containsDuplicate(nums []int) bool {
	seen := make(map[int]struct{})

	for _, num := range nums {
		if _, exists := seen[num]; exists {
			return true
		}
		seen[num] = struct{}{}
	}

	return false
}

func main() {
	// Test cases
	test1 := []int{1, 2, 3, 1}
	test2 := []int{1, 2, 3, 4}

	fmt.Printf("Test 1 ([1,2,3,1]): %v\n", containsDuplicate(test1))
	fmt.Printf("Test 2 ([1,2,3,4]): %v\n", containsDuplicate(test2))
}
