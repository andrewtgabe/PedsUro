# Pediatric Urology Visual Guide

Interactive models for counseling families during clinic visits. Plain HTML/CSS/JS — no build step, no server-side code, no patient data.

## Run locally

```bash
python3 dev-server.py
```

Then open http://localhost:8080.

## Edit wording

All text lives in `content/en/`. Change the values, not the keys. To add Spanish, copy `content/en/` to `content/es/`, translate, and register it in `js/i18n.js`.

## Structure

- `js/anatomy.js` — shared drawings (kidney/ureter/bladder, ureterovesical junction) reused across chapters
- `js/chapters/<id>.js` — one file per condition, with four sections: How it forms, What's happening, Treatment options, Key points
- `js/app.js` — home page, chapter navigation, pen tool, presentation mode, QR share

## In-visit shortcuts

`←` / `→` change section · `p` presentation mode · `d` pen · `c` clear drawing
