# @chandraveshchaudhari/pyodide-editable-vue

Vue wrapper component for editable Pyodide-backed Python cells.

Live demo: https://chandraveshchaudhari.github.io/pyodide-editable/#vue

Maintained by [Chandravesh Chaudhari](https://github.com/chandraveshchaudhari). Source, issues, and examples live in the [pyodide-editable GitHub repository](https://github.com/chandraveshchaudhari/pyodide-editable/tree/main/packages/vue).

## Install

```bash
npm install @chandraveshchaudhari/pyodide-editable-vue vue
```

## Use In Vue

```js
import { PyCell } from "@chandraveshchaudhari/pyodide-editable-vue";
```

```vue
<script setup>
import { PyCell } from "@chandraveshchaudhari/pyodide-editable-vue";
</script>

<template>
	<section>
		<h2>Interactive Python Cell</h2>
		<PyCell
			id="vue-cell-1"
			code="print('Hello from Vue wrapper')"
			:packages="['numpy']"
		/>
	</section>
</template>
```

## Props

- `id` (string): optional unique id.
- `code` (string): Python source.
- `packages` (string or string[]): optional packages to preload.

## Demo Walkthrough

Open:
https://chandraveshchaudhari.github.io/pyodide-editable/#vue

Try updating the code and running with `Shift+Enter`.