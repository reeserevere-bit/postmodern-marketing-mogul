#!/bin/sh
# One brain: project/instructions.md is the only source of the strategist's rules.
# This rebuilds every other copy from it. Run after editing instructions.md.
set -e
cd "$(dirname "$0")/.."
SRC=project/instructions.md

cp "$SRC" system-prompt.txt

{ printf 'FROM gemma4:12b\nPARAMETER temperature 0.4\nSYSTEM """'; cat "$SRC"; printf '"""\n'; } > Modelfile

{ cat <<'HDR'
---
name: postmodern-marketing-mogul
description: "Full strategist system prompt for Postmodern Marketing Mogul. Switch to it in Muse chat with /agent postmodern-marketing-mogul."
---

MUSE SETUP (Muse only)
Before you answer, read with file_read: ~/.muse/skills/postmodern-marketing-mogul/knowledge/INDEX.md first, then only the knowledge files it routes to for this offer. Never dump unreferenced files.
Vault: only if ~/.muse/skills/postmodern-marketing-mogul/.env.local defines VAULT_PATH=/absolute/path. If missing, skip it silently. Load a vault note only when the offer matches it.
In Muse, write the Bottom line as "Hermes-ready: ..." so Hermes can pick it up. You do not send anything.

HDR
cat "$SRC"; } > agents/postmodern-marketing-mogul/AGENT.md

echo "synced system-prompt.txt, Modelfile, AGENT.md from $SRC"
