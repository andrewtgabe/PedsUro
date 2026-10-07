# Pediatric Urology Visual Guide

Interactive models for counseling families during clinic visits. Plain HTML/CSS/JS — no build step, no server-side code, no patient data.

## Run locally

```bash
python3 dev-server.py
```

Then open http://localhost:8080.

## Edit wording

All text lives in `content/<lang>/` (`en`, `es`). Change the values, not the keys. A chapter without a file in `content/es/` falls back to English and shows a notice. To translate one, copy `content/en/<id>.js` to `content/es/<id>.js`, translate the values, and register it in `js/i18n.js`. Links can force a language with `?lang=es`.

Created by Andrew T. Gabrielson, MD.

## Structure

- `js/anatomy.js` — shared drawings (kidney/ureter/bladder, ureterovesical junction) reused across chapters
- `js/chapters/<id>.js` — one file per condition, with four sections: How it forms, What's happening, Treatment options, Key points
- `js/app.js` — home page, chapter navigation, pen tool, presentation mode, QR share

## In-visit shortcuts

`←` / `→` change section · `p` presentation mode · `d` pen · `c` clear drawing
