# pyodide_editable

Editable Pyodide-backed Python cells for MyST and JavaScript applications.

Live demo: https://chandraveshchaudhari.github.io/pyodide-editable/

This repository is organized as an npm workspace while preserving the original
MyST plugin behavior.

## Packages

- `@chandraveshchaudhari/pyodide-editable-core`: shared browser runtime and widget renderer.
- `@chandraveshchaudhari/pyodide-editable-myst`: MyST directive package.
- `@chandraveshchaudhari/pyodide-editable-html`: small DOM helper for plain HTML pages.
- `@chandraveshchaudhari/pyodide-editable-react`: React wrapper component.
- `@chandraveshchaudhari/pyodide-editable-vue`: Vue wrapper component.

Maintained by [Chandravesh Chaudhari](https://github.com/chandraveshchaudhari). Source code, issues, and release history live in the [pyodide-editable GitHub repository](https://github.com/chandraveshchaudhari/pyodide-editable).

The live GitHub Pages demo exercises the plain HTML helper, React wrapper, Vue wrapper, and the MyST directive adapter on one page: https://chandraveshchaudhari.github.io/pyodide-editable/

## Plain HTML Usage

After the packages are published to npm, a basic webpage can use the HTML
package through a CDN:

```html
<div id="cell"></div>

<script type="module">
  import { createPyCell } from "https://cdn.jsdelivr.net/npm/@chandraveshchaudhari/pyodide-editable-html@0.1.2/browser.mjs";

  createPyCell(document.getElementById("cell"), {
    code: "print('Hello from Pyodide')",
  });
</script>
```

## MyST Usage

Add the MyST plugin:

```yaml
project:
  plugins:
    - node_modules/@chandraveshchaudhari/pyodide-editable-myst/pyodide-editable.mjs
```

Then add a cell:

````markdown
```{pyodide}
print("Hello from Pyodide")
```
````

The original directive names and options are preserved.

## Development

```bash
pnpm install
pnpm check
```

## Publishing

This repo includes `.github/workflows/npm-publish.yml` for npm Trusted
Publishing through GitHub Actions.

Configure each npm package with the same Trusted Publisher:

- Provider: GitHub Actions
- Organization or user: `chandraveshchaudhari`
- Repository: `pyodide-editable`
- Workflow filename: `npm-publish.yml`
- Environment name: leave blank
- Allowed action: `npm publish`

Then run the `Publish to npm` workflow from GitHub Actions, or push a release
tag such as `v0.1.2`.
