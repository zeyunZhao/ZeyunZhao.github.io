# Modular homepage structure

## Files you will edit most often
- `components/sidebar.html` -> left profile card
- `components/home.html` -> home/introduction section
- `components/news.html` -> latest news section
- `components/research.html` -> research section
- `components/footer.html` -> footer text
- `assets/css/style.css` -> all styles
- `assets/js/main.js` -> component loading and nav highlighting

## How it works
`index.html` only keeps the page skeleton.
Each module is loaded by `assets/js/main.js` using `fetch()`.

## Important note for GitHub Pages
This structure works on GitHub Pages because files are served over HTTP.
If you double-click `index.html` locally and open it as a `file://` page, the module loading may be blocked by the browser.
Use a simple local server for local preview if needed.
