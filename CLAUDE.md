# Coleman advertising: how to work in this repo

This repo is the single source of truth for where the Coleman (GAF) paid campaigns are at. Chats get long and get summarised; this repo does not.

## Every session

1. Read `STATE.md` first. It says what is live, what is paused, what is blocked and what is next.
2. Use the IDs in `STATE.md` rather than rediscovering accounts, campaigns or budgets.
3. Check `DECISIONS.md` before flagging something. If it is listed as signed off, do not raise it again.
4. Before finishing, update `STATE.md` so it is true, and add a dated line to `CHANGELOG.md` for every change made in a platform, The Hatch or this repo. Commit and push.

## House rules

- Australian English, no em-dashes.
- Dates as 10/11/2026 or "10 Nov". Check the Melbourne date with `TZ=Australia/Melbourne date`.
- Never commit customer data (names, emails, phones, order lists), access tokens, passwords or API keys. Creative files live in The Hatch, not here.
- Spending money (switching a campaign on, raising a budget) needs Jeremy's OK unless a dated plan in this repo already covers it.
- Suggest a Teamwork time entry for each piece of work (job, minutes, one line). Do not log it unless asked.

## Files

- `STATE.md`: where we are at, plus every platform ID and setting.
- `PLAN.md`: budget, phasing, targeting and creative structure.
- `DECISIONS.md`: client rules, decisions and their reasons, things signed off.
- `CHANGELOG.md`: dated log of actions, newest first.
