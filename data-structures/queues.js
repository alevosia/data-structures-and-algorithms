class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Queue {
	constructor() {
		this.first = null
		this.last = null
		this.size = 0
	}

	enqueue(value) {
		const newNode = new Node(value)

		if (!this.first) {
			this.first = newNode
			this.last = newNode
		} else {
			this.last.next = newNode
			this.last = newNode
		}

		return ++this.size
	}

	dequeue() {
		if (!this.first) return null

		if (this.first === this.last) {
			this.last = null
		}

		const removed = this.first
		this.first = this.first.next
		removed.next = null
		this.size--

		return removed.value
	}

	traverse() {
		let current = this.first

		while (current) {
			console.log(current)
			current = current.next
		}
	}
}

const queue = new Queue()

queue.enqueue('A')
queue.enqueue('B')
queue.enqueue('C')
queue.enqueue('D')
queue.enqueue('E')

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

queue.traverse()
