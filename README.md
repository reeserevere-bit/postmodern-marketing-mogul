# postmodern-marketing-mogul

Postmodern Marketing Mogul is a strategist built on the Revere Marketing Moguls frameworks. It interrogates what you sell, then gives one concrete, legal, status-driven play, and keeps going: ask it to expand on any theory or write the scripts.

## Fastest way to use it: a Claude Project (no install)
1. claude.ai > Projects > New project.
2. Paste `project/instructions.md` into the project instructions.
3. Upload everything in `skills/postmodern-marketing-mogul/knowledge/` (the `theories/` folder too) as project knowledge.
4. Chat. Share the project link if you want others to use it.

## Muse skill (local, advanced)
This repo also ships as a Muse skill (github.com/wlsdks/muse-agent) that runs a one-move strategist session from the Revere Marketing Moguls frameworks.

Install (Muse loads user skills and agents from `~/.muse`): `cp -r skills/postmodern-marketing-mogul ~/.muse/skills/` and `cp -r agents/postmodern-marketing-mogul ~/.muse/agents/`. Use it: in Muse chat type `/agent postmodern-marketing-mogul` to load the full strategist rules. The skill is a hand-off: when a message shares words with its description (sell, brand, customers, competitor, positioning), it asks the first question and points to the agent. Muse injects only the first 600 characters of a skill, so the full rules live in the agent.

Model: `ollama pull gemma4:12b`, then `ollama create postmodern-marketing-mogul -f Modelfile`. Small machine: swap to `qwen2.5:7b-instruct` in the Modelfile.

Vault (optional): put `VAULT_PATH=/absolute/path/to/your/notes` in `skills/postmodern-marketing-mogul/.env.local`. It is git-ignored. No file, no vault.

Knowledge: re-pull when the site changes.

The list and the long writing live at https://rrrevere.substack.com.

No hosted chat, no email capture, no messenger. This is a skill, not a service.

## Notes
Tested on qwen2.5:7b-instruct. Type `/agent postmodern-marketing-mogul` to run it directly.
