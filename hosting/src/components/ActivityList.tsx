import { onSnapshot } from "firebase/firestore";
import { Component, createSignal, For, onCleanup } from "solid-js";
import { ActivityDocument } from "../../../types/types";
import { activitiesCollection } from "../services/activitiesCollection";
import { ActivityRow } from "./ActivityRow";

export const ActivityList: Component = () => {
  const [activities, setActivities] = createSignal<ActivityDocument[]>([]);

  const unsubscribe = onSnapshot(activitiesCollection, (data) => {
    setActivities(data.docs.map((doc) => doc.data()));
  });

  const parseAnswer = (answer: string) => {
    if (!answer.length) return null;
    const cleanedAnswer = answer.replaceAll("kg", "");
    try {
      const data = JSON.parse(cleanedAnswer);
      const co2 = data["Carbon dioxide"];
      return parseFloat(co2);
    } catch {
      return null;
    }
  };

  onCleanup(unsubscribe);

  return (
    <div class="grid gap-3">
      <For each={activities()}>
        {(activity) => (
          <ActivityRow
            activityDescription={activity.activityDescription}
            emissionValue={parseAnswer(activity.detailedAnswer)}
          />
        )}
      </For>
    </div>
  );
};
