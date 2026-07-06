import { defineComponent, h, onMounted, ref, watch } from "vue";
import { render } from "@chandraveshchaudhari/pyodide-editable-core";

export const PyCell = defineComponent({
  name: "PyCell",
  props: {
    code: { type: String, default: "" },
    id: { type: String, default: "" },
    packages: { type: [String, Array], default: "" },
  },
  setup(props) {
    const root = ref(null);

    const draw = () => {
      if (!root.value) return;
      render({
        el: root.value,
        model: {
          code: props.code,
          id: props.id,
          packages: Array.isArray(props.packages)
            ? props.packages.join(",")
            : props.packages,
        },
      });
    };

    onMounted(draw);
    watch(() => [props.code, props.id, props.packages], draw);

    return () => h("div", { ref: root });
  },
});

export default PyCell;
