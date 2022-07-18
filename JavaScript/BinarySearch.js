// A javaScript Implementation of Binary Search
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

//some test here