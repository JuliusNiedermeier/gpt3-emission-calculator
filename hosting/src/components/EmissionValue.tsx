import { Component } from "solid-js";

export const EmissionValue: Component<{
  value: number | null;
  gas?: string;
}> = (props) => {
  const pending = () => props.value === null;
  return (
    <span
      class="px-2 py-1 bg-emerald-100 rounded-md border border-emerald-600 text-emerald-600 font-mono"
      classList={{ "bg-white border-neutral-300 text-neutral-500": pending() }}
    >
      {props.value || "Pending..."}
    </span>
  );
};
