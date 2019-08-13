const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');
// Customize yargs version
yargs.version('1.1.0');
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
})
// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Listing a note',
    handler: () => {
        console.log('listing out all the note');
    }

})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading all the notes',
    handler: () => {
        console.log('Reading all the note');
    }
})




yargs.parse();
