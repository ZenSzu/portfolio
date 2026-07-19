# Drew Nolasco — Personal Website

Personal portfolio site for Drew Nolasco — video editor, photographer, and multimedia creative based in Qatar.

## Structure

```
.
├── index.html          # main page
├── css/
│   └── style.css       # all styling
├── js/
│   └── main.js         # mobile menu, scroll reveal, hero timecode animation
└── assets/
    └── images/
        └── hero.jpg     # hero portrait
```

No build step, no dependencies — it's plain HTML/CSS/JS. Google Fonts (Anton, Work Sans, IBM Plex Mono) load from a CDN link in `index.html`.

## Running it locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying with GitHub Pages

1. Push this folder to a GitHub repo (e.g. `drewnolasco.github.io` for a root domain, or any repo name for a project site)
2. In the repo, go to **Settings → Pages**
3. Under **Source**, select the branch (usually `main`) and `/ (root)`
4. Save — GitHub will give you a live URL within a minute or two

## Updating content

- Text and section content live directly in `index.html`
- Colors, fonts, and layout are controlled by CSS variables at the top of `css/style.css` (`:root { ... }`)
- To swap the hero photo, replace `assets/images/hero.jpg` (keep the same filename, or update the `src` in `index.html`)
