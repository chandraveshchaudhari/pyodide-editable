# @chandraveshchaudhari/pyodide-editable-myst

MyST directive package for editable Pyodide-backed Python cells.

Live demo: https://chandraveshchaudhari.github.io/pyodide-editable/#myst

Maintained by [Chandravesh Chaudhari](https://github.com/chandraveshchaudhari). Source, issues, and examples live in the [pyodide-editable GitHub repository](https://github.com/chandraveshchaudhari/pyodide-editable/tree/main/packages/myst).

## Install

```bash
npm install @chandraveshchaudhari/pyodide-editable-myst
```

## Use In MyST

```yaml
project:
  plugins:
    - node_modules/@chandraveshchaudhari/pyodide-editable-myst/pyodide-editable.mjs
```

Then add a code cell in your markdown:

````markdown
```{pyodide}
print("Hello from MyST")
```
````

## Directive Options

Use options when you need stable ids or extra Python packages.

````markdown
```{pyodide}
:id: stats-cell
:packages: numpy,pandas

import numpy as np
print(np.arange(5))
```
````

Supported aliases:

- `pyodide`
- `pyodide-cell`
- `myst:pyodide`
- `myst:pyodide-cell`
- `python-cell`

## Demo Walkthrough

Open:
https://chandraveshchaudhari.github.io/pyodide-editable/#myst

Compare the MyST source block and live editor side-by-side.