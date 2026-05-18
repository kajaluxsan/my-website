#!/usr/bin/env bash
# Optional fallback for running the daily blog generator locally via cron
# (uses your Claude Code subscription, no API key).
#
# Setup:
#   crontab -e
#   Add: 0 6 * * *  cd /path/to/my-website && ./scripts/daily-blog.sh > /tmp/blog.log 2>&1
#
# Requires: claude (Claude Code CLI) installed and logged in to your Max
# subscription, plus git push access to the repo.

set -euo pipefail

cd "$(dirname "$0")/.."

PROMPT=$(sed -n '/^## PROMPT$/,$p' scripts/daily-blog-prompt.md | tail -n +3)

claude -p "$PROMPT" --output-format text
