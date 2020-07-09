class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	// Get a node using its index
	get(index) {
		if (index < 0 || index >= this.length) return null

		let current = this.head
		let count = 0

		while (count !== index) {
			current = current.next
			count++
		}

		return current
	}

	set(index, val) {
		const foundNode = this.get(index)

		if (foundNode) {
			foundNode.val = val
		}

		return foundNode
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return null

		if (index === 0) {
			return this.unshift(val)
		} else if (index === this.length) {
			return this.push(val)
		} else {
			const newNode = new Node(val)

			// Get the node before the target
			const previousNode = this.get(index - 1)

			// Set the newNode's next to the previousNode's next
			newNode.next = previousNode.next

			// Set the newNode as the previousNode's next
			previousNode.next = newNode

			this.length++

			return this.length
		}
	}

	remove(index) {
		if (index < 0 || index >= this.length) return null

		if (index === 0) {
			return this.shift()
		} else if (index === this.length - 1) {
			return this.pop()
		} else {
			// Get the node before the target
			const previousNode = this.get(index - 1)

			// Get the target
			const removed = previousNode.next

			// Point the previousNode to target's next node
			previousNode.next = removed.next

			this.length--

			return this.length
		}
	}

	// Add one node to the end of list set it as the new tail
	push(val) {
		const newNode = new Node(val)

		// If there is no head, set the new node as both the head and the tail
		if (!this.head) {
			this.head = newNode
			this.tail = this.head
		}
		// Otherwise, point the old tail to it and set it as the new tail
		else {
			this.tail.next = newNode
			this.tail = this.tail.next
		}

		this.length++

		return this.length
	}

	// Remove the last node of the list and set the new tail
	// to the second to the last node
	pop() {
		// Return null if the list is already empty
		if (!this.head) return null

		// Clear the list if it has one node left
		if (this.length === 1) {
			return this.clear()
		}

		let current = this.head
		let newTail = current

		// While there is a next node, set the newTail to the current node
		// and set the current node to the next one
		while (current.next) {
			newTail = current
			current = current.next
		}

		// Once we reach the old tail, set the tail
		// to the newTail (the node on the left of the old tail)
		// and set the new tail's next to null to remove the old tail from the list
		this.tail = newTail
		this.tail.next = null
		this.length--

		return current
	}

	// Remove the first node of the list and set the next node as the new head
	shift() {
		// Return null if the list is already empty
		if (!this.head) return null

		// Clear the list if it has one node left
		if (this.length === 1) {
			return this.clear()
		}

		const oldHead = this.head
		const newHead = this.head.next

		this.head = newHead
		this.length--

		return oldHead
	}

	// Add a node at the start of the list,
	// set it as the new head and point it to the old head
	unshift(val) {
		const newNode = new Node(val)

		// If the list is empty, set the new node as both the head and tail
		if (!this.head) {
			this.head = newNode
			this.tail = this.head
		}
		// Otherwise, point the new node to the old head and set it as the new head
		else {
			newNode.next = this.head
			this.head = newNode
		}

		this.length++

		return this.length
	}

	// Clear the list
	clear() {
		const head = this.head

		this.head = null
		this.tail = null
		this.length = 0
	}

	// Print each node in the list
	traverse() {
		let current = this.head

		while (current) {
			console.log(current)
			current = current.next
		}
	}

	reverse() {
		// swap the head and tail
		let current = this.head
		this.head = this.tail
		this.tail = current

		let next = null
		let prev = null

		for (var i = 0; i < this.length; i++) {
			// Store next node
			next = current.next

			// Swap pointers
			current.next = prev

			// Move prev and current one step forward
			prev = current
			current = next
		}

		return this
	}
}

const list = new SinglyLinkedList()
list.push('First')
list.push('Second')
list.push('Third')
list.push('Fourth')
list.push('Fifth')

list.reverse()
list.traverse()
