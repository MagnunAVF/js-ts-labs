const assert = require("node:assert");

function birthdayCakeCandles(candles) {
  const n = candles.length;
  let count = 0;
  let currentTallest = 0;

  for (let i = 0; i < n; i++) {
    const candle = candles[i];
    if (candle > currentTallest) {
      currentTallest = candle;
      count = 1;
    } else if (candle === currentTallest) {
      count += 1;
    }
  }

  return count;
}

function main() {
  assert.equal(birthdayCakeCandles([4, 4, 1, 3]), 2);
  assert.equal(birthdayCakeCandles([3, 2, 1, 3]), 2);

  console.log("OK");
}

main();
