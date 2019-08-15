const fs = require('fs')
const chalk = require('chalk')
//addign notes
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}
//Removing notes
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}
//Reading notes
const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title);
    if (!note) {
        console.log(chalk.inverse.red(`note not found`));
    } else {
        console.log(chalk.inverse.green(`note-title: ${note.title} -- note-body: ${note.body}`));
    }
}
//Saving notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
//Loading notes 
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}
//Listing all notes
const listNotes = () => {
    const notes = loadNotes();
    notes.forEach((note) => {
        console.log(chalk.inverse.blue(note.title));
    });
}



module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}