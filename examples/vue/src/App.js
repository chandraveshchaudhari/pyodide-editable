import { createApp, h } from "vue";
import { PyCell } from "@chandraveshchaudhari/pyodide-editable-vue";

createApp({
  render() {
    return h(PyCell, { code: "print('Hello from Pyodide')" });
  },
}).mount("#app");
