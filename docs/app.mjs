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
  packages: ["pandas", "matplotlib"],
  code: [
    "import pandas as pd",
    "import matplotlib.pyplot as plt",
    "",
    "# Create sample sales data",
    "data = {",
    "    'Month': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],",
    "    'Sales_A': [150, 200, 180, 220, 250, 210],",
    "    'Sales_B': [90, 120, 140, 130, 170, 160]",
    "}",
    "df = pd.DataFrame(data)",
    "",
    "# Plot both lines on the same chart",
    "df.plot(x='Month', y=['Sales_A', 'Sales_B'], kind='line', marker='o')",
    "",
    "# Customize using standard Matplotlib syntax",
    "plt.title('Monthly Sales Performance')",
    "plt.ylabel('Revenue ($)')",
    "plt.grid(True)",
    "",
    "# Display the plot",
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