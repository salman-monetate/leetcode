# JavaScript Recursive Solution

Solving problems that are based on objects like trees and lists requires more preparation, so I'll go over that first.

I develop solutions locally using [Visual Studio Code](https://code.visualstudio.com/) with the [Quokka plugin](https://quokkajs.com/docs/index.html). (Plus a bunch of other plugins.)

Locally, I rewrote the ListNode function delaration as a modern class declartion.

```js
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    return this;
  }
}
```

Solutions could be shorter if ListNode had a `next` parameter in addition to `val`, like I show below, but that's not how the class is defined in the problem.

```js
class ListNode {
  // I wish it was defined like this
  constructor(val, next = null) {
    this.val = val;
    this.next = next; // A little change that would improve much
    return this;
  }
}
```

I find local testing useful, so a function to quickly create ListNodes is helpful.

We can create ListNodes from integers; that makes sense.

```js
const intToListNode = n => {
  if (!n) return null;
  const node = new ListNode(n % 10);
  node.next = intToListNode(Math.trunc(n / 10));
  return node;
};
```

But it won't work with really big numbers. So, instead, we can use arrays of digits.

```js
const arrayToListNode = a => {
  if (!a.length) return null;
  const node = new ListNode(a.pop());
  node.next = arrayToListNode(a);
  return node;
};
```

Another option we could use is strings.

```js
const stringToListNode = s => {
  if (!s.length) return null;
  const node = new ListNode(Number.parseInt(s.slice(-1)));
  node.next = stringToListNode(s.slice(0, -1));
  return node;
};
```

Quokka uses the version of [Node.js](https://nodejs.org/) installed on our machine. Node.js has an [assert module](https://nodejs.org/api/assert.html) we can use for quick and easy local testing.

Now we can easily turn the problem in the description, `342 + 465 = 807`, into a test that works with Node.js.

```js
import { deepStrictEqual } from 'assert';

deepStrictEqual(
  addTwoNumbers(intToListNode(342), intToListNode(465)),
  intToListNode(807),
);
```

And then, finally, we can code the solution to the problem.

```js
const addTwoNumbers = (l1, l2, carry = 0) => {
  // 1. When there are no nodes or anything to carry, terminate the list
  if (!l1 && !l2 && !carry) return null;
  // 2. Add up what's carried and the node values (what's missing is zero)
  const sum = carry + (l1 && l1.val) + (l2 && l2.val);
  // 3. Make a new list node out of the last digit of sum
  const node = new ListNode(sum % 10);
  // 4. Recurse with the next nodes, carrying the other digits of the sum
  node.next = addTwoNumbers(l1 && l1.next, l2 && l2.next, Math.trunc(sum / 10));
  return node;
};
```

For more context, you can look at the [finished file on Github](https://github.com/Sporkyy/leetcode/blob/master/2-add-two-numbers.js)

This goes further than just solving the problem, because I'm not just trying to get better at solving these problems, I'm trying to get better at _how_ I solve these problems.