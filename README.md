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

## Beginner Quick Start

1. Open the live demo and try each editor type:
  1. HTML
  2. React
  3. Vue
  4. MyST
2. In any editor, click `Run` or press `Shift+Enter`.
3. Use `Clear` to remove output and `Restart` to reset runtime state.
4. Once comfortable, copy the matching integration snippet below into your project.

## Plain HTML Usage

After the packages are published to npm, a basic webpage can use the HTML
package through a CDN:

```html
<div id="cell"></div>

<script type="module">
  import { createPyCell } from "https://cdn.jsdelivr.net/npm/@chandraveshchaudhari/pyodide-editable-html@latest/browser.mjs";

  createPyCell(document.getElementById("cell"), {
    code: "print('Hello from Pyodide')",
  });
</script>
```

## React Usage

```bash
npm install @chandraveshchaudhari/pyodide-editable-react react react-dom
```

```jsx
import { PyCell } from "@chandraveshchaudhari/pyodide-editable-react";

export default function App() {
  return (
    <PyCell
      id="react-cell-1"
      code={"print('Hello from React')"}
      packages={["numpy"]}
    />
  );
}
```

## Vue Usage

```bash
npm install @chandraveshchaudhari/pyodide-editable-vue vue
```

```vue
<script setup>
import { PyCell } from "@chandraveshchaudhari/pyodide-editable-vue";
</script>

<template>
  <PyCell
    id="vue-cell-1"
    code="print('Hello from Vue')"
    :packages="['numpy']"
  />
</template>
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

Use options to set cell id or packages:

````markdown
```{pyodide}
:id: intro-cell
:packages: numpy,pandas

import numpy as np
print(np.arange(5))
```
````

## Development

```bash
pnpm install
pnpm check
```

To preview the demo locally:

```bash
python3 -m http.server 4173
# open http://localhost:4173/projects/tools/pyodide-editable/docs/
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
tag such as `v0.1.3`.
