//1) a) Para que os parâmetros sejam imprimidos no terminal, utilizamos console.log, e no terminal digitamos node index.js, ou criamos um script para isso.

//b)

var tynt = require("tynt");
const user = {
  name: process.argv[2],
  age: parseInt(process.argv[3]),
};
if (isNaN(user.age)) {
  console.log("Parâmetros incorretos");
} else {
  console.log(
    tynt.Red("Olá"),
    tynt.Magenta(user.name),
    tynt.Blue("você tem"),
    tynt.Green(user.age),
    tynt.Cyan("anos")
  );
  console.log(
    "Olá",
    user.name,
    "você tem",
    user.age,
    "anos. Em sete anos, você terá",
    user.age + 7
  );
}
