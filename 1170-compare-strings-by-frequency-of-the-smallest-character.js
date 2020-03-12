// 1170. Compare Strings by Frequency of the Smallest Character
//       https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/

/*

Let's define a function f(s) over a non-empty string s, which calculates the
frequency of the smallest character in s. For example, if s = "dcce" then f(s) =
2 because the smallest character is "c" and its frequency is 2.

Now, given string arrays queries and words, return an integer array answer,
where each answer[i] is the number of words such that f(queries[i]) < f(W),
where W is a word in words.

Constraints:
- 1 <= queries.length <= 2000
- 1 <= words.length <= 2000
- 1 <= queries[i].length, words[i].length <= 10
- queries[i][j], words[i][j] are English lowercase letters.

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 1796 ms, faster than 10.87% of JavaScript online submissions
// Memory Usage: 51.4 MB, less than 100.00% of JavaScript online submissions

// const f = s => {
//   const cnts = new Array(26).fill(0);
//   for (const c of s) cnts[c.charCodeAt(0) - 97]++;
//   for (const cnt of cnts) if (0 < cnt) return cnt;
// };

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) =>
//   queries.map(f).map(q => words.map(f).filter(w => q < w).length);

// console.log(words.map(f));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 224 ms, faster than 35.51% of JavaScript online submissions
// Memory Usage: 43.5 MB, less than 100.00% of JavaScript online submissions

// const memo = new Map();

// /**
//  * @param {string} s
//  * @returns
//  */
// const f = s => {
//   if (memo.has(s)) return memo.get(s);
//   const cnts = new Array(26).fill(0);
//   for (const c of s) cnts[c.charCodeAt(0) - 97]++;
//   for (const cnt of cnts)
//     if (0 < cnt) {
//       memo.set(s, cnt);
//       return cnt;
//     }
// };

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) => {
//   [queries, words] = [queries.map(f), words.map(f)];
//   return queries.map(q => words.filter(w => q < w).length);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 236 ms, faster than 31.40% of JavaScript online submissions
// Memory Usage: 42.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @returns
//  */
// const f = s => {
//   const cnts = new Array(26).fill(0);
//   for (const c of s) cnts[c.charCodeAt(0) - 97]++;
//   for (const cnt of cnts) if (0 < cnt) return cnt;
// };

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) => {
//   [queries, words] = [queries.map(f), words.map(f)];
//   return queries.map(q => words.filter(w => q < w).length);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 5312 ms, faster than 5.08% of JavaScript online submissions
// Memory Usage: 67.5 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} s
 * @returns
 */
const f = s =>
  s.match(
    new RegExp(
      `(${String.fromCharCode(Math.min(...[...s].map(c => c.charCodeAt(0))))})`,
      'g',
    ),
  ).length;

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
const numSmallerByFrequency = (queries, words) =>
  queries.map(f).map(q => words.map(f).filter(w => q < w).length);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
deepStrictEqual(numSmallerByFrequency(['cbd'], ['zaaaz']), [1]);
// Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so
// f("cbd") < f("zaaaz").

// Example 2:
deepStrictEqual(
  numSmallerByFrequency(['bbb', 'cc'], ['a', 'aa', 'aaa', 'aaaa']),
  [1, 2],
);
// Explanation: On the first query only f("bbb") < f("aaaa"). On the second
// query both f("aaa") and f("aaaa") are both > f("cc").
