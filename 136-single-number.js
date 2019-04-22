// 136. Single Number
// https://leetcode.com/problems/single-number/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 780 ms, faster than 5.30% of JavaScript online submissions for Single Number.
// Memory Usage: 38.4 MB, less than 9.89% of JavaScript online submissions for Single Number.

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
  const haystack = ` ${nums.join(' ')} `;
  for (let i = nums.length - 1; 0 <= i; --i) {
    const needle = ` ${nums[i]} `;
    if (haystack.indexOf(needle) === haystack.lastIndexOf(needle)) {
      return nums[i];
    }
  }
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} nums
 * @return {number}
 */
// const singleNumber = nums => {
//   const map = new Map();
//   for (let i = nums.length - 1; 0 <= i; --i) {
//     if (map.has(nums[i])) map.set(num, map.get(nums[i]) + 1);
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: [2, 2, 1],
    expected: 1,
  },
  {
    name: 'Example 2',
    input: [4, 1, 2, 1, 2],
    expected: 4,
  },
];

tests.forEach(({ name, input, expected }) => {
  const output = singleNumber(input);
  if (expected === output) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});