const assert = require("node:assert");

function timeConversion(s) {
  const timeRegex = /^(0[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9](AM|PM)$/i;
  if (!timeRegex.test(s)) throw new Error("Invalid time format");

  const period = s.slice(-2);
  const hour = parseInt(s.slice(0, 2));
  const restOfTime = s.slice(2, 8);

  let newHour;
  if (hour === 12) {
    newHour = period === "AM" ? "00" : "12";
  } else {
    newHour = String(period === "PM" ? hour + 12 : hour).padStart(2, "0");
  }

  return `${newHour}${restOfTime}`;
}

function main() {
  assert.equal(timeConversion("12:01:00PM"), "12:01:00");
  assert.equal(timeConversion("12:01:00AM"), "00:01:00");
  assert.equal(timeConversion("07:05:45PM"), "19:05:45");

  console.log("OK");
}

main();
