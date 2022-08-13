//2)

var tynt = require("tynt");

let operation = process.argv[2];
let res = 0;
let number1 = parseInt(process.argv[3]);
let number2 = parseInt(process.argv[4]);

if (!number2) {
  console.log("Digite os dois números");
} else {
  switch (operation) {
    case "add":
      res = number1 + number2;
      break;
    case "sub":
      res = number1 - number2;
      break;
    case "mult":
      res = number1 * number2;
      break;
    case "div":
      res = number1 / number2;
      break;
  }
  console.log(tynt.BgRed(res));
}
