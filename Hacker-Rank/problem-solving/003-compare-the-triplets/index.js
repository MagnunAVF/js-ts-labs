const assert = require("node:assert");

function compareTriplets(a, b) {
  let aScore = 0;
  let bScore = 0;

  if (a.length !== b.length) {
    throw new Error("Invalid Input!");
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) aScore += 1;
    if (a[i] < b[i]) bScore += 1;
  }

  return [aScore, bScore];
}

function main() {
  assert.deepEqual(compareTriplets([1, 2, 3], [3, 2, 1]), [1, 1]);
  assert.deepEqual(compareTriplets([5, 6, 7], [3, 6, 10]), [1, 1]);
  assert.deepEqual(compareTriplets([17, 28, 30], [99, 16, 8]), [2, 1]);

  console.log("OK");
}

main();
