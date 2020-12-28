#!/usr/bin/env node
const { resolve } = require("path");
const res = (command) => resolve(__dirname, "../commands/", command);
const program = require("commander");

program.version(require("../package").version);

program.usage("<command>");

program
  .command("init")
  .description("Generate a new project")
  .alias("i")
  .action(() => {
    require(res("init"));
  });

program.parse(process.argv);
