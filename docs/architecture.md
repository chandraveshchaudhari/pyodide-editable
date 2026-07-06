# Architecture

`pyodide_editable` is organized as a small npm workspace.

The browser runtime lives in `packages/core/src/widget.mjs`. That file is based
on the original working anywidget implementation and should remain the source
of truth for Pyodide loading, execution, output capture, package loading, and
matplotlib rendering.

Framework packages are intentionally thin wrappers around the core renderer.
They should not duplicate runtime behavior.
