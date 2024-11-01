import { Component, ParentComponent } from "solid-js";

export const HeaderContainer: ParentComponent = (props) => {
  return (
    <div class="bg-neutral-900 rounded-xl px-10 pt-12 pb-4">
      <div class="flex justify-between items-center">
        <span class="text-lg font-medium text-white">GreenhouseAI</span>
        <div class="grid gap-1">
          <span class="text-2xl text-white text-right">497.23</span>
          <div class="flex gap-2">
            <span class="rounded-md bg-emerald-900 px-3 py-px text-emerald-400">
              kg
            </span>
            <span class="rounded-md bg-emerald-900 px-3 py-px text-emerald-400">
              CO2e
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
