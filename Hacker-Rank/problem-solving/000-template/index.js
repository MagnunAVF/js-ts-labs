const assert = require("node:assert");

function myFunc() {
  return true;
}

function main() {
  assert.equal(myFunc(), true);

  console.log("OK");
}

main();
