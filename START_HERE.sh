#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
PORT=5173
echo "Stopping old vite on ${PORT} (if any)..."
/usr/bin/fuser -k ${PORT}/tcp 2>/dev/null || true
/usr/bin/sleep 0.5
if [[ ! -d node_modules ]]; then
  echo "Installing deps..."
  npm install --legacy-peer-deps
fi
echo "Starting Vite on http://127.0.0.1:${PORT}/ ..."
exec npx vite --port=${PORT} --host=0.0.0.0 --strictPort
