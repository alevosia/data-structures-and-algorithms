// Min-Heap
class Node {
	constructor(value, priority) {
		this.value = value
		this.priority = priority
	}
}

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

class WeightedGraph {
	constructor() {
		this.aList = {}
	}

	addVertex(vertex) {
		if (!this.aList[vertex]) this.aList[vertex] = []
	}

	addEdge(vertex1, vertex2, weight) {
		this.aList[vertex1].push({ node: vertex2, weight })
		this.aList[vertex2].push({ node: vertex1, weight })
	}

	dijkstra(startVertex) {
		console.log('Start: ' + startVertex)

		// Create 2 lists for visited and unvisited vertices
		const visited = []
		// Put all vertices to unvisited
		let unvisited = Object.keys(this.aList)

		// Create an object to hold our resulting table
		const table = {}

		// Set each unvisited vertex's shortest distance from start to Infinity
		// and previous vertex to null
		unvisited.forEach((vertex) => {
			table[vertex] = {
				shortestFromStart: Infinity,
				previousVertex: null,
			}
		})

		// Set the start vertex's shortest distacne from start to zero
		table[startVertex] = {
			shortestFromStart: 0,
			previousVertex: null,
		}

		// Set start vertex as the start vertex
		let currentVertex = startVertex

		while (unvisited.length > 0) {
			// For every neighbor of the current vertex that is NOT yet visited
			this.aList[currentVertex].forEach((neighbor) => {
				if (!unvisited.includes(neighbor.node)) return

				// Calculate the neighbor's distance from start
				const distance = table[currentVertex].shortestFromStart + neighbor.weight

				// If the distance is less than its current distance from start
				if (distance < table[neighbor.node].shortestFromStart) {
					// Set the newly calculated distance as its new shortest distance from start
					// and set the current vertex as its new previous vertex
					table[neighbor.node] = {
						shortestFromStart: table[currentVertex].shortestFromStart + neighbor.weight,
						previousVertex: currentVertex,
					}
				}
			})

			// Add the current vertex to visited
			visited.push(currentVertex)

			// And remove it from unvisited
			unvisited = unvisited.filter((vertex) => vertex !== currentVertex)

			// Find the next vertex to visit from the list of unvisited vertices
			// by getting the vertex with the shortest distance from start
			let smallestVertex
			let shortestDistance = Infinity

			unvisited.forEach((vertex) => {
				if (table[vertex].shortestFromStart < shortestDistance) {
					shortestDistance = table[vertex].shortestFromStart
					smallestVertex = vertex
				}
			})

			// Set the vertex with smallest distance as the next vertex to visit
			currentVertex = smallestVertex
		}

		console.log('\n----------')
		console.table(table)

		return table
	}

	dijkstra2(start, finish) {
		const nodes = new PriorityQueue()
		const distances = {}
		const previous = {}
		const path = []

		// Initiliaze
		for (let vertex in this.aList) {
			if (vertex === start) {
				distances[vertex] = 0
				nodes.enqueue(vertex, 0)
			} else {
				distances[vertex] = Infinity
				nodes.enqueue(vertex, Infinity)
			}

			previous[vertex] = null
		}

		let smallest

		// As long as there is something to visit
		while (nodes.values.length > 0) {
			// console.log(previous)
			smallest = nodes.dequeue().value

			// console.log(smallest)

			if (smallest === finish) {
				console.log('Finished')
				while (previous[smallest]) {
					path.push(smallest)
					smallest = previous[smallest]
				}
				break
			}

			if (smallest || distances[smallest] !== Infinity) {
				for (const neighbor in this.aList[smallest]) {
					let nextNode = this.aList[smallest][neighbor]

					let candidate = distances[smallest] + nextNode.weight

					// console.log(nextNode.node)
					if (candidate < distances[nextNode.node]) {
						distances[nextNode.node] = candidate
						previous[nextNode.node] = smallest

						nodes.enqueue(nextNode.node, candidate)
					}
				}
			}
		}

		return path.reverse()
	}
}

const wg = new WeightedGraph()

wg.addVertex('A')
wg.addVertex('B')
wg.addVertex('C')
wg.addVertex('D')
wg.addVertex('E')
wg.addVertex('F')

wg.addEdge('A', 'B', 4)
wg.addEdge('A', 'C', 2)
wg.addEdge('B', 'E', 3)
wg.addEdge('C', 'D', 2)
wg.addEdge('C', 'F', 4)
wg.addEdge('D', 'E', 3)
wg.addEdge('D', 'F', 1)
wg.addEdge('E', 'F', 1)

console.log(wg.dijkstra2('A', 'F'))
