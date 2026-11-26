[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126) [![rank](https://make.fun/badge/news-image-20261126/hzt1989/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126) [![reward](https://make.fun/badge/news-image-20261126/hzt1989/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

# 26 November 2026 — World News in One Image

An entry for [make.fun's `news-image-20261126` bounty](https://make.fun/bounty/news-image-20261126): one 1024×1024 image that sums up Thursday 26 November 2026 in six stories, drawn as a newspaper front page.

## The six stories

1. **Markets** — Nasdaq sinks almost 4% as AI fears grip Wall Street.
2. **Trade** — The US announces new tariffs on a host of countries, including China.
3. **Diplomacy** — Lukashenko offers to fly Zelensky to Moscow for talks with Putin.
4. **North Korea** — North Korea expels a Swiss diplomat and orders its Pyongyang office closed.
5. **Egypt** — 31 killed as a fuel tanker explodes on a Cairo highway.
6. **Space** — Pakistan's first astronaut joins China's Shenzhou-24 mission to Tiangong.

## Files

- `entry.png` — the image itself, 1024×1024, under 1 MiB.
- `main.ts` — copies `entry.png` to the output directory and verifies the copy.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the claim file naming the entry's wallet.

## How the image was made

`entry.png` was rendered with Python and Pillow (no AI image generation, so the
type stays sharp): Noto Serif for the masthead, Noto Sans for everything else,
flat pictograms drawn from shapes, one card per story. The image is 1024×1024
and under 1 MiB.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` into the output
directory and verifies the copy is whole.
