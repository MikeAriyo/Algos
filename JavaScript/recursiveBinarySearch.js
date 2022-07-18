const recursiveBinarySearch = (array,target) => {
	let midpoint = Math.floor(array.length / 2)
	
	// base case - safety break to help stop the recursion
	if(array.length === 1 && array[0] != target) {
		return false
	}
	if (target === array[midpoint]) {
		return true
	} else if (target < array[midpoint]) {
		return recursiveBinarySearch(array.slice(0,midpoint),target)
	} else if (target > array[midpoint]) {
		return recursiveBinarySearch(array.slice(midpoint),target)
	}
}

// Explanation

// the function takes in an array and a target, - the number whose position we're searching for
// the midpoint of the array id the length of the array divided by 2.
// To ensure recursion stops, if the array is of a single item and the item is not equal to our target, stop recursion.
// Our aim is to ensure that the value at the midpoint of the array is equal to the target value
// if the value at the midpoint is greater than the target, slice the array from 0 to that midpoint and run the function again, - Slice returns a new array within the bounds defined.
// if the value at the midpoint is is lesser thann the target, create a new array from the midpoint upwards and run the function again.

