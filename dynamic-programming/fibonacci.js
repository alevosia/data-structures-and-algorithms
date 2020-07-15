function fib(n) {
	if (n <= 2) return 1

	return fib(n - 1) + fib(n - 2)
}

console.time('Fib')
console.log(fib(35))
console.timeEnd('Fib')

function memoizedFib(n, memo = []) {
	if (memo[n] !== undefined) return memo[n]

	if (n < 2) return 1

	const res = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo)

	memo[n] = res

	return res
}

console.time('Memo')
console.log(memoizedFib(35))
console.timeEnd('Memo')

function tabularizedFib(n) {
	if (n <= 2) return 1
	const fibNums = [0, 1, 1]

	for (let i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
	}

	return fibNums[n]
}

console.log(tabularizedFib(10))
