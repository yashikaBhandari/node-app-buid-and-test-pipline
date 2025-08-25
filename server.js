const express = require('express');
const axios = require('axios');  // HTTP request bhejne ke liye
const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
  res.send('Hello from Node + Jenkins 🚀');
});

// Trigger Jenkins build (POST hi use karna)
app.post('/build', async (req, res) => {
  try {
    // Jenkins URL + job name
    const jenkinsUrl = 'http://localhost:8080/job/MyFirstPipeline/build';

    // Username + API Token se authenticate karo
    const username = 'admin';
    const apiToken = 'your_api_token';

    const response = await axios.post(jenkinsUrl, {}, {
      auth: { username, password: apiToken }
    });

    res.json({ message: 'Build triggered successfully!', data: response.status });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
