class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	find(value) {
		let current = this.root
		while (current) {
			if (value === current.value) return true
			if (value > current.value) current = current.right
			if (value < current.value) current = current.left
		}
	}

	insert(value) {
		const newNode = new Node(value)

		if (!this.root) {
			this.root = newNode
			return this
		} else {
			let current = this.root

			while (true) {
				if (value < current.value) {
					if (current.left === null) {
						current.left = newNode
						return this
					} else {
						current = current.left
					}
				} else if (value > current.value) {
					if (current.right === null) {
						current.right = newNode
						return this
					} else {
						current = current.right
					}
				}
			}
		}
	}

	BFS() {
		const data = []
		const queue = []

		let node = this.root

		queue.push(node)

		while (queue.length > 0) {
			node = queue.shift()

			data.push(node.value)

			if (node.left) queue.push(node.left)
			if (node.right) queue.push(node.right)
		}

		return data
	}

	DFSPreOrder() {
		const data = []

		function traverse(node) {
			data.push(node.value)
			if (node.left) traverse(node.left)
			if (node.right) traverse(node.right)
		}

		traverse(this.root)

		return data
	}

	DFSPostOrder() {
		const data = []

		function traverse(node) {
			if (node.left) traverse(node.left)
			if (node.right) traverse(node.right)
			data.push(node.value)
		}

		traverse(this.root)

		return data
	}

	DFSInOrder() {
		const data = []

		function traverse(node) {
			if (node.left) traverse(node.left)
			data.push(node.value)
			if (node.right) traverse(node.right)
		}

		traverse(this.root)

		return data
	}
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())
console.log(tree.DFSInOrder())
