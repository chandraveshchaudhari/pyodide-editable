import { useEffect, useRef } from "react";
import { render } from "@chandraveshchaudhari/pyodide-editable-core";

export function PyCell({ code = "", id = "", packages = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    render({
      el: ref.current,
      model: {
        code,
        id,
        packages: Array.isArray(packages) ? packages.join(",") : packages,
      },
    });
  }, [code, id, packages]);

  return <div ref={ref} />;
}

export default PyCell;
