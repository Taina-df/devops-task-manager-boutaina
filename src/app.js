const express = require('express');
const app = express();

app.use(express.json());

// Route
app.get('/', (req, res) => {
  res.json({ message: "Task Manager API running (Lab4)" });
});

// 🔹 Start server ONLY when running normally
const PORT = 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
  });
}

// 🔹 Export for tests
module.exports = app;