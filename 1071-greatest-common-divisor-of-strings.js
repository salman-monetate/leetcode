// 1071. Greatest Common Divisor of Strings
// https://leetcode.com/problems/greatest-common-divisor-of-strings/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 70.42% of JavaScript online submissions
// for Greatest Common Divisor of Strings.
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions
// for Greatest Common Divisor of Strings.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) => {
  const findGcd = (a, b) => (0 === b ? a : findGcd(b, a % b));
  const gcd = findGcd(str1.length, str2.length);
  const combo = str1 + str2;
  const gcdString = combo.substr(0, gcd);
  for (let i = gcd; i < combo.length; i += gcd) {
    if (gcdString !== combo.substr(i, gcd)) return '';
  }
  return gcdString;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'ABCABC, ABC',
    input: {
      str1: 'ABCABC',
      str2: 'ABC',
    },
    expected: 'ABC',
  },
  {
    name: 'ABABAB, ABAB',
    input: {
      str1: 'ABABAB',
      str2: 'ABAB',
    },
    expected: 'AB',
  },
  {
    name: 'ABABAB, ABABC',
    input: {
      str1: 'ABABAB',
      str2: 'ABABC',
    },
    expected: '',
  },
  {
    name: 'AB, AB',
    input: {
      str1: 'AB',
      str2: 'AB',
    },
    expected: 'AB',
  },
  {
    name: 'ABABABABABAB, ABABABABABAB',
    input: {
      str1: 'ABABABABABAB',
      str2: 'ABABABABABAB',
    },
    expected: 'ABABABABABAB',
  },
  {
    name: 'LEET, CODE',
    input: {
      str1: 'LEET',
      str2: 'CODE',
    },
    expected: '',
  },
];

tests.forEach(({ name, input: { str1, str2 }, expected }) => {
  const output = gcdOfStrings(str1, str2);
  if (expected === output) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
