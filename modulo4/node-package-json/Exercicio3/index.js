const fs = require("fs");

const teste = fs.readFileSync(__dirname + "/save.json");

const tasks = [teste];
tasks.push(process.argv[2]);

const stringTasks = JSON.stringify(tasks);

fs.writeFileSync(__dirname + "/save.json", stringTasks);

console.log(teste);
