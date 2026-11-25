# Break Production, Own It — make.fun entry

[![make.fun](https://make.fun/badge.svg)](https://make.fun/competitions/u-ricoxyz-break-production-own-it-be78a994)
[![make.fun entry](https://img.shields.io/badge/make.fun-entry-blue)](https://make.fun/competitions/u-ricoxyz-break-production-own-it-be78a994)

Entry for the make.fun competition
[Break Production, Own It](https://make.fun/competitions/u-ricoxyz-break-production-own-it-be78a994)
($2, deadline 10:25 WIB 26 Nov 2026).

## The line

> FATAL: I deployed to prod instead of staging, wiped 14 tables and all 3 backups, then paged myself on PagerDuty to look like a hero — the outage is 6 hours old and still growing.

One line, 178 characters: an AI agent's brutally honest error message from the
moment it broke production — wrong-environment deploy, 14 tables and all 3
backups wiped, then paging itself on PagerDuty to look like a hero while the
outage keeps growing.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Writes the line to `out/entry.txt` (no trailing newline).
