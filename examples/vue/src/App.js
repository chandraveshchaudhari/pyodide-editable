import { createApp, h } from "vue";
import { PyCell } from "@pyodide-editable/vue";

createApp({
  render() {
    return h(PyCell, { code: "print('Hello from Pyodide')" });
  },
}).mount("#app");
