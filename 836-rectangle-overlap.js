// 836. Rectangle Overlap
// https://leetcode.com/problems/rectangle-overlap/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory

/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
// var isRectangleOverlap = function([aX1, aY1, aX2, aY2], [bX1, bY1, bX2, bY2]) {
//   if (aX2 < aX1 && aY2 < aY1) [aX1, aY1, aX2, aY2] = [aX2, aY2, aX1, aY1];
//   if (bX2 < bX1 && bY2 < bY1) [bX1, bY1, bX2, bY2] = [bX2, bY2, bX1, bY1];
//   const xMin = Math.min(aX1, aX2, bX1, bX2);
//   if (xMin < 0)
//     [aX1, aX2, bX1, bX2] = [
//       aX1 + Math.abs(xMin),
//       aX2 + Math.abs(xMin),
//       bX1 + Math.abs(xMin),
//       bX2 + Math.abs(xMin),
//     ];
//   const yMin = Math.min(aY1, aY2, bY1, bY2);
//   if (yMin < 0)
//     [aY1, aY2, bY1, bY2] = [
//       aY1 + Math.abs(yMin),
//       aY2 + Math.abs(yMin),
//       bY1 + Math.abs(yMin),
//       bY2 + Math.abs(yMin),
//     ];
//   const xMax = Math.max(aX1, aX2, bX1, bX2);
//   const yMax = Math.max(aY1, aY2, bY1, bY2);
//   const canvas = new Array(yMax + 1).fill(0).map(n => new Array(xMax + 1).fill(0));
//   for (let i = 0; i < canvas.length; i++) {
//     for (let j = 0; j < canvas[i].length; j++) {
//       if (aY1 <= i && i <= aY2 && aX1 <= j && j <= aX2) canvas[i][j] += 1;
//       if (bY1 <= i && i <= bY2 && bX1 <= j && j <= bX2) canvas[i][j] += 2;
//     }
//   }
//   for (let row of canvas) console.log(row);
//   for (let i = 0; i < canvas.length; i++) {
//     for (let j = 0; j < canvas[0].length; j++) {
//       if (3 !== canvas[i][j]) continue;
//       if (canvas.length - 2 < i) continue;
//       if (canvas[0].length - 2 < j) continue;
//       const [r, dr, d] = [canvas[i][j + 1], canvas[i + 1][j + 1], canvas[i + 1][j]];
//       if (3 === r && 3 === dr && 3 === d) return true;
//     }
//   }
//   return false;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 21.17% of JavaScript online submissions
// for Rectangle Overlap.
// Memory Usage: 33.8 MB, less than 39.29% of JavaScript online submissions
// for Rectangle Overlap.

/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
const isRectangleOverlap = ([aX1, aY1, aX2, aY2], [bX1, bY1, bX2, bY2]) => {
  let [aT, aR, aB, aL, bT, bR, bB, bL] = [
    Math.min(aY1, aY2),
    Math.max(aX1, aX2),
    Math.max(aY1, aY2),
    Math.min(aX1, aX2),
    Math.min(bY1, bY2),
    Math.max(bX1, bX2),
    Math.max(bY1, bY2),
    Math.min(bX1, bX2),
  ];
  if ((bT <= aT && bR <= aR) || (bL <= aL && bB <= aB))
    [aT, aR, aB, aL, bT, bR, bB, bL] = [bT, bR, bB, bL, aT, aR, aB, aL];
  return !(aR <= bL || aB <= bT);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  //     0   1   2   3
  //   +===============+
  // 0 | 1 | 1 | 1 | 0 |
  // 1 | 1 | 3 | 3 | 2 |
  // 2 | 1 | 3 | 3 | 2 |
  // 3 | 0 | 2 | 2 | 2 |
  //   +===============+

  {
    input: {
      rec1: [0, 0, 2, 2],
      rec2: [1, 1, 3, 3],
    },
    expected: true,
  },

  //     -1   0   1   2
  //    +================+
  // -1 | 1 | 1 | 1 | 0 |
  //  0 | 1 | 3 | 3 | 2 |
  //  1 | 1 | 3 | 3 | 2 |
  //  2 | 0 | 2 | 2 | 2 |
  //    +================+

  {
    input: {
      rec1: [1, 1, -1, -1],
      rec2: [2, 2, 0, 0],
    },
    expected: true,
  },

  //     0   1   2
  //   +===========+
  // 0 | 1 | 3 | 2 |
  // 1 | 1 | 3 | 2 |
  //   +===========+

  {
    input: {
      rec1: [0, 0, 1, 1],
      rec2: [1, 0, 2, 1],
    },
    expected: false,
  },

  //     -4  -3   2  -1
  //    +===============+
  // -5 | 1 | 1 | 1 | 0 |
  // -4 | 1 | 1 | 1 | 0 |
  // -3 | 1 | 1 | 1 | 0 |
  // -2 | 1 | 1 | 1 | 0 |
  // -1 | 0 | 0 | 0 | 0 |
  //  0 | 0 | 0 | 0 | 0 |
  //  1 | 0 | 0 | 0 | 0 |
  //  2 | 0 | 0 | 0 | 0 |
  //  3 | 2 | 2 | 2 | 2 |
  //  4 | 2 | 2 | 2 | 2 |
  //  5 | 2 | 2 | 2 | 2 |​​
  //    +===============+

  {
    input: {
      rec1: [-4, 3, -1, 5],
      rec2: [-4, -5, -2, -2],
    },
    expected: false,
  },

  //     0   1   2   3
  //   +===============+
  // 0 | 1 | 1 | 0 | 0 |
  // 1 | 1 | 1 | 0 | 0 |
  // 2 | 0 | 0 | 2 | 2 |
  // 3 | 0 | 0 | 2 | 2 |
  //   +===============+

  {
    input: {
      rec1: [0, 0, 1, 1],
      rec2: [2, 2, 3, 3],
    },
    expected: false,
  },

  //    -5  -4  -3  -2  -1   0   1   2   3   4   5
  //   +===========================================+
  // 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
  // 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
  // 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
  // 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
  // 4 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
  // 5 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
  // 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
  // 7 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
  // 8 | 2 | 2 | 2 | 2 | 2 | 2 | 0 | 0 | 0 | 0 | 0 |
  //   +===========================================+

  {
    input: {
      rec1: [-5, 8, 0, 8],
      rec2: [-5, 4, 5, 5],
    },
    expected: false,
  },

  // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 1 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 1 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 1 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 1 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 1 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 1 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 1 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 1 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0 ]

  {
    input: {
      rec1: [7, 8, 13, 15],
      rec2: [10, 8, 12, 20],
    },
    expected: true,
  },

  // [ 0, 1, 1, 1, 1, 0, 0 ]
  // [ 0, 1, 1, 1, 1, 0, 0 ]
  // [ 0, 1, 1, 1, 1, 0, 0 ]
  // [ 0, 1, 1, 1, 1, 0, 0 ]
  // [ 0, 1, 1, 1, 1, 0, 0 ]
  // [ 0, 1, 1, 1, 1, 0, 0 ]
  // [ 0, 1, 1, 1, 1, 0, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0 ]
  // [ 0, 0, 0, 0, 0, 0, 0 ]
  // [ 2, 2, 2, 2, 2, 2, 2 ]
  // [ 2, 2, 2, 2, 2, 2, 2 ]
  // [ 2, 2, 2, 2, 2, 2, 2 ]
  // [ 2, 2, 2, 2, 2, 2, 2 ]
  // [ 2, 2, 2, 2, 2, 2, 2 ]

  {
    input: {
      rec1: [-9, 6, -3, 10],
      rec2: [-8, -10, -5, -4],
    },
    expected: false,
  },

  {
    input: {
      rec1: [-687153884, -854669644, -368882013, -788694078],
      rec2: [540420176, -909203694, 655002739, -577226067],
    },
    expected: false, // Maybe
  },
];

for (let {
  input: { rec1, rec2 },
  expected,
} of tests) {
  const output = isRectangleOverlap(rec1, rec2);
  const name = `rec1 = ${rec1}; rec2 = ${rec2}`;
  if (expected === output) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
}