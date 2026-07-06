import { createRoot } from "react-dom/client";
import { PyCell } from "@chandraveshchaudhari/pyodide-editable-react";

function App() {
  return <PyCell code="print('Hello from Pyodide')" />;
}

createRoot(document.getElementById("root")).render(<App />);
