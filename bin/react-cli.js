#!/usr/bin/env node
const { resolve } = require("path");
const res = (command) => resolve(__dirname, "../commands/", command);
const program = require("commander");

console.log(1);

program.version(require("../package").version);

program.usage("<command>");
console.log(2);

program
  .command("init")
  .option("-f, --foo", "enable some foo")
  .description("Generate a new project")
  .alias("i")
  .action(() => {
    console.log(3);
    require(res("init"));
  });
