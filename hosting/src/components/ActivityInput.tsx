import { addDoc } from "firebase/firestore";
import { batch, Component, createSignal } from "solid-js";
import { activitiesCollection } from "../services/activitiesCollection";

export const ActivityInput: Component = () => {
  const [input, setInput] = createSignal("");
  const [loading, setLoading] = createSignal(false);

  const addActivity = (activityDescription: string) => {
    return addDoc(activitiesCollection, {
      activityDescription,
      detailedAnswer: "",
      emissions: {},
    });
  };

  const handleEnter = async (event: KeyboardEvent) => {
    if (event.code !== "Enter") return;
    if (input().length < 3) return;
    setLoading(true);
    await addActivity(input());
    batch(() => {
      setInput("");
      setLoading(false);
    });
  };

  const handleFocus = (element: HTMLInputElement) => {
    element.addEventListener("keypress", handleEnter);
  };

  const handleBlur = (element: HTMLInputElement) => {
    element.removeEventListener("keypress", handleEnter);
  };

  return (
    <input
      class="bg-white border border-neutral-300 p-3 pl-5 rounded-xl block w-full outline-none"
      placeholder="Describe another activity..."
      value={input()}
      onInput={(e) => setInput(e.currentTarget.value)}
      onFocus={(e) => handleFocus(e.currentTarget)}
      onBlur={(e) => handleBlur(e.currentTarget)}
    />
  );
};
