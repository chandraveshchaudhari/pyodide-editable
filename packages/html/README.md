# @chandraveshchaudhari/pyodide-editable-html

Plain HTML helper for editable Pyodide-backed Python cells.

Live demo: https://chandraveshchaudhari.github.io/pyodide-editable/#html

Maintained by [Chandravesh Chaudhari](https://github.com/chandraveshchaudhari). Source, issues, and examples live in the [pyodide-editable GitHub repository](https://github.com/chandraveshchaudhari/pyodide-editable/tree/main/packages/html).

## CDN Usage

This is the fastest way for beginners.

1. Create an element to host the editor.
2. Import `createPyCell` in a module script.
3. Pass `code`, optional `id`, and optional `packages`.

```html
<div id="cell"></div>

<script type="module">
  import { createPyCell } from "https://cdn.jsdelivr.net/npm/@chandraveshchaudhari/pyodide-editable-html@latest/browser.mjs";

  createPyCell(document.getElementById("cell"), {
    id: "html-cell-1",
    code: "print('Hello from Pyodide HTML helper')",
    packages: ["numpy"],
  });
</script>
```

## Bundler Usage

```js
import { createPyCell } from "@chandraveshchaudhari/pyodide-editable-html";

createPyCell(document.getElementById("cell"), {
  code: "print('Hello from Pyodide')",
});
```

## Options

- `id`: optional unique id for the editor.
- `code`: Python source string.
- `packages`: either an array (`["numpy"]`) or comma-separated string (`"numpy,pandas"`).

## Demo Walkthrough

Open:
https://chandraveshchaudhari.github.io/pyodide-editable/#html

On the demo editor:

1. Edit code in place.
2. Click `Run` or press `Shift+Enter`.
3. Click `Restart` if you want a fresh Python runtime.
