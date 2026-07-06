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