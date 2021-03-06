// 977. Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/

/*

Given an array of integers A sorted in non-decreasing order,
return an array of the squares of each number,
also in sorted non-decreasing order.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 140 ms, faster than 56.02% of JavaScript online submissions
// Memory Usage: 43.1 MB, less than 81.48% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// const sortedSquares = A =>
//   A.map(n => Math.pow(n, 2)).sort((a, b) => (b < a ? 1 : a < b ? -1 : 0));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 120 ms, faster than 83.01% of JavaScript online submissions
// Memory Usage: 43.8 MB, less than 22.22% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// const sortedSquares = A => A.map(n => Math.pow(n, 2)).sort((a, b) => a - b);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 104 ms, faster than 93.96% of JavaScript online submissions
// Memory Usage: 42.2 MB, less than 96.30% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// const sortedSquares = A => {
//   const result = [];
//   let [p1, p2] = [0, A.length - 1];
//   while (p1 <= p2) {
//     const [x, y] = [Math.pow(A[p1], 2), Math.pow(A[p2], 2)];
//     if (x > y) {
//       result.push(x);
//       p1++;
//     } else {
//       result.push(y);
//       p2--;
//     }
//   }
//   return result.reverse();
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 120 ms, faster than 83.01% of JavaScript online submissions
// Memory Usage: 42.6 MB, less than 88.89% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// const sortedSquares = A => {
//   const result = [];
//   let [p1, p2] = [0, A.length - 1];
//   [A[p1], A[p2]] = [Math.abs(A[p1]), Math.abs(A[p2])];
//   while (p1 <= p2) {
//     if (A[p2] < A[p1]) {
//       result.push(Math.pow(A[p1], 2));
//       A[++p1] = Math.abs(A[p1]);
//     } else {
//       result.push(Math.pow(A[p2], 2));
//       A[--p2] = Math.abs(A[p2]);
//     }
//   }
//   return result.reverse();
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 100 ms, faster than 97.05% of JavaScript online submissions
// Memory Usage: 42.4 MB, less than 92.59% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// const sortedSquares = A => {
//   for (let i = 0; A[i] < 0; i++) A[i] = Math.abs(A[i]);
//   let [p1, p2] = [0, A.length - 1];
//   const result = [];
//   while (p1 <= p2)
//     if (A[p2] < A[p1]) result.push(Math.pow(A[p1++], 2));
//     else result.push(Math.pow(A[p2--], 2));
//   return result.reverse();
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 152 ms, faster than 26.68% of JavaScript online submissions
// Memory Usage: 42.4 MB, less than 92.59% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// const sortedSquares = A => {
//   let [p1, p2] = [0, A.length - 1];
//   const result = [];
//   while (p1 <= p2)
//     if (Math.abs(A[p2]) < Math.abs(A[p1])) result.unshift(A[p1++] ** 2);
//     else result.unshift(A[p2--] ** 2);
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 124 ms, faster than 81.08% of JavaScript online submissions
// Memory Usage: 42.3 MB, less than 92.59% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// const sortedSquares = A => {
//   for (let i = A.length - 1; 0 <= i; i--) A[i] = Math.pow(A[i], 2);
//   let [p1, p2] = [0, A.length - 1];
//   const result = [];
//   while (p1 <= p2)
//     if (A[p2] < A[p1]) result.push(A[p1++]);
//     else result.push(A[p2--]);
//   return result.reverse();
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 136 ms, faster than 62.60% of JavaScript online submissions
// Memory Usage: 44 MB, less than 11.11% of JavaScript online submissions

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = A => A.map(n => n ** 2).sort((a, b) => a - b);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100]);

deepStrictEqual(sortedSquares([-7, -3, 2, 3, 11]), [4, 9, 9, 49, 121]);

deepStrictEqual(
  sortedSquares([
    -20,
    -19,
    -14,
    -12,
    -7,
    -5,
    2,
    2,
    4,
    6,
    6,
    7,
    8,
    9,
    10,
    12,
    17,
    17,
    18,
    18,
  ]),
  [
    4,
    4,
    16,
    25,
    36,
    36,
    49,
    49,
    64,
    81,
    100,
    144,
    144,
    196,
    289,
    289,
    324,
    324,
    361,
    400,
  ],
);

deepStrictEqual(sortedSquares([-10000, 0, 10000]), [0, 100000000, 100000000]);

deepStrictEqual(sortedSquares([-9, -8, -7]), [49, 64, 81]);
