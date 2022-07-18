// A JS Code example of implementing a simple linear search algorithm with JavaScript
const linearSearch = (array,target) => {
		array.map((item,index)=>(
			item === target ? (
				console.log("Your target was found at index: ", index)
			) : console.log("Your target was not found in the array")
		))
}
console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 6))