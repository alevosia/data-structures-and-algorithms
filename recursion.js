function isAnyOdd(arr) {
	if (arr.length === 0) {
		return false
	}

	if (arr[0] % 2 !== 0) {
		return true
	}

	return isAnyOdd(arr.slice(1))
}

// console.log(isAnyOdd([124, 456, 257, 854, 852]))
// console.log(isAnyOdd([124, 456, 222, 854, 852]))
// console.log(isAnyOdd([124, 456, 854, 852]))
// console.log(isAnyOdd([125]))
// console.log(isAnyOdd([]))

function sumRange(num) {
	if (num === 1) return 1
	return num + sumRange(num - 1)
}

// console.log(sumRange(5))

function factorial(num) {
	if (num === 1) return 1
	return num * factorial(num - 1)
}

// console.log(factorial(1))
// console.log(factorial(2))
// console.log(factorial(3))
// console.log(factorial(4))
// console.log(factorial(5))

// HELPER METHOD ===================================================================================
function collectOddValue(arr) {
	let result = []

	function helper(helperInput) {
		if (helperInput.length === 0) {
			return
		}

		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0])
		}

		return helper(helperInput.slice(1))
	}

	helper(arr)

	return result
}

// console.log(collectOddValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))

function collectOddValuePure(arr) {
	let newArr = []

	if (arr.length === 0) {
		return newArr
	}

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0])
	}

	return newArr.concat(collectOddValuePure(arr.slice(1)))
}

// console.log(collectOddValuePure([1, 2, 3, 4, 5, 6, 7]))

function reverse(str) {
	if (str.length <= 1) {
		return str
	}

	let newStr = str.slice(str.length - 1)

	return newStr.concat(reverse(str.slice(0, str.length - 1)))
}

function reverse(str) {
	if (str.length <= 1) return str
	return reverse(str.slice(1)) + str[0]
}

function isPalindrome(str) {
	function helper(innerStr) {
		let newStr = ''

		if (innerStr.length === 0) {
			return newStr
		}

		newStr = innerStr.slice(innerStr.length - 1)

		return newStr.concat(helper(innerStr.slice(0, innerStr.length - 1)))
	}

	return str === helper(str)
}

function isPalindrome(str) {
	if (str.length === 1) return true
	if (str.length === 2) return str[0] === str[1]
	if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
	return false
}

// Write a function that accepts an array and a callback.
// The function returns true if a single value in the array
// returns true when passed to the callback. Otherwise, it returns false.
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;
function someRecursive(arr, callback) {
	if (arr.length === 0) {
		return false
	}

	if (callback(arr[0])) {
		return true
	}

	return someRecursive(arr.slice(1), callback)
}

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// Write a function that accepts an array and returns a new array
// with all the values flattened (no nested arrays)
function flattenHelper(arr) {
	let result = []

	function helper(helperArr) {
		if (helperArr.length === 0) {
			return
		}

		if (!Array.isArray(helperArr[0])) {
			result.push(helperArr[0])
		} else {
			helper(helperArr[0])
		}

		helper(helperArr.slice(1))
	}

	helper(arr)

	return result
}

// Write a function that accepts an array and returns a new array
// with all the values flattened (no nested arrays)
function flattenPure(oldArr) {
	var newArr = []

	for (var i = 0; i < oldArr.length; i++) {
		if (Array.isArray(oldArr[i])) {
			newArr = newArr.concat(flatten(oldArr[i]))
		} else {
			newArr.push(oldArr[i])
		}
	}

	return newArr
}

// console.log(flatten([1, 2, 3, [4, 5]]))

// Write a function called stringifyNumbers which takes in an object
// and finds all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!
function stringifyNumbers(obj) {
	const newObj = {}

	for (const key in obj) {
		if (typeof obj[key] === 'number') {
			newObj[key] = obj[key].toString()
		} else if (Array.isArray(obj[key])) {
			newObj[key] = obj[key]
		} else if (typeof obj[key] === 'object') {
			newObj[key] = stringifyNumbers(obj[key])
		} else {
			newObj[key] = obj[key]
		}
	}

	return newObj
}

const sample = {
	num: 1,
	test: [],
	data: {
		val: 4,
		info: {
			isRight: true,
			random: 66,
		},
	},
}

// console.log(stringifyNumbers(sample))

// Write a function that accepts an object returns an array of all the values
// in the object that have a type of string
function collectStrings(obj) {
	let res = []

	for (const key in obj) {
		if (typeof obj[key] === 'string') {
			res.push(obj[key])
		} else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			const received = collectStrings(Object.assign({}, obj[key]))
			// re-assign since concat does not mutate the array
			res = res.concat(received)
		}
	}

	return res
}

// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

// console.log(collectStrings(obj)) // ["foo", "bar", "baz"])

function nestedEvenSum(obj) {
	let sum = 0

	for (const key in obj) {
		// if even
		if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
			sum += obj[key]
		}
		// if object and not array
		else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			sum += nestedEvenSum(Object.assign({}, obj[key]))
		}
	}

	return sum
}

// var obj1 = {
//     outer: 2,
//     obj: {
//         inner: 2,
//         otherObj: {
//             superInner: 2,
//             notANumber: true,
//             alsoNotANumber: "yup"
//         }
//     }
// }

// var obj2 = {
//     a: 2,
//     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//     c: {c: {c: 2}, cc: 'ball', ccc: 5},
//     d: 1,
//     e: {e: {e: 2}, ee: 'car'}
// };

// console.log(nestedEvenSum(obj1)) // 6
// console.log(nestedEvenSum(obj2)) // 10

// Capitalize the first letter of each string in the array
function capitalizeFirst(array) {
	if (array.length === 1) {
		return [array[0][0].toUpperCase() + array[0].substr(1)]
	}
	const res = capitalizeFirst(array.slice(0, -1))
	const string =
		array.slice(array.length - 1)[0][0].toUpperCase() +
		array.slice(array.length - 1)[0].substr(1)
	res.push(string)
	return res
}

// const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut',
//     'Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho',
//     'Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts',
//     'Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey',
//     'New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon',
//     'Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah',
//     'Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

function naiveSearch(array, target) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === target) {
			return i
		}
	}

	return -1
}

function binarySearch(array, target) {
	let start = 0
	let end = array.length - 1

	while (start <= end) {
		let mid = Math.floor((start + end) / 2)

		if (target > array[mid]) {
			start = mid + 1
		} else if (target < array[mid]) {
			end = mid - 1
		} else {
			return mid
		}
	}

	return -1
}

function binarySearchAlt(array, target) {
	let start = 0
	let end = array.length - 1

	while (start !== end) {
		let mid = Math.ceil((start + end) / 2)

		if (array[mid] > target) {
			end = mid - 1
		} else {
			start = mid
		}
	}

	return array[start] === target ? start : -1
}

// const sampleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

// console.log('\n--- Sample Size: ' + sampleArray.length + ' ---')

// console.time('Linear Search')
// console.log('Index: ' + naiveSearch(sampleArray, 12))
// console.timeEnd('Linear Search')

// console.time('Binary Search')
// console.log('Index: ' + binarySearch(sampleArray, 12))
// console.timeEnd('Binary Search')

// console.time('Binary Search Alt')
// console.log('Index: ' + binarySearchAlt(sampleArray, 12))
// console.timeEnd('Binary Search Alt')

var runningSum = function (nums) {
	let res = [nums[0]]

	for (let i = 1; i < nums.length; i++) {
		res.push(res[i - 1] + nums[i])
	}

	return res
}

// console.log(runningSum([1,2,3,4])) // [1,3,6,10]

var shuffle = function (nums, n) {
	const res = []

	for (let i = 0; i < n; i++) {
		res.push(nums[i], nums[n + i])
	}

	return res
}

// console.log(shuffle([2,5,1,3,4,7], 3)) // [2, 3, 5, 4, 1, 7]

// String Search
function stringSearch(str, target) {
	let count = 0

	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < target.length; j++) {
			if (target[j] !== str[i + j]) {
				break
			}

			if (j === target.length - 1) {
				count++
			}
		}
	}

	return count
}

console.log(stringSearch('zdogjsomsdzomgsdsdomgksd', 'omgksdx'))
