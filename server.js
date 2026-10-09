import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { existsSync } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// Serve public directory (includes news.json)
app.use(express.static(join(__dirname, 'public')));

// Serve root directory (includes index.html)
app.use(express.static(__dirname));

// Route for /news.json
app.get('/news.json', (req, res) => {
  const newsPath = join(__dirname, 'public', 'news.json');
  if (existsSync(newsPath)) {
    return res.sendFile(newsPath);
  }
  res.status(404).json({ error: 'news.json not found' });
});

// Root route
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
