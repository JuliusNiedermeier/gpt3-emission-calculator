import { collection, QueryDocumentSnapshot } from "firebase/firestore";
import { ActivityDocument } from "types";
import { firestore } from "./firebase";

export const activitiesCollection = collection(
  firestore,
  "activities"
).withConverter({
  toFirestore: (data: ActivityDocument) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) =>
    snap.data() as ActivityDocument,
});
