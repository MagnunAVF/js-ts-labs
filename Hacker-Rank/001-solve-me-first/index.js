const assert = require("node:assert");

function solveMeFirst(a, b) {
  return a + b;
}

function main() {
  assert.equal(solveMeFirst(7, 3), 10);
  assert.equal(solveMeFirst(2, 3), 5);

  console.log("OK");
}

main();
