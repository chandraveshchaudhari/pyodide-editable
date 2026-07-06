# @chandraveshchaudhari/pyodide-editable-react

React wrapper component for editable Pyodide-backed Python cells.

Live demo: https://chandraveshchaudhari.github.io/pyodide-editable/#react

Maintained by [Chandravesh Chaudhari](https://github.com/chandraveshchaudhari). Source, issues, and examples live in the [pyodide-editable GitHub repository](https://github.com/chandraveshchaudhari/pyodide-editable/tree/main/packages/react).

## Install

```bash
npm install @chandraveshchaudhari/pyodide-editable-react react react-dom
```

## Use In React

```jsx
import { PyCell } from "@chandraveshchaudhari/pyodide-editable-react";

export default function App() {
	return (
		<div>
			<h2>Interactive Python Cell</h2>
			<PyCell
				id="react-cell-1"
				code={"import math\nprint(math.sqrt(81))"}
				packages={["numpy"]}
			/>
		</div>
	);
}
```

## Props

- `id` (string): optional unique id.
- `code` (string): Python source.
- `packages` (string or string[]): optional packages to preload.

## Demo Walkthrough

Open:
https://chandraveshchaudhari.github.io/pyodide-editable/#react

Use this flow:

1. Update code in the editor.
2. Run with `Shift+Enter`.
3. Check output panel and runtime controls.