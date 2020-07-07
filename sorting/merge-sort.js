// Algorithm: Split the array into multiple single-element arrays, sort by merging

function merge(arr1, arr2) {
	let res = []

	let i = 0
	let j = 0

	// While there are still values in both arrays
	while (i < arr1.length && j < arr2.length) {
		// Push the smaller element between the two the array
		// and then move on to the next element of the array
		if (arr1[i] < arr2[j]) {
			res.push(arr1[i])
			i++
		} else {
			res.push(arr2[j])
			j++
		}
	}

	// If we reach the end of one of the arrays,
	// add all of the remaining elements of the other array
	if (i === arr1.length) {
		res = res.concat(arr2.slice(j))
	} else {
		res = res.concat(arr1.slice(i))
	}

	return res
}

// Split the arrays in half until each array has 1 or 0 element in it
// then merge and sort the two halfs and return the resulting array
function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr
	}

	const midIndex = Math.floor(arr.length / 2)

	// split
	const leftArr = mergeSort(arr.slice(0, midIndex))
	const rightArr = mergeSort(arr.slice(midIndex))

	// actual merging and sorting
	const sorted = merge(leftArr, rightArr)

	return sorted
}

const res = mergeSort([16, 9, 2, 4, 10, 6, 1, 5, 8, 3])
console.log(res)
