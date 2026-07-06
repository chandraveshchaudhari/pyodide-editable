# @chandraveshchaudhari/pyodide-editable-core

Shared browser runtime and widget renderer for editable Pyodide-backed Python cells.

Live demo: https://chandraveshchaudhari.github.io/pyodide-editable/#core-runtime

Maintained by [Chandravesh Chaudhari](https://github.com/chandraveshchaudhari). Source, issues, and release notes live in the [pyodide-editable GitHub repository](https://github.com/chandraveshchaudhari/pyodide-editable/tree/main/packages/core).

## Install

```bash
npm install @chandraveshchaudhari/pyodide-editable-core
```

This package is the shared runtime used by the HTML, MyST, React, and Vue wrappers in this repository.

## Who Should Use This Package

- Use `core` if you want direct control and are building your own wrapper/UI.
- Use `html`, `react`, `vue`, or `myst` packages if you want higher-level integration.

## Basic Browser Usage

```js
import { render } from "@chandraveshchaudhari/pyodide-editable-core";

render({
	el: document.getElementById("cell"),
	model: {
		id: "core-cell-1",
		code: "print('Hello from core runtime')",
		packages: "numpy,pandas",
	},
});
```

## Exported API

- `render({ el, model })`: mounts an interactive editor in `el`.
- `executePython(code, packages)`: executes code with optional package list.
- `loadPyodideRuntime(extraPackages)`: lazy-loads and caches Pyodide.
- `restartKernel()`: resets shared runtime state.

## Model Fields

- `model.code`: Python source string.
- `model.id`: optional stable cell id.
- `model.packages`: comma-separated package names (example: `"numpy,pandas"`).

## Live Demo

Try core behavior in the `Core Runtime` section of:
https://chandraveshchaudhari.github.io/pyodide-editable/#core-runtime