const assert = require("node:assert");

function simpleArraySum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

function main() {
  assert.equal(simpleArraySum([1, 2, 3]), 6);
  assert.equal(simpleArraySum([1, 2, 3, 4, 10, 11]), 31);

  console.log("OK");
}

main();
