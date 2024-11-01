import { User } from "firebase/auth";
import {
  Accessor,
  createContext,
  createSignal,
  ParentComponent,
  useContext,
} from "solid-js";
import { auth } from "../services/firebase";

const AuthContext = createContext<Accessor<User | null>>(() => null);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: ParentComponent = (props) => {
  const [user, setUser] = createSignal<User | null>(null);

  auth.onAuthStateChanged(setUser);

  return (
    <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
  );
};
