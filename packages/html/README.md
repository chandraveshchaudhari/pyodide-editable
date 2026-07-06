# @chandraveshchaudhari/pyodide-editable-html

Plain HTML helper for editable Pyodide-backed Python cells.

Maintained by [Chandravesh Chaudhari](https://github.com/chandraveshchaudhari). Source, issues, and examples live in the [pyodide-editable GitHub repository](https://github.com/chandraveshchaudhari/pyodide-editable/tree/main/packages/html).

## CDN Usage

```html
<div id="cell"></div>

<script type="module">
  import { createPyCell } from "https://cdn.jsdelivr.net/npm/@chandraveshchaudhari/pyodide-editable-html@0.1.0/browser.mjs";

  createPyCell(document.getElementById("cell"), {
    code: "print('Hello from Pyodide')",
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
