// Frequency Counter Pattern =======================================================================

const console = require("console")

// ===== Same =====
// Write a function called same, which accepts two arrays.
// The function should return true if every value in the the first array
// has its corresponding value squared in the second array.
// The frequency of values must be the same.
function same(array1, array2) {
    if (array1.length !== array2.length) {
        return false
    }

    const freqCounter1 = {}
    const freqCounter2 = {}

    for (const num of array1) {
        freqCounter1[num] = (freqCounter1[num] || 0) + 1 
    }

    for (const num of array2) {
        freqCounter2[num] = (freqCounter2[num] || 0) + 1 
    }

    console.log(freqCounter1)
    console.log(freqCounter2)

    for (const key in freqCounter1) {
        // is key squared a key in freqCounter2?
        if (!(key ** 2 in freqCounter2)) {
            return false
        }

        // is the value at key squared of freqCounter2
        // the same as the value at key of freqCounter1
        if (freqCounter2[key ** 2] !== freqCounter1[key]) {
            return false
        }
    }

    return true
}

// console.log(same([5, 1, 2, 3, 2, 4], [9, 1, 4, 16, 4, 25]))

// ===== Anagrams =====
// Given two strings, write a function to determine if the second string
// is an anagram of the first. An anagram is a word, phrase, or name formed
// by rearranging the letters of another.
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    const freqCounter1 = {}

    for (const char of str1) {
        freqCounter1[char] = (freqCounter1[char] || 0) + 1
    }

    console.log(freqCounter1)

    for (const char of str2) {
        if (!freqCounter1[char]) {
            return false
        } else {
            freqCounter1[char] -= 1
        }
    }
    
    return true
}

// console.log(validAnagram('cinema', 'iceman'))
// console.log(validAnagram('anagram', 'mangara'))
// console.log(validAnagram('tacocat', 'tacocato'))
// console.log(validAnagram('money', 'yenon'))
// console.log(validAnagram('tacocatoh', 'tacocato'))

function areThereDuplicates(...args) {
    const freqCounter = {}
    
    for (const val of args) {
        if (freqCounter[val]) {
            return true
        }
        
        freqCounter[val] = (freqCounter[val] || 0) + 1
    }

    return false
}

// console.log(areThereDuplicates(1, 2, 3))
// console.log(areThereDuplicates(1, 2, 2))
// console.log(areThereDuplicates('a', 'b', 'c', 'a'))



// Multiple Pointers Pattern =======================================================================

// ===== Sum Zero =====
// Create a function that accepts an array of sorted numbers
// and returns the first pair that has a sum of zero 
// or undefined if no pair is found
function sumZero(arr) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let sum = arr[left] + arr[right]

        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}

// console.log(sumZero([-6, -4, -3, -2, -1, 0, 1, 2, 5, 7, 10]))
// console.log(sumZero([-8, -6, -3, -1, 0, 2, 4, 5, 7]))

// ===== Count Unique Valeus =====
// Implement a function called countUniqueValues which accepts
// a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.
function countUniqueValues(arr) {
    if (arr.length <= 1) {
        return arr.length
    }

    let i = 0 // marks how many we've found
    let j = 0 // scouts for unique values to the right

    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
        j++
    }
    
    return i + 1
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
// console.log(countUniqueValues([]))
// console.log(countUniqueValues([-1, -1, 0, 0, 1, 2, 3, 4, 4, 4, 4, 5, 5]))

function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;

    if (!str1) return true;

    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }

    return false;
}

// console.log(isSubsequence('hello', 'hello world'))
// console.log(isSubsequence('sing', 'sting'))
// console.log(isSubsequence('abc', 'abracadabra'))
// console.log(isSubsequence('abc', 'acb'))



// Sliding Window Pattern ==========================================================================

// ===== Max Sub Array =====
function maxSubArray(arr, num) {
    if (arr.length < num) return null
 
    let max  = -Infinity
    let sum = 0
 
    for (let i = 0; i < num; i++) {
        sum += arr[i]
    }
 
    for (let i = num; i < arr.length; i++) {
        sum += arr[i] - arr[i-num]
        max = Math.max(max, sum)
    }
 
    return max
}

// console.log(maxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 1))
// console.log(maxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 2))
// console.log(maxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
// console.log(maxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 4))
// console.log(maxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 5))

function minSubArrayLen(arr, num) {
    let minLen = Infinity
    let start = 0
    let end = 0
    let sum = 0
    
    while (start < arr.length) {
        if (sum < num && end < arr.length) {
            sum += arr[end]
            end++
        } else if (sum >= num) {
            minLen = Math.min(minLen, end - start)
            sum -= arr[start]
            start++
        } else {
            break
        }
    }
    
    return minLen === Infinity ? 0 : minLen
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))

// function findLongestSubstring(str){
//     let longest = -Infinity

//     let start = 0
//     let end = 0
//     let letters = []

//     while (start < str.length) {
//         if (end < str.length && !letters.includes(str.charAt(end))) {
//             letters.push(str.charAt(end))
//             end++
//         } else {
//             longest = Math.max(longest, end-start)
//             letters.shift()
//             start++
//         }
//     }

//     return longest === -Infinity ? 0 : longest
// }

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}

console.log(findLongestSubstring('thisisawesome'))
