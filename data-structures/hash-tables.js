class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size)
	}

	_hash(key) {
		let total = 0
		const PRIME = 31

		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i]
			let value = char.charCodeAt(0) - 96

			total = (total * PRIME + value) % this.keyMap.length
		}

		return total
	}

	set(key, value) {
		const index = this._hash(key)

		console.log(`${key}: ${index}`)

		if (!this.keyMap[index]) {
			this.keyMap[index] = []
		}

		this.keyMap[index].push([key, value])
	}

	get(key) {
		const index = this._hash(key)

		if (this.keyMap[index]) {
			const [_, value] = this.keyMap[index].find((record) => record[0] === key)
			return value
		}
	}

	keys() {
		const keys = this.keyMap.reduce((result, array) => {
			array.forEach(([key, value]) => {
				if (!result.includes(key)) {
					result.push(key)
				}
			})
			return result
		}, [])

		return keys
	}

	values() {
		const values = this.keyMap.reduce((result, array) => {
			array.forEach(([key, value]) => {
				if (!result.includes(value)) {
					result.push(value)
				}
			})
			return result
		}, [])

		return values
	}
}

const hashTable = new HashTable()

hashTable.set('red', '#FF0000')
hashTable.set('black', '#000000')
hashTable.set('white', '#FFFFFF')
hashTable.set('green', '#00FF00')
hashTable.set('blue', '#0000FF')

console.log(hashTable.keys())
console.log(hashTable.values())
