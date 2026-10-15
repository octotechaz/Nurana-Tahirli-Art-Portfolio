#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
PORT="${PORT:-5173}"
# free the port if our old vite holds it
if ss -ltn | rg -q ":${PORT}\\b"; then
  echo "port ${PORT} busy — trying next free"
  for p in $(seq "$PORT" $((PORT+20))); do
    if ! ss -ltn | rg -q ":${p}\\b"; then PORT=$p; break; fi
  done
fi
echo "Starting on http://127.0.0.1:${PORT}/"
exec npx vite --port="$PORT" --host=0.0.0.0 --strictPort
