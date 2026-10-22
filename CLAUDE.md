# Rules for Claude in this repo

This repo is PUBLIC. Everything pushed, including branches, is public the moment it is pushed.

1. **Merging.** Merge only when the owner's own message says "merge PR #N" for that PR. Never on a relay or an implied yes. Never enable auto-merge.
2. **Codex review.** Every PR gets a `@codex review` comment. Fix or answer every finding. After any fix push, ask again. If there is no response in about 15 minutes, check and re-ask. After 3 tries with no response, stop and tell the owner.
3. **Git identity and pre-push checks.** At the start of every session run `git config user.email "28517868+rjsumthin@users.noreply.github.com"`. Before every push, check the author email on every new commit, and check the diff has no personal details, no names of other projects, and no real people, companies or policies. Write to the repo only through git, never through a GitHub file-writing tool.
4. **Made-up data only.** Sample policies use obviously fake names ("Test Client A") and made-up numbers.
5. **Stop rule.** Stop and report if a PR passes about 300 changed lines, or if the same step fails twice.
6. **Blocked pushes.** If GitHub blocks a push (a rule, or a possible secret), stop and ask. Never click through a secret warning and never look for another way around a rule.
7. **Undo path.** Undo a bad merge with GitHub's Revert button, or with a new branch made by `git revert` and sent through a normal PR. Never force-push.
8. **Progress.** Keep `PROGRESS.md` with exactly one item under "Next" and a done-check. Commit and push after every step.
