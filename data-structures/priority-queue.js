class Node {
	constructor(value, priority) {
		this.value = value
		this.priority = priority
	}
}

// Min-Heap
class PriorityQueue {
	constructor() {
		this.values = []
	}

	// ENQUEUE ======================
	enqueue(value, priority) {
		const newNode = new Node(value, priority)

		this.values.push(newNode)

		this.bubbleUp()
	}

	bubbleUp() {
		if (this.values.length <= 1) {
			return
		}

		let childIndex = this.values.length - 1
		let parentIndex = this.getParentIndex(childIndex)

		while (this.values[childIndex].priority < this.values[parentIndex].priority) {
			this.swapValues(childIndex, parentIndex)

			childIndex = parentIndex
			parentIndex = this.getParentIndex(childIndex)

			if (parentIndex < 0) break
		}
	}

	getParentIndex(childIndex) {
		return Math.floor((childIndex - 1) / 2)
	}

	// DEQUEUE ======================
	dequeue() {
		const max = this.values[0]
		this.values[0] = this.values[this.values.length - 1]
		this.values.pop()

		this.sinkDown()

		return max
	}

	sinkDown() {
		let parentIndex = 0
		let minChildIndex = this.getMinChildIndex(parentIndex)

		// Check if the parent is less than the max child
		while (
			this.values[parentIndex] &&
			this.values[minChildIndex] &&
			this.values[parentIndex].priority > this.values[minChildIndex].priority
		) {
			this.swapValues(parentIndex, minChildIndex)

			parentIndex = minChildIndex

			// Get the max child
			minChildIndex = this.getMinChildIndex(parentIndex)
		}
	}

	getMinChildIndex(parentIndex) {
		const leftChildIndex = parentIndex * 2 + 1
		const rightChildIndex = parentIndex * 2 + 2

		// Return the index of smaller child
		if (
			this.values[leftChildIndex] &&
			this.values[rightChildIndex] &&
			this.values[leftChildIndex].priority < this.values[rightChildIndex].priority
		) {
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

const ER = new PriorityQueue()
ER.enqueue('Colds', 5)
ER.enqueue('Wounds', 1)
ER.enqueue('Fever', 4)
ER.enqueue('Fracture', 2)
ER.enqueue('Flu', 3)

console.log(ER)

console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
