import { createPyCell } from "./local-runtime.mjs";

function showMountError(id, error) {
  const target = document.getElementById(id);
  if (!target) return;
  target.innerHTML = "";
  const pre = document.createElement("pre");
  pre.className = "demo-error";
  pre.textContent = String(error);
  target.appendChild(pre);
}

function mountCell(targetId, options) {
  try {
    const target = document.getElementById(targetId);
    if (!target) throw new Error(`Missing mount target: ${targetId}`);
    createPyCell(target, options);
  } catch (error) {
    showMountError(targetId, error);
  }
}

mountCell("html-demo", {
  id: "html-demo-cell",
  packages: ["numpy"],
  code: [
    "import numpy as np",
    "values = np.array([1, 2, 3, 4])",
    "print('sum =', int(values.sum()))",
  ].join("\n"),
});

mountCell("react-demo", {
  id: "react-demo-cell",
  code: [
    "message = 'React wrapper demo cell'",
    "print(message)",
    "len(message)",
  ].join("\n"),
});

mountCell("vue-demo", {
  id: "vue-demo-cell",
  code: [
    "numbers = [n * n for n in range(6)]",
    "print('squares =', numbers)",
  ].join("\n"),
});

mountCell("myst-demo", {
  id: "myst-demo-cell",
  code: "import math\nprint('sin(0.5) =', round(math.sin(0.5), 4))",
});