# github_analytics

📊 A searchable report on [rifaterdemsahin](https://github.com/rifaterdemsahin)'s public GitHub activity — repo categories, language mix, star counts, and a year-by-year creation timeline, with live client-side search over all 393 public repos.

## 🔗 Live pages

- 🌐 GitHub Pages: https://rifaterdemsahin.github.io/github_analytics/
- ⚡ Cloudflare Worker: https://github-analytics.polished-boat-17b2.workers.dev
- 📈 Trends report: [GitHub Pages](https://rifaterdemsahin.github.io/github_analytics/trends.html) · [Cloudflare Worker](https://github-analytics.polished-boat-17b2.workers.dev/trends.html)

## What's in the report

- 🗂️ Repos grouped into categories (AI & Agents, DevOps & Cloud, Certification & Learning, Automation & Tools, etc.)
- 💻 Language breakdown and 📈 repos-created-per-year timeline
- ⭐ Most-starred repos
- 🔍 Search + filter + sort over the full repo list
- 🔐 A walkthrough for extending the analysis to private repos with `gh auth login` (Azure's `az login` won't help — it authenticates to Azure, not GitHub)

## What's in the trends report

- 🗓️ Monthly repo-creation volume since Jan 2024, with hover tooltips on every point
- 💻 Year-over-year language mix (Shell-heavy 2024 → HTML-heavy 2026)
- 🧭 Year-over-year category share — AI & Agents grows from 3 repos pre-2024 to 70 in 2026 alone

Data pulled from the public GitHub REST API (`api.github.com/users/rifaterdemsahin/repos`), no authentication required.
