import { render } from "@chandraveshchaudhari/pyodide-editable-core";

export function createPyCell(el, options = {}) {
  render({
    el,
    model: {
      code: options.code || "",
      id: options.id || "",
      packages: Array.isArray(options.packages)
        ? options.packages.join(",")
        : options.packages || "",
    },
  });
}

export { render };
