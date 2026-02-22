const express = require('express');
const app = express();
app.use(express.json());

const tasks = [
  { id: 1, title: "Learn Git workflow", completed: true },
  { id: 2, title: "Practice branching", completed: false }
];

app.get('/', (req, res) => {
  res.json({ message: "Welcome from MAIN branch" });
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = { id: tasks.length+1, title: req.body.title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(3000, ()=> console.log("API running on port 3000"));
