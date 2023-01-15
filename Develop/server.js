
const fs = require('fs');;
const express = require('express');
const path = require ('path');

const PORT = 3001;
const app = express();

app.use(express.static('public'));

//creates a route that will serve upp the 'public/notes.html page

app.get('/notes'),(req, res) =>
res.sendFile(path.join(__dirname,'notes.html'));

// `GET *` should return the `index.html` file.
app.get('*'),(req, res) =>
res.sendFile(path.join(__dirname,'index.html'));

// Post route for when notes gets created in HTML

app.post('/api/notes', (req, res) => {
    const newNote = req.body
    writeToFile(destination, newNote)

    res.json(`${req.method} received`);
});

//fetch request to add a new note

const addNote = (note) => {
    fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(note),
    })
        .then((res) => res.json())
        .then((notes) => console.log(notes));

    };

 //read the `db.json` file and return all saved notes as JSON.
    app.get('/api/db', (req,res) => res.json(db)); 

    app.listen(PORT, () =>
    console.log(`App is listening at http://localhost:${PORT}`)
    );


