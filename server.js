const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // for parsing JSON bodies

// Default route
app.get('/', (req, res) => {
  res.send('Hello from Node + Jenkins 🚀');
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Jenkins build trigger route (POST required)
app.post('/build', (req, res) => {
  // Aap chahe toh yaha payload bhi bhej sakte ho
  console.log("Build trigger request received:", req.body);

  // Just send response (Jenkins will need POST request)
  res.json({ message: 'Build triggered via POST method ✅' });
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}

module.exports = app;
