class Graph {
	constructor() {
		// adjacency list
		this.aList = {}
	}

	addVertex(vertex) {
		if (!this.aList[vertex]) {
			this.aList[vertex] = []
		}
	}

	addEdge(vertex1, vertext2) {
		if (this.aList[vertex1] && this.aList[vertext2]) {
			this.aList[vertex1].push(vertext2)
			this.aList[vertext2].push(vertex1)
		}
	}

	removeEdge(vertex1, vertex2) {
		// remove the vertices from each other's list
		if (this.aList[vertex1] && this.aList[vertex2]) {
			this.aList[vertex1] = this.aList[vertex1].filter((v) => v !== vertex2)
			this.aList[vertex2] = this.aList[vertex2].filter((v) => v !== vertex1)
		}
	}

	removeVertex(targetVertex) {
		if (!this.aList[targetVertex]) return

		// remove the edges between the target vertex and
		// the vertices in its list
		for (const adjacentVertex of this.aList[targetVertex]) {
			this.removeEdge(targetVertex, adjacentVertex)
		}

		// remove the vertex
		delete this.aList[targetVertex]

		console.log(this.aList)
	}

	// DFSRecursive(vertex) {
	// 	console.log(vertex)

	// 	for (const key in this.aList) {
	// 		this.aList[key] = this.aList[key].filter((v) => v !== vertex)
	// 	}

	// 	while (this.aList[vertex][0]) {
	// 		this.DFSRecursive(this.aList[vertex][0])
	// 	}
	// }

	DFSRecursive(start) {
		const result = []
		const visited = {}
		const aList = this.aList

		function dfs(vertex) {
			if (!vertex) return

			visited[vertex] = true
			result.push(vertex)

			aList[vertex].forEach((neighbor) => {
				if (!visited[neighbor]) dfs(neighbor)
			})
		}

		dfs(start)

		return result
	}

	DFSIterative(start) {
		const result = []
		const stack = []
		const visited = {}

		stack.push(start)

		while (stack.length > 0) {
			const vertex = stack.pop()

			if (!visited[vertex]) {
				result.push(vertex)
				visited[vertex] = true

				this.aList[vertex].forEach((neighbor) => {
					stack.push(neighbor)
				})
			}
		}

		console.log(result)

		return result
	}

	BFS(start) {
		const queue = []
		const result = []
		const visited = {}

		queue.push(start)
		visited[start] = true

		while (queue.length > 0) {
			const vertex = queue.shift()

			result.push(vertex)

			this.aList[vertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true
					queue.push(neighbor)
				}
			})
		}

		console.log(result)

		return result
	}
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')
console.log(graph)

graph.BFS('A')
