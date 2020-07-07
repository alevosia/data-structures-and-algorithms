function bubbleSort(arr) {
	for (let i = arr.length; i > 0; i--) {
		let noSwaps = true // optimization

		for (let j = 0; j < i - 1; j++) {
			console.log(arr, arr[j], arr[j + 1])
			if (arr[j] > arr[j + 1]) {
				;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // swap
				noSwaps = false
			}
		}

		// break out of loop if no swap occurred
		if (noSwaps) {
			break
		}
	}

	return arr
}

// console.log(bubbleSort([11, 20, 16, 6, 3, 2]))
// console.log(bubbleSort([12, 1, 2, 3, 4, 5]))

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i

		for (let j = i + 1; j < arr.length; j++) {
			console.log(arr, arr[minIndex], arr[j])
			if (arr[j] < arr[minIndex]) {
				minIndex = j
			}
		}

		// swap only if minIndex changed
		if (i !== minIndex) {
			;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
		}
	}

	return arr
}

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let min = arr[i]
		let j = i - 1

		// while current element is bigger that min,
		// copy its value to the next one
		while (j >= 0 && arr[j] > min) {
			arr[j + 1] = arr[j]
			j--
		}

		// if current element is smaller than min,
		// replace the element next to it to min
		arr[j + 1] = min
	}

	return arr
}

console.log(insertionSort([2, 1, 9, 76, 4]))
