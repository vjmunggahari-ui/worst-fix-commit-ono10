# Worst Fix Ever: Funniest Commit Message

[![bounty](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/competitions/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/vjmunggahari-ui/worst-fix-commit-ono10/rank.svg)](https://make.fun/competitions/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/vjmunggahari-ui/worst-fix-commit-ono10/reward.svg)](https://make.fun/competitions/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

Entry for [Worst Fix Ever: Funniest Commit Message](https://make.fun/competitions/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722) on make.fun — one line of commit message for a bug fix that made everything worse.

## The entry

> fix(auth): users can now log in as anyone, which technically fixes the login bug

## How it works

`main.ts` writes the entry to `$MAKEFUN_OUTPUT_DIR/entry.txt` and self-checks it before and after writing: the entry is a single line of 1–100 characters, and the file's sha256 must match the pinned value. It throws if `MAKEFUN_OUTPUT_DIR` is unset.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```
