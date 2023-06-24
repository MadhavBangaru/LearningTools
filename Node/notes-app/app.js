const chalk = require("chalk");
const { argv } = require("process");
const { command, string } = require("yargs");
const yargs = require("yargs");
const getNotes = require("./notes.js");

//console.log(yargs.argv);

// Create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    description: {
      describle: "Note Description",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title", argv.title);
    console.log("Description", argv.description);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note!");
  },
});

yargs.command({
  command: "list",
  describe: "list notes",
  handler: function () {
    console.log("list the note!");
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("read the note!");
  },
});

yargs.parse();
