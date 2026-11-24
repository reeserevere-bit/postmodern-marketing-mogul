# postmodern-marketing-mogul

Postmodern Marketing Mogul is a Muse skill (github.com/wlsdks/muse-agent) that runs a one-move strategist session from the Revere Marketing Moguls frameworks.

Install (Muse loads user skills and agents from `~/.muse`): `cp -r skills/postmodern-marketing-mogul ~/.muse/skills/` and `cp -r agents/postmodern-marketing-mogul ~/.muse/agents/`. Use it: in Muse chat type `/agent postmodern-marketing-mogul` to load the full strategist rules. The skill is a hand-off: when a message shares words with its description (sell, brand, customers, competitor, positioning), it asks the first question and points to the agent. Muse injects only the first 600 characters of a skill, so the full rules live in the agent.

Model: `ollama pull gemma4:12b`, then `ollama create postmodern-marketing-mogul -f Modelfile`. Small machine: swap to `qwen2.5:7b-instruct` in the Modelfile.

Vault (optional): put `VAULT_PATH=/absolute/path/to/your/notes` in `skills/postmodern-marketing-mogul/.env.local`. It is git-ignored. No file, no vault.

Knowledge: re-pull when the site changes.

The list and the long writing live at https://rrrevere.substack.com.

No hosted chat, no email capture, no messenger. This is a skill, not a service.

## Notes
Tested on qwen2.5:7b-instruct. Type `/agent postmodern-marketing-mogul` to run it directly.
