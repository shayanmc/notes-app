const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// Creat add command

yargs.command({
  command: "add",
  describe: " Add a new note",
  builder: {
    title: {
      describe: " Note title ",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: " Note body ",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Creat remove command

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: " Note title ",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Creat list command

yargs.command({
  command: "list",
  describe: "List your note",
  handler() {
    notes.listNotes();
  },
});

// Creat read command

yargs.command({
  command: "read",
  describe: "Read a note",
  builder:{
    title: {
      describe: " Note title ",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title)
  },
});

yargs.parse();

//
// console.log(yargs.argv);
