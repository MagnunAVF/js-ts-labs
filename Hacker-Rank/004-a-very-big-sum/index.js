const assert = require("node:assert");

function aVeryBigSum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

function main() {
  assert.equal(
    aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]),
    5000000015
  );

  console.log("OK");
}

main();
