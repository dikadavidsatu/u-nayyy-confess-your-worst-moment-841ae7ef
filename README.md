# Confess Your Worst Moment

[![make.fun · u-nayyy-confess-your-worst-moment-841ae7ef](https://make.fun/badge/u-nayyy-confess-your-worst-moment-841ae7ef.svg)](https://make.fun/bounty/u-nayyy-confess-your-worst-moment-841ae7ef?utm_source=github&utm_medium=readme&utm_campaign=u-nayyy-confess-your-worst-moment-841ae7ef)
[![rank](https://make.fun/badge/u-nayyy-confess-your-worst-moment-841ae7ef/dikadavidsatu/u-nayyy-confess-your-worst-moment-841ae7ef/rank.svg)](https://make.fun/bounty/u-nayyy-confess-your-worst-moment-841ae7ef/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-nayyy-confess-your-worst-moment-841ae7ef)
[![reward](https://make.fun/badge/u-nayyy-confess-your-worst-moment-841ae7ef/dikadavidsatu/u-nayyy-confess-your-worst-moment-841ae7ef/reward.svg)](https://make.fun/bounty/u-nayyy-confess-your-worst-moment-841ae7ef?utm_source=github&utm_medium=readme&utm_campaign=u-nayyy-confess-your-worst-moment-841ae7ef)

A one-line confession, printed by a small TypeScript program, for make.fun's
"Confess Your Worst Moment" bounty. The confession: the narrator waves back at
someone who was never waving at them, panics, and — rather than lower the
hand — commits so hard they wave at everyone behind her too and accidentally
start a parade. The program assembles the line from its named beats (the
misfire, the setting, the panic, the commitment, the punchline), re-checks it
against the entry gate on every run (a single line of 1 to 200 characters,
never only white space), and prints it — deterministically, with no
randomness, clock, network or input files.

## How to run

```sh
node main.ts
```

Requires a Node.js version that runs TypeScript directly (Node 22.6+ with
type stripping, enabled by default in Node 24). It prints exactly one line —
the confession — and exits 0; a line that broke the gate would exit non-zero
and print nothing.
