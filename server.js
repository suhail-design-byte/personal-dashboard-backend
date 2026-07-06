const express = require('express');
const app = express();
const PORT = 3000;

// Middleware: allows Express to understand JSON request bodies
app.use(express.json());

// Temporary in-memory data (will be replaced by MongoDB in Stage 5)
let tasks = [
  { id: 1, text: 'Buy groceries', done: false },
  { id: 2, text: 'Finish MERN stack project', done: false },
  { id: 3, text: 'Read ESP32 documentation', done: false },
];

// Route: get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Route: add a new task
app.post('/tasks', (req, res) => {
  const newTask = {
    id: Date.now(),
    text: req.body.text,
    done: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Route: delete a task
app.delete('/tasks/:id', (req, res) => {
  const taskId = Number(req.params.id);
  tasks = tasks.filter((task) => task.id !== taskId);
  res.status(204).send();
});
// Temporary in-memory notes data
let notes = [
  { id: 1, text: 'Remember to check solar panel voltage readings today.' },
  { id: 2, text: 'Ask about MongoDB free tier limits before deploying.' },
];

// Route: get all notes
app.get('/notes', (req, res) => {
  res.json(notes);
});

// Route: add a new note
app.post('/notes', (req, res) => {
  const newNote = {
    id: Date.now(),
    text: req.body.text,
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// Route: delete a note
app.delete('/notes/:id', (req, res) => {
  const noteId = Number(req.params.id);
  notes = notes.filter((note) => note.id !== noteId);
  res.status(204).send();
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});