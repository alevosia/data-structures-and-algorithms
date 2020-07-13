class MaxBinaryHeap {
	constructor() {
		this.values = []
	}

	insert(num) {
		this.values.push(num)

		this.bubbleUp()
	}

	extractMax() {
		const max = this.values[0]
		this.values[0] = this.values[this.values.length - 1]
		this.values.pop()

		this.sinkDown()

		return max
	}

	bubbleUp() {
		let childIndex = this.values.length - 1
		let parentIndex = this.getParentIndex(childIndex)

		while (this.values[childIndex] > this.values[parentIndex]) {
			this.swapValues(childIndex, parentIndex)

			childIndex = parentIndex
			parentIndex = this.getParentIndex(childIndex)
		}
	}

	getParentIndex(childIndex) {
		return Math.floor((childIndex - 1) / 2)
	}

	sinkDown() {
		let parentIndex = 0
		let maxChildIndex = this.getMaxChildIndex(parentIndex)

		// Check if the parent is less than the max child
		while (this.values[parentIndex] < this.values[maxChildIndex]) {
			this.swapValues(parentIndex, maxChildIndex)

			parentIndex = maxChildIndex

			// Get the max child
			maxChildIndex = this.getMaxChildIndex(parentIndex)
		}
	}

	getMaxChildIndex(parentIndex) {
		const leftChildIndex = parentIndex * 2 + 1
		const rightChildIndex = parentIndex * 2 + 2

		// Return the index of larger child
		if (this.values[leftChildIndex] > this.values[rightChildIndex]) {
			return leftChildIndex
		} else {
			return rightChildIndex
		}
	}

	swapValues(i, j) {
		const temp = this.values[i]
		this.values[i] = this.values[j]
		this.values[j] = temp
	}
}

const mbh = new MaxBinaryHeap()

mbh.insert(41)
mbh.insert(39)
mbh.insert(33)
mbh.insert(18)
mbh.insert(27)
mbh.insert(12)
mbh.insert(55)
console.log(mbh.values)

console.log('Extracted ' + mbh.extractMax())
console.log(mbh.values)
