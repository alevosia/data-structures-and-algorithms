class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Stack {
	constructor() {
		this.first = null
		this.last = null
		this.size = 0
	}

	push(value) {
		const newNode = new Node(value)

		if (this.size === 0) {
			this.first = newNode
			this.last = newNode
		} else {
			const oldFirst = this.first
			this.first = newNode
			newNode.next = oldFirst
		}

		return ++this.size
	}

	pop() {
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

const stack = new Stack()

stack.push('A')
stack.push('B')
stack.push('C')
stack.push('D')
stack.push('E')

console.log(stack)
