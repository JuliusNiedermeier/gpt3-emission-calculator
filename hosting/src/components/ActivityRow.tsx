import { Component } from "solid-js";
import { EmissionValue } from "./EmissionValue";

export const ActivityRow: Component<{
  activityDescription: string;
  emissionValue: number | null;
}> = (props) => {
  return (
    <div class="overflow-hidden bg-neutral-100 rounded-xl p-3 pl-5 border border-neutral-300 cursor-pointer hover:bg-white">
      <div class="flex justify-between items-center gap-5">
        <div class="flex-1 overflow-hidden whitespace-nowrap text-ellipsis max-w-full font-medium text-neutral-500">
          {props.activityDescription}
        </div>
        <EmissionValue value={props.emissionValue} />
      </div>
    </div>
  );
};
