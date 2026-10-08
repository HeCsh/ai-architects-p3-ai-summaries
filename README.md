# AI Architects · Project 3: Give the AI a job (checkpoint)

Finished state of Project 3. AI summaries are on (`"aiSummaries": true`). Each new story gets a 2-sentence summary from Gemini (`gemini-3.5-flash-lite`).

**Needs a secret:** Settings > Secrets and variables > Actions > New repository secret. Name `GEMINI_API_KEY`, value = the key from Google AI Studio. Without it the run shows a red X and the site keeps the stories without summaries.

Known on purpose: duplicates still appear until Project 4.

## How this repo works

| File | What it does |
| --- | --- |
| `index.html` | The website. AI Studio replaces this with its own design; this plain version is the backup. |
| `public/news.json` | The news the website shows. The bot rewrites it; never edit it by hand once the bot is on. |
| `config.json` | The settings learners change: topic, feed, AI on or off, the summary prompt. |
| `scripts/update-news.mjs` | The news bot. Reads the feed, asks Gemini for summaries, saves `news.json`. |
| `.github/workflows/update-site.yml` | The timer. GitHub Actions runs the bot, then publishes the site to GitHub Pages. |

## One-time setup for a new copy

1. Keep the repository **Public** (free Actions and Pages need it).
2. Settings > Pages > Build and deployment > Source: **GitHub Actions**.
3. Actions tab > "Update and publish site" > **Run workflow**. Wait for the green tick.
4. The site address appears on the run page and in Settings > Pages.

## Topic feeds (checked 5 Oct 2026)

| Topic | feedUrl |
| --- | --- |
| Science (written for ages 10-14) | https://www.snexplores.org/feed |
| Space | https://www.nasa.gov/news-release/feed/ |
| Tech and startups (teacher check for suitability) | https://techcrunch.com/feed/ |

Part of the JetLearn **AI Architects** course, Projects 1-4.

