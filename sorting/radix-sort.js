function getDigit(num, place) {
	return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

function countDigits(num) {
	if (num === 0) return 1
	return Math.floor(Math.log10(Math.abs(num))) + 1
}

function getMaxDigits(array) {
	let max = 0

	for (const num of array) {
		max = Math.max(max, countDigits(num))
	}

	return max
}

function radixSort(numbers) {
	const maxDigits = getMaxDigits(numbers)

	for (let k = 0; k < maxDigits; k++) {
		const buckets = Array.from({ length: 10 }, () => [])

		for (let i = 0; i < numbers.length; i++) {
			const digit = getDigit(numbers[i], k)
			buckets[digit].push(numbers[i])
		}

		// Spread each bucket, then concat each one
		numbers = [].concat(...buckets)
	}

	return numbers
}

// console.log(getDigit(58521, 0))
// console.log(countDigits(-121452))
// console.log(getMaxDigits([1, 12, 14, 523, 56123]))

console.log(radixSort([532, 8, 645, 6, 24, 26, 112, 6367, 1, 3, 91]))
