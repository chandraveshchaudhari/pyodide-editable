import { createPyCell } from "https://cdn.jsdelivr.net/npm/@chandraveshchaudhari/pyodide-editable-html@0.1.3/browser.mjs";
import { render as renderCore } from "https://esm.sh/@chandraveshchaudhari/pyodide-editable-core@0.1.3";
import mystPlugin from "https://esm.sh/@chandraveshchaudhari/pyodide-editable-myst@0.1.3";
import React from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";
import { createApp, h, onMounted, ref as vueRef, watch } from "https://esm.sh/vue@3.5.13";

function showMountError(id, error) {
  const target = document.getElementById(id);
  if (!target) return;
  target.innerHTML = "";
  const pre = document.createElement("pre");
  pre.className = "demo-error";
  pre.textContent = String(error);
  target.appendChild(pre);
}

function ReactDemoCell({ code = "", id = "", packages = "" }) {
  const rootRef = React.useRef(null);

  React.useEffect(() => {
    if (!rootRef.current) return;
    renderCore({
      el: rootRef.current,
      model: {
        code,
        id,
        packages,
      },
    });
  }, [code, id, packages]);

  return React.createElement("div", { ref: rootRef });
}

const VueDemoCell = {
  name: "VueDemoCell",
  props: {
    code: { type: String, default: "" },
    id: { type: String, default: "" },
    packages: { type: String, default: "" },
  },
  setup(props) {
    const rootRef = vueRef(null);

    const draw = () => {
      if (!rootRef.value) return;
      renderCore({
        el: rootRef.value,
        model: {
          code: props.code,
          id: props.id,
          packages: props.packages,
        },
      });
    };

    onMounted(draw);
    watch(() => [props.code, props.id, props.packages], draw);

    return () => h("div", { ref: rootRef });
  },
};

createPyCell(document.getElementById("html-demo"), {
  id: "html-demo-cell",
  packages: ["numpy"],
  code: [
    "import numpy as np",
    "values = np.array([1, 2, 3, 4])",
    "print('sum =', int(values.sum()))",
  ].join("\n"),
});

try {
  createRoot(document.getElementById("react-demo")).render(
    React.createElement(ReactDemoCell, {
      id: "react-demo-cell",
      code: [
        "message = 'React wrapper is live'",
        "print(message)",
        "len(message)",
      ].join("\n"),
    }),
  );
} catch (error) {
  showMountError("react-demo", error);
}

try {
  createApp({
    render() {
      return h(VueDemoCell, {
        id: "vue-demo-cell",
        code: [
          "numbers = [n * n for n in range(6)]",
          "print('squares =', numbers)",
        ].join("\n"),
      });
    },
  }).mount("#vue-demo");
} catch (error) {
  showMountError("vue-demo", error);
}

try {
  const mystDirective = mystPlugin.directives.find((directive) => directive.name === "pyodide-cell");
  const mystNodes = mystDirective.run(
    {
      body: "import math\nprint('sin(0.5) =', round(math.sin(0.5), 4))",
      options: { id: "myst-demo-cell" },
    },
    { path: "/virtual/docs/index.md" },
  );

  renderCore({
    el: document.getElementById("myst-demo"),
    model: mystNodes[0].model,
  });
} catch (error) {
  showMountError("myst-demo", error);
}