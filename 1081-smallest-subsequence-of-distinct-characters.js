// 1081. Smallest Subsequence of Distinct Characters
// https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} text
 * @return {string}
 */
const smallestSubsequence = text => {
  let uniques = Array.from(new Set(text.split('')));
  console.log(uniques);
  let weights = text.split('').map((c, i) => [
    i,
    c,
    uniques
      .filter(x => x !== c)
      .map(x => text.substring(i, text.length).indexOf(x))
      .reduce((a, c) => a + c, 0),
  ]);
  console.log(weights);
  uniques = uniques.map(u => weights.filter(([,c]) => {});
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  /*
   *          |---|---|---|---|---|---|---|---|
   *      i = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
   *          |---|---|---|---|---|---|---|---|
   *  input = | c | d | a | d | a | b | c | c |
   *          |---|---|---|---|---|---|---|---|
   *      a = |   |   |~a~|   | a |   |   |   |
   *      b = |   |   |   |   |   |~b~|   |   |
   *      c = | c |   |   |   |   |   |~c~| c |
   *      d = |   | d |   |~d~|   |   |   |   |
   *          |---|---|---|---|---|---|---|---|
   * answer = | - | - | a | d | - | b | c | - |
   *          |---|---|---|---|---|---|---|---|
   *      i = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
   *          |---|---|---|---|---|---|---|---|
   */
  {
    input: 'cdadabcc',
    expected: 'adbc',
  },
  // {
  //   input: 'abcd',
  //   expected: 'abcd',
  // },
  // {
  //   input: 'ecbacba',
  //   expected: 'eacb',
  // },
  // {
  //   input: 'leetcode',
  //   expected: 'letcod',
  // },
];

tests.forEach(({ input, expected }) => {
  const output = smallestSubsequence(input);
  if (output === expected) {
    console.log(`✅ ${input}`);
  } else {
    console.log(`🔴 ${input}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
