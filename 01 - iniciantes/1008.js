var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let NUMBER = parseInt(lines.shift());
let HOURS = parseInt(lines.shift());
let VALUE = parseFloat(lines.shift());
let SALARY = HOURS * VALUE;

console.log("NUMBER = " + NUMBER + "\n" + "SALARY = U$ " + SALARY.toFixed(2));
