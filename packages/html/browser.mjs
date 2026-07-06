import { render } from "https://esm.sh/@chandraveshchaudhari/pyodide-editable-core@0.1.0";

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
