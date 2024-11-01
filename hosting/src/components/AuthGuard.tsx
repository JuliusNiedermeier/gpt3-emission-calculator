import { ParentComponent, Show } from "solid-js";
import { useAuthContext } from "./AuthProvider";
import { Login } from "./Login";

export const AuthGuard: ParentComponent = (props) => {
  const user = useAuthContext();

  return (
    <Show when={user()} fallback={<Login />}>
      {props.children}
    </Show>
  );
};
