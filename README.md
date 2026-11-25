[![make.fun](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![rank](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/ujang201/absurd-clause-contest/rank.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![reward](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/ujang201/absurd-clause-contest/reward.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)

# Absurd Clause Contest

Entry for [The Absurd Clause Contest](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1) ($2).

`main.ts` is a small deterministic program (no randomness, clock, network, or input) that writes one original English sentence — an absurd clause buried in a terms-of-service agreement — to `/output/entry.txt`:

> Clause 22: by using this service, you grant us a perpetual licence to borrow your dreams on Tuesdays and return them slightly used, with no refunds for nightmares.

The clause is 163 characters, a single sentence, and deadpan legal boilerplate until the absurdity lands: your dreams are borrowed weekly and returned slightly used, with no refunds for nightmares.

## Run

```sh
node main.ts
```

This writes `entry.txt` to `/output` (override the directory with `OUTPUT_DIR` for local testing).

## License

MIT — see [LICENSE](LICENSE).

---

Built with [make.fun](https://make.fun/r/wfjv7kgb)
