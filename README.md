# pyodide_editable

Editable Pyodide-backed Python cells for MyST and JavaScript applications.

This repository is organized as an npm workspace while preserving the original
MyST plugin behavior.

## Packages

- `@pyodide-editable/core`: shared browser runtime and widget renderer.
- `@pyodide-editable/myst`: MyST directive package.
- `@pyodide-editable/html`: small DOM helper for plain HTML pages.
- `@pyodide-editable/react`: React wrapper component.
- `@pyodide-editable/vue`: Vue wrapper component.

## Plain HTML Usage

After the packages are published to npm, a basic webpage can use the HTML
package through a CDN:

```html
<div id="cell"></div>

<script type="module">
  import { createPyCell } from "https://cdn.jsdelivr.net/npm/@pyodide-editable/html@0.1.0/browser.mjs";

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
    - node_modules/@pyodide-editable/myst/pyodide-editable.mjs
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
