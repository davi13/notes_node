const fs = require('fs');

const getNotes = () => {
    return 'your notes...';
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('New notes added ! ');
    } else {
        console.log('Note title taken ');
    }
}

const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }

}
const removeNote = function (title) {
    const notes = loadNotes();
    const result = notes.filter(function (note) {
        return note.title === title
    });
    console.log('my result sir ', result);


    // notes.filter(function (note) {
    //     console.log(note.title)
    // return note.title === title;

    // })




}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
    // loadNotes: loadNotes
}