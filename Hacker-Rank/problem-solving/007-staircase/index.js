const assert = require("node:assert");

function staircase(n) {
  let result = ``;
  for (let i = 1; i <= n; i++) {
    const blankSpaces = new Array(n - i).fill(" ");
    const filledSpaces = new Array(i).fill("#");
    let level = [...blankSpaces, ...filledSpaces].join("");
    result = `${result}${level}\n`;
  }

  return result;
}

function main() {
  assert.equal(staircase(4), `   #\n  ##\n ###\n####\n`);
  assert.equal(staircase(2), ` #\n##\n`);

  console.log("OK");
}

main();
