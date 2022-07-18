// A javaScript Implementation of Binary Search
// Binary search operates on the assumption that the values in the list (array) are sorted
// If not sorted, it will always return null even if the target value exists in the array
const BinarySearch = (array,target) => {
	let first = 0 //defines the position of the first item
	let last = array.length - 1
	while(first<= last) {
		const midpoint = Math.floor((first+last)/2)
		const guess = array[midpoint]// defines the position of the midpoint at any instance
		if (guess === target) {
			console.log("your target was found at position ", midpoint)
		} 
		if (guess > target) {
			last = midpoint - 1
		} else {
			first = midpoint + 1
		}
		
	}
	return null
}
console.log(BinarySearch([1,2,3,4,5,6,7,8,9,10],4))
