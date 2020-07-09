class Node {
	constructor(val) {
		this.val = val
		this.next = null
		this.prev = null
	}
}
// push, pop, shift, unshift, get, set, insert, remove
class DoublyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	get(index) {
		if (index < 0 || index >= this.length) {
			return null
		}

		const mid = this.length / 2

		let current, count

		if (index < mid) {
			current = this.head
			count = 0
			while (count !== index) {
				current = current.next
				count++
			}
		} else {
			current = this.tail
			count = this.length - 1
			while (count !== index) {
				current = current.prev
				count--
			}
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
		if (index < 0 || index > this.length) {
			return null
		}

		if (index === 0) {
			return this.unshift(val)
		} else if (index === this.length) {
			return this.push(val)
		}

		const newNode = new Node(val)
		const beforeNode = this.get(index - 1)
		const afterNode = beforeNode.next

		beforeNode.next = newNode
		newNode.prev = beforeNode
		newNode.next = afterNode
		afterNode.prev = newNode

		this.length++

		return this.length
	}

	remove(index) {
		if (index < 0 || index >= this.length) {
			return null
		}

		if (index === 0) {
			return this.shift()
		} else if (index === this.length - 1) {
			return this.pop()
		}

		const targetNode = this.get(index)

		const beforeNode = targetNode.prev
		const afterNode = targetNode.next

		beforeNode.next = afterNode
		afterNode.prev = beforeNode

		targetNode.prev = null
		targetNode.next = null

		this.length--

		return targetNode
	}

	push(val) {
		const newNode = new Node(val)

		if (!this.head) {
			this.head = newNode
			this.tail = this.head
		} else {
			this.tail.next = newNode
			newNode.prev = this.tail
			this.tail = newNode
		}

		this.length++

		return this.length
	}

	pop() {
		if (!this.head) {
			return null
		}

		if (this.length === 1) {
			return this.clear()
		}

		const oldTail = this.tail

		this.tail = oldTail.prev
		this.tail.next = null
		oldTail.prev = null

		this.length--

		return oldTail
	}

	shift() {
		if (!this.head) {
			return null
		}

		if (this.length === 1) {
			return this.clear()
		}

		const oldHead = this.head

		this.head = oldHead.next
		this.head.prev = null
		oldHead.next = null

		this.length--

		return oldHead
	}

	unshift(val) {
		const newNode = new Node(val)

		if (!this.head) {
			this.head = newNode
			this.tail = this.head
		} else {
			this.head.prev = newNode
			newNode.next = this.head
			this.head = newNode
		}

		this.length++

		return this.length
	}

	clear() {
		const head = this.head

		this.head = null
		this.tail = null
		this.length = 0

		return head
	}

	reverse() {
		if (!this.head) return

		let current = this.head

		this.head = this.tail
		this.tail = current

		let prev, next

		while (current) {
			// get the previous and next nodes
			prev = current.prev
			next = current.next

			// swap the previous and next nodes
			current.prev = next
			current.next = prev

			// move to the next node
			current = next
		}

		return this
	}

	traverse() {
		let current = this.head

		while (current) {
			console.log(current)
			current = current.next
		}
	}
}

console.time('Exec')
const list = new DoublyLinkedList()

list.push('A')
list.push('B')
list.push('C')
list.push('D')
list.push('E')

list.reverse()
list.traverse()
