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
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B')
graph.addEdge('B', 'C')
graph.addEdge('C', 'D')
graph.addEdge('D', 'E')
graph.addEdge('E', 'F')
graph.addEdge('F', 'A')
console.log(graph)

graph.removeVertex('A')
graph.removeVertex('B')
