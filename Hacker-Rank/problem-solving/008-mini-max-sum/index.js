const assert = require("node:assert");

function miniMaxSum(arr) {
  if (arr.legth <= 0) throw new Error("Invalid Array");
  const n = arr.length;

  arr.sort((a, b) => a - b);

  // sum first 4 elements of an ordered array
  const minSum = arr.slice(0, n - 1).reduce((acc, curr) => acc + curr, 0);

  // sum last 4 elements of an ordered array
  const maxSum = arr.slice(1, n).reduce((acc, curr) => acc + curr, 0);

  return `${minSum} ${maxSum}`;
}

function main() {
  assert.equal(miniMaxSum([1, 3, 5, 7, 9]), `16 24`);
  assert.equal(miniMaxSum([5, 1, 2, 4, 3]), `10 14`);

  console.log("OK");
}

main();
