const chalk = require('chalk');
const getNotes = require('./notes');
const yargs = require('yargs');
// Customize yargs version
yargs.version('1.1.0');
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note')
    }
})
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: () => {
        console.log('Removing a note');
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing a note',
    handler: () => {
        console.log('listing out all the note');
    }

})

yargs.command({
    command: 'read',
    describe: 'Reading all the notes',
    handler: () => {
        console.log('Reading all the note');
    }
})
console.log(process.argv)
console.log(yargs.argv);


