function swap(array, i, j) {
	const temp = array[i]
	array[i] = array[j]
	array[j] = temp
}

function pivot(array, start = 0, end = array.length) {
	let pivotVal = array[start]
	let swapIndex = start

	for (let i = start + 1; i < end; i++) {
		if (array[i] < pivotVal) {
			swapIndex++
			swap(array, i, swapIndex)
		}
	}

	swap(array, start, swapIndex)

	return swapIndex
}

function quickSort(arr, left = 0, right = arr.length) {
	if (left < right) {
		const pivotIndex = pivot(arr, left, right)
		quickSort(arr, left, pivotIndex - 1)
		quickSort(arr, pivotIndex + 1, right)
	}

	return arr
}

console.log(quickSort([5, 3, 7, 2, 6, 8, 1, 4, 9, 0]))

// Mine
// function quickSort(arr) {
// 	if (arr.length <= 1) {
// 		return arr
// 	}

// 	const idx = pivot(arr)
// 	const left = quickSort(arr.slice(0, idx))
// 	const right = quickSort(arr.slice(idx + 1))

// 	left.push(arr[idx])

// 	const res = left.concat(right)

// 	return res
// }
