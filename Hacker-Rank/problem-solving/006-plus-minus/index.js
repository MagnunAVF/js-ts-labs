const assert = require("node:assert");

function plusMinus(arr) {
  const n = arr.length;
  const elements = new Map();
  elements.set("positive", []);
  elements.set("negative", []);
  elements.set("zero", []);

  arr.forEach((numb) => {
    if (numb > 0) {
      elements.get("positive").push(numb);
    } else if (numb < 0) {
      elements.get("negative").push(numb);
    } else {
      elements.get("zero").push(numb);
    }
  });

  const positiveRatio = elements.get("positive").length / n;
  const negativeRatio = elements.get("negative").length / n;
  const zeroRatio = elements.get("zero").length / n;

  return `${positiveRatio.toFixed(6)}\n${negativeRatio.toFixed(
    6
  )}\n${zeroRatio.toFixed(6)}`;
}

function main() {
  assert.equal(plusMinus([1, 1, 0, -1, -1]), `0.400000\n0.400000\n0.200000`);
  assert.equal(plusMinus([-4, 3, -9, 0, 4, 1]), `0.500000\n0.333333\n0.166667`);

  console.log("OK");
}

main();
