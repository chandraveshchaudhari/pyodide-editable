# @pyodide-editable/html

Plain HTML helper for editable Pyodide-backed Python cells.

## CDN Usage

```html
<div id="cell"></div>

<script type="module">
  import { createPyCell } from "https://cdn.jsdelivr.net/npm/@pyodide-editable/html@0.1.0/browser.mjs";

  createPyCell(document.getElementById("cell"), {
    code: "print('Hello from Pyodide')",
  });
</script>
```

## Bundler Usage

```js
import { createPyCell } from "@pyodide-editable/html";

createPyCell(document.getElementById("cell"), {
  code: "print('Hello from Pyodide')",
});
```
