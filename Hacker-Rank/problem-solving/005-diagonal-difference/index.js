const assert = require("node:assert");

function diagonalDifference(arr) {
  const n = arr.length;
  let leftDiag = 0;
  let rightDiag = 0;

  // condition: i and j are equals to n
  // walk over columns and sum diag values at the same time
  for (let j = 0; j < n; j++) {
    if (arr[j].length !== n) throw new Error("Invalid Array!");

    leftDiag += arr[j][j];
    rightDiag += arr[n - 1 - j][j];
  }

  const diff = Math.abs(leftDiag - rightDiag);

  return diff;
}

function main() {
  assert.equal(
    diagonalDifference([
      [1, 2, 3],
      [4, 5, 6],
      [9, 8, 9],
    ]),
    2
  );

  assert.equal(
    diagonalDifference([
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ]),
    15
  );

  console.log("OK");
}

main();
