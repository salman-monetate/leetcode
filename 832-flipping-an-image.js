// 832. Flipping an Image
// https://leetcode.com/problems/flipping-an-image/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 93.97% of JavaScript online submissions
// Memory Usage: 36.6 MB, less than 8.33% of JavaScript online submissions

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = A => {
  const [rows, cols] = [A.length, A[0].length];
  for (let i = 0; i < rows; i++) {
    if (1 === cols % 2) {
      A[i][Math.trunc(cols / 2)] = 0 === A[i][Math.trunc(cols / 2)] ? 1 : 0;
    }
    for (let j = 0; j <= cols / 2 - 1; j++) {
      [A[i][j], A[i][cols - j - 1]] = [
        0 === A[i][cols - j - 1] ? 1 : 0,
        0 === A[i][j] ? 1 : 0,
      ];
    }
  }
  return A;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

deepStrictEqual(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ]),
  [
    [1, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
);

deepStrictEqual(
  flipAndInvertImage([
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0],
  ]),
  [
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 0, 1, 0],
  ],
);
