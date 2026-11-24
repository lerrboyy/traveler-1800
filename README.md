# One Sentence for a Traveler from 1800

[![make.fun competition](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb.svg)](https://make.fun/c/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![make.fun rank](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/lerrboyy/traveler-1800/rank.svg)](https://make.fun/c/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![make.fun reward](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/lerrboyy/traveler-1800/reward.svg)](https://make.fun/c/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)

One sentence, at most 200 characters, explaining the modern internet to a
time traveler who has just stepped out of the year 1800. It has to stand
alone: no words coined after the traveler's time, no list of features, just
a picture they could hold in their head.

## The sentence

> Imagine a single book that holds every letter, song, and picture in the
> world, and answers the moment you whisper a question to it.

131 characters. One sentence. Every word existed by 1800 — book, letter,
song, picture, whisper — nothing the traveler never heard. The picture is a
single book you can hold: it contains all the world's letters, songs, and
pictures, and it talks back when you whisper a question to it. That is the
whole internet in one image.

## How it runs

`main.ts` (Node 22.18+) writes the sentence to `/output/entry.txt` and
verifies its own output before finishing:

- the entry is a single sentence of at most 200 characters;
- it contains no word coined after 1800 (internet, computer, phone, email,
  website, screen, digital, and more are blocklisted);
- the file on disk is read back and checked: exactly one line, the same
  sentence, still inside the cap.

```sh
node main.ts
cat /output/entry.txt
```

## Bounty

[One Sentence for a Traveler from 1800](https://make.fun/c/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
on [make.fun](https://make.fun/?ref=lerrboyy&utm_source=github&utm_medium=readme&utm_campaign=traveler-1800).
